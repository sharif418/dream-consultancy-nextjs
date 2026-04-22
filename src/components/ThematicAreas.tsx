import Image from "next/image";
import Link from "next/link";
import { thematicAreas } from "@/data/siteData";

export default function ThematicAreas() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#f0f0f8]">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-12">
          <p className="section-label">THEMATIC AREAS</p>
          <p className="text-[#404040] max-w-[700px] mx-auto mt-4">
            In response to current challenges and emerging opportunities, Dream
            Consultancy Limited focuses on select research and development areas
            to drive positive, lasting change in society.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {thematicAreas.map((area) => (
            <Link
              key={area.title}
              href={area.href}
              className="group bg-white rounded-[5px] overflow-hidden border border-white transition-all duration-500 hover:shadow-lg"
            >
              <div className="relative h-[200px] overflow-hidden">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-[#00193a] font-semibold text-base leading-snug">
                  {area.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
