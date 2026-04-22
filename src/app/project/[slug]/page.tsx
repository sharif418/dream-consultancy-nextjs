import { projects } from "@/data/siteData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Not Found" };
  return { title: `${project.title} - Dream Consultancy Limited` };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <section className="w-full bg-[#00193a] py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "rgba(6,138,220,0.18)" }} />
        <div className="relative z-10 max-w-[1200px] mx-auto px-5">
          <div className="flex items-center justify-center gap-2 text-sm text-white/70 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/project" className="hover:text-white transition-colors">Projects</Link>
            <span>/</span>
            <span className="text-white line-clamp-1">{project.title}</span>
          </div>
          <h1 className="text-white text-2xl md:text-4xl font-bold max-w-[800px] mx-auto">{project.title}</h1>

        </div>
      </section>
      <section className="w-full py-16 md:py-24">
        <div className="max-w-[800px] mx-auto px-5">
          <div className="relative h-[400px] rounded-[5px] overflow-hidden mb-8">
            <Image src={project.image} alt={project.title} fill className="object-cover" />
          </div>
          <div className="bg-white border border-gray-200 rounded-[5px] p-6 md:p-8 shadow-sm">
            <h2 className="text-[22px] font-bold text-[#00193a] mb-6 border-b border-gray-100 pb-4">
              Project Information
            </h2>
            <div className="flex flex-col gap-4 text-[#404040]">
              <div className="flex flex-col md:flex-row gap-1 md:gap-4">
                <span className="font-bold text-[#00193a] md:w-[150px] flex-shrink-0">Title:</span>
                <span>{project.title}</span>
              </div>
              
              {project.client && (
                <div className="flex flex-col md:flex-row gap-1 md:gap-4">
                  <span className="font-bold text-[#00193a] md:w-[150px] flex-shrink-0">Client:</span>
                  <span>{project.client}</span>
                </div>
              )}
              
              <div className="flex flex-col md:flex-row gap-1 md:gap-4 mt-2 pt-4 border-t border-gray-100">
                <span className="font-bold text-[#00193a] md:w-[150px] flex-shrink-0">Project Description:</span>
                <div className="flex flex-col gap-3">
                  {project.description.split("\n\n").map((paragraph, i) => (
                    <p key={i} className="leading-relaxed whitespace-pre-wrap">{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 pt-8 border-t border-gray-200">
            <Link href="/project" className="link-arrow">Back to Projects</Link>
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
