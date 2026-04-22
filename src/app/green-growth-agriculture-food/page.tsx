import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import Image from "next/image";
import { HiOutlineCheckCircle } from "react-icons/hi";

const services = [
  {
    title: "Sustainable Agriculture Development",
    desc: "We assist in the design and implementation of sustainable farming practices, including crop management, soil conservation, and organic farming techniques that boost productivity while protecting the environment.",
  },
  {
    title: "Value Chain Enhancement",
    desc: "Developing forward and backward linkages to strengthen market access for farmers and producers. This ensures better income opportunities and market stability for primary producers and other value chain actors.",
  },
  {
    title: "Agro-Business Consultancy",
    desc: "Offering guidance on agricultural businesses, including fisheries, livestock, dairy farming, and food processing, helping enterprises maximize efficiency and profitability.",
  },
  {
    title: "Food Security and Nutrition Initiatives",
    desc: "Implementing programs that address food security and improve nutritional outcomes for communities, contributing to health and well-being while reducing malnutrition.",
  },
  {
    title: "Research and Innovation in Green Technologies",
    desc: "Conducting research to explore new technologies in agriculture, such as precision farming, water-saving irrigation, and renewable energy solutions that help increase sustainability and reduce environmental impact.",
  },
];

export default function GreenGrowthPage() {
  return (
    <>
      <PageHero title="Green Growth, Agriculture & Food" />
      <section className="w-full py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-2xl font-bold text-[#00193a] mb-6">
                Empowering Sustainable Agriculture and Food Security
              </h2>
              <p className="text-[#404040] leading-relaxed">
                At Dream Consultancy Limited, we are committed to advancing
                green growth, sustainable agriculture, and food security. Our
                focus is on supporting innovative, eco-friendly practices that
                drive economic growth while protecting natural resources and
                enhancing the livelihoods of communities.
              </p>
            </div>
            <div className="relative h-[350px] rounded-[5px] overflow-hidden">
              <Image
                src="/images/2024/10/Green-Growth-Agriculture-Food-photo.jpg"
                alt="Green Growth, Agriculture & Food"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#00193a] mb-8">
              Our Services in Green Growth, Agriculture & Food
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="flex gap-4 p-5 bg-[#f0f0f8] rounded-[5px]"
                >
                  <HiOutlineCheckCircle className="w-6 h-6 text-[#0073bb] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-[#00193a] mb-1">
                      {s.title}
                    </h3>
                    <p className="text-sm text-[#404040] leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold text-[#00193a] mb-3">
                Why Choose Dream Consultancy Limited?
              </h3>
              <p className="text-sm text-[#404040] leading-relaxed">
                Our team combines experience in agriculture, economics, and
                environmental management, bringing an integrated approach to
                sustainable agricultural development. We understand the complex
                challenges of this sector and are dedicated to creating solutions
                that are economically viable and environmentally sound.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#00193a] mb-3">
                Our Approach
              </h3>
              <p className="text-sm text-[#404040] leading-relaxed">
                Dream Consultancy Limited collaborates with stakeholders across
                the agricultural value chain to implement practices that
                prioritize sustainability, innovation, and inclusivity. By
                leveraging research, market analysis, and local knowledge, we
                develop customized solutions that meet the unique needs of our
                clients and their communities.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#00193a] mb-3">
                Partner with Us
              </h3>
              <p className="text-sm text-[#404040] leading-relaxed">
                For governments, non-profits, and businesses looking to foster
                green growth and ensure food security, Dream Consultancy Limited
                provides the expertise and insight needed for impactful results.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
