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
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages(initial);
  }, [initial]);

  useEffect(() => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollTop = scrollerRef.current.scrollHeight;
    }
  }, [messages.length]);

  // Live, local-only analysis of the current draft. No network.
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
    const msg: ChatMessage = {
      id: `m-${Date.now()}`,
      authorId: "me",
      text: trimmed,
      time: "Just now",
      // Don't store the signal if the user explicitly chose to send the
      // original after seeing the suggestion.
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

      <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-5 pt-6">
        {/* Conversation header */}
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
                <p className="font-display text-lg leading-tight text-plum-800">
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
              className="hidden rounded-full border border-plum-200/60 bg-white/70 px-3.5 py-1.5 text-xs text-plum-700 transition hover:bg-white sm:inline-flex"
            >
              View profile
            </Link>
          </div>
        </GlowCard>

        {/* AI-assisted safety banner */}
        <GlowCard className="mt-3 px-5 py-4" tone="tint">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/85 text-plum-700 ring-1 ring-inset ring-white">
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
              <p className="text-sm font-medium text-plum-800">
                AI-assisted safety
              </p>
              <p className="mt-0.5 text-xs leading-relaxed text-plum-600">
                Afterglow helps keep conversations respectful. If a message
                feels spam-like, objectifying, or unsafe, we may suggest a
                rewrite or flag it for review. We never police consensual
                flirting.
              </p>
            </div>
          </div>
        </GlowCard>

        {/* Gentle reminder */}
        <div className="mt-3 flex items-center gap-2 px-1 text-xs text-plum-500">
          <span className="h-1 w-1 rounded-full bg-gradient-to-br from-blush-300 to-sky2-300" />
          <span>
            This is a slower kind of chat. Take your time — they'll wait.
          </span>
        </div>

        {/* Messages */}
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
                  <div className="mt-1 ml-auto max-w-[78%] rounded-2xl border border-blush-200/70 bg-blush-50/70 p-3">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-plum-600">
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

        {/* Starter prompts */}
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

        {/* Live rewrite suggestion */}
        {draftSignal ? (
          <SafetyAdvisor
            signal={draftSignal}
            rewrite={draftRewrite}
            onAcceptRewrite={acceptRewrite}
          />
        ) : null}

        {/* Composer */}
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
              placeholder={`Write something honest to ${profile.name}…`}
              rows={1}
              className="flex-1 resize-none bg-transparent px-3 py-2.5 text-[15px] leading-relaxed text-plum-800 focus:outline-none"
              style={{ maxHeight: 160 }}
            />
            <button
              type="submit"
              disabled={!draft.trim()}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blush-300 via-lilac-300 to-sky2-300 text-plum-900 shadow-glow-sm transition hover:-translate-y-0.5 hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Send message"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                <path d="M4 12l16-8-6 18-3-7-7-3z" fill="currentColor" />
              </svg>
            </button>
          </div>
          <p className="mt-2 px-1 text-[11px] text-plum-500">
            Press Enter to send · Shift + Enter for a new line · Local
            AI-assisted safety prototype is active
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
    soft: "border-blush-200/70 bg-blush-50/70",
    review: "border-plum-300/40 bg-white/85",
  } as const;
  return (
    <div
      className={`mt-3 rounded-2xl border p-4 ${severityTone[signal.severity]}`}
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-plum-700 ring-1 ring-inset ring-plum-200/40">
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
          <p className="text-sm font-medium text-plum-800">{signal.label}</p>
          <p className="mt-0.5 text-xs leading-relaxed text-plum-600">
            {signal.description}
          </p>
          {rewrite ? (
            <div className="mt-3 rounded-xl border border-white/80 bg-white/80 p-3">
              <p className="text-[10px] uppercase tracking-[0.18em] text-plum-500">
                Suggested rewrite
              </p>
              <p className="mt-1 text-sm leading-relaxed text-plum-800">
                “{rewrite}”
              </p>
              <div className="mt-2 flex items-center gap-2">
                <button
                  type="button"
                  onClick={onAcceptRewrite}
                  className="rounded-full bg-gradient-to-r from-blush-300 via-lilac-300 to-sky2-300 px-3 py-1 text-xs font-medium text-plum-900 shadow-glow-sm transition hover:-translate-y-0.5"
                >
                  Use suggestion
                </button>
                <span className="text-[11px] text-plum-500">
                  You can always send your original — it's your message.
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
  avatarAccent: "blush" | "peach" | "lilac" | "sky" | "rose" | "plum";
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
            ? "rounded-br-md bg-gradient-to-br from-blush-300 via-lilac-300 to-sky2-300 text-plum-900 shadow-glow-sm"
            : "rounded-bl-md border border-white/85 bg-white/80 text-plum-800",
        ].join(" ")}
      >
        <p>{message.text}</p>
        <p
          className={[
            "mt-1 text-[10px] tracking-wide",
            isMe ? "text-plum-900/65" : "text-plum-500",
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
      <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-blush-200 via-lilac-200 to-sky2-200" />
      <p className="mt-5 font-display text-xl text-plum-800">
        You haven't started talking yet.
      </p>
      <p className="mt-2 text-sm text-plum-500">
        Try one of the prompts below. {name} chose to be matched with you for
        a reason — meet them with curiosity.
      </p>
    </div>
  );
}
