// /api/tutor.js — Vercel serverless function (Node runtime).
// Requires an ANTHROPIC_API_KEY environment variable set in the Vercel project
// (Project Settings → Environment Variables). The key never reaches the browser.

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    res.status(500).json({
      error: "Missing ANTHROPIC_API_KEY. Add it in Vercel → Project Settings → Environment Variables, then redeploy."
    });
    return;
  }

  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  const { messages = [], context = "" } = body || {};

  if (!Array.isArray(messages) || messages.length === 0) {
    res.status(400).json({ error: "No messages provided." });
    return;
  }

  const system = `You are a precise, patient tutor on three U.S. founding documents: the Declaration of Independence (1776), the Constitution (1787), and the Bill of Rights (1791). The learner is a self-directed adult using a study app that already covers: what each document legally is and isn't, their structure, key phrasing, and which parts of the Bill of Rights are most litigated today (1st, 4th, 5th, 6th, and the 14th Amendment via incorporation).

Your job:
- Answer questions clearly and concisely (a few sentences, occasionally a short paragraph — avoid long essays unless asked).
- Be precise about which document something belongs to, and proactively flag common mix-ups (e.g., people often misattribute Declaration phrasing to the Constitution).
- If asked, quiz the learner on the spot with a question and wait for their answer before revealing it.
- If asked about case law or current events, answer at a reasonable level of confidence but note if something may have changed or be contested.
- Keep tone warm but direct, like a knowledgeable colleague, not a textbook.

${context}`;

  const apiMessages = messages
    .filter(m => m && typeof m.content === "string" && m.content.trim().length > 0)
    .slice(-16)
    .map(m => ({ role: m.role === "assistant" ? "assistant" : "user", content: m.content }));

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 700,
        system,
        messages: apiMessages
      })
    });

    const data = await response.json();

    if (!response.ok) {
      res.status(response.status).json({ error: data?.error?.message || "Anthropic API error." });
      return;
    }

    const text = (data.content || [])
      .filter(block => block.type === "text")
      .map(block => block.text)
      .join("\n")
      .trim();

    res.status(200).json({ text: text || "I didn't get a usable response — try rephrasing." });
  } catch (err) {
    res.status(500).json({ error: err?.message || "Unknown server error." });
  }
}
