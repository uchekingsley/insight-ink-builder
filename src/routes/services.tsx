import { createFileRoute } from "@tanstack/react-router";
import { services, servicesIntro } from "@/lib/content";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Miracle Awotide" },
      {
        name: "description",
        content:
          "Social media strategy, audits, content strategy, calendars, pillar development, caption and reel scripts, brand messaging, community management, and personal branding.",
      },
      { property: "og:title", content: "Services — Miracle Awotide" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  return (
    <section className="container-x py-20 md:py-28">
      <div className="max-w-3xl">
        <p className="eyebrow">Services</p>
        <h1 className="mt-4 font-serif text-4xl leading-tight text-[var(--navy-deep)] sm:text-5xl">
          What I can help with
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-[var(--charcoal)]">{servicesIntro}</p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <article
            key={s.title}
            className="group relative flex flex-col rounded-2xl border border-[var(--border)] bg-white p-6 transition hover:-translate-y-0.5 hover:border-[var(--gold)] hover:shadow-md"
          >
            <span className="font-serif text-sm text-[var(--gold)]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 font-serif text-xl text-[var(--navy-deep)]">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--charcoal)]/85">{s.description}</p>
            <div
              aria-hidden
              className="absolute inset-x-6 bottom-0 h-px scale-x-0 bg-[var(--gold)] transition duration-500 group-hover:scale-x-100"
            />
          </article>
        ))}
      </div>
    </section>
  );
}
