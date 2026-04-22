import { reports } from "@/data/siteData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export function generateStaticParams() {
  return reports.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const report = reports.find((r) => r.slug === slug);
  if (!report) return { title: "Not Found" };
  return { title: `${report.title} - Dream Consultancy Limited` };
}

export default async function ReportDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const report = reports.find((r) => r.slug === slug);
  if (!report) notFound();

  return (
    <>
      <section className="w-full bg-[#00193a] py-20 relative overflow-hidden" 
               style={{ backgroundImage: 'linear-gradient(rgba(0,25,58,0.9), rgba(0,25,58,0.9)), url(/images/hero/overlay.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 z-0 bg-[#00193a] opacity-80" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-5">
           <h1 className="text-white text-3xl md:text-4xl font-bold">{report.title}</h1>
        </div>
      </section>
      
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="max-w-[1000px] mx-auto px-5 flex flex-col md:flex-row gap-12">
          
          {/* Left Column - Image & Download */}
          <div className="w-full md:w-1/3 flex flex-col gap-6">
            <div className="bg-white rounded border border-[#E5E9F2] shadow-sm relative h-[400px] w-full p-2 flex items-center justify-center">
              {report.image ? (
                <Image 
                  src={report.image} 
                  alt={report.title} 
                  fill 
                  className="object-contain p-2" 
                />
              ) : (
                <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
                  No Image Available
                </div>
              )}
            </div>
            
            <Link 
              href={(report as any).downloadUrl || "#"} 
              className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#f8f9fa] border border-[#e5e9f2] text-[#e67e22] font-semibold rounded hover:bg-[#fff7f0] transition-colors shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download Full Report
            </Link>
          </div>

          {/* Right Column - Table Details */}
          <div className="w-full md:w-2/3">
            {report.details && report.details.length > 0 ? (
               <div className="border border-[#e5e9f2] rounded overflow-hidden shadow-sm text-[15px]">
                  <table className="w-full text-left border-collapse">
                    <tbody>
                      {report.details.map((detail, index) => (
                        <tr key={index} className="border-b last:border-0 border-[#e5e9f2]">
                          <td className="py-4 px-6 bg-[#f8f9fa] font-medium text-[#404040] w-1/3 border-r border-[#e5e9f2]">
                            {detail.label}
                          </td>
                          <td className="py-4 px-6 text-[#404040] bg-white">
                            {detail.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
               </div>
            ) : (
               <p className="text-[#404040]">Details not available for this report.</p>
            )}
            
            {/* If there's extra narrative description not in the table */}
            {!report.details && report.description && (
               <p className="text-[#404040] leading-relaxed mt-6">{report.description}</p>
            )}
          </div>
          
        </div>
      </section>
      <CTABanner />
    </>
  );
}
