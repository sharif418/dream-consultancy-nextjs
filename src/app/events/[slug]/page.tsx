import { eventsData } from "@/data/siteData";
import { notFound } from "next/navigation";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export function generateStaticParams() {
  return eventsData.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = eventsData.find((e) => e.slug === slug);
  if (!event) return { title: "Not Found" };
  return { title: `Event - Dream Consultancy Limited` };
}

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = eventsData.find((e) => e.slug === slug);
  if (!event) notFound();

  return (
    <>
      <section className="w-full bg-[#00193a] py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "rgba(6,138,220,0.18)" }} />
        <div className="relative z-10 max-w-[1200px] mx-auto px-5">
          <div className="flex items-center justify-center gap-2 text-sm text-white/70 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/events" className="hover:text-white transition-colors">Events</Link>
          </div>
          <p className="text-[#068adc] font-semibold mb-2">{event.date}</p>
        </div>
      </section>
      <section className="w-full py-16 md:py-24">
        <div className="max-w-[800px] mx-auto px-5">
          <div className="flex items-start gap-4 mb-8">
            <div className="flex-shrink-0 bg-[#0073bb] text-white rounded-[5px] px-4 py-3 text-center min-w-[100px]">
              <p className="text-xs font-medium">{event.date.split(" ")[0]}</p>
              <p className="text-2xl font-bold">{event.date.split(" ")[1].replace(",", "")}</p>
              <p className="text-xs font-medium">{event.date.split(" ")[2]}</p>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#00193a] leading-snug">{event.title}</h1>
          </div>
          <div className="prose max-w-none">
            {event.description.split("\n\n").map((paragraph: string, i: number) => (
              <p key={i} className="text-[#404040] leading-relaxed mb-4">{paragraph}</p>
            ))}
          </div>
          <div className="mt-10 pt-8 border-t border-gray-200">
            <Link href="/events" className="link-arrow">Back to Events</Link>
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
