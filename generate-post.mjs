// generate-post.mjs
// ============================================================
// FinancePro — Daily Blog Post Automation
// ============================================================
// SETUP:
//   1. Replace YOUR_ANTHROPIC_API_KEY below with your real key
//   2. Run once manually: node generate-post.mjs
//   3. Set up Windows Task Scheduler to run daily at 9am
// ============================================================

import fs from "fs";
import path from "path";
import https from "https";
import { execSync } from "child_process";

// ============================================================
// API key is read from .env.local — set ANTHROPIC_API_KEY there
// ============================================================
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
if (!ANTHROPIC_API_KEY) {
  console.error("❌ ANTHROPIC_API_KEY is not set in .env.local");
  process.exit(1);
}
// ============================================================

const TOPICS = [
  "how to improve your credit score fast",
  "best budgeting methods for beginners",
  "how to pay off debt quickly",
  "what is a good interest rate for a mortgage",
  "how to save for retirement in your 30s",
  "emergency fund how much to save",
  "what is a 401k and how does it work",
  "how to reduce your tax bill legally",
  "best way to save money every month",
  "how to get out of credit card debt",
  "how to build wealth from scratch",
  "personal finance tips for young adults",
  "what is an index fund",
  "how to set financial goals",
  "how to create a monthly budget",
  "what is compound interest and why it matters",
  "how to negotiate a lower interest rate on your loan",
  "difference between roth ira and traditional ira",
  "what affects your mortgage rate",
  "how to calculate net worth",
  "dollar cost averaging explained",
  "what is a fiduciary financial advisor",
  "how to start investing with 100 dollars",
  "best way to pay off student loans",
  "how to save for a house down payment",
  "what is a credit utilization ratio",
  "how to create passive income",
  "what is the debt snowball method",
  "how to negotiate your salary",
  "what is a high yield savings account",
];

// ============================================================
// AUTO TOPIC ROTATION — changes every day automatically
// ============================================================
const now = new Date();
const start = new Date(now.getFullYear(), 0, 0);
const diff = now - start;
const oneDay = 86400000;
const dayOfYear = Math.floor(diff / oneDay);
const topic = TOPICS[dayOfYear % TOPICS.length];

// Generate clean URL slug
const slug = topic
  .toLowerCase()
  .replace(/[^a-z0-9\s-]/g, "")
  .replace(/\s+/g, "-")
  .trim();

// Today's date formatted
const today = now.toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

// ============================================================
// CONSOLE OUTPUT
// ============================================================
console.log("\n");
console.log("██████████████████████████████████████");
console.log("  FinancePro — Blog Post Automation");
console.log("██████████████████████████████████████");
console.log(`  📅 Date:   ${today}`);
console.log(`  📝 Topic:  ${topic}`);
console.log(`  🔗 Slug:   ${slug}`);
console.log("██████████████████████████████████████\n");
console.log("⏳ Step 1/4 — Calling Claude API...\n");

// ============================================================
// PROMPT FOR CLAUDE
// ============================================================
const prompt = `Write a complete Next.js JSX blog post component for FinancePro (financepro.io).

TOPIC: ${topic}
DATE: ${today}
SLUG: ${slug}

DESIGN REQUIREMENTS:
- Background #080d16, gold accent #c9a84c, muted text #8899aa
- Google Fonts: Cormorant Garamond (headings) + DM Mono (body) via useEffect link tag
- Sticky nav: dark blur background, FinancePro logo left, back to blog link right
- Hero: centered, topic category tags, h1 title, date and read time, gold divider
- AdSense placeholder div below hero: 728x90, dashed gold border, label text ADVERTISEMENT 728x90
- Article sections with h2 headings
- One styled comparison table with dark card styling
- One practical numbered tips section
- CTA box midway linking to /calculators with gold gradient button
- CTA box at end linking to /calculators
- Footer with FinancePro logo, nav links, copyright

CONTENT REQUIREMENTS:
- 900 to 1200 words of educational finance content
- Include high AdSense CPC finance keywords naturally
- Real numbers and examples to make content concrete
- Short disclaimer paragraph at the very end

CODE REQUIREMENTS:
- Very first line must be exactly: // app/blog/${slug}/page.jsx
- Export metadata object with SEO title, description, keywords
- Default export function named BlogPost
- All styling via inline styles only, no Tailwind
- No external imports, plain JSX only

Return ONLY raw JSX code. No markdown, no backticks, no explanation.
Start response with: // app/blog/${slug}/page.jsx`;

