import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import Image from "next/image";
import Link from "next/link";
import { openPositions } from "@/data/siteData";
import { HiOutlineCheckCircle } from "react-icons/hi";

const expertiseAreas = [
  "Environmental Science and Climate Studies",
  "Agriculture and Food Security",
  "Public Health and Sanitation",
  "Policy Development and Governance",
  "Monitoring, Evaluation, and Data Analysis",
  "Training and Capacity Development",
];

export default function CareersPage() {
  return (
    <>
      <PageHero title="Careers" />
      <section className="w-full py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-2xl font-bold text-[#00193a] mb-6">
                Join Our Mission to Drive Sustainable Change
              </h2>
              <p className="text-[#404040] leading-relaxed mb-4">
                At Dream Consultancy Limited, we are driven by a mission to make
                a positive impact through research, innovation, and sustainable
                development. We offer a supportive work environment where
                professional growth and meaningful contributions go hand in hand.
              </p>
              <p className="text-[#404040] leading-relaxed mb-4">
                We foster cross-functional teamwork, allowing you to learn from
                members representing diverse backgrounds.
              </p>
              <p className="text-[#404040] leading-relaxed">
                Our team members work on impactful projects that address
                real-world challenges in climate change, public health, policy
                development, and more.
              </p>
            </div>
            <div className="relative h-[350px] rounded-[5px] overflow-hidden">
              <Image
                src="/images/2024/11/Welcome-to-Dream-Consultancy-Limited.gif"
                alt="Welcome to Dream Consultancy Limited"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#00193a] mb-6">
              Career Opportunities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {expertiseAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-3 p-4 bg-[#f0f0f8] rounded-[5px]"
                >
                  <HiOutlineCheckCircle className="w-5 h-5 text-[#0073bb] flex-shrink-0" />
                  <span className="text-sm text-[#00193a] font-medium">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[#f0f0f8] rounded-[5px] p-6">
              <h3 className="text-lg font-bold text-[#00193a] mb-3">
                Professional Development
              </h3>
              <p className="text-sm text-[#404040] leading-relaxed">
                Access workshops, training sessions, and mentorship programs to
                continuously grow your skills.
              </p>
            </div>
            <div className="bg-[#f0f0f8] rounded-[5px] p-6">
              <h3 className="text-lg font-bold text-[#00193a] mb-3">
                Collaborative Environment
              </h3>
              <p className="text-sm text-[#404040] leading-relaxed">
                Work alongside experts from diverse fields and contribute to
                cross-functional projects.
              </p>
            </div>
            <div className="bg-[#f0f0f8] rounded-[5px] p-6">
              <h3 className="text-lg font-bold text-[#00193a] mb-3">
                Impactful Projects
              </h3>
              <p className="text-sm text-[#404040] leading-relaxed">
                Contribute to projects that address real-world challenges and
                create lasting positive change.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#00193a] mb-6">
              Internships and Young Professionals Program
            </h2>
            <p className="text-[#404040] leading-relaxed max-w-[800px]">
              Our internship and young professionals program offers hands-on
              experience for students and recent graduates. Work alongside
              experienced mentors, gain practical skills, and contribute to
              meaningful projects from day one.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#00193a] mb-6">
              How to Apply
            </h2>
            <p className="text-[#404040] leading-relaxed">
              Submit your resume and cover letter to{" "}
              <a
                href="mailto:career@dreamconsultancy.org"
                className="text-[#0073bb] hover:text-[#068adc]"
              >
                career@dreamconsultancy.org
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#00193a] mb-6">
              Open Positions
            </h2>
            <div className="flex flex-col gap-4">
              {openPositions.map((pos) => (
                <Link
                  key={pos.slug}
                  href={`/careers/${pos.slug}`}
                  className="bg-white rounded-[5px] p-5 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between"
                >
                  <h3 className="text-[#00193a] font-semibold">
                    {pos.title}
                  </h3>
                  <span className="cta-button text-xs whitespace-nowrap ml-4">
                    View Details
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
