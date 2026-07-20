import { createFileRoute } from "@tanstack/react-router";
import { skillGroups, toolGroups } from "@/lib/content";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills & Tools | Miracle Awotide" },
      {
        name: "description",
        content:
          "Strategy, content, marketing, and communication skills, plus the tools I use day to day for research, planning, design, and production.",
      },
      { property: "og:title", content: "Skills & Tools | Miracle Awotide" },
      { property: "og:url", content: "/skills" },
    ],
    links: [{ rel: "canonical", href: "/skills" }],
  }),
  component: Skills,
});

function Skills() {
  return (
    <section className="container-x py-20 md:py-28">
      <div className="max-w-3xl">
        <p className="eyebrow">Skills & Tools</p>
        <h1 className="mt-4 font-serif text-4xl leading-tight text-[var(--navy-deep)] sm:text-5xl">
          Built on solid research, using the everyday tools your team already works in
        </h1>
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-2xl text-[var(--navy-deep)]">Skills</h2>
          <div className="mt-6 space-y-6">
            {skillGroups.map((g) => (
              <div key={g.group} className="rounded-2xl border border-[var(--border)] bg-white p-6">
                <p className="eyebrow">{g.group}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="rounded-full border border-[var(--border)] bg-[var(--cream)] px-3 py-1 text-xs text-[var(--navy-deep)]"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-[var(--navy-deep)]">Tools</h2>
          <div className="mt-6 space-y-6">
            {toolGroups.map((g) => (
              <div key={g.group} className="rounded-2xl border border-[var(--border)] bg-white p-6">
                <p className="eyebrow">{g.group}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="rounded-full border border-[var(--border)] bg-[var(--cream)] px-3 py-1 text-xs text-[var(--navy-deep)]"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
