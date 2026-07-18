import { Document, Page, Text, View, StyleSheet, pdf, Font, Link } from "@react-pdf/renderer";
import { person, services, skillGroups, toolGroups, caseStudies, featuredForPdf, process as procSteps } from "./content";

// Register fonts by loading @fontsource TTF assets via URL imports at build time.
// Vite serves the ttf files; @react-pdf accepts absolute URLs.
import interRegular from "@fontsource/inter/files/inter-latin-400-normal.woff?url";
import interMedium from "@fontsource/inter/files/inter-latin-500-normal.woff?url";
import interBold from "@fontsource/inter/files/inter-latin-700-normal.woff?url";
import playfairRegular from "@fontsource/playfair-display/files/playfair-display-latin-400-normal.woff?url";
import playfairBold from "@fontsource/playfair-display/files/playfair-display-latin-700-normal.woff?url";
import playfairItalic from "@fontsource/playfair-display/files/playfair-display-latin-400-italic.woff?url";

let registered = false;
function ensureFonts() {
  if (registered) return;
  // @react-pdf supports ttf/otf/woff via URL.
  Font.register({
    family: "Inter",
    fonts: [
      { src: interRegular, fontWeight: 400 },
      { src: interMedium, fontWeight: 500 },
      { src: interBold, fontWeight: 700 },
    ],
  });
  Font.register({
    family: "Playfair",
    fonts: [
      { src: playfairRegular, fontWeight: 400 },
      { src: playfairBold, fontWeight: 700 },
      { src: playfairItalic, fontWeight: 400, fontStyle: "italic" },
    ],
  });
  Font.registerHyphenationCallback((word) => [word]);
  registered = true;
}

// Colors
const NAVY = "#1B2A4A";
const NAVY_DEEP = "#101B33";
const GOLD = "#C9A227";
const GOLD_LIGHT = "#E4C660";
const CREAM = "#FAF6EF";
const CHARCOAL = "#33363D";
const GREY = "#6B6F76";

const s = StyleSheet.create({
  page: {
    paddingTop: 56,
    paddingBottom: 64,
    paddingHorizontal: 56,
    fontFamily: "Inter",
    fontSize: 10.5,
    color: CHARCOAL,
    backgroundColor: CREAM,
    lineHeight: 1.55,
  },
  cover: {
    padding: 0,
    fontFamily: "Inter",
    color: CREAM,
    backgroundColor: NAVY_DEEP,
  },
  coverInner: { padding: 56, height: "100%", flexDirection: "column", justifyContent: "space-between" },
  goldRule: { height: 2, width: 60, backgroundColor: GOLD, marginBottom: 24 },
  eyebrow: { fontSize: 9, letterSpacing: 2.5, textTransform: "uppercase", color: GOLD_LIGHT, fontWeight: 500 },
  coverName: { fontFamily: "Playfair", fontSize: 44, marginTop: 18, marginBottom: 12, color: CREAM, lineHeight: 1.1 },
  coverTitle: { fontSize: 13, color: CREAM, opacity: 0.85, marginBottom: 24 },
  coverBlurb: { fontSize: 11, color: CREAM, opacity: 0.75, maxWidth: 380, lineHeight: 1.55 },
  coverFooter: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", borderTopWidth: 1, borderTopColor: "#ffffff22", paddingTop: 16 },
  coverMeta: { fontSize: 9, color: CREAM, opacity: 0.7 },

  h1: { fontFamily: "Playfair", fontSize: 24, color: NAVY_DEEP, marginBottom: 4 },
  h2: { fontFamily: "Playfair", fontSize: 16, color: NAVY_DEEP, marginTop: 18, marginBottom: 8 },
  h3: { fontFamily: "Inter", fontSize: 10, textTransform: "uppercase", letterSpacing: 1.5, color: GOLD, marginBottom: 6, fontWeight: 500 },
  para: { marginBottom: 8, color: CHARCOAL },
  small: { fontSize: 9, color: GREY },

  sectionHeader: { borderBottomWidth: 1, borderBottomColor: "#0000001a", paddingBottom: 8, marginBottom: 14, flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" },
  pageEyebrow: { fontSize: 8, letterSpacing: 2, textTransform: "uppercase", color: GOLD, fontWeight: 500 },

  twoCol: { flexDirection: "row", gap: 20 },
  col: { flex: 1 },

  serviceItem: { marginBottom: 8 },
  serviceTitle: { fontSize: 11, fontWeight: 700, color: NAVY_DEEP, marginBottom: 2 },
  serviceDesc: { fontSize: 9.5, color: CHARCOAL, lineHeight: 1.5 },

  chip: { fontSize: 9, color: NAVY_DEEP, backgroundColor: "#ffffff", borderWidth: 1, borderColor: "#0000001a", paddingHorizontal: 6, paddingVertical: 3, borderRadius: 3, marginRight: 4, marginBottom: 4 },
  chipRow: { flexDirection: "row", flexWrap: "wrap", marginBottom: 8 },

  caseHeader: { marginBottom: 10 },
  caseStatus: { fontSize: 8, letterSpacing: 1.5, textTransform: "uppercase", color: GOLD, fontWeight: 500 },
  caseName: { fontFamily: "Playfair", fontSize: 22, color: NAVY_DEEP, marginTop: 2 },
  caseSubtitle: { fontSize: 10, color: GREY, marginTop: 2 },
  metaRow: { flexDirection: "row", flexWrap: "wrap", marginTop: 8, marginBottom: 10, gap: 12 },
  metaCell: { fontSize: 8.5, color: CHARCOAL, minWidth: 140, marginBottom: 4 },
  metaLabel: { color: GREY, marginRight: 4 },
  block: { marginBottom: 8 },
  blockLabel: { fontSize: 9, textTransform: "uppercase", letterSpacing: 1.5, color: GOLD, fontWeight: 500, marginBottom: 3 },
  bullet: { flexDirection: "row", marginBottom: 3 },
  bulletDot: { color: GOLD, marginRight: 6 },
  bulletText: { flex: 1, fontSize: 10, color: CHARCOAL },

  pageFooter: { position: "absolute", left: 56, right: 56, bottom: 28, flexDirection: "row", justifyContent: "space-between", fontSize: 8, color: GREY, borderTopWidth: 1, borderTopColor: "#0000001a", paddingTop: 8 },
});

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <View style={s.sectionHeader}>
      <Text style={s.h1}>{title}</Text>
      <Text style={s.pageEyebrow}>{eyebrow}</Text>
    </View>
  );
}

