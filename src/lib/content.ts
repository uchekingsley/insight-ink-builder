// Single source of truth for both the website and the generated PDF portfolio.

type AssetJson = { url: string };
const asset = (v: unknown) => v as AssetJson;

import _everestCover from "@/assets/case-studies/everest-01-cover.jpg.asset.json";
import _everestStrategy from "@/assets/case-studies/everest-02-content-strategy.jpg.asset.json";
import _bpCover from "@/assets/case-studies/bridgepoint-01-cover.jpg.asset.json";
import _bpPersona from "@/assets/case-studies/bridgepoint-02-persona.jpg.asset.json";
import _bpApproach from "@/assets/case-studies/bridgepoint-03-content-approach.jpg.asset.json";
import _bpCalendar from "@/assets/case-studies/bridgepoint-04-content-calendar.jpg.asset.json";
import _ogeCover from "@/assets/case-studies/oge-skincare-01-cover.jpg.asset.json";
import _ogeAudit from "@/assets/case-studies/oge-skincare-02-platform-audit.jpg.asset.json";
import _ogeBench from "@/assets/case-studies/oge-skincare-03-competitor-benchmark.jpg.asset.json";
import _ogeAction from "@/assets/case-studies/oge-skincare-04-action-plan.jpg.asset.json";

const everestCover = asset(_everestCover);
const everestStrategy = asset(_everestStrategy);
const everestCover = asset(_everestCover);
const everestStrategy = asset(_everestStrategy);
const bpCover = asset(_bpCover);
const bpPersona = asset(_bpPersona);
const bpApproach = asset(_bpApproach);
const bpCalendar = asset(_bpCalendar);
const ogeCover = asset(_ogeCover);
const ogeAudit = asset(_ogeAudit);
const ogeBench = asset(_ogeBench);
const ogeAction = asset(_ogeAction);


export const person = {
  name: "Miracle Oluwaferanmi Awotide",
  title: "Social Media Strategist | Content Planner | Digital Marketer",
  email: "feranmimiracle2020@gmail.com",
  linkedin: "https://www.linkedin.com/in/miracle-awotide-079232318",
  location: "Lagos, Nigeria",
  headline:
    "Helping businesses build intentional social media strategies that attract the right audience, strengthen their online presence, and support sustainable business growth.",
  intro:
    "I help businesses move beyond random posting by creating research driven social media strategies, content plans, and messaging that align with their goals. I particularly enjoy working with small businesses and growing brands while building strategies that serve organisations of different sizes.",
  aboutIntro:
    "I'm a Social Media Strategist with a background in History and growing expertise in Digital Marketing. The research, analysis, and communication skills I built through academic training now shape how I approach social media strategy and content planning, starting from the business, not the feed.",
  aboutQuote:
    "I believe effective social media starts with understanding the business before creating the content.",
  aboutClosing:
    "I work with businesses to communicate their value clearly, connect with the right audience, and build a consistent online presence through intentional strategy rather than simply creating more content.",
};

export type Nav = { label: string; to: string };
export const nav: Nav[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Process", to: "/process" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Skills & Tools", to: "/skills" },
  { label: "Contact", to: "/contact" },
];

export const servicesIntro =
  "Every business has unique goals and challenges. My services are designed to help businesses develop intentional social media strategies, create consistent content, and communicate their value effectively across digital platforms. I particularly enjoy working with small businesses, startups, and growing brands.";

