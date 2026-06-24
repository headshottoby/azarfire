import type { ImageMetadata } from "astro";
import basicsImg from "../assets/images/advice-basics.jpg";
import surveyImg from "../assets/images/advice-survey.jpg";
import remediationImg from "../assets/images/advice-remediation.jpg";

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  /** ISO date for <time> + schema */
  date: string;
  /** Human-readable date for display */
  dateLabel: string;
  image: ImageMetadata;
  imageAlt: string;
}

/** Newest first — controls the order shown on the Advice index. */
export const articles: Article[] = [
  {
    slug: "passive-fire-protection-basics",
    title: "What's actually keeping your building safe from fire — and how to check (passive fire protection basics)",
    excerpt:
      "Most passive fire protection is invisible - built into the walls, doors and ceilings. Here's what it is, why it matters, and how to find out if yours is in good shape.",
    category: "Guidance",
    readTime: "4 min read",
    date: "2026-06-10",
    dateLabel: "10 June 2026",
    image: basicsImg,
    imageAlt: "A 'Fire door keep shut' sign on a fire door",
  },
  {
    slug: "what-to-expect-compartmentation-survey",
    title: "What happens when we survey your building (compartmentation survey explained)",
    excerpt:
      "What we actually do during a passive fire protection survey, what evidence we collect, and how it turns into a clear plan you can act on.",
    category: "Surveys",
    readTime: "5 min read",
    date: "2026-05-28",
    dateLabel: "28 May 2026",
    image: surveyImg,
    imageAlt: "An Azar Fire surveyor logging a fire door on the survey app",
  },
  {
    slug: "fire-stopping-defects-clear-actions",
    title: "Found a list of fire safety problems? Here's how to actually fix them (fire stopping remediation)",
    excerpt:
      "A simple guide to sorting out what matters most, recording the evidence, and giving a contractor everything they need to fix fire stopping defects properly first time.",
    category: "Remediation",
    readTime: "3 min read",
    date: "2026-05-12",
    dateLabel: "12 May 2026",
    image: remediationImg,
    imageAlt: "Inspecting fire stopping around a pipe service penetration",
  },
];
