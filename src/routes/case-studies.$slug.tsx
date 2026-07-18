import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { caseStudies, getCaseStudy, type CaseStudy } from "@/lib/content";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const c = getCaseStudy(params.slug);
    if (!c) throw notFound();
    return c;
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Case Study Not Found" }, { name: "robots", content: "noindex" }] };
    }
    const c = loaderData;
    return {
      meta: [
        { title: `${c.name} — Case Study | Miracle Awotide` },
        { name: "description", content: c.overview },
        { property: "og:title", content: `${c.name} — Case Study` },
        { property: "og:description", content: c.overview },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/case-studies/${c.slug}` },
        ...(c.cover
          ? ([
              { property: "og:image", content: c.cover },
              { name: "twitter:image", content: c.cover },
            ] as const)
          : []),
      ],
      links: [{ rel: "canonical", href: `/case-studies/${c.slug}` }],
    };
  },
  component: CaseStudyPage,
  notFoundComponent: () => (
    <div className="container-x py-24 text-center">
      <h1 className="font-serif text-4xl text-[var(--navy-deep)]">Case study not found</h1>
      <Link to="/case-studies" className="mt-6 inline-block link-underline text-sm">
        Back to case studies
      </Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => {
    console.error(error);
    return (
      <div className="container-x py-24 text-center">
        <p className="font-serif text-2xl text-[var(--navy-deep)]">Something went wrong loading this case study.</p>
        <button onClick={reset} className="mt-6 rounded-full bg-[var(--navy-deep)] px-4 py-2 text-xs uppercase tracking-widest text-[var(--cream)]">
          Try again
        </button>
      </div>
    );
  },
});

function CaseStudyPage() {
  const c = Route.useLoaderData() as CaseStudy;
  const others = caseStudies.filter((x) => x.slug !== c.slug).slice(0, 2);

  return (
    <article>
      {/* HEADER */}
      <header className="relative border-b border-[var(--border)] bg-[var(--navy-deep)] text-[var(--cream)]">
        <div className="container-x py-16 md:py-24">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--cream)]/70 hover:text-[var(--gold-light)]"
          >
            <ArrowLeft size={14} /> All case studies
          </Link>
          <p className="eyebrow mt-8">{c.status}</p>
          <h1 className="mt-3 font-serif text-4xl leading-[1.1] text-[var(--cream)] sm:text-5xl md:text-6xl">
            {c.name}
          </h1>
          {c.subtitle ? (
            <p className="mt-4 max-w-3xl font-serif text-xl italic text-[var(--cream)]/80 sm:text-2xl">
              {c.subtitle}
            </p>
          ) : null}
          {c.sampleNotice ? (
            <p className="mt-6 inline-block rounded-full border border-[var(--gold)]/60 bg-[var(--gold)]/10 px-4 py-2 text-xs text-[var(--gold-light)]">
              {c.sampleNotice}
            </p>
          ) : null}
        </div>
      </header>

      <div className="container-x grid gap-12 py-16 md:grid-cols-12 md:py-24">
        {/* Sidebar */}
        <aside className="md:col-span-4 md:sticky md:top-24 md:self-start">
          <div className="rounded-2xl border border-[var(--border)] bg-white p-6">
            <p className="eyebrow">Project Information</p>
            <dl className="mt-4 space-y-3 text-sm">
              {c.info.map((i) => (
                <div key={i.label} className="grid grid-cols-[100px_1fr] gap-3">
                  <dt className="text-[var(--grey)]">{i.label}</dt>
                  <dd className="text-[var(--navy-deep)]">{i.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-6 rounded-2xl border border-[var(--border)] bg-white p-6">
            <p className="eyebrow">
              {c.kind === "real" ? "Services Provided" : "Services Demonstrated"}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {c.services.map((sv) => (
                <li
                  key={sv}
                  className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--navy-deep)]"
                >
                  {sv}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Content */}
        <div className="md:col-span-8">
          {c.projectNote ? (
            <div className="mb-10 rounded-xl border border-[var(--gold)]/40 bg-[var(--gold)]/5 p-5">
              <p className="eyebrow">Project Note</p>
              <p className="mt-2 text-[15px] leading-relaxed text-[var(--charcoal)]">
                {c.projectNote}
              </p>
            </div>
          ) : null}

          <Block title="Overview">{c.overview}</Block>
          <Block title="The Challenge">{c.challenge}</Block>
          <Block title="My Solution">{c.solution}</Block>

          <div className="mt-12">
            <h2 className="font-serif text-3xl text-[var(--navy-deep)]">Key Deliverables</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {c.deliverables.map((d) => (
                <li
                  key={d}
                  className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-white p-4 text-sm text-[var(--navy-deep)]"
                >
                  <span className="mt-0.5 text-[var(--gold)]">◆</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>

          <Block title="Current Status">{c.currentStatus}</Block>
          <Block title="Lessons Learned">{c.lessons}</Block>

          {c.gallery.length > 0 ? (
            <div className="mt-16">
              <h2 className="font-serif text-3xl text-[var(--navy-deep)]">Gallery</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {c.gallery.map((g) => (
                  <figure
                    key={g.src}
                    className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white"
                  >
                    <img
                      src={g.src}
                      alt={g.alt}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </figure>
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-16 rounded-2xl border border-dashed border-[var(--border)] bg-white p-8 text-center text-sm text-[var(--grey)]">
              Gallery images for this project will be added soon.
            </div>
          )}
        </div>
      </div>

      {/* Related */}
      <section className="border-t border-[var(--border)] bg-white">
        <div className="container-x py-16">
          <p className="eyebrow">Next</p>
          <h2 className="mt-3 font-serif text-3xl text-[var(--navy-deep)]">More case studies</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {others.map((o) => (
              <Link
                key={o.slug}
                to="/case-studies/$slug"
                params={{ slug: o.slug }}
                className="group flex items-center justify-between gap-6 rounded-2xl border border-[var(--border)] p-6 transition hover:border-[var(--gold)]"
              >
                <div>
                  <span className="eyebrow">{o.status}</span>
                  <p className="mt-1 font-serif text-xl text-[var(--navy-deep)]">{o.name}</p>
                </div>
                <span className="text-[var(--navy-deep)] group-hover:text-[var(--gold)]">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-12 first:mt-0">
      <h2 className="font-serif text-3xl text-[var(--navy-deep)]">{title}</h2>
      <p className="mt-4 text-[16px] leading-relaxed text-[var(--charcoal)]">{children}</p>
    </div>
  );
}
