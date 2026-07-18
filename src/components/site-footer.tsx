import { Link } from "@tanstack/react-router";
import { ArrowUp, Linkedin, Mail } from "lucide-react";
import { nav, person } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-[var(--navy-deep)] text-[var(--cream)]/85">
      <div className="container-x grid gap-10 py-16 md:grid-cols-3">
        <div>
          <p className="eyebrow !text-[var(--gold-light)]">Portfolio</p>
          <p className="mt-3 font-serif text-2xl leading-tight text-[var(--cream)]">
            {person.name}
          </p>
          <p className="mt-2 text-sm text-[var(--cream)]/70">{person.title}</p>
        </div>

        <div>
          <p className="eyebrow !text-[var(--gold-light)]">Explore</p>
          <ul className="mt-4 grid grid-cols-2 gap-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-[var(--gold-light)]">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow !text-[var(--gold-light)]">Contact</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={`mailto:${person.email}`} className="inline-flex items-center gap-2 hover:text-[var(--gold-light)]">
                <Mail size={16} /> {person.email}
              </a>
            </li>
            <li>
              <a href={person.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-[var(--gold-light)]">
                <Linkedin size={16} /> LinkedIn
              </a>
            </li>
            <li className="text-[var(--cream)]/60">{person.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col-reverse items-center justify-between gap-4 py-6 text-xs text-[var(--cream)]/60 sm:flex-row">
          <p>© {new Date().getFullYear()} {person.name}. All rights reserved.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 text-[var(--cream)] hover:border-[var(--gold-light)] hover:text-[var(--gold-light)]"
            aria-label="Back to top"
          >
            <ArrowUp size={14} /> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
