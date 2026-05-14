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
import type { ChatMessage } from "@/types";

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

  if (!profile) return notFound();

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const msg: ChatMessage = {
      id: `m-${Date.now()}`,
      authorId: "me",
      text: trimmed,
      time: "Just now",
    };
    setMessages((m) => [...m, msg]);
    setDraft("");
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
                <p className="font-display text-lg leading-tight text-ink-50">
                  {profile.name}
                </p>
                <p className="text-xs text-ink-300">
                  {profile.compatibility}% compatible · {profile.intention}
                </p>
              </div>
            </Link>
            <Link
              href={`/matches/${profile.id}`}
              className="hidden rounded-full border border-white/12 bg-white/5 px-3.5 py-1.5 text-xs text-ink-100 transition hover:bg-white/10 sm:inline-flex"
            >
              View profile
            </Link>
          </div>
        </GlowCard>

        {/* Gentle reminder */}
        <div className="mt-3 flex items-center gap-2 px-1 text-xs text-ink-300">
          <span className="h-1 w-1 rounded-full bg-gradient-to-br from-glow-pink to-glow-sky" />
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
              <Bubble
                key={m.id}
                message={m}
                isMe={m.authorId === "me"}
                avatarName={profile.name}
                avatarAccent={profile.accent}
              />
            ))
          )}
        </div>

        {/* Starter prompts */}
        {messages.filter((m) => m.authorId === "me").length === 0 && (
          <div className="mt-3">
            <p className="px-1 text-[11px] uppercase tracking-[0.18em] text-ink-300">
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

        {/* Composer */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(draft);
          }}
          className="sticky bottom-0 mt-4 pb-5"
        >
          <div className="glass flex items-end gap-2 rounded-2xl p-2 shadow-glow-sm">
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
              className="flex-1 resize-none bg-transparent px-3 py-2.5 text-[15px] leading-relaxed text-ink-50 placeholder:text-ink-300/70 focus:outline-none"
              style={{ maxHeight: 160 }}
            />
            <button
              type="submit"
              disabled={!draft.trim()}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-glow-pink via-glow-mauve to-glow-violet text-ink-950 shadow-glow-sm transition hover:-translate-y-0.5 hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Send message"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                <path
                  d="M4 12l16-8-6 18-3-7-7-3z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          <p className="mt-2 px-1 text-[11px] text-ink-300">
            Press Enter to send · Shift + Enter for a new line
          </p>
        </form>
      </div>
    </main>
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
  avatarAccent: "rose" | "violet" | "indigo" | "mauve" | "sky";
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
          "max-w-[78%] rounded-2xl px-4 py-2.5 text-[15px] leading-relaxed shadow-glow-sm",
          isMe
            ? "rounded-br-md bg-gradient-to-br from-glow-pink/85 via-glow-mauve/85 to-glow-violet/85 text-ink-950"
            : "rounded-bl-md border border-white/10 bg-white/6 text-ink-50",
        ].join(" ")}
      >
        <p>{message.text}</p>
        <p
          className={[
            "mt-1 text-[10px] tracking-wide",
            isMe ? "text-ink-950/60" : "text-ink-300",
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
      <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-glow-pink/40 via-glow-mauve/30 to-glow-sky/40 blur-[1px]" />
      <p className="mt-5 font-display text-xl text-ink-50">
        You haven't started talking yet.
      </p>
      <p className="mt-2 text-sm text-ink-300">
        Try one of the prompts below. {name} chose to be matched with you for a
        reason — meet them with curiosity.
      </p>
    </div>
  );
}
