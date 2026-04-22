import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import Image from "next/image";
import { FaLandmark } from "react-icons/fa";

const services = [
  {
    title: "Policy Analysis and Development",
    desc: "Conducting comprehensive policy analyses to support informed decision-making. We work with stakeholders to develop policies that are evidence-based, inclusive, and aligned with sustainable development goals.",
  },
  {
    title: "Institutional Capacity Building",
    desc: "Providing training and resources to strengthen institutional capacities, enabling organizations to improve transparency, accountability, and service delivery.",
  },
  {
    title: "Public Administration and Reform",
    desc: "Assisting government agencies in implementing reforms that streamline administrative processes, improve efficiency, and enhance responsiveness to public needs.",
  },
  {
    title: "Stakeholder Engagement and Advocacy",
    desc: "Facilitating effective engagement with stakeholders, including communities, NGOs, and private entities, to promote policies that reflect the needs and perspectives of all.",
  },
  {
    title: "Research and Advisory Support",
    desc: "Offering research services to provide insights into governance challenges and opportunities. We advise on policy and governance trends to help organizations adapt to changing social and political landscapes.",
  },
];

export default function PolicyPage() {
  return (
    <>
      <PageHero title="Policy and Governance" />
      <section className="w-full py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-2xl font-bold text-[#00193a] mb-6">
                Strengthening Institutions for Effective Governance
              </h2>
              <p className="text-[#404040] leading-relaxed">
                At Dream Consultancy Limited, we recognize the vital role that
                sound policy and good governance play in driving sustainable
                development and social progress. Our commitment is to support
                public and private institutions in creating transparent,
                accountable, and inclusive governance structures that serve
                communities effectively.
              </p>
            </div>
            <div className="relative h-[350px] rounded-[5px] overflow-hidden">
              <Image
                src="/images/2024/10/Policy-and-Governance-photo.jpg"
                alt="Policy and Governance"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#00193a] mb-8">
              Our Services in Policy and Governance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="flex gap-4 p-5 bg-[#f0f0f8] rounded-[5px]"
                >
                  <FaLandmark className="w-6 h-6 text-[#0073bb] flex-shrink-0 mt-0.5" />
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
                Our team brings deep expertise in policy analysis, institutional
                reform, and governance frameworks to support effective and
                inclusive governance.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#00193a] mb-3">
                Our Approach
              </h3>
              <p className="text-sm text-[#404040] leading-relaxed">
                We combine research-driven insights with stakeholder engagement
                to develop policies and governance structures that are practical
                and sustainable.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#00193a] mb-3">
                Partner with Us
              </h3>
              <p className="text-sm text-[#404040] leading-relaxed">
                Whether you are a government agency or civil society
                organization, we are here to support your governance and policy
                goals.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