function PageChrome({ pageLabel }: { pageLabel: string }) {
  return (
    <View style={s.pageFooter} fixed>
      <Text>{person.name} · Portfolio</Text>
      <Text>{pageLabel}</Text>
    </View>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <View>
      {items.map((it) => (
        <View key={it} style={s.bullet}>
          <Text style={s.bulletDot}>◆</Text>
          <Text style={s.bulletText}>{it}</Text>
        </View>
      ))}
    </View>
  );
}

function CaseStudyPages({ slug }: { slug: string }) {
  const c = caseStudies.find((x) => x.slug === slug);
  if (!c) return null;
  return (
    <Page size="A4" style={s.page}>
      <View style={s.sectionHeader}>
        <Text style={s.pageEyebrow}>Case Study</Text>
        <Text style={s.pageEyebrow}>{c.status}</Text>
      </View>

      <View style={s.caseHeader}>
        <Text style={s.caseName}>{c.name}</Text>
        {c.subtitle ? <Text style={s.caseSubtitle}>{c.subtitle}</Text> : null}
      </View>

      <View style={s.metaRow}>
        {c.info.map((i) => (
          <Text key={i.label} style={s.metaCell}>
            <Text style={s.metaLabel}>{i.label}: </Text>
            {i.value}
          </Text>
        ))}
      </View>

      <View style={s.chipRow}>
        {c.services.map((sv) => (
          <Text key={sv} style={s.chip}>{sv}</Text>
        ))}
      </View>

      {c.sampleNotice ? (
        <View style={{ padding: 8, borderLeftWidth: 2, borderLeftColor: GOLD, backgroundColor: "#ffffff", marginBottom: 10 }}>
          <Text style={{ fontSize: 9, fontStyle: "italic", color: CHARCOAL }}>{c.sampleNotice}</Text>
        </View>
      ) : null}

      <View style={s.block}>
        <Text style={s.blockLabel}>The Challenge</Text>
        <Text style={s.para}>{c.challenge}</Text>
      </View>
      <View style={s.block}>
        <Text style={s.blockLabel}>My Solution</Text>
        <Text style={s.para}>{c.solution}</Text>
      </View>
      <View style={s.block}>
        <Text style={s.blockLabel}>Key Deliverables</Text>
        <Bullets items={c.deliverables} />
      </View>
      <View style={s.block}>
        <Text style={s.blockLabel}>Current Status</Text>
        <Text style={s.para}>{c.currentStatus}</Text>
      </View>

      <PageChrome pageLabel={c.name} />
    </Page>
  );
}

