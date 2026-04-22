import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import Image from "next/image";

const publications = [
  {
    title:
      "Income Generation of Entrepreneurs through Safe Fish Production and Marketing",
    date: "October 31, 2024",
    description:
      "Impact Assessment on the 'Income Generation of Entrepreneurs through Safe Fish Production and Marketing' Project",
    image:
      "/images/2024/10/Income-Generation-of-Entrepreneurs-through-Safe-Fish-Production-and-Marketing-240x300.jpg",
  },
];

export default function PublicationsPage() {
  return (
    <>
      <PageHero title="Publications" />
      <section className="w-full py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-2xl font-bold text-[#00193a] mb-8">
            Publications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publications.map((pub) => (
              <div
                key={pub.title}
                className="bg-white rounded-[5px] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-[200px]">
                  <Image
                    src={pub.image}
                    alt={pub.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs text-gray-400 mb-2">{pub.date}</p>
                  <h3 className="text-[#00193a] font-semibold text-sm leading-snug mb-2">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-[#404040] leading-relaxed">
                    {pub.description}
                  </p>
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
