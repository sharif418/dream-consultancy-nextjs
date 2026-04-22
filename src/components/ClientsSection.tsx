"use client";

import Image from "next/image";
import { clientLogos } from "@/data/siteData";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";

const reversedLogos = [...clientLogos].reverse();

export default function ClientsSection() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <p className="section-label">OUR CLIENTS</p>
            <h2 className="text-3xl font-bold text-[#00193a] mt-2">
              Featured clients
            </h2>
            <p className="text-[#404040] mt-3 max-w-[500px]">
              We consult and collaborate with development partners, public
              sector and private organizations.
            </p>
          </div>
          <Link href="/clients" className="link-arrow">
            See All Clients <HiOutlineArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="overflow-hidden relative">
          <div className="flex animate-scroll-left gap-8 py-4">
            {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, i) => (
              <div
                key={`row1-${i}`}
                className="flex-shrink-0 w-[140px] h-[80px] flex items-center justify-center p-3 grayscale grayscale-hover"
              >
                <Image
                  src={`/images/clients/${logo}`}
                  alt={`Client ${i + 1}`}
                  width={120}
                  height={60}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden relative mt-4">
          <div className="flex animate-scroll-right gap-8 py-4">
            {[...reversedLogos, ...reversedLogos, ...reversedLogos].map((logo, i) => (
              <div
                key={`row2-${i}`}
                className="flex-shrink-0 w-[140px] h-[80px] flex items-center justify-center p-3 grayscale grayscale-hover"
              >
                <Image
                  src={`/images/clients/${logo}`}
                  alt={`Client ${i + 1}`}
                  width={120}
                  height={60}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
