import Image from "next/image";
import Link from "next/link";
import { photosVideos } from "@/data/siteData";
import { HiOutlineArrowRight, HiPlay } from "react-icons/hi";

export default function PhotosVideosSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#f0f0f8]">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex items-center justify-between mb-10">
          <p className="section-label">FEATURED PHOTOS AND VIDEOS</p>
          <Link href="#" className="link-arrow text-sm">
            View All Photos and Videos{" "}
            <HiOutlineArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {photosVideos.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative h-[220px] rounded-[5px] overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <HiPlay className="w-5 h-5 text-[#0073bb] ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="text-white font-semibold text-sm leading-snug">
                  {item.title}
                </h4>
                <p className="text-white/70 text-xs mt-1 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
