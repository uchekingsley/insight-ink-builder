import { createFileRoute } from "@tanstack/react-router";
import { process as steps } from "@/lib/content";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "My Process | Miracle Awotide" },
      {
        name: "description",
        content:
          "A six-step approach from discovery to review, showing how I turn business goals into a working social media strategy and content plan.",
      },
      { property: "og:title", content: "My Process | Miracle Awotide" },
      { property: "og:url", content: "/process" },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
  component: Process,
});

function Process() {
  return (
    <section className="container-x py-20 md:py-28">
      <div className="max-w-3xl">
        <p className="eyebrow">My Process</p>
        <h1 className="mt-4 font-serif text-4xl leading-tight text-[var(--navy-deep)] sm:text-5xl">
          From strategy to shipped content
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-[var(--charcoal)]">
          Every engagement follows the same six-step arc, tuned to what the business actually needs.
        </p>
      </div>

      <ol className="relative mt-16 border-l border-[var(--border)] pl-8 md:pl-14">
        {steps.map((s) => (
          <li key={s.step} className="relative pb-12 last:pb-0">
            <span className="absolute -left-[41px] top-0 grid h-10 w-10 place-items-center rounded-full border border-[var(--gold)] bg-[var(--cream)] font-serif text-sm text-[var(--gold)] md:-left-[57px] md:h-14 md:w-14 md:text-base">
              0{s.step}
            </span>
            <h3 className="font-serif text-2xl text-[var(--navy-deep)] sm:text-3xl">{s.title}</h3>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[var(--charcoal)]/90">
              {s.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