function PortfolioDoc() {
  return (
    <Document title={`${person.name} — Portfolio`} author={person.name}>
      {/* COVER */}
      <Page size="A4" style={s.cover}>
        <View style={s.coverInner}>
          <View>
            <View style={s.goldRule} />
            <Text style={s.eyebrow}>Portfolio · 2026</Text>
            <Text style={s.coverName}>{person.name}</Text>
            <Text style={s.coverTitle}>{person.title}</Text>
            <Text style={s.coverBlurb}>{person.headline}</Text>
          </View>
          <View style={s.coverFooter}>
            <View>
              <Text style={s.coverMeta}>{person.email}</Text>
              <Text style={s.coverMeta}>{person.location}</Text>
            </View>
            <Text style={s.coverMeta}>LinkedIn: miracle-awotide-079232318</Text>
          </View>
        </View>
      </Page>

      {/* ABOUT */}
      <Page size="A4" style={s.page}>
        <SectionHeader eyebrow="01 · About" title="About Me" />
        <Text style={s.para}>{person.aboutIntro}</Text>
        <View style={{ padding: 12, borderLeftWidth: 2, borderLeftColor: GOLD, marginVertical: 10, backgroundColor: "#ffffff" }}>
          <Text style={{ fontFamily: "Playfair", fontStyle: "italic", fontSize: 13, color: NAVY_DEEP }}>
            “{person.aboutQuote}”
          </Text>
        </View>
        <Text style={s.para}>{person.aboutClosing}</Text>

        <Text style={s.h2}>Process</Text>
        {procSteps.map((p) => (
          <View key={p.step} style={{ flexDirection: "row", marginBottom: 6 }}>
            <Text style={{ fontFamily: "Playfair", fontSize: 12, color: GOLD, width: 22 }}>0{p.step}</Text>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 10.5, fontWeight: 700, color: NAVY_DEEP }}>{p.title}</Text>
              <Text style={{ fontSize: 9.5, color: CHARCOAL }}>{p.description}</Text>
            </View>
          </View>
        ))}

        <PageChrome pageLabel="About" />
      </Page>

      {/* SERVICES */}
      <Page size="A4" style={s.page}>
        <SectionHeader eyebrow="02 · Services" title="Services" />
        <Text style={[s.para, { marginBottom: 12 }]}>
          Every business has unique goals and challenges. My services help businesses develop intentional social media strategies, create consistent content, and communicate their value effectively across digital platforms.
        </Text>
        <View style={s.twoCol}>
          <View style={s.col}>
            {services.slice(0, Math.ceil(services.length / 2)).map((sv) => (
              <View key={sv.title} style={s.serviceItem}>
                <Text style={s.serviceTitle}>{sv.title}</Text>
                <Text style={s.serviceDesc}>{sv.description}</Text>
              </View>
            ))}
          </View>
          <View style={s.col}>
            {services.slice(Math.ceil(services.length / 2)).map((sv) => (
              <View key={sv.title} style={s.serviceItem}>
                <Text style={s.serviceTitle}>{sv.title}</Text>
                <Text style={s.serviceDesc}>{sv.description}</Text>
              </View>
            ))}
          </View>
        </View>
        <PageChrome pageLabel="Services" />
      </Page>

      {/* SKILLS & TOOLS */}
      <Page size="A4" style={s.page}>
        <SectionHeader eyebrow="03 · Skills & Tools" title="Skills & Tools" />
        <View style={s.twoCol}>
          <View style={s.col}>
            <Text style={s.h2}>Skills</Text>
            {skillGroups.map((g) => (
              <View key={g.group} style={{ marginBottom: 10 }}>
                <Text style={s.h3}>{g.group}</Text>
                <Text style={{ fontSize: 10, color: CHARCOAL }}>{g.items.join("  ·  ")}</Text>
              </View>
            ))}
          </View>
          <View style={s.col}>
            <Text style={s.h2}>Tools</Text>
            {toolGroups.map((g) => (
              <View key={g.group} style={{ marginBottom: 10 }}>
                <Text style={s.h3}>{g.group}</Text>
                <Text style={{ fontSize: 10, color: CHARCOAL }}>{g.items.join("  ·  ")}</Text>
              </View>
            ))}
          </View>
        </View>
        <PageChrome pageLabel="Skills & Tools" />
      </Page>

      {/* CASE STUDIES */}
      {featuredForPdf.map((slug) => (
        <CaseStudyPages key={slug} slug={slug} />
      ))}

      {/* CONTACT */}
      <Page size="A4" style={s.page}>
        <SectionHeader eyebrow="Contact" title="Let's talk" />
        <Text style={[s.para, { marginBottom: 18 }]}>
          I'm currently taking on new engagements with small businesses, startups, and growing brands who want a research driven approach to their social media.
        </Text>
        <View style={{ padding: 20, backgroundColor: "#ffffff", borderLeftWidth: 2, borderLeftColor: GOLD }}>
          <Text style={s.h3}>Name</Text>
          <Text style={{ fontSize: 12, color: NAVY_DEEP, marginBottom: 10 }}>{person.name}</Text>
          <Text style={s.h3}>Email</Text>
          <Link src={`mailto:${person.email}`} style={{ fontSize: 12, color: NAVY, marginBottom: 10 }}>{person.email}</Link>
          <Text style={s.h3}>LinkedIn</Text>
          <Link src={person.linkedin} style={{ fontSize: 11, color: NAVY, marginBottom: 10 }}>{person.linkedin}</Link>
          <Text style={s.h3}>Location</Text>
          <Text style={{ fontSize: 12, color: NAVY_DEEP }}>{person.location}</Text>
        </View>
        <PageChrome pageLabel="Contact" />
      </Page>
    </Document>
  );
}

export async function generatePortfolioPdf(): Promise<Blob> {
  ensureFonts();
  return await pdf(<PortfolioDoc />).toBlob();
}
