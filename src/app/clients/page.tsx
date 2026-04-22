import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import Image from "next/image";

const clientLogos = [
  "1.png", "3.png", "5.png", "6.png", "9.png", "10.png", "11.png",
  "18.png", "31.png", "c-32.png", "c-16.png", "c-27.png",
];

export default function ClientsPage() {
  return (
    <>
      <PageHero title="Our Clients" />
      <section className="w-full py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-2xl font-bold text-[#00193a] mb-4">
            Featured clients
          </h2>
          <p className="text-[#404040] mb-10 max-w-[600px]">
            We consult and collaborate with development partners, public sector
            and private organizations.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {clientLogos.map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center p-4 bg-[#f0f0f8] rounded-[5px] h-[100px] grayscale hover:grayscale-0 transition-all"
              >
                <Image
                  src={`/images/clients/${logo}`}
                  alt={`Client ${i + 1}`}
                  width={100}
                  height={50}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
