import { createFileRoute, Link } from "@tanstack/react-router";
import { person } from "@/lib/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Miracle Awotide" },
      {
        name: "description",
        content:
          "A Social Media Strategist with a background in History and growing expertise in Digital Marketing — bringing research and analysis to content strategy.",
      },
      { property: "og:title", content: "About — Miracle Awotide" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <section className="container-x py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="eyebrow">About</p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-[var(--navy-deep)] sm:text-5xl">
            Who I am
          </h1>
          <div className="mt-8 rounded-2xl border border-[var(--border)] bg-white p-6">
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="text-[var(--grey)]">Name</dt>
                <dd className="text-[var(--navy-deep)]">{person.name}</dd>
              </div>
              <div>
                <dt className="text-[var(--grey)]">Discipline</dt>
                <dd className="text-[var(--navy-deep)]">Social Media Strategy & Content Planning</dd>
              </div>
              <div>
                <dt className="text-[var(--grey)]">Background</dt>
                <dd className="text-[var(--navy-deep)]">History → Digital Marketing</dd>
              </div>
              <div>
                <dt className="text-[var(--grey)]">Based</dt>
                <dd className="text-[var(--navy-deep)]">{person.location}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="md:col-span-8">
          <p className="text-lg leading-relaxed text-[var(--charcoal)]">{person.aboutIntro}</p>

          <blockquote className="my-12 border-l-2 border-[var(--gold)] pl-6">
            <p className="font-serif text-2xl italic leading-snug text-[var(--navy-deep)] sm:text-3xl">
              “{person.aboutQuote}”
            </p>
          </blockquote>

          <p className="text-lg leading-relaxed text-[var(--charcoal)]">{person.aboutClosing}</p>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              to="/process"
              className="rounded-full bg-[var(--navy-deep)] px-5 py-3 text-sm font-medium text-[var(--cream)] hover:bg-[var(--navy)]"
            >
              See my process
            </Link>
            <Link
              to="/case-studies"
              className="rounded-full border border-[var(--navy-deep)] px-5 py-3 text-sm font-medium text-[var(--navy-deep)] hover:bg-[var(--navy-deep)] hover:text-[var(--cream)]"
            >
              View case studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
