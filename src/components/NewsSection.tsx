import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/siteData";
import { HiOutlineArrowRight } from "react-icons/hi";

export default function NewsSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#f0f0f8]">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex items-center justify-between mb-10">
          <p className="section-label">Latest at Dream Consultancy</p>
          <Link href="/blog" className="link-arrow text-sm">
            View All Updates <HiOutlineArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {blogPosts.map((item) => (
            <Link
              key={item.slug}
              href={`/blog/${item.slug}`}
              className="group bg-white rounded-[5px] overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative h-[180px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <div className="flex gap-2 mb-2">
                  {item.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold uppercase tracking-wider"
                      style={{
                        fontFamily: "var(--font-lora)",
                        color: "#e27733",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-[#00193a] font-semibold text-sm leading-snug line-clamp-3">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-xs mt-2">{item.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
