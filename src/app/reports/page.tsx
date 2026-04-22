import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { reports } from "@/data/siteData";
import Image from "next/image";
import Link from "next/link";

export default function ReportsPage() {
  return (
    <>
      <PageHero title="Category: Reports" />
      <section className="w-full py-16 md:py-24 bg-[#F5F8FA]">
        <div className="max-w-[1000px] mx-auto px-5">
          <div className="flex flex-col gap-10">
            {reports.map((report) => (
              <div 
                key={report.slug} 
                className="bg-white rounded overflow-hidden flex flex-col md:flex-row items-center border border-[#E5E9F2] shadow-sm relative"
              >
                <div className="p-8 md:p-12 flex-1 md:pr-4 flex flex-col items-end text-right md:w-2/3">
                  <Link href={`/reports/${report.slug}`} className="hover:text-primary transition-colors">
                    <h2 className="text-2xl md:text-[28px] font-bold text-[#1a93ca] leading-tight mb-2">
                      {report.title}
                    </h2>
                  </Link>
                  <p className="text-sm text-[#404040] mb-6 font-medium">
                    {report.date}
                  </p>
                  <div className="w-full h-px bg-[#D6E6F2] mb-6"></div>
                  <p className="text-[#404040] mb-6 leading-relaxed max-w-xl text-right ml-auto text-[15px]">
                    {report.description}
                  </p>
                  <Link 
                    href={`/reports/${report.slug}`}
                    className="text-[#1a93ca] font-medium hover:underline text-[15px]"
                  >
                    Continue Reading...
                  </Link>
                </div>
                
                <div className="w-full md:w-1/3 relative h-[300px] md:h-[400px]">
                  <Link href={`/reports/${report.slug}`} className="block w-full h-full">
                    {report.image && (
                      <Image
                        src={report.image}
                        alt={report.title}
                        fill
                        className="object-contain md:object-cover object-right"
                      />
                    )}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
