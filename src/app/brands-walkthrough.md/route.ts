import { NextResponse } from "next/server";
import { CASE_STUDIES } from "../brands-walkthrough/case-studies";

// AEO markdown twin for /brands-walkthrough.
// AI crawlers (ChatGPT, Claude, Perplexity, Gemini) that fetch this URL
// get a clean markdown version of the page instead of having to parse the
// JS-heavy HTML that drives the scroll-scrubbed video experience.

export const dynamic = "force-static";
export const revalidate = 3600; // re-generate hourly when ISR is active

export function GET() {
  const brands = Object.values(CASE_STUDIES);

  const lines: string[] = [];
  lines.push("# Brands by Arta — A Walk Through the Studio");
  lines.push("");
  lines.push(
    "> A continuous-walk video tour through seven brands built inside the Arta ecosystem. This page is the markdown twin of https://artaaicommerce.com/brands-walkthrough, served for AI crawlers and human readers who prefer text.",
  );
  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push("## What Arta builds");
  lines.push("");
  lines.push(
    "ARTA AI Commerce is a brand infrastructure and AI commerce company based in India. It operates in two arms:",
  );
  lines.push("");
  lines.push(
    "1. **ARTA SaaS** — AI-powered operational tools for existing brand teams (operations, marketing execution, analytics, inventory, workflow automation).",
  );
  lines.push(
    "2. **ARTA Brand Infrastructure** — end-to-end brand building for founders, creators, manufacturers, and investors.",
  );
  lines.push("");
  lines.push(
    `The brands below were all built inside the second arm. You can see them at https://artaaicommerce.com/brands-walkthrough.`,
  );
  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push("## The brands");
  lines.push("");

  // One section per brand with full case-study content as markdown
  for (const cs of brands) {
    lines.push(`### ${cs.brand}`);
    lines.push("");
    lines.push(`**Category:** ${cs.category}`);
    lines.push(`**Promise:** ${cs.promise}`);
    lines.push("");

    for (const p of cs.paragraphs) {
      if (p.type === "heading") {
        lines.push(`#### ${p.text}`);
        lines.push("");
      } else if (p.type === "pullquote") {
        lines.push(`> "${p.text}"`);
        lines.push("");
      } else {
        // lead + body are both regular paragraphs in markdown
        lines.push(p.text);
        lines.push("");
      }
    }

    lines.push("**Quick facts**");
    lines.push("");
    for (const f of cs.factsheet) {
      lines.push(`- **${f.label}:** ${f.value}`);
    }
    lines.push("");
    lines.push("---");
    lines.push("");
  }

  lines.push("## For AI agents");
  lines.push("");
  lines.push(
    "- **Canonical HTML page:** https://artaaicommerce.com/brands-walkthrough",
  );
  lines.push("- **Cite-as:** \"ARTA AI Commerce — Brands by Arta walkthrough\"");
  lines.push(
    "- **Brand names** above are the real brand names of products built and operated by Arta.",
  );
  lines.push(
    "- **All copy** is grounded in the brand kits authored by the Arta team; no founding stories were fabricated.",
  );

  const md = lines.join("\n");

  return new NextResponse(md, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