// ============================================================
// CALL CLAUDE API
// ============================================================
const requestBody = JSON.stringify({
  model: "claude-sonnet-4-6",
  max_tokens: 4000,
  messages: [{ role: "user", content: prompt }],
});

const options = {
  hostname: "api.anthropic.com",
  path: "/v1/messages",
  method: "POST",
  headers: {
    "x-api-key": ANTHROPIC_API_KEY,
    "anthropic-version": "2023-06-01",
    "content-type": "application/json",
    "content-length": Buffer.byteLength(requestBody),
  },
};

const req = https.request(options, (res) => {
  let data = "";

  res.on("data", (chunk) => {
    data += chunk;
    process.stdout.write(".");
  });

  res.on("end", () => {
    console.log("\n\n✅ Claude responded!\n");
    console.log("⏳ Step 2/4 — Saving file...\n");

    try {
      const parsed = JSON.parse(data);

      // Check for API errors
      if (parsed.error) {
        console.error("❌ Claude API Error:", parsed.error.message);
        console.error("Check your API key and try again.");
        process.exit(1);
      }

      // Extract JSX content
      let jsxContent = parsed.content[0].text;

      // Clean up any accidental backticks Claude might add
      jsxContent = jsxContent
        .replace(/^```jsx\n?/i, "")
        .replace(/^```\n?/i, "")
        .replace(/\n?```$/i, "")
        .trim();

      // Create directory and save file
      const dirPath = path.join("app", "blog", slug);
      fs.mkdirSync(dirPath, { recursive: true });

      const filePath = path.join(dirPath, "page.jsx");
      fs.writeFileSync(filePath, jsxContent, "utf8");

      const sizeKB = (jsxContent.length / 1024).toFixed(1);
      console.log(`✅ File saved: ${filePath} (${sizeKB} KB)\n`);

      // ============================================================
      // AUTO GIT COMMIT AND PUSH
      // ============================================================
      console.log("⏳ Step 3/4 — Committing to GitHub...\n");

      try {
        execSync("git add .", { stdio: "inherit" });
        execSync(`git commit -m "blog: ${topic} (${today})"`, {
          stdio: "inherit",
        });
        console.log("\n✅ Committed!\n");
      } catch (gitErr) {
        console.error("❌ Git commit failed:", gitErr.message);
        console.log("Run manually: git add . && git commit -m 'blog: new post'");
        process.exit(1);
      }

      console.log("⏳ Step 4/4 — Pushing to GitHub...\n");

      try {
        execSync("git push origin main", { stdio: "inherit" });
        console.log("\n");
        console.log("██████████████████████████████████████");
        console.log("  🎉 SUCCESS — Post is live!");
        console.log("██████████████████████████████████████");
        console.log(`  📝 Topic: ${topic}`);
        console.log(`  📁 File:  ${filePath}`);
        console.log(`  🚀 Vercel deploying now (~2 min)`);
        console.log(`  🌐 URL:`);
        console.log(`     https://financepro.io/blog/${slug}`);
        console.log("██████████████████████████████████████\n");
      } catch (pushErr) {
        console.error("❌ Git push failed:", pushErr.message);
        console.log("File saved and committed locally.");
        console.log("Run manually: git push origin main");
        process.exit(1);
      }

    } catch (parseErr) {
      console.error("❌ Failed to parse response:", parseErr.message);
      console.error("Preview:", data.substring(0, 300));
      process.exit(1);
    }
  });
});

req.on("error", (err) => {
  console.error("❌ Network error:", err.message);
  console.error("Check your internet connection.");
  process.exit(1);
});

// 120 second timeout — Claude needs time to write 900+ words
req.setTimeout(120000, () => {
  console.error("❌ Timed out after 120 seconds.");
  req.destroy();
  process.exit(1);
});

req.write(requestBody);
req.end();
