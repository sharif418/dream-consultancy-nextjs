import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteData";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-[#002350]">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="py-[50px] border-b border-[#8ca0b4] flex flex-col lg:flex-row items-center justify-between gap-6">
          <Link href="/" className="block">
            <Image
              src="/images/2024/10/logo-6.png"
              alt={siteConfig.name}
              width={160}
              height={60}
              className="h-auto w-[130px] md:w-[160px]"
            />
          </Link>
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/about"
              className="text-white text-base font-normal hover:text-[#068adc] transition-colors"
            >
              About
            </Link>
            <Link
              href="/clients"
              className="text-white text-base font-normal hover:text-[#068adc] transition-colors"
            >
              Clients
            </Link>
            <Link
              href="/contact"
              className="text-white text-base font-normal hover:text-[#068adc] transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/careers"
              className="text-white text-base font-normal hover:text-[#068adc] transition-colors"
            >
              Careers
            </Link>
            <Link
              href="/blog"
              className="text-white text-base font-normal hover:text-[#068adc] transition-colors"
            >
              News
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.linkedin}
              className="w-9 h-9 rounded-full border-2 border-[#8ca0b4] flex items-center justify-center text-[#8ca0b4] hover:bg-[#068adc] hover:border-[#068adc] hover:text-white transition-all duration-300"
            >
              <FaLinkedinIn className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.facebook}
              className="w-9 h-9 rounded-full border-2 border-[#8ca0b4] flex items-center justify-center text-[#8ca0b4] hover:bg-[#068adc] hover:border-[#068adc] hover:text-white transition-all duration-300"
            >
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.twitter}
              className="w-9 h-9 rounded-full border-2 border-[#8ca0b4] flex items-center justify-center text-[#8ca0b4] hover:bg-[#068adc] hover:border-[#068adc] hover:text-white transition-all duration-300"
            >
              <FaTwitter className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.youtube}
              className="w-9 h-9 rounded-full border-2 border-[#8ca0b4] flex items-center justify-center text-[#8ca0b4] hover:bg-[#068adc] hover:border-[#068adc] hover:text-white transition-all duration-300"
            >
              <FaYoutube className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="py-6 flex flex-col lg:flex-row items-center justify-between gap-4 text-white text-sm">
          <div className="flex items-center gap-2">
            <HiOutlinePhone className="w-4 h-4" />
            <span>{siteConfig.phone1}</span>
            <span className="text-[#8ca0b4]">|</span>
            <span>{siteConfig.phone2}</span>
          </div>
          <div className="flex items-center gap-2">
            <HiOutlineMail className="w-4 h-4" />
            <span>{siteConfig.email}</span>
          </div>
          <div className="text-[#8ca0b4] text-xs text-center lg:text-right max-w-md">
            {siteConfig.address}
          </div>
        </div>

        <div className="py-4 text-center">
          <p className="text-[#8ca0b4] text-xs">
            &copy;{new Date().getFullYear()} Dream Consultancy Partners. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
