import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/content";

export const Route = createFileRoute("/case-studies/")({
  head: () => ({
    meta: [
      { title: "Case Studies | Miracle Awotide" },
      {
        name: "description",
        content:
          "Client work and sample strategy projects: CEID Hub, Everest Studios, BridgePoint Cultural Council, and Oge Skincare.",
      },
      { property: "og:title", content: "Case Studies | Miracle Awotide" },
      { property: "og:url", content: "/case-studies" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: CaseStudyIndex,
});

function CaseStudyIndex() {
  const real = caseStudies.filter((c) => c.kind === "real");
  const sample = caseStudies.filter((c) => c.kind === "sample");

  return (
    <section className="container-x py-20 md:py-28">
      <div className="max-w-3xl">
        <p className="eyebrow">Case Studies</p>
        <h1 className="mt-4 font-serif text-4xl leading-tight text-[var(--navy-deep)] sm:text-5xl">
          Client work and strategy projects
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-[var(--charcoal)]">
          Each project follows the same structure: overview, challenge, solution, deliverables,
          status, lessons. Sample projects are clearly labelled and used to demonstrate strategic
          thinking on scenarios I've designed myself.
        </p>
      </div>

      <Group title="Client & Organisational Projects" items={real} />
      <Group title="Sample Projects" items={sample} />
    </section>
  );
}

function Group({ title, items }: { title: string; items: typeof caseStudies }) {
  return (
    <div className="mt-16">
      <h2 className="font-serif text-2xl text-[var(--navy-deep)]">{title}</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {items.map((c) => (
          <Link
            key={c.slug}
            to="/case-studies/$slug"
            params={{ slug: c.slug }}
            className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-white transition hover:border-[var(--gold)] hover:shadow-lg"
          >
            {c.cover ? (
              <div className="aspect-[16/10] overflow-hidden bg-[var(--muted)]">
                <img
                  src={c.cover}
                  alt={c.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
              </div>
            ) : (
              <div
                className="aspect-[16/10] bg-gradient-to-br from-[var(--navy-deep)] via-[var(--navy)] to-[var(--navy-deep)] p-8 text-[var(--gold-light)]"
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
    </div>
  );
}
