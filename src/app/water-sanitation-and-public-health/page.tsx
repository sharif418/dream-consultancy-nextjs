import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import Image from "next/image";
import { HiOutlineCheckCircle } from "react-icons/hi";

const services = [
  {
    title: "Water Quality Assessment and Management",
    desc: "Conducting water quality testing, risk assessments, and management planning to ensure safe and clean water access. We help communities, businesses, and public agencies maintain and monitor water quality for public safety.",
  },
  {
    title: "Sanitation Infrastructure Development",
    desc: "Designing and implementing sanitation systems, including toilets, sewage treatment, and waste management, that meet international health standards and local community needs.",
  },
  {
    title: "Public Health Program Design and Implementation",
    desc: "Developing health programs focused on hygiene, disease prevention, and community health education. We work with health agencies to deliver impactful initiatives that address public health challenges.",
  },
  {
    title: "Hygiene Promotion and Behavior Change",
    desc: "Implementing behavior change campaigns and training for hygiene practices in schools, communities, and workplaces, emphasizing the importance of clean water and sanitation for long-term health benefits.",
  },
  {
    title: "Research and Innovation in Health and Sanitation Technologies",
    desc: "Researching and promoting new technologies for water purification, sanitation, and waste management that enhance efficiency, reduce environmental impact, and improve public health.",
  },
];

export default function WaterPage() {
  return (
    <>
      <PageHero title="Water, Sanitation and Public Health" />
      <section className="w-full py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-2xl font-bold text-[#00193a] mb-6">
                Promoting Health through Sustainable Water and Sanitation
                Solutions
              </h2>
              <p className="text-[#404040] leading-relaxed">
                At Dream Consultancy Limited, we are dedicated to improving
                water, sanitation, and public health systems to foster healthy
                communities and resilient ecosystems. Our mission is to provide
                innovative, sustainable solutions that address fundamental
                health and hygiene challenges, particularly in underserved
                areas.
              </p>
            </div>
            <div className="relative h-[350px] rounded-[5px] overflow-hidden">
              <Image
                src="/images/2024/10/Water-Sanitation-and-Public-Health-photo.jpg"
                alt="Water, Sanitation and Public Health"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#00193a] mb-8">
              Our Services in Water, Sanitation, and Public Health
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
                Why Choose Us?
              </h3>
              <p className="text-sm text-[#404040] leading-relaxed">
                Our team combines expertise in public health, environmental
                engineering, and community development to deliver sustainable
                water and sanitation solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#00193a] mb-3">
                Our Approach
              </h3>
              <p className="text-sm text-[#404040] leading-relaxed">
                We take an integrated approach, working closely with communities
                and stakeholders to develop solutions that are practical,
                sustainable, and culturally appropriate.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#00193a] mb-3">
                Partner with Us
              </h3>
              <p className="text-sm text-[#404040] leading-relaxed">
                Whether you are a government agency, NGO, or private
                organization, we are here to support your water, sanitation, and
                public health goals.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
