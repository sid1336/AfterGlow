"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { AppHeader } from "@/components/AppHeader";
import { GlowCard } from "@/components/GlowCard";
import { ProfileAvatar } from "@/components/ProfileAvatar";
import { PromptChip } from "@/components/PromptChip";
import {
  getProfileById,
  mockMessagesByProfileId,
} from "@/data/mockProfiles";
import type { ChatMessage, SafetySignal } from "@/types";
import { analyzeMessage, suggestRewrite } from "@/lib/safety";

const STARTER_PROMPTS = [
  "I liked what you said about emotional honesty. What does that look like for you?",
  "Your ideal Sunday sounds close to mine. What would make it perfect?",
  "You mentioned growth. What has love taught you recently?",
];

export default function ChatPage() {
  const params = useParams<{ id: string }>();
  const id = params?.id;
  const profile = id ? getProfileById(id) : undefined;

  const [draft, setDraft] = useState("");
  const initial = useMemo<ChatMessage[]>(
    () => (id ? mockMessagesByProfileId[id] ?? [] : []),
    [id]
  );
  const [messages, setMessages] = useState<ChatMessage[]>(initial);
  // Counter for stable, hydration-safe message ids.
  const idCounter = useRef(0);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages(initial);
  }, [initial]);

  useEffect(() => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollTop = scrollerRef.current.scrollHeight;
    }
  }, [messages.length]);

  // Live local analysis of the current draft. No network.
  const draftSignal = useMemo<SafetySignal | undefined>(
    () => analyzeMessage(draft),
    [draft]
  );
  const draftRewrite = useMemo<string | undefined>(
    () => suggestRewrite(draft),
    [draft]
  );

  if (!profile) return notFound();

  const send = (text: string, opts?: { acknowledged?: boolean }) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const signal = analyzeMessage(trimmed);
    const rewrite = suggestRewrite(trimmed);
    idCounter.current += 1;
    const msg: ChatMessage = {
      id: `m-${idCounter.current}`,
      authorId: "me",
      text: trimmed,
      time: "Just now",
      safety: opts?.acknowledged ? undefined : signal,
      rewriteSuggestion: opts?.acknowledged ? undefined : rewrite,
    };
    setMessages((m) => [...m, msg]);
    setDraft("");
  };

  const acceptRewrite = () => {
    if (draftRewrite) {
      setDraft(draftRewrite);
    }
  };

  const isEmpty = messages.length === 0;

  return (
    <main className="flex min-h-dvh flex-col">
      <AppHeader />

      <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 pt-6 sm:px-5">
        <GlowCard className="px-5 py-4">
          <div className="flex items-center justify-between gap-4">
            <Link
              href={`/matches/${profile.id}`}
              className="flex items-center gap-3 transition hover:opacity-90"
            >
              <ProfileAvatar
                name={profile.name}
                accent={profile.accent}
                size={48}
              />
              <div>
                <p className="font-display text-lg leading-tight text-burgundy-700">
                  {profile.name}
                </p>
                <p className="text-xs text-plum-500">
                  {profile.pronouns} · {profile.compatibility}% compatible ·{" "}
                  {profile.relationshipIntention}
                </p>
              </div>
            </Link>
            <Link
              href={`/matches/${profile.id}`}
              className="hidden rounded-full border border-mauve-200/40 bg-white/75 px-3.5 py-1.5 text-xs text-plum-700 transition hover:bg-white sm:inline-flex"
            >
              View profile
            </Link>
          </div>
        </GlowCard>

        <GlowCard className="mt-3 px-5 py-4" tone="tint">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/85 text-burgundy-700 ring-1 ring-inset ring-white">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
                <path
                  d="M12 3l8 3v6c0 4.6-3.4 8.4-8 9-4.6-.6-8-4.4-8-9V6l8-3z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div className="flex-1">
              <p className="text-sm font-medium text-burgundy-700">
                AI-assisted emotional safety
              </p>
              <p className="mt-0.5 text-xs leading-relaxed text-plum-600">
                Afterglow may suggest a rewrite when a message feels too
                abrupt, objectifying, or unsafe. We are here to protect the
                emotional environment, not to police how you flirt. AI-assisted
                safety is supportive, not a replacement for human review.
              </p>
            </div>
          </div>
        </GlowCard>

        <div className="mt-3 flex items-center gap-2 px-1 text-xs text-plum-500">
          <span className="h-1 w-1 rounded-full bg-gradient-to-br from-sky2-300 to-mauve-300" />
          <span>
            This is a slower kind of chat. Take your time. They will wait.
          </span>
        </div>

        <div
          ref={scrollerRef}
          className="soft-scroll mt-4 flex-1 space-y-3 overflow-y-auto px-1 py-2"
          style={{ minHeight: 240 }}
        >
          {isEmpty ? (
            <EmptyState name={profile.name} />
          ) : (
            messages.map((m) => (
              <div key={m.id}>
                <Bubble
                  message={m}
                  isMe={m.authorId === "me"}
                  avatarName={profile.name}
                  avatarAccent={profile.accent}
                />
                {m.safety ? (
                  <div className="mt-1 ml-auto max-w-[78%] rounded-2xl border border-mauve-200/50 bg-mauve-50/60 p-3">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-burgundy-700">
                      {m.safety.label}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-plum-700">
                      {m.safety.description}
                    </p>
                  </div>
                ) : null}
              </div>
            ))
          )}
        </div>

        {messages.filter((m) => m.authorId === "me").length === 0 && (
          <div className="mt-3">
            <p className="px-1 text-[11px] uppercase tracking-[0.18em] text-plum-500">
              Start with a thoughtful prompt
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {STARTER_PROMPTS.map((p) => (
                <PromptChip
                  key={p}
                  size="sm"
                  onClick={() => setDraft(p)}
                  className="!text-left"
                >
                  {p}
                </PromptChip>
              ))}
            </div>
          </div>
        )}

        {draftSignal ? (
          <SafetyAdvisor
            signal={draftSignal}
            rewrite={draftRewrite}
            onAcceptRewrite={acceptRewrite}
          />
        ) : null}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(draft);
          }}
          className="sticky bottom-0 mt-4 pb-5"
        >
          <div className="glass flex items-end gap-2 rounded-2xl p-2">
            <textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send(draft);
                }
              }}
              placeholder={`Write something honest to ${profile.name}...`}
              rows={1}
              className="flex-1 resize-none bg-transparent px-3 py-2.5 text-[15px] leading-relaxed text-plum-800 focus:outline-none"
              style={{ maxHeight: 160 }}
            />
            <button
              type="submit"
              disabled={!draft.trim()}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky2-300 via-lilac-300 to-mauve-300 text-burgundy-800 shadow-glow-sm transition hover:-translate-y-0.5 hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Send message"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                <path d="M4 12l16-8-6 18-3-7-7-3z" fill="currentColor" />
              </svg>
            </button>
          </div>
          <p className="mt-2 px-1 text-[11px] text-plum-500">
            Press Enter to send. Shift + Enter for a new line. Local
            AI-assisted emotional safety prototype is active.
          </p>
        </form>
      </div>
    </main>
  );
}

