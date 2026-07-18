import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { person, caseStudies } from "@/lib/content";
import { DownloadPortfolio } from "@/components/download-portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Miracle Awotide — Social Media Strategist & Content Planner" },
      { property: "og:title", content: "Miracle Awotide — Social Media Strategist & Content Planner" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const featured = caseStudies.filter((c) => ["ceid-hub", "everest-studios"].includes(c.slug));

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[var(--cream)]">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(closest-side, var(--gold-light), transparent)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -left-40 h-[520px] w-[520px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(closest-side, var(--navy), transparent)" }}
        />
        <div className="container-x relative grid gap-12 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-8">
            <p className="eyebrow">Portfolio · Lagos, Nigeria</p>
            <h1 className="mt-5 font-serif text-4xl leading-[1.05] text-[var(--navy-deep)] sm:text-5xl md:text-6xl">
              {person.name.split(" ").slice(0, 2).join(" ")}{" "}
              <span className="italic text-[var(--gold)]">{person.name.split(" ").slice(2).join(" ")}</span>
            </h1>
            <p className="mt-5 max-w-2xl font-sans text-sm font-medium uppercase tracking-[0.22em] text-[var(--charcoal)]/70">
              {person.title}
            </p>
            <p className="mt-8 max-w-2xl font-serif text-xl italic leading-relaxed text-[var(--navy-deep)] sm:text-2xl">
              {person.headline}
            </p>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-[var(--charcoal)]">
              {person.intro}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--navy-deep)] px-5 py-3 text-sm font-medium text-[var(--cream)] transition hover:bg-[var(--navy)]"
              >
                View Case Studies <ArrowRight size={16} />
              </Link>
              <DownloadPortfolio />
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--navy-deep)] px-5 py-3 text-sm font-medium text-[var(--navy-deep)] transition hover:bg-[var(--navy-deep)] hover:text-[var(--cream)]"
              >
                Contact Me
              </Link>
            </div>
          </div>

          <aside className="md:col-span-4">
            <div className="rounded-2xl border border-[var(--border)] bg-white/60 p-6 backdrop-blur">
              <p className="eyebrow">At a glance</p>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="text-[var(--grey)]">Focus</dt>
                  <dd className="text-[var(--navy-deep)]">Social media strategy & content planning</dd>
                </div>
                <div>
                  <dt className="text-[var(--grey)]">Approach</dt>
                  <dd className="text-[var(--navy-deep)]">Research-driven, business-first</dd>
                </div>
                <div>
                  <dt className="text-[var(--grey)]">Best fit</dt>
                  <dd className="text-[var(--navy-deep)]">Small businesses, startups, growing brands</dd>
                </div>
                <div>
                  <dt className="text-[var(--grey)]">Based in</dt>
                  <dd className="text-[var(--navy-deep)]">Lagos, Nigeria — working with clients anywhere</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </section>

      {/* FEATURED CASE STUDIES */}
      <section className="container-x py-20 md:py-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Featured Work</p>
            <h2 className="mt-3 font-serif text-3xl text-[var(--navy-deep)] sm:text-4xl">
              Selected case studies
            </h2>
          </div>
          <Link
            to="/case-studies"
            className="hidden text-sm text-[var(--navy-deep)] link-underline sm:inline"
          >
            View all case studies →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {featured.map((c) => (
            <Link
              key={c.slug}
              to="/case-studies/$slug"
              params={{ slug: c.slug }}
              className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-white transition hover:border-[var(--gold)] hover:shadow-lg"
            >
              {c.cover ? (
                <div className="aspect-[4/3] overflow-hidden bg-[var(--muted)]">
                  <img
                    src={c.cover}
                    alt={c.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              ) : (
                <div
                  className="aspect-[4/3] flex items-center justify-center bg-gradient-to-br from-[var(--navy-deep)] to-[var(--navy)] text-[var(--gold-light)]"
                  aria-hidden
                >
                  <span className="font-serif text-3xl">{c.name}</span>
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="eyebrow">{c.status}</span>
                  <ArrowUpRight
                    size={18}
                    className="text-[var(--navy-deep)] transition group-hover:text-[var(--gold)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
                <h3 className="mt-2 font-serif text-2xl text-[var(--navy-deep)]">{c.name}</h3>
                {c.subtitle ? (
                  <p className="mt-1 text-sm text-[var(--grey)]">{c.subtitle}</p>
                ) : (
                  <p className="mt-1 text-sm text-[var(--grey)]">
                    {c.info.find((i) => i.label === "Industry")?.value}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <Link to="/case-studies" className="text-sm text-[var(--navy-deep)] link-underline">
            View all case studies →
          </Link>
        </div>
      </section>
    </>
  );
}
