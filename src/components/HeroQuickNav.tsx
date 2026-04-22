"use client";

import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";

const quickLinks = [
  { label: "Our Services", href: "#services" },
  { label: "Featured Insights", href: "/insights" },
  { label: "Our Clients", href: "/clients" },
];

export default function HeroQuickNav() {
  return (
    <div className="w-full bg-[#00193a]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-3">
        {quickLinks.map((item, i) => (
          <Link
            key={item.label}
            href={item.href}
            className={`flex items-center justify-between px-5 md:px-8 py-4 text-white text-sm md:text-base font-semibold transition-colors hover:bg-[#002350] ${
              i === 1 ? "border-t-[3px] border-[#e27733] bg-[#002350]" : ""
            }`}
          >
            <span>{item.label}</span>
            <HiOutlineArrowRight className="w-5 h-5 opacity-70" />
          </Link>
        ))}
      </div>
    </div>
  );
}
