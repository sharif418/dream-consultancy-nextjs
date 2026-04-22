import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import Image from "next/image";

const teamMembers = [
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

export default function TeamPage() {
  return (
    <>
      <PageHero title="Our Team" />
      <section className="w-full py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5">
          <p className="text-[#404040] leading-relaxed max-w-[800px] mb-12">
            Our dedicated team of professionals is the backbone of Dream
            Consultancy. With diverse expertise and a shared passion for
            creating impact, we work together to deliver innovative solutions
            for our clients and communities.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-[5px] overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="relative h-[300px] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-[#00193a] font-bold text-base">
                    {member.name}
                  </h3>
                  <p className="text-[#0073bb] text-sm mt-1">{member.role}</p>
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
