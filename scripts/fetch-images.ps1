Add-Type -AssemblyName System.Drawing

$outputDir = "C:\Temple\namaalayam\public\images\temples"
$creditsPath = "C:\Temple\namaalayam\scripts\image-credits.json"
$logPath = "C:\Temple\namaalayam\scripts\fetch-log.txt"
$ua = "namaalayam.com/1.0 (duvasq@gmail.com; educational temple encyclopedia)"

$temples = @(
  @{ file="tirupati.jpg";       wiki="Tirumala_Venkateswara_Temple" },
  @{ file="meenakshi.jpg";      wiki="Meenakshi_Temple" },
  @{ file="brihadeeswara.jpg";  wiki="Brihadeeswarar_Temple,_Thanjavur" },
  @{ file="rameswaram.jpg";     wiki="Ramanathaswamy_Temple" },
  @{ file="sabarimala.jpg";     wiki="Sabarimala" },
  @{ file="srirangam.jpg";      wiki="Ranganathaswamy_Temple,_Srirangam" },
  @{ file="padmanabhaswamy.jpg";wiki="Padmanabhaswamy_Temple" },
  @{ file="guruvayur.jpg";      wiki="Guruvayur_Temple" },
  @{ file="chidambaram.jpg";    wiki="Thillai_Nataraja_Temple,_Chidambaram" },
  @{ file="tiruchendur.jpg";    wiki="Tiruchendur_Murugan_Temple" },
  @{ file="palani.jpg";         wiki="Arulmigu_Dhandayuthapani_Swamy_Temple" },
  @{ file="kanchipuram.jpg";    wiki="Ekambareswarar_Temple" },
  @{ file="vaitheeswaran.jpg";  wiki="Vaitheeswaran_Temple" },
  @{ file="kumbakonam.jpg";     wiki="Sarangapani_Temple" },
  @{ file="murudeshwara.jpg";   wiki="Murdeshwar" },
  @{ file="udupi.jpg";          wiki="Sri_Krishna_Matha" },
  @{ file="dharmasthala.jpg";   wiki="Dharmasthala_Temple" },
  @{ file="srikalahasti.jpg";   wiki="Srikalahasteeswara_Temple" },
  @{ file="govindaraja.jpg";    wiki="Govindaraja_Swamy_Temple,_Tirupati" },
  @{ file="simhachalam.jpg";    wiki="Simhachalam_Temple" },
  @{ file="attukal.jpg";        wiki="Attukal_Bhagavathy_Temple" },
  @{ file="suchindram.jpg";     wiki="Thanumalayan_Temple" },
  @{ file="kapaleeswarar.jpg";  wiki="Kapaleeshwarar_Temple" },
  @{ file="thiruvannamalai.jpg";wiki="Annamalaiyar_Temple" },
  @{ file="somnathpur.jpg";     wiki="Chennakesava_Temple,_Somanathapura" }
)

$credits = @()
$log = @()

function Resize-Image {
  param([string]$srcPath, [string]$dstPath, [int]$targetW = 1600, [int]$targetH = 900)
  $img = [System.Drawing.Image]::FromFile($srcPath)
  try {
    $srcW = $img.Width; $srcH = $img.Height
    $srcAspect = $srcW / $srcH
    $tgtAspect = $targetW / $targetH

    if ($srcAspect -gt $tgtAspect) {
      $cropH = $srcH
      $cropW = [int]($srcH * $tgtAspect)
      $cropX = [int](($srcW - $cropW) / 2)
      $cropY = 0
    } else {
      $cropW = $srcW
      $cropH = [int]($srcW / $tgtAspect)
      $cropX = 0
      $cropY = [int](($srcH - $cropH) / 2)
    }

    $bmp = New-Object System.Drawing.Bitmap($targetW, $targetH)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $srcRect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)
    $dstRect = New-Object System.Drawing.Rectangle(0, 0, $targetW, $targetH)
    $g.DrawImage($img, $dstRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()

    $jpegEncoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
    $encParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $encParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]85)
    $bmp.Save($dstPath, $jpegEncoder, $encParams)
    $bmp.Dispose()
  } finally {
    $img.Dispose()
  }
}

function Get-CommonsMetadata {
  param([string]$imageUrl)
  # Extract the File: title from a Wikimedia upload URL
  $fileName = [System.IO.Path]::GetFileName($imageUrl)
  try { $fileName = [System.Uri]::UnescapeDataString($fileName) } catch {}
  $apiUrl = "https://commons.wikimedia.org/w/api.php?action=query&titles=File:$fileName&prop=imageinfo&iiprop=extmetadata&format=json"
  try {
    $meta = Invoke-RestMethod -Uri $apiUrl -UserAgent $ua -TimeoutSec 30
    $pages = $meta.query.pages
    foreach ($p in $pages.PSObject.Properties) {
      $info = $p.Value.imageinfo
      if ($info) {
        $em = $info[0].extmetadata
        return @{
          artist = if ($em.Artist) { ($em.Artist.value -replace '<[^>]+>', '').Trim() } else { "Unknown" }
          license = if ($em.LicenseShortName) { $em.LicenseShortName.value } else { "Unknown" }
          licenseUrl = if ($em.LicenseUrl) { $em.LicenseUrl.value } else { "" }
        }
      }
    }
  } catch {}
  return @{ artist="Unknown"; license="Unknown"; licenseUrl="" }
}

foreach ($t in $temples) {
  $file = $t.file
  $wiki = $t.wiki
  try {
    Write-Output "Fetching $file ($wiki)..."
    $summaryUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/$wiki"
    $summary = Invoke-RestMethod -Uri $summaryUrl -UserAgent $ua -TimeoutSec 30

    $imageUrl = $null
    if ($summary.originalimage -and $summary.originalimage.source) {
      $imageUrl = $summary.originalimage.source
    } elseif ($summary.thumbnail -and $summary.thumbnail.source) {
      $imageUrl = $summary.thumbnail.source
    }

    if (-not $imageUrl) {
      $log += "SKIP: $file - no image in Wikipedia summary"
      continue
    }

    $tempFile = [System.IO.Path]::Combine([System.IO.Path]::GetTempPath(), [System.Guid]::NewGuid().ToString() + ".img")
    Invoke-WebRequest -Uri $imageUrl -OutFile $tempFile -UserAgent $ua -TimeoutSec 60

    $outPath = Join-Path $outputDir $file
    Resize-Image -srcPath $tempFile -dstPath $outPath
    Remove-Item $tempFile -Force -ErrorAction SilentlyContinue

    $meta = Get-CommonsMetadata -imageUrl $imageUrl

    $credits += [PSCustomObject]@{
      file        = $file
      wikiPage    = "https://en.wikipedia.org/wiki/$wiki"
      imageSource = $imageUrl
      artist      = $meta.artist
      license     = $meta.license
      licenseUrl  = $meta.licenseUrl
    }

    $size = (Get-Item $outPath).Length
    $kb = [int]($size/1024)
    $log += "OK: $file ($kb KB)"
    Write-Output ("  OK (" + $kb + " KB) - " + $meta.license)
  } catch {
    $log += "FAIL: $file - $($_.Exception.Message)"
    Write-Output ("  FAIL - " + $_.Exception.Message)
  }
}

$credits | ConvertTo-Json -Depth 5 | Out-File $creditsPath -Encoding utf8
$log | Out-File $logPath -Encoding utf8

Write-Output ""
Write-Output "=== SUMMARY ==="
$log | ForEach-Object { Write-Output $_ }
