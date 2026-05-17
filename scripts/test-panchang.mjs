// Quick sanity check of panchang values for today
import { MhahPanchang } from "mhah-panchang";

const mhah = new MhahPanchang();
const now = new Date();
const lat = 9.9195, lng = 78.1193;

const calc = mhah.calculate(now);
const sun = mhah.sunTimer(now, lat, lng);

console.log("Today:", now.toString());
console.log("Tithi (en):", calc.Tithi?.name_en_IN, "ino=", calc.Tithi?.ino);
console.log("Paksha:", calc.Paksha?.name_en_UK, "ino=", calc.Paksha?.ino);
console.log("Nakshatra (en):", calc.Nakshatra?.name_en_IN, "ino=", calc.Nakshatra?.ino);
console.log("Yoga (en):", calc.Yoga?.name_en_IN, "ino=", calc.Yoga?.ino);
console.log("Karna (en):", calc.Karna?.name_en_IN, "ino=", calc.Karna?.ino);
console.log("Sunrise IST:", new Date(sun.sunRise).toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata", hour12: true }));
console.log("Sunset IST:",  new Date(sun.sunSet ).toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata", hour12: true }));
