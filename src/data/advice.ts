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
    title: "Passive fire protection: the basics every duty holder should know",
    excerpt:
      "A plain-English introduction to the built-in fire safety measures that help protect escape routes, contain smoke and support compliance records.",
    category: "Guidance",
    readTime: "4 min read",
    date: "2026-06-10",
    dateLabel: "10 June 2026",
    image: basicsImg,
    imageAlt: "A 'Fire door keep shut' sign on a fire door",
  },
  {
    slug: "what-to-expect-compartmentation-survey",
    title: "What to expect from a compartmentation survey",
    excerpt:
      "How a survey is scoped, what evidence is captured, and how findings can become a practical remediation plan for occupied buildings.",
    category: "Surveys",
    readTime: "5 min read",
    date: "2026-05-28",
    dateLabel: "28 May 2026",
    image: surveyImg,
    imageAlt: "An Azar Fire surveyor logging a fire door on the survey app",
  },
  {
    slug: "fire-stopping-defects-clear-actions",
    title: "Turning fire stopping defects into clear actions",
    excerpt:
      "A concise guide to prioritising defects, recording evidence and giving contractors the information they need to close issues properly.",
    category: "Remediation",
    readTime: "3 min read",
    date: "2026-05-12",
    dateLabel: "12 May 2026",
    image: remediationImg,
    imageAlt: "Inspecting fire stopping around a pipe service penetration",
  },
];