export const services: { title: string; description: string }[] = [
  { title: "Social Media Strategy", description: "A tailored roadmap that aligns your social channels with real business goals, audience insight, and a clear point of view." },
  { title: "Social Media Audit", description: "A structured review of your current presence, content, and engagement, with prioritised recommendations you can act on." },
  { title: "Content Strategy", description: "Content pillars, brand voice, and channel priorities that turn scattered posting into a recognisable, repeatable presence." },
  { title: "Content Calendar Development", description: "Monthly calendars that map posts, formats, and campaigns to your goals, so you're no longer posting reactively week to week." },
  { title: "Content Planning", description: "Themes, formats, and post concepts planned in advance so your team can execute confidently." },
  { title: "Content Pillar Development", description: "A defined set of recurring themes and series that build recognition and repeat viewership." },
  { title: "Caption Writing", description: "Captions that carry your voice and move people from scrolling to taking action." },
  { title: "Reel Script Writing", description: "Short-form scripts built for retention, message clarity, and platform-native pacing." },
  { title: "Brand Messaging", description: "Positioning and messaging frameworks that make it obvious who you're for and why you're worth choosing." },
  { title: "Community Management", description: "Response guidelines and engagement approaches that turn followers into an actual community." },
  { title: "Personal Branding", description: "Positioning and content direction for founders and professionals building visibility online." },
];

export const process: { step: number; title: string; description: string }[] = [
  { step: 1, title: "Discovery", description: "Understand the business, goals, audience, and current social media presence." },
  { step: 2, title: "Research & Audit", description: "Conduct audience research, competitor analysis, and a social media audit." },
  { step: 3, title: "Strategy Development", description: "Develop content pillars, messaging, and posting strategy." },
  { step: 4, title: "Content Planning", description: "Create monthly content calendars and campaign ideas." },
  { step: 5, title: "Content Creation", description: "Develop captions, scripts, creative direction, and content concepts." },
  { step: 6, title: "Review & Improvement", description: "Evaluate performance and recommend future improvements." },
];

export const skillGroups: { group: string; items: string[] }[] = [
  { group: "Strategy", items: ["Social Media Strategy", "Content Strategy", "Brand Positioning", "Audience Research", "Competitor Research"] },
  { group: "Content", items: ["Content Planning", "Content Calendar Development", "Caption Writing", "Reel Script Writing", "Copywriting", "Storytelling"] },
  { group: "Marketing", items: ["Digital Marketing", "Content Marketing", "Campaign Planning"] },
  { group: "Communication", items: ["Community Management", "Brand Communication", "Research", "Organisation", "Time Management"] },
];

export const toolGroups: { group: string; items: string[] }[] = [
  { group: "Design", items: ["Canva"] },
  { group: "Social Media", items: ["Meta Business Suite"] },
  { group: "Productivity", items: ["Google Docs", "Microsoft Word", "Microsoft PowerPoint", "Microsoft Excel"] },
  { group: "Video Editing", items: ["CapCut"] },
];

