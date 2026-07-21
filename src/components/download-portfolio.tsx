import { useState } from "react";
import { Download, Loader2 } from "lucide-react";

type Props = {
  className?: string;
  label?: string;
  variant?: "primary" | "ghost";
};

export function DownloadPortfolio({ className = "", label = "Download Portfolio (PDF)", variant = "primary" }: Props) {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    try {
      const { generatePortfolioPdf } = await import("@/lib/pdf-portfolio");
      const blob = await generatePortfolioPdf();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Miracle_Awotide_Marketing_Portfolio.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error(e);
      alert("Sorry, the PDF could not be generated. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const base =
    variant === "primary"
      ? "bg-[var(--gold)] text-[var(--navy-deep)] hover:bg-[var(--gold-light)]"
      : "bg-transparent text-[var(--cream)] border border-[var(--cream)]/40 hover:border-[var(--gold-light)] hover:text-[var(--gold-light)]";

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-wide transition disabled:opacity-70 ${base} ${className}`}
    >
      {loading ? <Loader2 className="animate-spin" size={16} /> : <Download size={16} />}
      {loading ? "Preparing PDF…" : label}
    </button>
  );
}
