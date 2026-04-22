import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import Image from "next/image";
import Link from "next/link";
import { insightsArticles } from "@/data/siteData";

export default function InsightsPage() {
  return (
    <>
      <PageHero title="Insights" />
      <section className="w-full py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insightsArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/insights/${article.slug}`}
                className="group bg-white rounded-[5px] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-[220px] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <span
                    className="text-[10px] font-semibold uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-lora)", color: "#e27733" }}
                  >
                    {article.tag}
                  </span>
                  <h3 className="text-[#00193a] font-semibold text-base leading-snug mt-2">
                    {article.title}
                  </h3>
                  <p className="text-[#404040] text-sm mt-2 line-clamp-2">{article.excerpt}</p>
                  <p className="text-gray-400 text-xs mt-2">{article.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
