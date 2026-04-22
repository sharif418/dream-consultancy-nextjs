"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { navItems, siteConfig } from "@/data/siteData";
import { usePopup } from "@/components/PopupContext";
import { HiOutlineSearch, HiOutlineX } from "react-icons/hi";
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const { openPopup } = usePopup();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isSticky ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-5 flex items-center justify-between gap-5 py-[25px]">
          <div className="flex items-center gap-5">
            <button
              className="lg:hidden flex flex-col gap-[5px] z-50 relative"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-[2px] transition-all duration-300 ${
                  mobileMenuOpen
                    ? "rotate-45 translate-y-[7px] bg-white"
                    : isSticky
                    ? "bg-[#00193a]"
                    : "bg-white"
                }`}
              />
              <span
                className={`block w-6 h-[2px] transition-all duration-300 ${
                  mobileMenuOpen
                    ? "opacity-0"
                    : isSticky
                    ? "bg-[#00193a]"
                    : "bg-white"
                }`}
              />
              <span
                className={`block w-6 h-[2px] transition-all duration-300 ${
                  mobileMenuOpen
                    ? "-rotate-45 -translate-y-[7px] bg-white"
                    : isSticky
                    ? "bg-[#00193a]"
                    : "bg-white"
                }`}
              />
            </button>

            <Link href="/" className="block">
              <Image
                src="/images/2024/10/logo-6.png"
                alt={siteConfig.name}
                width={160}
                height={60}
                className="h-auto w-[130px] md:w-[160px]"
                priority
              />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() =>
                  item.children && setOpenDropdown(item.label)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.children ? (
                  <button
                    className={`px-3 py-2 text-sm font-semibold transition-colors ${
                      isSticky
                        ? "text-[#00193a] hover:text-[#0073bb]"
                        : "text-white hover:text-[#068adc]"
                    }`}
                  >
                    {item.label}
                    <svg
                      className="inline-block ml-1 w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-3 py-2 text-sm font-semibold transition-colors ${
                      isSticky
                        ? "text-[#00193a] hover:text-[#0073bb]"
                        : "text-white hover:text-[#068adc]"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-b-md min-w-[280px] py-2 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-5 py-3 text-sm text-[#00193a] hover:bg-[#f0f0f8] hover:text-[#0073bb] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className={`transition-colors ${
                isSticky ? "text-[#00193a]" : "text-white"
              }`}
              aria-label="Search"
            >
              <HiOutlineSearch className="w-5 h-5" />
            </button>
            <button
              onClick={openPopup}
              className="hidden sm:inline-flex cta-button"
            >
              GET IN TOUCH
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="fixed inset-0 bg-white z-[60] flex items-center justify-center">
            <div className="w-full max-w-[600px] px-5">
              <form
                action="/search"
                method="GET"
                className="flex items-center border-b-2 border-[#0073bb] pb-2"
              >
                <input
                  type="text"
                  name="q"
                  placeholder="Search..."
                  className="flex-1 text-2xl outline-none text-[#00193a]"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="text-[#00193a] ml-4"
                >
                  <HiOutlineX className="w-7 h-7" />
                </button>
              </form>
            </div>
          </div>
        )}
      </header>

      <div
        className={`fixed inset-0 z-[55] bg-[#00193a] transition-transform duration-300 lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pt-20 px-5 pb-5 h-full overflow-y-auto">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      className="w-full text-left px-4 py-3 text-white font-semibold text-base flex items-center justify-between"
                      onClick={() =>
                        setMobileDropdown(
                          mobileDropdown === item.label ? null : item.label
                        )
                      }
                    >
                      {item.label}
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          mobileDropdown === item.label ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {mobileDropdown === item.label && (
                      <div className="pl-6 pb-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block py-2 text-[#8ca0b4] text-sm hover:text-white transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-white font-semibold text-base"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          <div className="mt-8 flex items-center gap-3 px-4">
            <a
              href={siteConfig.linkedin}
              className="w-9 h-9 rounded-full border border-[#8ca0b4] flex items-center justify-center text-[#8ca0b4] hover:bg-[#068adc] hover:border-[#068adc] hover:text-white transition-all"
            >
              <FaLinkedinIn className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.facebook}
              className="w-9 h-9 rounded-full border border-[#8ca0b4] flex items-center justify-center text-[#8ca0b4] hover:bg-[#068adc] hover:border-[#068adc] hover:text-white transition-all"
            >
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.twitter}
              className="w-9 h-9 rounded-full border border-[#8ca0b4] flex items-center justify-center text-[#8ca0b4] hover:bg-[#068adc] hover:border-[#068adc] hover:text-white transition-all"
            >
              <FaTwitter className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.youtube}
              className="w-9 h-9 rounded-full border border-[#8ca0b4] flex items-center justify-center text-[#8ca0b4] hover:bg-[#068adc] hover:border-[#068adc] hover:text-white transition-all"
            >
              <FaYoutube className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
