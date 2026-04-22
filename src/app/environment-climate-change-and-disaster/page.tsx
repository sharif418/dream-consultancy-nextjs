import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import Image from "next/image";
import { FaLeaf } from "react-icons/fa";

const services = [
  {
    title: "Environmental Assessments",
    desc: "Conducting Environmental Impact Assessments (EIA), Initial Environmental Examinations (IEE), and environmental parameter testing to ensure sustainable development and regulatory compliance.",
  },
  {
    title: "Climate Vulnerability Analysis",
    desc: "Assessing climate vulnerabilities to help communities, industries, and policymakers identify risks and develop strategies for adaptation and resilience-building.",
  },
  {
    title: "Disaster Risk Management and Preparedness",
    desc: "Designing disaster preparedness and risk management frameworks to mitigate potential impacts and enhance recovery. This includes community-based disaster response training and capacity building.",
  },
  {
    title: "Sustainable Resource Management",
    desc: "Promoting practices in natural resource management to ensure responsible and sustainable use of land, water, and biodiversity, balancing ecosystem health and community needs.",
  },
  {
    title: "Policy and Advocacy",
    desc: "Working with governmental and non-governmental organizations to support policies that address climate change, protect ecosystems, and promote disaster risk reduction.",
  },
];

export default function EnvironmentPage() {
  return (
    <>
      <PageHero title="Environment, Climate Change and Disaster" />
      <section className="w-full py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-2xl font-bold text-[#00193a] mb-6">
                Our Commitment to Resilience and Sustainable Development
              </h2>
              <p className="text-[#404040] leading-relaxed">
                At Dream Consultancy Limited, we recognize the critical need to
                address environmental challenges, climate impacts, and disaster
                risks. Our work is dedicated to fostering resilience and
                promoting sustainable practices that help communities, ecosystems,
                and economies withstand and adapt to an increasingly
                unpredictable world.
              </p>
            </div>
            <div className="relative h-[350px] rounded-[5px] overflow-hidden">
              <Image
                src="/images/2024/10/Environment-Climate-Change-and-Disaster.jpeg"
                alt="Environment, Climate Change and Disaster"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#00193a] mb-8">
              Our Services in Environment, Climate Change, and Disaster
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="flex gap-4 p-5 bg-[#f0f0f8] rounded-[5px]"
                >
                  <FaLeaf className="w-6 h-6 text-[#0073bb] flex-shrink-0 mt-0.5" />
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
                Our team of experts brings in-depth knowledge of environmental
                science, climate studies, and disaster management. We are
                dedicated to providing innovative, evidence-based solutions that
                empower communities to adapt, thrive, and protect their resources.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#00193a] mb-3">
                Our Approach
              </h3>
              <p className="text-sm text-[#404040] leading-relaxed">
                Dream Consultancy Limited takes an integrated approach, combining
                scientific research with on-ground insights to develop actionable
                solutions. By engaging local communities and stakeholders, we
                ensure that our strategies are practical, sustainable, and
                aligned with both local and global standards.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#00193a] mb-3">
                Partner with Us
              </h3>
              <p className="text-sm text-[#404040] leading-relaxed">
                Whether you are a government agency, development organization, or
                private sector entity, Dream Consultancy Limited is here to
                support your environmental, climate, and disaster management
                goals. Together, we can build a resilient and sustainable future
                for all.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
