import Link from "next/link";
import { getTamilPanchang } from "@/lib/panchang";

export default function TodayPanchang() {
  const p = getTamilPanchang(new Date());

  return (
    <Link href="/calendar/tamil" className="group block text-right leading-tight">
      <div className="text-stone-900 text-xs font-semibold group-hover:text-orange-700 transition-colors">
        {p.gregorianDate}
      </div>
      <div className="text-[11px] mt-0.5">
        <span className="font-semibold text-emerald-700">Abhijit Muhurta</span>{" "}
        <span className="text-stone-800">{p.abhijit}</span>
      </div>
      <div className="text-[11px]">
        <span className="font-semibold text-red-700">Rahu Kalam</span>{" "}
        <span className="text-stone-800">{p.rahuKalam}</span>
      </div>
    </Link>
  );
}
