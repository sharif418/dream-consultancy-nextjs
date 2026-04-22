import { openPositions } from "@/data/siteData";
import { notFound } from "next/navigation";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import { HiOutlineCheckCircle } from "react-icons/hi";

export function generateStaticParams() {
  return openPositions.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pos = openPositions.find((p) => p.slug === slug);
  if (!pos) return { title: "Not Found" };
  return { title: `${pos.title} - Dream Consultancy Limited` };
}

export default async function CareerDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pos = openPositions.find((p) => p.slug === slug);
  if (!pos) notFound();

  return (
    <>
      <section className="w-full bg-[#00193a] py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "rgba(6,138,220,0.18)" }} />
        <div className="relative z-10 max-w-[1200px] mx-auto px-5">
          <div className="flex items-center justify-center gap-2 text-sm text-white/70 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
            <span>/</span>
            <span className="text-white line-clamp-1">{pos.title}</span>
          </div>
          <h1 className="text-white text-2xl md:text-4xl font-bold max-w-[800px] mx-auto">{pos.title}</h1>
        </div>
      </section>
      <section className="w-full py-16 md:py-24">
        <div className="max-w-[800px] mx-auto px-5">
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="bg-[#f0f0f8] rounded-[5px] px-4 py-2 text-sm">
              <span className="font-semibold text-[#00193a]">Type:</span> {pos.type}
            </div>
            <div className="bg-[#f0f0f8] rounded-[5px] px-4 py-2 text-sm">
              <span className="font-semibold text-[#00193a]">Vacancy:</span> {pos.vacancy}
            </div>
            <div className="bg-[#f0f0f8] rounded-[5px] px-4 py-2 text-sm">
              <span className="font-semibold text-[#00193a]">Deadline:</span> {pos.deadline}
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold text-[#00193a] mb-4">Key Responsibilities</h2>
            <ul className="flex flex-col gap-3">
              {pos.responsibilities.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <HiOutlineCheckCircle className="w-5 h-5 text-[#0073bb] mt-0.5 flex-shrink-0" />
                  <span className="text-[#404040]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold text-[#00193a] mb-4">Requirements</h2>
            <ul className="flex flex-col gap-3">
              {pos.requirements.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <HiOutlineCheckCircle className="w-5 h-5 text-[#0073bb] mt-0.5 flex-shrink-0" />
                  <span className="text-[#404040]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#f0f0f8] rounded-[5px] p-6 mt-8">
            <h3 className="text-lg font-bold text-[#00193a] mb-2">How to Apply</h3>
            <p className="text-[#404040] text-sm">
              Send your CV and cover letter to{" "}
              <a href="mailto:career@dreamconsultancy.org" className="text-[#0073bb] hover:text-[#068adc]">
                career@dreamconsultancy.org
              </a>
            </p>
          </div>
          <div className="mt-10 pt-8 border-t border-gray-200">
            <Link href="/careers" className="link-arrow">Back to Careers</Link>
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
