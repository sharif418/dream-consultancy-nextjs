"use client";

import { useState, useEffect } from "react";
import { heroSlides } from "@/data/siteData";
import { usePopup } from "@/components/PopupContext";
import { HiOutlineArrowRight } from "react-icons/hi";

import Image from "next/image";

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const { openPopup } = usePopup();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className="w-full relative bg-[#00193a] min-h-[600px] flex items-center overflow-hidden">
      {heroSlides.map((slide, i) => (
        <div 
          key={`bg-${i}`}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100 scale-105" : "opacity-0 scale-100 pointer-events-none"
          }`}
          style={{ transitionProperty: 'opacity, transform' }}
        >
          {slide.image && (
            <Image
              src={slide.image}
              alt={slide.heading}
              fill
              className="object-cover object-center"
              priority={i === 0}
            />
          )}
        </div>
      ))}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: "linear-gradient(to right, rgba(0,25,58,0.85) 0%, rgba(0,25,58,0.6) 50%, rgba(0,25,58,0.4) 100%)" }}
      />
      <div className="relative z-10 max-w-[1200px] mx-auto px-5 py-20 md:py-28 w-full">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`transition-opacity duration-700 ${
              i === current
                ? "opacity-100 relative"
                : "opacity-0 absolute inset-0 pointer-events-none"
            }`}
          >
            <p className="text-[#068adc] font-semibold text-sm md:text-base uppercase tracking-wider mb-4">
              {slide.eyebrow}
            </p>
            <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight max-w-[800px] mb-6">
              {slide.heading}
            </h1>
            <p className="text-[#8ca0b4] text-base md:text-lg max-w-[600px] mb-8 leading-relaxed">
              {slide.description}
            </p>
            <button onClick={openPopup} className="cta-button text-sm md:text-base">
              {slide.cta}
              <HiOutlineArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-white scale-125" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10 hidden md:block"
        onClick={() =>
          setCurrent((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))
        }
        aria-label="Previous slide"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10 hidden md:block"
        onClick={() =>
          setCurrent((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1))
        }
        aria-label="Next slide"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}
