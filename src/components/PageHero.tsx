import Link from "next/link";

export default function PageHero({ title }: { title: string }) {
  return (
    <section className="w-full bg-[#00193a] py-20 text-center relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "rgba(6,138,220,0.18)" }}
      />
      <div className="relative z-10 max-w-[1200px] mx-auto px-5">
        <h1 className="text-white text-3xl md:text-4xl font-bold">{title}</h1>
        <div className="flex items-center justify-center gap-2 mt-4 text-sm text-white/70">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-white">{title}</span>
        </div>
      </div>
    </section>
  );
}
