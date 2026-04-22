import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/siteData";

export default function BlogPage() {
  return (
    <>
      <PageHero title="Blog" />
      <section className="w-full py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-[5px] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-[220px] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex gap-2 mb-2">
                    {post.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold uppercase tracking-wider"
                        style={{ fontFamily: "var(--font-lora)", color: "#e27733" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-[#00193a] font-semibold text-base leading-snug mb-2">
                    {post.title}
                  </h3>
                  <p className="text-[#404040] text-sm line-clamp-2">{post.excerpt}</p>
                  <p className="text-gray-400 text-xs mt-2">{post.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
