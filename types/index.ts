// =============================================================================
// Identity
// =============================================================================

export type GenderIdentity =
  | "Woman"
  | "Man"
  | "Trans woman"
  | "Trans man"
  | "Nonbinary"
  | "Genderqueer"
  | "Agender"
  | "Genderfluid"
  | "Two-Spirit"
  | "Questioning"
  | "Prefer to self-describe"
  | "Prefer not to say";

export type Pronouns =
  | "she/her"
  | "he/him"
  | "they/them"
  | "she/they"
  | "he/they"
  | "ze/zir"
  | "xe/xem"
  | "any pronouns"
  | "ask me"
  | "Prefer not to say";

export type Orientation =
  | "Lesbian"
  | "Gay"
  | "Bisexual"
  | "Pansexual"
  | "Queer"
  | "Asexual"
  | "Demisexual"
  | "Sapphic"
  | "Achillean"
  | "Questioning"
  | "Prefer to self-describe"
  | "Prefer not to say";

// Who I want to meet, designed inclusively, never exclusionary
export type InterestedIn =
  | "Women"
  | "Men"
  | "Nonbinary people"
  | "Trans women"
  | "Trans men"
  | "Genderqueer or genderfluid people"
  | "Anyone who shares my values"
  | "Still figuring it out";

// =============================================================================
// Relationship
// =============================================================================

export type RelationshipIntention =
  | "Life partner"
  | "Serious relationship"
  | "Slow dating"
  | "Friendship first"
  | "Still figuring it out, but open to real connection";

/**
 * Replaces the previous "structure" question. Afterglow is designed around
 * one-to-one long-term partnership, so the options now describe the shape of
 * the relationship someone is hoping to build, not its arrangement.
 */
export type PartnershipShape =
  | "A serious relationship"
  | "A long-term partnership"
  | "A life companion"
  | "Slow intentional dating"
  | "Marriage someday"
  | "A future we can grow into";

export type CommunicationStyle =
  | "I like frequent communication"
  | "I prefer slower thoughtful replies"
  | "I value direct honesty"
  | "I need emotional reassurance"
  | "I like independence and space";

export type ConflictStyle =
  | "I name what I feel early"
  | "I need a pause, then return calmly"
  | "I work through it through writing"
  | "I want to repair the same day"
  | "I take space and come back gently";

export type AttachmentStyle =
  | "Secure"
  | "Anxious-leaning, working on it"
  | "Avoidant-leaning, working on it"
  | "In therapy and learning"
  | "Still figuring it out";

export type EmotionalNeed =
  | "Consistent communication"
  | "Quality time"
  | "Verbal reassurance"
  | "Shared rituals"
  | "Space to recharge"
  | "Acts of care"
  | "Being understood without explaining";

// =============================================================================
// Values & Lifestyle
// =============================================================================

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
  | "Growth"
  | "Justice"
  | "Honesty"
  | "Curiosity"
  | "Spirituality";

export type LoveLanguage =
  | "Words of affirmation"
  | "Quality time"
  | "Acts of service"
  | "Physical touch"
  | "Thoughtful gifts";

export type LifestyleRhythm =
  | "Early riser, slow morning"
  | "Night owl, late conversations"
  | "Balanced and routined"
  | "Spontaneous and flexible"
  | "Quiet weekdays, social weekends"
  | "Always a little adventurous";

export type SocialEnergy =
  | "Quietly introverted, recharge alone"
  | "Mostly introverted, small groups"
  | "Ambivert, depends on the day"
  | "Outgoing, energized by people"
  | "Deeply social, big chosen family";

export type FutureGoal =
  | "Build a long-term partnership"
  | "Open to marriage"
  | "Open to kids"
  | "Open to fostering or adopting"
  | "Open to chosen family without kids"
  | "Move cities together one day"
  | "Co-create a calm, creative life"
  | "Travel often together";

export type FamilyView =
  | "I want kids"
  | "Open to kids"
  | "I don't want kids"
  | "Open to fostering or adopting"
  | "Already a parent"
  | "Still figuring it out";

export type AstrologySign =
  | "Aries"
  | "Taurus"
  | "Gemini"
  | "Cancer"
  | "Leo"
  | "Virgo"
  | "Libra"
  | "Scorpio"
  | "Sagittarius"
  | "Capricorn"
  | "Aquarius"
  | "Pisces";

