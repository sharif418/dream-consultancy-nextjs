"use client";

import { useState } from "react";
import Image from "next/image";
import { services } from "@/data/siteData";
import { HiOutlineCheckCircle } from "react-icons/hi";

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-5">
        <p className="section-label">OUR SERVICES</p>

        <div className="mt-8">
          <div className="flex flex-wrap gap-0 border-b border-gray-200 mb-8">
            {services.map((service, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-4 py-3 text-base font-semibold transition-all whitespace-nowrap ${
                  activeTab === i
                    ? "text-[#00193a] border-b-[5px] border-[#0073bb]"
                    : "text-gray-500 hover:text-[#00193a]"
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src={services[activeTab].image}
                alt={services[activeTab].title}
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#00193a] mb-6">
                {services[activeTab].title}
              </h3>
              <ul className="flex flex-col gap-4">
                {services[activeTab].items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <HiOutlineCheckCircle className="w-5 h-5 text-[#0073bb] mt-0.5 flex-shrink-0" />
                    <span className="text-[#404040]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
