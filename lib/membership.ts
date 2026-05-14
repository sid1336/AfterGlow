"use client";

import { useEffect, useState } from "react";

/**
 * Mock membership state.
 *
 * This is a prototype only. There is no payment processing, no server, and
 * no real verification. State persists in localStorage so the demo flow
 * feels real across navigations.
 */
const STORAGE_KEY = "afterglow.membership.v1";

export interface MembershipState {
  isMember: boolean;
  // ISO timestamp captured locally when the user completed the mock flow.
  completedAt?: string;
}

function readStorage(): MembershipState {
  if (typeof window === "undefined") return { isMember: false };
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { isMember: false };
    const parsed = JSON.parse(raw) as MembershipState;
    return parsed;
  } catch {
    return { isMember: false };
  }
}

function writeStorage(state: MembershipState) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    // Notify other components in this tab.
    window.dispatchEvent(new Event("afterglow:membership"));
  } catch {
    // Ignore quota or storage errors in the prototype.
  }
}

export function useMembership() {
  // We always start with the unauthenticated default on first server render
  // so hydration matches. On mount we read localStorage and rehydrate.
  const [state, setState] = useState<MembershipState>({ isMember: false });
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setState(readStorage());
    setHydrated(true);
    const onChange = () => setState(readStorage());
    window.addEventListener("afterglow:membership", onChange);
    window.addEventListener("storage", onChange);
    return () => {
      window.removeEventListener("afterglow:membership", onChange);
      window.removeEventListener("storage", onChange);
    };
  }, []);

  const completeMembership = () => {
    const next: MembershipState = {
      isMember: true,
      completedAt: new Date().toISOString(),
    };
    setState(next);
    writeStorage(next);
  };

  const reset = () => {
    const next: MembershipState = { isMember: false };
    setState(next);
    writeStorage(next);
  };

  return { ...state, hydrated, completeMembership, reset };
}
