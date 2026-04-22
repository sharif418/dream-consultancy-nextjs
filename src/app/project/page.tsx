import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/siteData";

export default function ProjectPage() {
  return (
    <>
      <PageHero title="Project" />
      <section className="w-full py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-2xl font-bold text-[#00193a] mb-2">Project</h2>
          <p className="text-[#404040] mb-10">
            DREAM Consultancy Limited&apos;s Projects
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.slug}
                className="bg-white rounded-[5px] overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="relative h-[250px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-[#00193a] font-bold text-base leading-snug mb-2">
                    {project.title}
                  </h3>
                  {project.client && (
                    <p className="text-[#0073bb] text-sm mb-4">Client: {project.client}</p>
                  )}
                  <Link
                    href={`/project/${project.slug}`}
                    className="link-arrow text-sm"
                  >
                    Project Details
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
