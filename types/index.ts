export type RelationshipIntention =
  | "Life partner"
  | "Serious relationship"
  | "Slow dating"
  | "Friendship first"
  | "Still figuring it out, but open to real connection";

export type RelationshipStyle =
  | "Monogamous"
  | "Open to discussing"
  | "Ethically non-monogamous"
  | "Not sure yet";

export type CommunicationStyle =
  | "I like frequent communication"
  | "I prefer slower thoughtful replies"
  | "I value direct honesty"
  | "I need emotional reassurance"
  | "I like independence and space";

export type CoreValue =
  | "Kindness"
  | "Emotional maturity"
  | "Ambition"
  | "Family"
  | "Creativity"
  | "Stability"
  | "Adventure"
  | "Community"
  | "Loyalty"
  | "Growth";

export type Dealbreaker =
  | "Not emotionally available"
  | "Not looking for commitment"
  | "Poor communication"
  | "Dishonesty"
  | "Disrespectful behavior"
  | "Incompatible relationship goals";

export interface Prompts {
  lifeFeel: string; // What I want my life to feel like
  loveMeans: string; // What love means to me
  handleConflict: string; // How I handle conflict
  greenFlag: string; // A green flag I bring to relationships
  idealSunday: string; // My ideal Sunday
}

export interface CompatibilityBreakdown {
  relationshipIntention: number;
  communicationStyle: number;
  emotionalAvailability: number;
  sharedValues: number;
  lifestyleFit: number;
}

export interface Profile {
  id: string;
  name: string;
  age: number;
  city: string;
  bio: string;
  pronouns?: string;
  intention: RelationshipIntention;
  style: RelationshipStyle;
  communication: CommunicationStyle;
  values: CoreValue[];
  dealbreakers: Dealbreaker[];
  prompts: Prompts;
  compatibility: number; // 0-100 overall
  breakdown: CompatibilityBreakdown;
  sharedValues: CoreValue[]; // intersection with current user
  highlightPromptKey: keyof Prompts; // which prompt to show on match card
  accent: "rose" | "violet" | "indigo" | "mauve" | "sky";
}

export interface ChatMessage {
  id: string;
  authorId: string; // 'me' for the current user, otherwise profile id
  text: string;
  time: string; // display string like "2:14 PM"
}
