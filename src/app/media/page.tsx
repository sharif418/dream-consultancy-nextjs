import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import Link from "next/link";

const categories = [
  { label: "Blog", href: "/blog" },
  { label: "Economy", href: "#" },
  { label: "INSIGHTS", href: "#" },
  { label: "Job", href: "#" },
  { label: "News", href: "#" },
  { label: "Photos and Videos", href: "#" },
  { label: "Publications", href: "/publications" },
  { label: "Reports", href: "/reports" },
];

export default function MediaPage() {
  return (
    <>
      <PageHero title="Media" />
      <section className="w-full py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex gap-8">
            <div className="flex-1">
              <p className="text-[#404040] py-12 text-center">
                No media posts currently available.
              </p>
            </div>
            <aside className="hidden lg:block w-[250px] flex-shrink-0">
              <h3 className="text-lg font-bold text-[#00193a] mb-4">
                Categories
              </h3>
              <ul className="flex flex-col gap-2">
                {categories.map((cat) => (
                  <li key={cat.label}>
                    <Link
                      href={cat.href}
                      className="text-sm text-[#0073bb] hover:text-[#068adc] transition-colors"
                    >
                      {cat.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
