Add-Type -AssemblyName System.Drawing

$outputDir = "C:\Temple\namaalayam\public\images\temples"
$creditsPath = "C:\Temple\namaalayam\scripts\image-credits.json"
$ua = "namaalayam.com/1.0 (duvasq@gmail.com; educational temple encyclopedia)"

# Corrected titles; kanchipuram uses a direct Commons URL (article has no lead image)
$items = @(
  @{ file="brihadeeswara.jpg"; wiki="Brihadisvara_Temple";            directUrl="" },
  @{ file="palani.jpg";        wiki="Dhandayuthapani_Temple";          directUrl="" },
  @{ file="udupi.jpg";          wiki="Udupi_Sri_Krishna_Matha";         directUrl="" },
  @{ file="govindaraja.jpg";    wiki="Govindaraja_Temple,_Tirupati";   directUrl="" },
  @{ file="kanchipuram.jpg";    wiki="Ekambareswarar_Temple";           directUrl="https://upload.wikimedia.org/wikipedia/commons/3/36/Ekambareswarar_Temple_at_night_in_Kanchipuram_03.jpg" }
)

function Resize-Image {
  param([string]$srcPath, [string]$dstPath, [int]$targetW = 1600, [int]$targetH = 900)
  $img = [System.Drawing.Image]::FromFile($srcPath)
  try {
    $srcW = $img.Width; $srcH = $img.Height
    $srcAspect = $srcW / $srcH
    $tgtAspect = $targetW / $targetH
    if ($srcAspect -gt $tgtAspect) {
      $cropH = $srcH; $cropW = [int]($srcH * $tgtAspect)
      $cropX = [int](($srcW - $cropW) / 2); $cropY = 0
    } else {
      $cropW = $srcW; $cropH = [int]($srcW / $tgtAspect)
      $cropX = 0; $cropY = [int](($srcH - $cropH) / 2)
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
  } finally { $img.Dispose() }
}

function Get-CommonsMetadata {
  param([string]$imageUrl)
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

# Load existing credits if present
$existing = @()
if (Test-Path $creditsPath) {
  $existing = Get-Content $creditsPath -Raw | ConvertFrom-Json
}

foreach ($t in $items) {
  $file = $t.file
  $wiki = $t.wiki
  try {
    Write-Output "Fetching $file ($wiki)..."
    $imageUrl = $null
    if ($t.directUrl) {
      $imageUrl = $t.directUrl
    } else {
      $summary = Invoke-RestMethod -Uri "https://en.wikipedia.org/api/rest_v1/page/summary/$wiki" -UserAgent $ua -TimeoutSec 30
      if ($summary.originalimage -and $summary.originalimage.source) { $imageUrl = $summary.originalimage.source }
      elseif ($summary.thumbnail -and $summary.thumbnail.source) { $imageUrl = $summary.thumbnail.source }
    }
    if (-not $imageUrl) { Write-Output "  no image URL"; continue }

    $tempFile = [System.IO.Path]::Combine([System.IO.Path]::GetTempPath(), [System.Guid]::NewGuid().ToString() + ".img")
    Invoke-WebRequest -Uri $imageUrl -OutFile $tempFile -UserAgent $ua -TimeoutSec 90
    $outPath = Join-Path $outputDir $file
    Resize-Image -srcPath $tempFile -dstPath $outPath
    Remove-Item $tempFile -Force -ErrorAction SilentlyContinue

    $meta = Get-CommonsMetadata -imageUrl $imageUrl
    $entry = [PSCustomObject]@{
      file        = $file
      wikiPage    = "https://en.wikipedia.org/wiki/$wiki"
      imageSource = $imageUrl
      artist      = $meta.artist
      license     = $meta.license
      licenseUrl  = $meta.licenseUrl
    }

    # Remove any prior entry for this file and append new one
    $existing = $existing | Where-Object { $_.file -ne $file }
    $existing = @($existing) + $entry

    $kb = [int]((Get-Item $outPath).Length / 1024)
    Write-Output ("  OK (" + $kb + " KB) - " + $meta.license)
  } catch {
    Write-Output ("  FAIL - " + $_.Exception.Message)
  }
}

$existing | ConvertTo-Json -Depth 5 | Out-File $creditsPath -Encoding utf8
Write-Output "Done."
