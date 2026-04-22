import Image from "next/image";
import Link from "next/link";
import { insightsArticles } from "@/data/siteData";
import { HiOutlineArrowRight } from "react-icons/hi";

export default function InsightsSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#f0f0f8]">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex items-center justify-between mb-10">
          <p className="section-label">FEATURED INSIGHTS</p>
          <Link href="/insights" className="link-arrow text-sm">
            View All Insights <HiOutlineArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Link
            href={`/insights/${insightsArticles[0].slug}`}
            className="group relative h-[400px] rounded-[5px] overflow-hidden"
          >
            <Image
              src={insightsArticles[0].image}
              alt={insightsArticles[0].title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <span
                className="inline-block text-xs font-semibold uppercase tracking-wider mb-3"
                style={{
                  fontFamily: "var(--font-lora)",
                  color: "#e27733",
                }}
              >
                {insightsArticles[0].tag}
              </span>
              <h3 className="text-white text-xl md:text-2xl font-bold mb-3 leading-tight">
                {insightsArticles[0].title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed line-clamp-2">
                {insightsArticles[0].excerpt}
              </p>
              <p className="text-white/60 text-xs mt-3">{insightsArticles[0].date}</p>
            </div>
          </Link>

          <div className="flex flex-col gap-5">
            {insightsArticles.slice(1).map((item) => (
              <Link
                key={item.slug}
                href={`/insights/${item.slug}`}
                className="group flex gap-4 bg-white rounded-[5px] overflow-hidden p-4 hover:shadow-md transition-shadow"
              >
                <div className="relative w-[120px] h-[90px] flex-shrink-0 rounded overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span
                    className="text-[10px] font-semibold uppercase tracking-wider"
                    style={{
                      fontFamily: "var(--font-lora)",
                      color: "#e27733",
                    }}
                  >
                    {item.tag}
                  </span>
                  <h4 className="text-[#00193a] font-semibold text-sm leading-snug mt-1 line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-xs mt-1">{item.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
