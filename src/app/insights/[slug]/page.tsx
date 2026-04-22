import { insightsArticles } from "@/data/siteData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export function generateStaticParams() {
  return insightsArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = insightsArticles.find((a) => a.slug === slug);
  if (!article) return { title: "Not Found" };
  return { title: `${article.title} - Dream Consultancy Limited` };
}

export default async function InsightDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = insightsArticles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <>
      <section className="w-full bg-[#00193a] pt-32 pb-24 text-left relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "rgba(6,138,220,0.18)" }} />
        <div className="relative z-10 max-w-[1200px] mx-auto px-5">
          <h1 className="text-white text-3xl md:text-5xl font-bold max-w-[1000px] leading-tight">{article.title}</h1>
        </div>
      </section>
      <section className="w-full py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 text-left">
          <div className="prose max-w-none text-[#404040]">
            {article.content.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                return <h3 key={i} className="text-xl font-bold text-[#404040] mt-8 mb-4">{paragraph.replace(/\*\*/g, "")}</h3>;
              }
              if (paragraph.startsWith("- ")) {
                const items = paragraph.split("\n").filter((l) => l.startsWith("- "));
                return (
                  <ul key={i} className="list-disc pl-6 mb-4 space-y-2">
                    {items.map((item, j) => (
                      <li key={j} className="text-[#404040] leading-relaxed">{item.replace("- **", "").replace("**", " - ").replace("- ", "")}</li>
                    ))}
                  </ul>
                );
              }
              // Detect section headers that are plain text but short
              if (paragraph.length < 100 && !paragraph.includes(".") && paragraph.split(" ").length < 10) {
                 return <h3 key={i} className="text-lg font-bold text-[#404040] mt-8 mb-4">{paragraph}</h3>;
              }
              return <p key={i} className="text-[#404040] leading-relaxed mb-6 text-[15px]">{paragraph.replace(/\*\*/g, "")}</p>;
            })}
          </div>
          {article.image && (
            <div className="relative h-[400px] md:h-[600px] w-full max-w-[1000px] rounded-[5px] overflow-hidden mt-10">
              <Image src={article.image} alt={article.title} fill className="object-cover" />
            </div>
          )}
          <div className="mt-10 pt-8 border-t border-gray-200">
            <Link href="/insights" className="link-arrow">Back to Insights</Link>
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
