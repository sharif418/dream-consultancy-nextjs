import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Dream Consultancy" />
      
      {/* Intro Text and Map Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#404040] text-[15px] leading-[1.8] mb-6">
                DREAM Consultancy Limited was established by a team of distinguished
                experts and professionals from diverse fields, united by a shared
                vision: to make meaningful contributions toward national
                advancement and societal betterment. With each professional boasting
                an esteemed reputation in their respective areas of expertise,
                DREAM Consultancy is positioned to deliver exceptional services
                that address pressing social, environmental, and economic challenges.
              </p>
              <p className="text-[#404040] text-[15px] leading-[1.8]">
                Our theme slogan, "We Do for People and Society," reflects our
                deep-rooted commitment to sustainable development and positive
                change. DREAM Consultancy provides specialized research, analysis,
                and consulting services that empower organizations, development
                partners, and government agencies to make informed decisions that
                benefit communities and drive progress.
              </p>
            </div>
            <div className="relative h-[450px] w-full flex justify-center items-center">
              <Image
                src="/images/2024/10/Page-01.jpg"
                alt="Dream Consultancy Map"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section (Screenshot 3 exact match) */}
      <section className="w-full py-16 md:py-24 bg-[#f4f5f9]">
        <div className="max-w-[1240px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            
            {/* Our Mission */}
            <div>
              <div className="flex justify-center mb-8">
                <div className="relative w-32 h-32">
                  <Image
                    src="/images/icons/Simplify-2.png"
                    alt="Our Mission"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <hr className="border-t border-gray-300 mb-6" />
              <div className="flex items-center mb-6">
                <div className="w-6 h-[3px] bg-[#e27733] mr-4"></div>
                <h2 className="text-[22px] font-bold text-[#333333]">Our Mission</h2>
              </div>
              <p className="text-[#404040] text-[15px] leading-[1.8] mb-4">
                Our mission is to design, develop, and implement innovative research
                and social survey initiatives that align with client needs and
                contribute to national growth. We are committed to empowering
                underserved communities by collaborating with public agencies and
                development partners to create sustainable solutions across critical
                sectors, including:
              </p>
              <ul className="text-[#404040] text-[15px] leading-[1.8] ml-4 space-y-1 list-disc pl-2">
                <li>Livelihoods and income restoration</li>
                <li>Environmental stewardship</li>
                <li>Rehabilitation and resettlement</li>
                <li>Gender equality</li>
                <li>Nutrition, food security, and agricultural development</li>
                <li>Youth empowerment and more.</li>
              </ul>
            </div>
            
            {/* Our Vision */}
            <div>
              <div className="flex justify-center mb-8">
                <div className="relative w-32 h-32">
                  <Image
                    src="/images/icons/Integrity-2.png"
                    alt="Our Vision"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <hr className="border-t border-gray-300 mb-6" />
              <div className="flex items-center mb-6">
                <div className="w-6 h-[3px] bg-[#e27733] mr-4"></div>
                <h2 className="text-[22px] font-bold text-[#333333]">Our Vision</h2>
              </div>
              <p className="text-[#404040] text-[15px] leading-[1.8]">
                DREAM Consultancy aspires to be a dynamic, market-leading research
                and consultancy firm, transforming our expertise and insights into
                impactful solutions tailored to the unique needs of our clients. We
                aim to become a trusted partner by providing top-tier consultancy
                services and fostering positive relationships with clients,
                stakeholders, and the wider society.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* What We Do Section (Screenshot 2 exact match) */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[650px] w-full rounded-[3px] overflow-hidden hidden lg:block">
              <Image
                src="/images/2024/06/photo-2-rotated.jpg"
                alt="What We Do"
                fill
                className="object-cover object-center"
              />
            </div>
            
            <div className="pl-0 lg:pl-10">
              <div className="flex items-center mb-6">
                <div className="w-6 h-[3px] bg-[#e27733] mr-4"></div>
                <h2 className="text-[22px] font-bold text-[#333333]">What We Do</h2>
              </div>
              <p className="text-[#404040] text-[15px] leading-[1.8] mb-8">
                DREAM Consultancy offers a range of services to help organizations
                meet their goals and make lasting impacts. These include:
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#555] flex-shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-[#333333] text-[15px] mb-2">Research, Study and Survey</h3>
                    <p className="text-[#606060] text-[15px] leading-[1.8]">Conducting in-depth research, studies, and surveys across social, environmental, and climate change areas, as well as monitoring and evaluating project impacts.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#555] flex-shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-[#333333] text-[15px] mb-2">Rehabilitation and Resettlement</h3>
                    <p className="text-[#606060] text-[15px] leading-[1.8]">Providing socioeconomic studies and strategies for livelihoods restoration, resettlement planning, and compensation.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#555] flex-shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-[#333333] text-[15px] mb-2">Market Linkages Development</h3>
                    <p className="text-[#606060] text-[15px] leading-[1.8]">Building effective forward and backward linkages that prioritize the interests of primary producers and meet demands across market levels.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#555] flex-shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-[#333333] text-[15px] mb-2">Innovative Project Proposal Development</h3>
                    <p className="text-[#606060] text-[15px] leading-[1.8]">Crafting project proposals that address socio-economic needs with a people-centered approach.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section: Core Team and Services */}
      <section className="w-full py-16 md:py-24 bg-[#f4f5f9]">
        <div className="max-w-[1240px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-start">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-6 h-[3px] bg-[#e27733] mr-4"></div>
                <h2 className="text-[22px] font-bold text-[#333333]">Our Core Team and Expertise</h2>
              </div>
              <p className="text-[#404040] text-[15px] leading-[1.8] mb-6">
                Our team comprises highly skilled professionals with extensive
                experience in implementing development and research projects across
                multiple disciplines:
              </p>
              <ul className="text-[#404040] text-[15px] leading-[1.8] ml-4 space-y-1 list-disc pl-2 mb-6">
                <li>Social & Environmental Experts</li>
                <li>Rehabilitation & Resettlement Experts</li>
                <li>Research & Development Experts</li>
                <li>Value Chain Experts</li>
                <li>Disaster Management Experts</li>
                <li>Gender Specialists</li>
                <li>Monitoring, Evaluation, and Learning (MEL) Specialists</li>
                <li>Natural Resource Management Experts</li>
                <li>Enterprise Development Experts</li>
              </ul>
              <p className="text-[#404040] text-[15px] leading-[1.8]">
                Each team member brings a unique perspective and proven expertise,
                ensuring that DREAM Consultancy delivers comprehensive and
                insightful solutions to our clients.
              </p>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <div className="w-6 h-[3px] bg-[#e27733] mr-4"></div>
                <h2 className="text-[22px] font-bold text-[#333333]">Our Core Services</h2>
              </div>
              <p className="text-[#404040] text-[15px] leading-[1.8] mb-6">
                We offer a diverse set of services tailored to the evolving needs
                of our clients and the broader development landscape:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-[#333333] text-[15px] mb-1">1. Data Collection & Analysis</h3>
                  <p className="text-[#606060] text-[15px] leading-[1.8]">Conducting baseline studies, mid-term evaluations, feasibility assessments, and more to provide actionable insights.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[#333333] text-[15px] mb-1">2. Rehabilitation and Resettlement</h3>
                  <p className="text-[#606060] text-[15px] leading-[1.8]">Performing demographic surveys, preparing resettlement plans, and implementing land acquisition and compensation strategies.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[#333333] text-[15px] mb-1">3. Research & Publication Support</h3>
                  <p className="text-[#606060] text-[15px] leading-[1.8]">Offering report writing, manuscript development, data analysis, and research design and planning support for publication-quality outputs.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[#333333] text-[15px] mb-1">4. Environmental Assessment</h3>
                  <p className="text-[#606060] text-[15px] leading-[1.8]">Conducting environmental monitoring, parameter testing, impact assessments, and developing comprehensive environmental management systems.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[#333333] text-[15px] mb-1">5. Agro-Business Consultation</h3>
                  <p className="text-[#606060] text-[15px] leading-[1.8]">Supporting the establishment of agro-industries, fisheries, poultry farms, and food processing units, as well as providing guidance on agricultural farming and trading.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dedication Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-5">
          <div className="text-center max-w-[800px] mx-auto">
            <h2 className="text-[22px] font-bold text-[#333333] mb-6">
              Our Dedication to Quality and Impact
            </h2>
            <p className="text-[#404040] text-[15px] leading-[1.8] mb-8">
              At DREAM Consultancy Limited, we believe in the power of knowledge and
              research to bring about sustainable development. By combining
              analytical rigor with a people-centered approach, we aim to be a
              partner of choice for those committed to creating a brighter, more
              resilient future.
            </p>
            <p className="text-[#e27733] font-bold text-[15px]">
              Contact Us to learn how DREAM Consultancy Limited can support your
              organization's vision and create meaningful impacts for people and society.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
