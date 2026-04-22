import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import Image from "next/image";
import { FaBolt } from "react-icons/fa";

export default function CleanEnergyPage() {
  return (
    <>
      <PageHero title="Clean Energy and Justice" />
      <section className="w-full py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-2xl font-bold text-[#00193a] mb-6">
                A Brighter Future, For All
              </h2>
              <p className="text-[#404040] leading-relaxed">
                At DREAM Consultancy Limited, we believe that access to clean,
                affordable energy is a fundamental human right. We&apos;re
                committed to working towards a future where everyone can benefit
                from the power of clean energy.
              </p>
            </div>
            <div className="relative h-[350px] rounded-[5px] overflow-hidden">
              <Image
                src="/images/2024/10/Clean-Energy-and-Justice.png"
                alt="Clean Energy and Justice"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#00193a] mb-8">
              Why Clean Energy and Justice Matter
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Climate Change",
                  desc: "The climate crisis is a pressing global issue. Transitioning to clean energy sources is essential to mitigating its impact.",
                },
                {
                  title: "Energy Poverty",
                  desc: "Millions of people around the world lack access to reliable and affordable energy. This hinders economic development and social progress.",
                },
                {
                  title: "Environmental Justice",
                  desc: "Communities often bear the brunt of pollution and environmental degradation from traditional energy sources.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#f0f0f8] rounded-[5px] p-6"
                >
                  <h3 className="font-bold text-[#00193a] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#404040] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#00193a] mb-8">
              Our Approach
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Promoting Renewable Energy: We advocate for and support the development of renewable energy projects, such as solar, wind, and hydro power.",
                "Enhancing Energy Efficiency: We help clients implement energy-efficient practices to reduce consumption and lower costs.",
                "Supporting Community-Based Energy Initiatives: We empower communities to take control of their energy future through community-owned renewable energy projects.",
                "Advocating for Equitable Policies: We work with policymakers to ensure that energy policies promote social justice and environmental sustainability.",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 bg-[#f0f0f8] rounded-[5px]"
                >
                  <FaBolt className="w-6 h-6 text-[#0073bb] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#404040] leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#00193a] mb-8">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Feasibility Studies: We assess the technical, economic, and environmental feasibility of clean energy projects.",
                "Project Development and Financing: We assist in securing funding and developing comprehensive project plans.",
                "Environmental Impact Assessment: We evaluate the potential environmental and social impacts of energy projects.",
                "Policy Analysis and Advocacy: We conduct research and advocate for policies that promote clean energy and climate action.",
                "Community Engagement and Capacity Building: We engage with communities to raise awareness, build capacity, and ensure their participation in energy decision-making.",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 bg-[#f0f0f8] rounded-[5px]"
                >
                  <FaBolt className="w-6 h-6 text-[#0073bb] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#404040] leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#00193a] rounded-[5px] p-8 md:p-12 text-center">
            <h3 className="text-white text-2xl font-bold mb-4">
              Join Us in Building a Sustainable Future
            </h3>
            <p className="text-[#8ca0b4] mb-6">
              Let&apos;s work together to create a world where clean energy
              benefits everyone.
            </p>
            <a href="#contact-popup" className="cta-button">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
