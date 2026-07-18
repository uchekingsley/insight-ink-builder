import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Linkedin, Mail, MapPin, Send } from "lucide-react";
import { z } from "zod";
import { person } from "@/lib/content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Miracle Awotide" },
      {
        name: "description",
        content: "Get in touch to discuss social media strategy, content planning, or a case study.",
      },
      { property: "og:title", content: "Contact — Miracle Awotide" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email.").max(255),
  subject: z.string().trim().min(1, "Please add a subject.").max(150),
  message: z.string().trim().min(1, "Please write a short message.").max(2000),
});

function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      subject: String(fd.get("subject") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const k = String(issue.path[0]);
        if (!errs[k]) errs[k] = issue.message;
      }
      setErrors(errs);
      setStatus("error");
      return;
    }
    setErrors({});
    const body = encodeURIComponent(
      `Hi Miracle,\n\n${parsed.data.message}\n\n— ${parsed.data.name}\n${parsed.data.email}`,
    );
    const subject = encodeURIComponent(parsed.data.subject);
    window.location.href = `mailto:${person.email}?subject=${subject}&body=${body}`;
    setStatus("success");
    e.currentTarget.reset();
  }

  return (
    <section className="container-x py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-[var(--navy-deep)] sm:text-5xl">
            Let's build something intentional
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[var(--charcoal)]">
            I'm currently taking on new engagements with small businesses, startups, and growing
            brands. Share a bit about your project and I'll be in touch.
          </p>

          <ul className="mt-10 space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--navy-deep)] text-[var(--cream)]">
                <Mail size={16} />
              </span>
              <a href={`mailto:${person.email}`} className="link-underline text-[var(--navy-deep)]">
                {person.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--navy-deep)] text-[var(--cream)]">
                <Linkedin size={16} />
              </span>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noreferrer"
                className="link-underline text-[var(--navy-deep)]"
              >
                LinkedIn
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--navy-deep)] text-[var(--cream)]">
                <MapPin size={16} />
              </span>
              <span className="text-[var(--navy-deep)]">{person.location}</span>
            </li>
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="md:col-span-7 rounded-2xl border border-[var(--border)] bg-white p-6 sm:p-8"
          noValidate
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" name="name" error={errors.name} />
            <Field label="Email" name="email" type="email" error={errors.email} />
          </div>
          <div className="mt-5">
            <Field label="Subject" name="subject" error={errors.subject} />
          </div>
          <div className="mt-5">
            <label className="block text-xs font-medium uppercase tracking-widest text-[var(--grey)]">
              Message
            </label>
            <textarea
              name="message"
              rows={6}
              maxLength={2000}
              className="mt-2 w-full rounded-lg border border-[var(--border)] bg-[var(--cream)] px-3 py-2 text-sm text-[var(--navy-deep)] outline-none focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/30"
            />
            {errors.message ? (
              <p className="mt-1 text-xs text-red-600">{errors.message}</p>
            ) : null}
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--navy-deep)] px-5 py-3 text-sm font-medium text-[var(--cream)] hover:bg-[var(--navy)]"
          >
            <Send size={16} /> Send message
          </button>

          {status === "success" ? (
            <p className="mt-4 text-sm text-[var(--navy-deep)]">
              Opening your email client with the message ready to send…
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-medium uppercase tracking-widest text-[var(--grey)]">
        {label}
      </label>
      <input
        type={type}
        name={name}
        maxLength={255}
        className="mt-2 w-full rounded-lg border border-[var(--border)] bg-[var(--cream)] px-3 py-2 text-sm text-[var(--navy-deep)] outline-none focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/30"
      />
      {error ? <p className="mt-1 text-xs text-red-600">{error}</p> : null}
    </div>
  );
}
