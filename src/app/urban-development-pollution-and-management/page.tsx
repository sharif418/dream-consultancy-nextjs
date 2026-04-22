import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import Image from "next/image";
import { HiOutlineCheckCircle } from "react-icons/hi";

const services = [
  {
    title: "Urban Planning and Sustainable Development",
    desc: "Assisting in the creation of urban plans that balance growth with environmental protection, infrastructure needs, and community well-being. We focus on sustainable land use, green spaces, and resilient infrastructure.",
  },
  {
    title: "Pollution Control and Management",
    desc: "Developing strategies and implementing technologies to reduce air, water, and soil pollution in urban areas. We work with municipalities and industries to mitigate pollution and protect public health.",
  },
  {
    title: "Waste Management Solutions",
    desc: "Designing and implementing efficient waste management systems, including recycling, composting, and waste-to-energy solutions, to reduce landfill dependency and promote circular economy practices.",
  },
  {
    title: "Smart City Solutions",
    desc: "Advising on the integration of smart technologies for urban management, including IoT-based monitoring, data analytics, and digital platforms that enhance city services and improve the quality of urban life.",
  },
  {
    title: "Community Engagement and Urban Resilience",
    desc: "Engaging communities in urban planning and development processes to ensure that solutions are inclusive and address the needs of all residents, particularly vulnerable populations.",
  },
];

export default function UrbanPage() {
  return (
    <>
      <PageHero title="Urban Development, Pollution and Management" />
      <section className="w-full py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-2xl font-bold text-[#00193a] mb-6">
                Building Sustainable Cities for a Better Tomorrow
              </h2>
              <p className="text-[#404040] leading-relaxed">
                At Dream Consultancy Limited, we understand the complexities and
                challenges of rapid urbanization. Our focus is on supporting
                urban development that is sustainable, resilient, and inclusive,
                ensuring that cities can grow while minimizing pollution and
                effectively managing resources.
              </p>
            </div>
            <div className="relative h-[350px] rounded-[5px] overflow-hidden">
              <Image
                src="/images/2024/10/Urban-development-Pollution-and-Management.jpg"
                alt="Urban Development, Pollution and Management"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#00193a] mb-8">
              Our Services in Urban Development, Pollution, and Management
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
                Our team brings expertise in urban planning, environmental
                engineering, and community engagement to deliver sustainable
                urban solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#00193a] mb-3">
                Our Approach
              </h3>
              <p className="text-sm text-[#404040] leading-relaxed">
                We combine data-driven analysis with community participation to
                develop urban strategies that are practical, sustainable, and
                equitable.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#00193a] mb-3">
                Partner with Us
              </h3>
              <p className="text-sm text-[#404040] leading-relaxed">
                Whether you are a municipality or private developer, we are
                here to support your urban development and management goals.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