function SafetyAdvisor({
  signal,
  rewrite,
  onAcceptRewrite,
}: {
  signal: SafetySignal;
  rewrite: string | undefined;
  onAcceptRewrite: () => void;
}) {
  const severityTone = {
    info: "border-sky2-300/60 bg-sky2-50/70",
    soft: "border-mauve-200/60 bg-mauve-50/60",
    review: "border-burgundy-300/40 bg-white/85",
  } as const;
  return (
    <div
      className={`mt-3 rounded-2xl border p-4 ${severityTone[signal.severity]}`}
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-burgundy-700 ring-1 ring-inset ring-mauve-200/40">
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
            <path
              d="M12 3l9 16H3L12 3z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="16" r="1" fill="currentColor" />
            <path
              d="M12 10v3"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <div className="flex-1">
          <p className="text-sm font-medium text-burgundy-700">{signal.label}</p>
          <p className="mt-0.5 text-xs leading-relaxed text-plum-600">
            {signal.description}
          </p>
          {rewrite ? (
            <div className="mt-3 rounded-xl border border-white bg-white/85 p-3">
              <p className="text-[10px] uppercase tracking-[0.18em] text-plum-500">
                Suggested rewrite
              </p>
              <p className="mt-1 text-sm leading-relaxed text-plum-800">
                &ldquo;{rewrite}&rdquo;
              </p>
              <div className="mt-2 flex items-center gap-2">
                <button
                  type="button"
                  onClick={onAcceptRewrite}
                  className="rounded-full bg-gradient-to-r from-sky2-300 via-lilac-300 to-mauve-300 px-3 py-1 text-xs font-medium text-burgundy-800 shadow-glow-sm transition hover:-translate-y-0.5"
                >
                  Use suggestion
                </button>
                <span className="text-[11px] text-plum-500">
                  You can always send your original. It is your message.
                </span>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function Bubble({
  message,
  isMe,
  avatarName,
  avatarAccent,
}: {
  message: ChatMessage;
  isMe: boolean;
  avatarName: string;
  avatarAccent: "blush" | "peach" | "lilac" | "sky" | "mauve" | "plum";
}) {
  return (
    <div
      className={`flex items-end gap-2 ${isMe ? "justify-end" : "justify-start"}`}
    >
      {!isMe && (
        <ProfileAvatar name={avatarName} accent={avatarAccent} size={28} />
      )}
      <div
        className={[
          "max-w-[78%] rounded-2xl px-4 py-2.5 text-[15px] leading-relaxed",
          isMe
            ? "rounded-br-md bg-gradient-to-br from-sky2-300 via-lilac-300 to-mauve-300 text-burgundy-800 shadow-glow-sm"
            : "rounded-bl-md border border-white bg-white/85 text-plum-800",
        ].join(" ")}
      >
        <p>{message.text}</p>
        <p
          className={[
            "mt-1 text-[10px] tracking-wide",
            isMe ? "text-burgundy-800/65" : "text-plum-500",
          ].join(" ")}
        >
          {message.time}
        </p>
      </div>
    </div>
  );
}

function EmptyState({ name }: { name: string }) {
  return (
    <div className="mx-auto max-w-md py-10 text-center">
      <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-sky2-200 via-lilac-200 to-mauve-200" />
      <p className="mt-5 font-display text-xl text-burgundy-700">
        You haven't started talking yet.
      </p>
      <p className="mt-2 text-sm text-plum-500">
        Try one of the prompts below. {name} chose to be matched with you for
        a reason. Meet them with curiosity.
      </p>
    </div>
  );
}
