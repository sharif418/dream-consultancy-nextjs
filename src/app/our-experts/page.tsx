import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import Image from "next/image";

const experts = [
  {
    name: "Ashfia Nisha Bristy",
    role: "Assistant Director & Coordinator",
    image: "/images/team/Ashfia-Nisha-Bristy-photo.jpg",
  },
  {
    name: "Muhibul Munim",
    role: "Research Associate",
    image: "/images/team/Muhibul-Munim.jpg",
  },
  {
    name: "Nasrulla Fahad",
    role: "Research Asistant",
    image: "/images/team/Nasrulla-Fahad-.jpg",
  },
  {
    name: "Md Habibur Rahman",
    role: "Program Officer",
    image: "/images/team/Md-Habibur-Rahman.jpg",
  },
  {
    name: "Mahadi Hasan Sohag",
    role: "Program officer (Envirnment)",
    image: "/images/team/Mahadi-Hasan-Sohag.jpg",
  },
  {
    name: "Md Jewel Hawlader",
    role: "senior Graphic Desginer",
    image: "/images/team/Md-Jewel-Hawlader.jpg",
  },
  {
    name: "Md Shaifulla Khalid",
    role: "Graphic Desginer",
    image: "/images/team/Md-Shaifulla-Khalid.jpg",
  },
];

export default function OurExpertsPage() {
  return (
    <>
      <PageHero title="Our Experts" />
      <section className="w-full py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5">
          <p className="text-[#404040] leading-relaxed max-w-[800px] mb-12">
            Our team of experts brings together decades of experience across
            diverse fields including environmental science, climate studies,
            public health, policy development, and sustainable agriculture.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {experts.map((expert) => (
              <div
                key={expert.name}
                className="bg-white rounded-[5px] overflow-hidden shadow-sm hover:shadow-md transition-shadow border-t-4 border-[#e27733]"
              >
                <div className="relative h-[280px]">
                  <Image
                    src={expert.image}
                    alt={expert.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-[#00193a] font-bold text-base">
                    {expert.name}
                  </h3>
                  <p className="text-[#0073bb] text-sm mt-1">{expert.role}</p>
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
