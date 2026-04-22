import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";

const events = [
  {
    date: "27 Nov, 2024",
    title:
      "DM WATCH LIMITED successfully conducted a presentation to share its research findings on the 'Study on Enterprise Management, Business Environment, Employment Creation, Growth of the Enterprise and Cost-benefit Trend Over the Period of 05 (five) years.' — Commissioned by Palli Karma-Sahayak Foundation (PKSF)",
  },
  {
    date: "1 Jan, 2025",
    title:
      "Department of Environmental Science at Stamford University Bangladesh has signed a Memorandum of Understanding (MoU) with the Centre for DMERT and DM WATCH LIMITED — Held at Stamford University Bangladesh's conference room on July 15",
  },
];

export default function EventsPage() {
  return (
    <>
      <PageHero title="Events" />
      <section className="w-full py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-2xl font-bold text-[#00193a] mb-8">Events</h2>
          <div className="flex flex-col gap-6">
            {events.map((event, i) => (
              <div
                key={i}
                className="bg-white rounded-[5px] p-6 shadow-sm hover:shadow-md transition-shadow flex gap-6"
              >
                <div className="flex-shrink-0 bg-[#0073bb] text-white rounded-[5px] px-4 py-3 text-center min-w-[100px]">
                  <p className="text-xs font-medium">{event.date.split(" ")[0]}</p>
                  <p className="text-2xl font-bold">
                    {event.date.split(" ")[1].replace(",", "")}
                  </p>
                  <p className="text-xs font-medium">
                    {event.date.split(" ")[2]}
                  </p>
                </div>
                <div>
                  <p className="text-[#00193a] font-semibold leading-snug">
                    {event.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
