import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/content";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled ? "bg-[var(--cream)]/90 backdrop-blur border-[var(--border)]" : "bg-transparent border-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link to="/" className="group flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--navy)] font-serif text-sm text-[var(--cream)]">
            M
          </span>
          <span className="font-serif text-lg tracking-tight text-[var(--navy-deep)]">
            Miracle Awotide
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-[var(--navy-deep)] after:scale-x-100" }}
              inactiveProps={{ className: "text-[var(--charcoal)]/80 hover:text-[var(--navy-deep)]" }}
              className="link-underline text-sm font-medium"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden rounded-full border border-[var(--navy-deep)] bg-[var(--navy-deep)] px-4 py-2 text-xs font-medium uppercase tracking-widest text-[var(--cream)] transition hover:bg-[var(--gold)] hover:border-[var(--gold)] hover:text-[var(--navy-deep)] md:inline-flex"
        >
          Work with me
        </Link>

        <button
          className="md:hidden -mr-2 p-2 text-[var(--navy-deep)]"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--border)] bg-[var(--cream)] md:hidden">
          <nav className="container-x flex flex-col py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-[var(--charcoal)]"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 mb-2 rounded-full bg-[var(--navy-deep)] px-4 py-3 text-center text-xs font-medium uppercase tracking-widest text-[var(--cream)]"
            >
              Work with me
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
