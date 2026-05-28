"use client";

import { useRouter } from "next/navigation";

interface Props {
  selectedYear: number;
  selectedMonth: number; // 0-indexed
  baseHref: string;
}

export default function MonthPicker({ selectedYear, selectedMonth, baseHref }: Props) {
  const router = useRouter();

  const options: { value: string; label: string }[] = [];
  for (let i = -12; i <= 12; i++) {
    const d = new Date(selectedYear, selectedMonth + i, 1);
    const value = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-01`;
    options.push({
      value,
      label: d.toLocaleDateString("en-IN", { month: "long", year: "numeric" }),
    });
  }

  const current = `${selectedYear}-${String(selectedMonth + 1).padStart(2, "0")}-01`;

  return (
    <select
      value={current}
      onChange={(e) => router.push(`${baseHref}?date=${e.target.value}`)}
      className="bg-amber-50 border border-amber-200 text-stone-800 text-sm font-medium px-3 py-2 rounded-lg hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-orange-400/50 cursor-pointer"
    >
      {options.map((o) => (
        <option key={o.value} value={o.value} className="bg-white">
          {o.label}
        </option>
      ))}
    </select>
  );
}