export type BirthChartStyle =
  | "Sun-led"
  | "Moon-led"
  | "Rising-led"
  | "Balanced chart"
  | "Just here for fun";

// =============================================================================
// Location (kept private; UI never reveals exact distance or city)
// =============================================================================

export type Continent =
  | "Africa"
  | "Asia"
  | "Europe"
  | "North America"
  | "Oceania"
  | "South America";

export interface Location {
  continent: Continent;
  country: string;
  region: string; // state, province, or region
  city: string; // private; never shown publicly
}

export type Dealbreaker =
  | "Not emotionally available"
  | "Not looking for commitment"
  | "Poor communication"
  | "Dishonesty"
  | "Disrespectful behavior"
  | "Incompatible relationship goals"
  | "Pushes physical pace too fast"
  | "Won't respect boundaries";

// =============================================================================
// Profile prompts (written in user's own voice)
// =============================================================================

export interface Prompts {
  lifeFeel: string; // Required. What I want my life to feel like
  loveMeans: string; // Required. What love means to me
  feelSafe: string; // Required. What makes me feel emotionally safe with someone
  greenFlag: string; // Optional. A green flag I bring into relationships
  partnership: string; // Optional. The partnership I hope to build
  conflictRepair: string; // Optional. How I repair after conflict
  emotionalEnergy: string; // Optional. The kind of emotional energy I value most
  idealSunday: string; // Optional. My ideal Sunday
}

// =============================================================================
// Compatibility
// =============================================================================

export interface CompatibilityBreakdown {
  identityFit: number;
  relationshipIntention: number;
  emotionalAvailability: number;
  emotionalSafety: number;
  communicationRhythm: number;
  conflictStyle: number;
  attachmentCompatibility: number;
  sharedValues: number;
  lifestyleFit: number;
  futureCompatibility: number;
  regionalCompatibility: number;
  astrologyAlignment?: number;
}

export type MatchCategory = "compatibility" | "astro";

// =============================================================================
// Community + Safety
// =============================================================================

export type CommunityStanding =
  | "Verified member"
  | "Member in good standing"
  | "Reviewing"
  | "Limited";

export type SafetySignalKind =
  | "respectful"
  | "spam"
  | "harassment"
  | "objectifying"
  | "manipulative"
  | "abrupt";

export interface SafetySignal {
  kind: SafetySignalKind;
  label: string;
  description: string;
  severity: "info" | "soft" | "review";
}

// =============================================================================
// Profile
// =============================================================================

export interface Profile {
  id: string;
  name: string;
  age: number;

  // Identity
  genderIdentity: GenderIdentity;
  pronouns: Pronouns;
  orientation: Orientation;
  interestedIn: InterestedIn[];

  bio: string;

  // Relationship
  relationshipIntention: RelationshipIntention;
  partnershipShape: PartnershipShape;
  communicationStyle: CommunicationStyle;
  conflictStyle: ConflictStyle;
  attachmentStyle: AttachmentStyle;
  emotionalNeeds: EmotionalNeed[];

  // Values & lifestyle
  values: CoreValue[];
  loveLanguages: LoveLanguage[];
  lifestyle: LifestyleRhythm[];
  socialEnergy: SocialEnergy;
  futureGoals: FutureGoal[];
  familyViews: FamilyView;

  // Optional cosmic flavor
  astrologySign?: AstrologySign;
  birthChartStyle?: BirthChartStyle;

  // Location is private; UI shows "Within your compatibility region"
  location: Location;

  // Dealbreakers
  dealbreakers: Dealbreaker[];

  // Prompts
  prompts: Prompts;
  highlightPromptKey: keyof Prompts;

  // Compatibility (precomputed for prototype)
  compatibility: number;
  astroCompatibility: number;
  breakdown: CompatibilityBreakdown;
  sharedValues: CoreValue[];
  matchRationale: string;
  matchExplanation: string;

  // Visual accent
  accent: "blush" | "peach" | "lilac" | "sky" | "mauve" | "plum";

  // Community
  standing: CommunityStanding;
}

// =============================================================================
// Chat
// =============================================================================

export interface ChatMessage {
  id: string;
  authorId: string; // 'me' for the current user, otherwise profile id
  text: string;
  time: string;
  safety?: SafetySignal;
  rewriteSuggestion?: string;
}
