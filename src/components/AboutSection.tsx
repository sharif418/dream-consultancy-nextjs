"use client";

import { useState, useEffect, useRef } from "react";
import { stats } from "@/data/siteData";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineArrowRight } from "react-icons/hi";

function AnimatedCounter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  // Format number in Indian style (2,00,000+)
  const formatNumber = (num: number) => {
    if (num >= 100000) {
      const str = num.toString();
      const last3 = str.slice(-3);
      const rest = str.slice(0, -3);
      const formatted = rest.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
      return formatted + "," + last3;
    }
    return num.toLocaleString();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const stepValue = end / steps;
          let current = 0;
          const interval = setInterval(() => {
            current += stepValue;
            if (current >= end) {
              setCount(end);
              clearInterval(interval);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {formatNumber(count)}
      {suffix}
    </span>
  );
}

export default function AboutSection() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[3px] bg-[#e27733] rounded-full" />
              <p className="text-[20px] font-bold text-[#002350] uppercase tracking-[1px]">
                ABOUT US
              </p>
            </div>
            <h2 className="text-3xl md:text-[36px] font-bold text-[#00193a] leading-tight mb-6">
              Welcome to DREAM Consultancy Limited
            </h2>
            <p className="text-[#404040] text-base leading-relaxed mb-8">
              DREAM Consultancy Limited was established by a team of
              distinguished experts and professionals from diverse fields, united
              by a shared vision: to make meaningful contributions toward
              national advancement and societal betterment.
            </p>
            <Link href="/about" className="link-arrow text-base">
              Learn More <HiOutlineArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-[5px] p-6 flex flex-col items-center justify-center gap-3 shadow-[1px_5px_32px_5px_rgb(0_0_0/9%)]"
              >
                {stat.icon && (
                  <div className="w-[60px] h-[60px] relative mb-1">
                    <Image
                      src={stat.icon}
                      alt={stat.label}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                <span className="text-[32px] md:text-[38px] font-bold text-[#0073bb]">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-sm font-semibold text-[#00193a] text-center whitespace-pre-line leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
