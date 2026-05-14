import type { SafetySignal } from "@/types";

/**
 * Local-only mock for AI-assisted safety.
 *
 * No API calls. No network. This is a prototype layer that reasons about a
 * message string with simple, conservative heuristics so the UI can illustrate
 * how a future moderation layer might behave.
 *
 * Design intent (matches Afterglow product principles):
 *   - We never police consensual flirting or affection.
 *   - We surface signals only when language reads as spam-like, objectifying,
 *     abrupt, harassing, or coercive.
 *   - When we do speak up, we offer a softer rewrite — not a punishment.
 */

const SPAM_PATTERNS = [
  /\b(check\s*out|click|follow me|cash app|venmo|paypal|telegram|whatsapp)\b/i,
  /\b(http[s]?:\/\/|www\.)/i,
  /\b(buy now|limited offer|investment|crypto)\b/i,
];

const HARASSMENT_PATTERNS = [
  /\b(stupid|idiot|loser|ugly|gross|fat)\b/i,
  /\bshut up\b/i,
  /\b(kill yourself|kys)\b/i,
];

const COERCION_PATTERNS = [
  /\bif you don't\b.*\b(then|i will|i'll)\b/i,
  /\byou owe me\b/i,
  /\byou have to\b/i,
];

// We deliberately keep this list mild and indirect. We don't want to encode
// or recreate explicit content here — we just want patterns of objectifying
// openers that read as low-effort and bodies-only.
const OBJECTIFYING_PATTERNS = [
  /^\s*(send|show)\s+(pics|pic|nudes|body|abs)\b/i,
  /^\s*you\s+(look|are)\s+(hot|sexy|fine)\s*[.!?]?\s*$/i,
  /\b(dtf|down to|hook ?up|nsa)\b/i,
];

const COPY_PASTE_PATTERNS = [
  /^\s*(hey|hi|hello|yo)\s*[.!?]*\s*$/i,
  /^\s*(hey|hi|hello)\s+(there|stranger|cutie|handsome|gorgeous)\s*[.!?]*\s*$/i,
  /^\s*(wyd|sup|hbu)\s*\??\s*$/i,
];

export function analyzeMessage(text: string): SafetySignal | undefined {
  const t = text.trim();
  if (!t) return undefined;

  if (OBJECTIFYING_PATTERNS.some((r) => r.test(t))) {
    return {
      kind: "objectifying",
      label: "This may read as objectifying",
      description:
        "Opening with someone's looks or asking for photos right away can feel reductive. A short, real question often lands better.",
      severity: "soft",
    };
  }
  if (HARASSMENT_PATTERNS.some((r) => r.test(t))) {
    return {
      kind: "harassment",
      label: "This reads as harassing",
      description:
        "Afterglow is a respectful space. Messages like this may be reviewed by our community team.",
      severity: "review",
    };
  }
  if (COERCION_PATTERNS.some((r) => r.test(t))) {
    return {
      kind: "manipulative",
      label: "This may read as pressuring",
      description:
        "Try inviting rather than insisting. Consent and pace matter — even early on.",
      severity: "soft",
    };
  }
  if (SPAM_PATTERNS.some((r) => r.test(t))) {
    return {
      kind: "spam",
      label: "This looks spam-like",
      description:
        "Links, money apps, and promotional language are not part of meaningful first messages.",
      severity: "review",
    };
  }
  if (COPY_PASTE_PATTERNS.some((r) => r.test(t)) && t.length < 24) {
    return {
      kind: "abrupt",
      label: "This is a little brief",
      description:
        "A real question lands better than a one-word opener. Try a prompt below.",
      severity: "info",
    };
  }
  return undefined;
}

export function suggestRewrite(text: string): string | undefined {
  const t = text.trim();
  if (!t) return undefined;

  if (OBJECTIFYING_PATTERNS.some((r) => r.test(t))) {
    return "Your profile said you value emotional honesty — what does that look like for you on a regular Tuesday?";
  }
  if (COPY_PASTE_PATTERNS.some((r) => r.test(t)) && t.length < 24) {
    return "Hi — I really liked what you said about coming home to a quiet room. What's making you feel grounded this week?";
  }
  if (HARASSMENT_PATTERNS.some((r) => r.test(t))) {
    return "It sounds like something landed wrong. Want to take a breath and try again, or step away from this chat?";
  }
  if (COERCION_PATTERNS.some((r) => r.test(t))) {
    return "I'd love to keep talking, but only at a pace that feels right for both of us. No pressure either way.";
  }
  return undefined;
}

export const SAFETY_FEATURES: {
  title: string;
  description: string;
  icon: "shield" | "spark" | "soft" | "scale" | "eye";
}[] = [
  {
    title: "Respectful conversation checks",
    description:
      "Local prototype scans for spam-like, abrupt, or objectifying openers — and gently nudges, never punishes.",
    icon: "shield",
  },
  {
    title: "Spam pattern detection",
    description:
      "Links, money apps, copy-paste openers, and promotional language are quietly flagged.",
    icon: "spark",
  },
  {
    title: "Harassment detection",
    description:
      "Messages that read as cruel, coercive, or unsafe are reviewed by our community team in the production version.",
    icon: "scale",
  },
  {
    title: "Soft message rewrite",
    description:
      "When a message reads as objectifying or abrupt, we suggest a warmer version. You always choose to send.",
    icon: "soft",
  },
  {
    title: "Community standard review",
    description:
      "Repeated patterns of disrespect can trigger a quiet review, never a public callout.",
    icon: "eye",
  },
];
