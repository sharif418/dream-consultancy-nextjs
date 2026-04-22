"use client";

import { usePopup } from "@/components/PopupContext";
import { HiOutlineArrowRight } from "react-icons/hi";

export default function CTABanner() {
  const { openPopup } = usePopup();

  return (
    <section className="w-full bg-[#00193a] py-9">
      <div className="max-w-[1200px] mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-white text-xl font-medium">
            Want to collaborate with us?
          </h3>
          <p className="text-[#8ca0b4] text-base mt-1">
            Our experts can help you solve your unique challenges
          </p>
        </div>
        <button onClick={openPopup} className="cta-button">
          Get in Touch <HiOutlineArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