export type CaseStudy = {
  slug: string;
  name: string;
  subtitle?: string;
  status: "Completed" | "Ongoing" | "Sample Project";
  kind: "real" | "sample";
  info: { label: string; value: string }[];
  services: string[]; // Services Provided / Demonstrated
  projectNote?: string;
  sampleNotice?: string;
  overview: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  currentStatus: string;
  lessons: string;
  gallery: { src: string; alt: string }[];
  cover: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ceid-hub",
    name: "CEID Hub",
    status: "Completed",
    kind: "real",
    info: [
      { label: "Client", value: "CEID Hub" },
      { label: "Industry", value: "Climate Innovation & Nonprofit" },
      { label: "Project Type", value: "Internship" },
      { label: "Start Date", value: "November 2025" },
      { label: "End Date", value: "February 2026" },
      { label: "Status", value: "Completed" },
    ],
    services: ["Content Planning", "Content Research", "Educational Content", "Campaign Support", "Communication Materials"],
    overview:
      "A digital marketing internship with CEID Hub, a climate innovation nonprofit, focused on supporting the organisation's content and communication needs across its social channels.",
    challenge:
      "CEID Hub needed consistent, well planned content that could communicate its work clearly to its audience, without relying on an ad hoc, reactive posting approach.",
    solution:
      "Working within the organisation's marketing function, I supported content planning, developed educational content, and assisted with campaign execution and communication materials, backed by research into the topics and issues CEID Hub works on.",
    deliverables: ["Content plans", "Educational social media content", "Communication materials", "Campaign support materials", "Research documentation"],
    currentStatus: "Completed.",
    lessons:
      "Working inside a nonprofit setting showed how much clarity matters when translating technical or research heavy subject matter into content a general audience will actually engage with. It also reinforced the value of planning content ahead of time rather than reacting week to week.",
    gallery: [],
    cover: "",
  },
  {
    slug: "everest-studios",
    name: "Everest Studios",
    subtitle: "Helping a Photography Studio Build a Consistent Social Media Presence",
    status: "Ongoing",
    kind: "real",
    info: [
      { label: "Client", value: "Everest Studios" },
      { label: "Industry", value: "Photography" },
      { label: "Project Type", value: "Social Media Strategy" },
      { label: "Start Date", value: "July 2026" },
      { label: "Status", value: "Ongoing" },
    ],
    services: [
      "Social Media Audit", "Audience Research", "Content Strategy", "Content Planning",
      "Content Pillar Development", "Caption Writing", "Reel Script Writing", "Creative Direction",
    ],
    projectNote:
      "This is an active engagement. Strategy and content planning are complete, and content is currently in production ahead of the scheduled rollout. This case study will be updated with performance results once implementation is underway.",
    overview:
      "Everest Studios is a photography studio based in Ibadan with strong visual work but no structured social media strategy behind it. This engagement covers the strategy, brand voice, and content calendar built to change that.",
    challenge:
      "Content was inconsistent and not building toward a clear audience or business goal. There was no defined brand voice, no content calendar, and no structured way to turn client shoots into a recognizable, recurring online presence.",
    solution:
      "Acting as creative director and strategist, I led a full social media audit, defined the brand's content pillars, and built a four week content calendar for Instagram, structured around three posts per week and a daily Stories rhythm. I defined the brand voice and values, developed a customer persona, and designed two recurring series to build repeat viewership.",
    deliverables: [
      "Social media audit", "Audience research report", "Content strategy", "Brand content pillars",
      "One month content calendar", "Reel scripts", "Carousel concepts", "Caption library", "Creative direction document",
    ],
    currentStatus:
      "Strategy and content planning are complete. Implementation is scheduled to begin late July or early August 2026. This case study will be updated with results after rollout.",
    lessons:
      "Building a content calendar for a visually strong brand highlighted that great photography alone does not create consistency. The real work was in structure: defining a repeatable rhythm and a small set of recurring formats so the account could build recognition post over post, rather than starting from scratch each week.",
    cover: everestCover.url,
    gallery: [
      { src: everestCover.url, alt: "Everest Studios cover" },
      { src: everestStrategy.url, alt: "Everest Studios content strategy" },
    ],
  },
  {
    slug: "bridgepoint-cultural-council",
    name: "BridgePoint Cultural Council",
    subtitle: "Helping a Cultural Organisation Strengthen Its Online Presence",
    status: "Sample Project",
    kind: "sample",
    sampleNotice: "This is a sample project, not a live client engagement.",
    info: [
      { label: "Project Type", value: "Sample Case Study" },
      { label: "Industry", value: "Arts & Culture" },
      { label: "Objective", value: "Develop a strategic social media presence for a cultural organisation." },
      { label: "Status", value: "Sample Project" },
    ],
    services: ["Social Media Strategy", "Audience Research", "Content Planning", "Content Calendar Development", "Caption Writing"],
    overview:
      "A self directed strategy exercise built around a fictional scenario: a Lagos based cultural council reaching Nigerian graduates interested in studying abroad, developed to demonstrate strategic thinking on a full 90 day campaign.",
    challenge:
      "Reaching Nigerian graduates and young professionals aged 22 to 30 in Lagos who are interested in studying abroad, in a space where scam heavy advisory services and conflicting information make it hard for the right audience to find a trusted pathway.",
    solution:
      "I designed a 90 day campaign strategy spanning six channels: Instagram, LinkedIn, Facebook, WhatsApp, Email, and Blog. I built a detailed audience persona, mapped her full customer journey from awareness to advocacy, and structured a content approach balancing education, inspiration, engagement, and conversion. I then built a full 14 week integrated content calendar across all three campaign months, with a supporting monthly newsletter plan.",
    deliverables: ["Social media strategy", "Audience research", "Content pillars", "Monthly content calendar", "Campaign concepts", "Sample captions"],
    currentStatus: "Sample project. Not a live client engagement.",
    lessons:
      "Designing a 90 day campaign from the ground up, rather than reacting to an existing account, made clear how much of strategy work happens before a single post is written: defining the persona, mapping the decision journey, and setting the content mix are what make the calendar make sense.",
    cover: bpCover.url,
    gallery: [
      { src: bpCover.url, alt: "BridgePoint Cultural Council cover" },
      { src: bpPersona.url, alt: "BridgePoint audience persona" },
      { src: bpApproach.url, alt: "BridgePoint content approach" },
      { src: bpCalendar.url, alt: "BridgePoint content calendar" },
    ],
  },
  {
    slug: "oge-skincare",
    name: "Oge Skincare",
    subtitle: "Helping a Skincare Brand Build a More Cohesive Social Media Strategy",
    status: "Sample Project",
    kind: "sample",
    sampleNotice: "This is a sample project, not a live client engagement.",
    info: [
      { label: "Project Type", value: "Sample Case Study" },
      { label: "Industry", value: "Beauty & Skincare" },
      { label: "Objective", value: "Develop a cohesive social media strategy and improve brand positioning." },
      { label: "Status", value: "Sample Project" },
    ],
    services: ["Social Media Audit", "Brand Positioning", "Content Strategy", "Content Planning", "Brand Recommendations"],
    overview:
      "A self directed audit and strategy exercise for a fictional Nigerian skincare brand, built to demonstrate how a scattered social media presence can be diagnosed and redirected using research and competitor benchmarking.",
    challenge:
      "The brand's name means beauty and elegance in Yoruba, but its social media presence did not reflect that identity. Posting was inconsistent, 4 to 6 times a month against a 15 to 20 post benchmark for growing Nigerian beauty brands, with no defined objectives or KPIs. Engagement sat at 1.8%, well below the 3.5 to 6.0% typical for comparable Nigerian skincare brands, and comment response rates were below 30%.",
    solution:
      "I conducted a full platform by platform audit across Instagram, TikTok, and Facebook, benchmarked the brand against three direct competitors, and diagnosed three compounding gaps behind the stagnant growth: a strategy gap, a content gap, and an execution gap. I built a target persona to realign the brand toward higher intent, higher income customers, and developed a recommended content pillar framework to replace the existing promotion heavy content mix.",
    deliverables: ["Social media audit", "Brand positioning framework", "Content strategy", "Content pillars", "Content calendar", "Brand recommendations"],
    currentStatus: "Sample project. Not a live client engagement.",
    lessons:
      "Benchmarking against direct competitors made the diagnosis far more concrete than a general audit could have. Naming the gap between a brand's identity and its actual output, rather than just listing what looked wrong, was what turned the audit into a set of specific, prioritized recommendations rather than a general critique.",
    cover: ogeCover.url,
    gallery: [
      { src: ogeCover.url, alt: "Oge Skincare cover" },
      { src: ogeAudit.url, alt: "Oge Skincare platform audit" },
      { src: ogeBench.url, alt: "Oge Skincare competitor benchmark" },
      { src: ogeAction.url, alt: "Oge Skincare action plan" },
    ],
  },
];

export const featuredForPdf = ["ceid-hub", "everest-studios", "bridgepoint-cultural-council", "oge-skincare"];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
