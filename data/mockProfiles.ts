import type { ChatMessage, Profile } from "@/types";

/**
 * Ten hand-written profiles spanning the LGBTQIA+ spectrum.
 *
 * Region notes:
 *   - `broadRegion` is the profile owner's home region.
 *   - `datingRegion` is the set of regions they're open to dating across.
 *   - The UI never reveals exact city or distance. We only ever surface
 *     "Regionally aligned" or "Within your dating region" badges.
 */
export const mockProfiles: Profile[] = [
  {
    id: "elias",
    name: "Elias",
    age: 31,
    genderIdentity: "Man",
    pronouns: "he/him",
    orientation: "Gay",
    interestedIn: ["Men", "Trans men", "Nonbinary people"],
    bio: "Therapist by training, romantic by nature. I love long dinners, slow mornings, and friendships that turn into family.",
    relationshipIntention: "Life partner",
    relationshipStructure: "Monogamous",
    communicationStyle: "I value direct honesty",
    conflictStyle: "I name what I feel early",
    attachmentStyle: "Secure",
    emotionalNeeds: [
      "Consistent communication",
      "Quality time",
      "Verbal reassurance",
    ],
    values: [
      "Emotional maturity",
      "Kindness",
      "Loyalty",
      "Growth",
      "Family",
      "Community",
    ],
    loveLanguages: ["Quality time", "Words of affirmation", "Acts of service"],
    lifestyle: ["Balanced and routined", "Quiet weekdays, social weekends"],
    futureGoals: [
      "Build a long-term partnership",
      "Open to marriage",
      "Open to kids",
    ],
    familyViews: "Open to kids",
    astrologySign: "Cancer",
    birthChartStyle: "Moon-led",
    broadRegion: "GTA",
    datingRegion: ["GTA", "Greater Golden Horseshoe", "Southern Ontario"],
    dealbreakers: [
      "Not emotionally available",
      "Dishonesty",
      "Disrespectful behavior",
    ],
    prompts: {
      lifeFeel:
        "Steady. Like a Sunday afternoon that doesn't need to prove anything.",
      loveMeans:
        "Being chosen on the ordinary days, not just the cinematic ones.",
      handleConflict:
        "I pause, I listen, I come back. I'd rather be soft than right.",
      greenFlag:
        "I remember the small things — your coffee order, your sister's name, the song you cried to once.",
      idealSunday:
        "Farmer's market, slow brunch, a long walk, and reading on the couch with someone whose foot is touching mine.",
      feelSafe:
        "Being met without having to translate myself. Soft eyes, slow questions, no scorekeeping.",
    },
    highlightPromptKey: "loveMeans",
    compatibility: 94,
    astroCompatibility: 88,
    breakdown: {
      identityFit: 96,
      relationshipIntention: 98,
      emotionalAvailability: 96,
      communicationRhythm: 92,
      conflictStyle: 90,
      sharedValues: 90,
      lifestyleFit: 88,
      regionalCompatibility: 95,
      astrologyAlignment: 86,
    },
    sharedValues: ["Emotional maturity", "Kindness", "Loyalty"],
    matchRationale:
      "You both want a life partner, value emotional maturity, and communicate honestly. Same broad region too.",
    accent: "rose",
    standing: "Verified member",
  },
  {
    id: "noah",
    name: "Noah",
    age: 34,
    genderIdentity: "Man",
    pronouns: "he/him",
    orientation: "Queer",
    interestedIn: ["Men", "Nonbinary people", "Genderqueer / genderfluid people"],
    bio: "Architect who designs quiet spaces. I believe in second coffees, third dates, and not rushing what's meant to last.",
    relationshipIntention: "Serious relationship",
    relationshipStructure: "Monogamous",
    communicationStyle: "I prefer slower thoughtful replies",
    conflictStyle: "I work through it through writing",
    attachmentStyle: "Secure",
    emotionalNeeds: ["Quality time", "Acts of care", "Space to recharge"],
    values: [
      "Stability",
      "Creativity",
      "Emotional maturity",
      "Growth",
      "Loyalty",
    ],
    loveLanguages: ["Quality time", "Acts of service"],
    lifestyle: ["Quiet weekdays, social weekends", "Early riser, slow morning"],
    futureGoals: [
      "Co-create a calm, creative life",
      "Build a long-term partnership",
      "Move cities together one day",
    ],
    familyViews: "Open to kids",
    astrologySign: "Taurus",
    birthChartStyle: "Sun-led",
    broadRegion: "Vancouver Region",
    datingRegion: ["Vancouver Region", "Northern USA"],
    dealbreakers: [
      "Poor communication",
      "Not looking for commitment",
      "Disrespectful behavior",
    ],
    prompts: {
      lifeFeel:
        "Warm. A house full of plants, books, and someone humming in the kitchen.",
      loveMeans:
        "Coming home to a person who feels like a quiet room after a loud day.",
      handleConflict:
        "I take a beat, then I show up honestly. I won't disappear on you.",
      greenFlag:
        "I notice when you go quiet and I gently ask what's underneath it.",
      idealSunday:
        "Pottery studio in the morning, ramen at our spot, then a long evening walk by the river.",
      feelSafe:
        "Predictability with warmth. Knowing what I'm walking into, even when the day is hard.",
    },
    highlightPromptKey: "greenFlag",
    compatibility: 89,
    astroCompatibility: 76,
    breakdown: {
      identityFit: 92,
      relationshipIntention: 94,
      emotionalAvailability: 90,
      communicationRhythm: 85,
      conflictStyle: 84,
      sharedValues: 88,
      lifestyleFit: 86,
      regionalCompatibility: 88,
      astrologyAlignment: 76,
    },
    sharedValues: ["Emotional maturity", "Growth", "Loyalty"],
    matchRationale:
      "Same intention, complementary communication rhythms, and a quiet shared aesthetic of life.",
    accent: "lilac",
    standing: "Verified member",
  },
  {
    id: "sam",
    name: "Sam",
    age: 28,
    genderIdentity: "Nonbinary",
    pronouns: "they/them",
    orientation: "Queer",
    interestedIn: [
      "Everyone across the LGBTQIA+ spectrum",
    ],
    bio: "Music teacher and amateur baker. Looking for someone who takes their feelings seriously and their hobbies playfully.",
    relationshipIntention: "Slow dating",
    relationshipStructure: "Open to discussing",
    communicationStyle: "I need emotional reassurance",
    conflictStyle: "I want to repair the same day",
    attachmentStyle: "Anxious-leaning, working on it",
    emotionalNeeds: [
      "Verbal reassurance",
      "Consistent communication",
      "Shared rituals",
    ],
    values: [
      "Kindness",
      "Creativity",
      "Community",
      "Adventure",
      "Growth",
      "Emotional maturity",
    ],
    loveLanguages: ["Words of affirmation", "Quality time", "Thoughtful gifts"],
    lifestyle: ["Spontaneous and flexible", "Night owl, late conversations"],
    futureGoals: [
      "Co-create a calm, creative life",
      "Open to chosen family without kids",
      "Travel often together",
    ],
    familyViews: "Still figuring it out",
    astrologySign: "Pisces",
    birthChartStyle: "Moon-led",
    broadRegion: "Southern Ontario",
    datingRegion: ["Southern Ontario", "GTA", "Ottawa Region"],
    dealbreakers: [
      "Not emotionally available",
      "Disrespectful behavior",
      "Poor communication",
    ],
    prompts: {
      lifeFeel:
        "Like a porch with string lights — open, soft, a little bit loud with laughter.",
      loveMeans:
        "Telling the truth even when your voice shakes, and being met anyway.",
      handleConflict:
        "I name what I'm feeling early so it doesn't turn into something bigger.",
      greenFlag:
        "I send you the song that reminded me of you before I overthink it.",
      idealSunday:
        "Pancakes, a record store, and an evening of nothing planned with someone I actually like talking to.",
      feelSafe:
        "Reassurance, even when it sounds obvious. I want to feel like I never have to read between lines.",
    },
    highlightPromptKey: "lifeFeel",
    compatibility: 86,
    astroCompatibility: 91,
    breakdown: {
      identityFit: 90,
      relationshipIntention: 84,
      emotionalAvailability: 92,
      communicationRhythm: 88,
      conflictStyle: 86,
      sharedValues: 82,
      lifestyleFit: 84,
      regionalCompatibility: 90,
      astrologyAlignment: 91,
    },
    sharedValues: ["Kindness", "Creativity", "Growth"],
    matchRationale:
      "Open communication, shared creative values, and a love language overlap around quality time.",
    accent: "blush",
    standing: "Verified member",
  },
  {
    id: "julian",
    name: "Julian",
    age: 36,
    genderIdentity: "Man",
    pronouns: "he/him",
    orientation: "Gay",
    interestedIn: ["Men", "Trans men"],
    bio: "Hospital chaplain. I've learned that real intimacy is mostly listening. Looking for a partner I can build a quiet, honest life with.",
    relationshipIntention: "Life partner",
    relationshipStructure: "Monogamous",
    communicationStyle: "I like independence and space",
    conflictStyle: "I take space and come back gently",
    attachmentStyle: "Secure",
    emotionalNeeds: [
      "Being understood without explaining",
      "Space to recharge",
      "Quality time",
    ],
    values: [
      "Emotional maturity",
      "Loyalty",
      "Family",
      "Community",
      "Stability",
      "Kindness",
      "Spirituality",
    ],
    loveLanguages: ["Quality time", "Acts of service", "Physical touch"],
    lifestyle: ["Early riser, slow morning", "Balanced and routined"],
    futureGoals: [
      "Build a long-term partnership",
      "Open to marriage",
      "Open to fostering or adopting",
    ],
    familyViews: "Open to fostering or adopting",
    astrologySign: "Virgo",
    birthChartStyle: "Rising-led",
    broadRegion: "Ottawa Region",
    datingRegion: ["Ottawa Region", "Montreal Region", "GTA"],
    dealbreakers: [
      "Dishonesty",
      "Not looking for commitment",
      "Incompatible relationship goals",
    ],
    prompts: {
      lifeFeel:
        "Grounded. Like good bread and a long marriage of small kindnesses.",
      loveMeans:
        "Choosing each other, gently, every morning — even when it's not easy.",
      handleConflict:
        "Slowly and with care. I don't yell. I ask what we're really fighting about.",
      greenFlag: "I'll show up for your hard week without needing to be asked twice.",
      idealSunday:
        "A long service of nothing — coffee, the paper, a nap, dinner with people we love.",
      feelSafe:
        "Being trusted with your harder days, not just your easier ones.",
    },
    highlightPromptKey: "handleConflict",
    compatibility: 83,
    astroCompatibility: 70,
    breakdown: {
      identityFit: 88,
      relationshipIntention: 96,
      emotionalAvailability: 88,
      communicationRhythm: 78,
      conflictStyle: 82,
      sharedValues: 84,
      lifestyleFit: 80,
      regionalCompatibility: 76,
      astrologyAlignment: 70,
    },
    sharedValues: ["Emotional maturity", "Loyalty", "Family"],
    matchRationale:
      "Same long-term intention and overlapping values around family, loyalty, and steady care.",
    accent: "plum",
    standing: "Verified member",
  },
  {
    id: "marco",
    name: "Marco",
    age: 30,
    genderIdentity: "Trans man",
    pronouns: "he/him",
    orientation: "Queer",
    interestedIn: ["Men", "Nonbinary people", "Genderqueer / genderfluid people"],
    bio: "Climate researcher with a soft spot for poetry. Trying to date the way I'd want to be dated — patiently, honestly, on purpose.",
    relationshipIntention: "Serious relationship",
    relationshipStructure: "Monogamous",
    communicationStyle: "I like frequent communication",
    conflictStyle: "I name what I feel early",
    attachmentStyle: "In therapy and learning",
    emotionalNeeds: [
      "Consistent communication",
      "Verbal reassurance",
      "Being understood without explaining",
    ],
    values: [
      "Growth",
      "Community",
      "Kindness",
      "Adventure",
      "Emotional maturity",
      "Justice",
    ],
    loveLanguages: ["Words of affirmation", "Quality time"],
    lifestyle: ["Always a little adventurous", "Quiet weekdays, social weekends"],
    futureGoals: [
      "Build a long-term partnership",
      "Travel often together",
      "Co-create a calm, creative life",
    ],
    familyViews: "Open to kids",
    astrologySign: "Aquarius",
    birthChartStyle: "Sun-led",
    broadRegion: "GTA",
    datingRegion: ["GTA", "Greater Golden Horseshoe"],
    dealbreakers: [
      "Not emotionally available",
      "Poor communication",
      "Dishonesty",
      "Won't respect boundaries",
    ],
    prompts: {
      lifeFeel:
        "Quietly hopeful. A small apartment, big windows, and someone worth coming home to.",
      loveMeans:
        "Letting someone see the parts of you that are still becoming.",
      handleConflict:
        "I'll say the awkward thing instead of the polite thing. I'd rather be honest than smooth.",
      greenFlag:
        "I ask follow-up questions. I want to actually know you, not just date you.",
      idealSunday:
        "Hike in the morning, oysters in the afternoon, slow conversation that runs into night.",
      feelSafe:
        "Being someone's first thought, not their backup plan. Direct, kind, and consistent.",
    },
    highlightPromptKey: "idealSunday",
    compatibility: 81,
    astroCompatibility: 84,
    breakdown: {
      identityFit: 86,
      relationshipIntention: 88,
      emotionalAvailability: 84,
      communicationRhythm: 86,
      conflictStyle: 82,
      sharedValues: 78,
      lifestyleFit: 76,
      regionalCompatibility: 92,
      astrologyAlignment: 84,
    },
    sharedValues: ["Growth", "Kindness", "Emotional maturity"],
    matchRationale:
      "Same broad region, aligned communication rhythms, and shared values around growth and justice.",
    accent: "sky",
    standing: "Verified member",
  },
  {
    id: "amara",
    name: "Amara",
    age: 29,
    genderIdentity: "Woman",
    pronouns: "she/her",
    orientation: "Lesbian",
    interestedIn: ["Women", "Trans women", "Nonbinary people"],
    bio: "Documentary filmmaker, slow texter, fast laugher. Building a life around honesty and warm Sundays.",
    relationshipIntention: "Life partner",
    relationshipStructure: "Monogamous",
    communicationStyle: "I prefer slower thoughtful replies",
    conflictStyle: "I need a pause, then return calmly",
    attachmentStyle: "Secure",
    emotionalNeeds: ["Quality time", "Acts of care", "Shared rituals"],
    values: [
      "Emotional maturity",
      "Kindness",
      "Family",
      "Loyalty",
      "Creativity",
      "Community",
    ],
    loveLanguages: ["Quality time", "Acts of service", "Thoughtful gifts"],
    lifestyle: ["Balanced and routined", "Quiet weekdays, social weekends"],
    futureGoals: [
      "Build a long-term partnership",
      "Open to marriage",
      "Open to kids",
    ],
    familyViews: "I want kids",
    astrologySign: "Libra",
    birthChartStyle: "Rising-led",
    broadRegion: "Montreal Region",
    datingRegion: ["Montreal Region", "Ottawa Region", "GTA"],
    dealbreakers: [
      "Not emotionally available",
      "Disrespectful behavior",
      "Dishonesty",
    ],
    prompts: {
      lifeFeel:
        "Like the last hour of golden light — full, warm, and a little bit grateful.",
      loveMeans:
        "Being the person who gets the unedited story first.",
      handleConflict:
        "I need a beat. Then I always come back, softer than I left.",
      greenFlag:
        "I'll ask what you actually need before I assume.",
      idealSunday:
        "Croissants, a slow gallery walk, then a long phone-off dinner.",
      feelSafe:
        "Someone who's already done their own work and isn't asking me to do it for them.",
    },
    highlightPromptKey: "feelSafe",
    compatibility: 92,
    astroCompatibility: 93,
    breakdown: {
      identityFit: 95,
      relationshipIntention: 96,
      emotionalAvailability: 92,
      communicationRhythm: 88,
      conflictStyle: 86,
      sharedValues: 90,
      lifestyleFit: 84,
      regionalCompatibility: 78,
      astrologyAlignment: 93,
    },
    sharedValues: ["Emotional maturity", "Kindness", "Family"],
    matchRationale:
      "Long-term intention, deeply aligned values, and complementary communication.",
    accent: "blush",
    standing: "Verified member",
  },
  {
    id: "rhea",
    name: "Rhea",
    age: 33,
    genderIdentity: "Trans woman",
    pronouns: "she/her",
    orientation: "Sapphic",
    interestedIn: ["Women", "Trans women", "Nonbinary people"],
    bio: "Editor and weekend cellist. I value softness, patience, and the kind of partner who can sit in quiet with me.",
    relationshipIntention: "Serious relationship",
    relationshipStructure: "Monogamous",
    communicationStyle: "I value direct honesty",
    conflictStyle: "I want to repair the same day",
    attachmentStyle: "Secure",
    emotionalNeeds: [
      "Verbal reassurance",
      "Quality time",
      "Being understood without explaining",
    ],
    values: ["Kindness", "Loyalty", "Emotional maturity", "Justice", "Growth"],
    loveLanguages: ["Words of affirmation", "Quality time"],
    lifestyle: ["Early riser, slow morning"],
    futureGoals: [
      "Build a long-term partnership",
      "Open to marriage",
      "Co-create a calm, creative life",
    ],
    familyViews: "Open to kids",
    astrologySign: "Scorpio",
    birthChartStyle: "Moon-led",
    broadRegion: "GTA",
    datingRegion: ["GTA", "Greater Golden Horseshoe", "Ottawa Region"],
    dealbreakers: [
      "Disrespectful behavior",
      "Dishonesty",
      "Won't respect boundaries",
    ],
    prompts: {
      lifeFeel:
        "Slow, intentional, and a little bit musical. Tea steeping. A window open.",
      loveMeans:
        "Showing up for the quiet middle, not just the dramatic beginning.",
      handleConflict:
        "Directly and kindly. I won't leave you guessing.",
      greenFlag:
        "I'll ask, plainly, what you'd like more or less of — and I'll mean it.",
      idealSunday:
        "Morning rehearsal, a small bookstore, then dinner I cooked with you.",
      feelSafe:
        "Being explicitly chosen, not just defaulted to.",
    },
    highlightPromptKey: "loveMeans",
    compatibility: 88,
    astroCompatibility: 78,
    breakdown: {
      identityFit: 92,
      relationshipIntention: 92,
      emotionalAvailability: 90,
      communicationRhythm: 86,
      conflictStyle: 90,
      sharedValues: 84,
      lifestyleFit: 82,
      regionalCompatibility: 95,
      astrologyAlignment: 78,
    },
    sharedValues: ["Kindness", "Loyalty", "Emotional maturity"],
    matchRationale:
      "Both ready for something serious, with direct communication and aligned regions.",
    accent: "lilac",
    standing: "Verified member",
  },
  {
    id: "ines",
    name: "Inés",
    age: 27,
    genderIdentity: "Genderfluid",
    pronouns: "she/they",
    orientation: "Pansexual",
    interestedIn: [
      "Women",
      "Nonbinary people",
      "Trans women",
      "Genderqueer / genderfluid people",
    ],
    bio: "Public-school art teacher with a tiny garden. Looking for someone who's gentle with their feelings and curious about mine.",
    relationshipIntention: "Slow dating",
    relationshipStructure: "Open to discussing",
    communicationStyle: "I like frequent communication",
    conflictStyle: "I work through it through writing",
    attachmentStyle: "Anxious-leaning, working on it",
    emotionalNeeds: ["Consistent communication", "Shared rituals", "Verbal reassurance"],
    values: ["Creativity", "Kindness", "Community", "Growth", "Curiosity"],
    loveLanguages: ["Words of affirmation", "Quality time", "Acts of service"],
    lifestyle: ["Spontaneous and flexible", "Night owl, late conversations"],
    futureGoals: ["Co-create a calm, creative life", "Travel often together"],
    familyViews: "Still figuring it out",
    astrologySign: "Gemini",
    birthChartStyle: "Just here for fun",
    broadRegion: "Greater Golden Horseshoe",
    datingRegion: ["Greater Golden Horseshoe", "GTA", "Southern Ontario"],
    dealbreakers: [
      "Poor communication",
      "Disrespectful behavior",
      "Pushes physical pace too fast",
    ],
    prompts: {
      lifeFeel:
        "A small kitchen full of herbs and music, and someone reading by the window.",
      loveMeans:
        "Being curious about each other long past the easy part.",
      handleConflict:
        "I write you a long, honest note. Then we talk it through over tea.",
      greenFlag:
        "I'll ask about your inner world, not just your week.",
      idealSunday:
        "Watercolors, a long walk in the park, and a movie I've made you watch.",
      feelSafe:
        "Knowing that my softness won't be used against me.",
    },
    highlightPromptKey: "greenFlag",
    compatibility: 85,
    astroCompatibility: 80,
    breakdown: {
      identityFit: 88,
      relationshipIntention: 80,
      emotionalAvailability: 88,
      communicationRhythm: 90,
      conflictStyle: 82,
      sharedValues: 84,
      lifestyleFit: 86,
      regionalCompatibility: 90,
      astrologyAlignment: 80,
    },
    sharedValues: ["Kindness", "Creativity", "Growth"],
    matchRationale:
      "Curious, communicative, and creative. Same broader region too.",
    accent: "peach",
    standing: "Verified member",
  },
  {
    id: "kai",
    name: "Kai",
    age: 32,
    genderIdentity: "Nonbinary",
    pronouns: "they/them",
    orientation: "Bisexual",
    interestedIn: [
      "Women",
      "Men",
      "Nonbinary people",
      "Trans women",
      "Trans men",
    ],
    bio: "UX designer who runs a small queer book club on weekends. I'm a slow burner and proud of it.",
    relationshipIntention: "Serious relationship",
    relationshipStructure: "Monogamish",
    communicationStyle: "I prefer slower thoughtful replies",
    conflictStyle: "I take space and come back gently",
    attachmentStyle: "Avoidant-leaning, working on it",
    emotionalNeeds: ["Space to recharge", "Quality time", "Acts of care"],
    values: ["Creativity", "Loyalty", "Honesty", "Growth", "Community"],
    loveLanguages: ["Quality time", "Acts of service"],
    lifestyle: ["Balanced and routined", "Quiet weekdays, social weekends"],
    futureGoals: [
      "Build a long-term partnership",
      "Open to chosen family without kids",
      "Co-create a calm, creative life",
    ],
    familyViews: "I don't want kids",
    astrologySign: "Capricorn",
    birthChartStyle: "Sun-led",
    broadRegion: "Vancouver Region",
    datingRegion: ["Vancouver Region"],
    dealbreakers: [
      "Dishonesty",
      "Poor communication",
      "Not looking for commitment",
    ],
    prompts: {
      lifeFeel:
        "Quietly curated. A few good friends, a few good rituals, a lot of breathing room.",
      loveMeans:
        "Trust that doesn't need to be re-earned every week.",
      handleConflict:
        "I'll ask for a night to think. I'll always come back.",
      greenFlag:
        "I'll text you mid-week just to say I was thinking about you.",
      idealSunday:
        "Coffee in bed, book club, then dinner with one good friend.",
      feelSafe:
        "Not having to perform for someone who already chose me.",
    },
    highlightPromptKey: "lifeFeel",
    compatibility: 84,
    astroCompatibility: 72,
    breakdown: {
      identityFit: 86,
      relationshipIntention: 88,
      emotionalAvailability: 84,
      communicationRhythm: 84,
      conflictStyle: 80,
      sharedValues: 82,
      lifestyleFit: 88,
      regionalCompatibility: 88,
      astrologyAlignment: 72,
    },
    sharedValues: ["Loyalty", "Growth", "Community"],
    matchRationale:
      "Slow, considered, and clear about what they want. Compatible rhythms.",
    accent: "sky",
    standing: "Verified member",
  },
  {
    id: "owen",
    name: "Owen",
    age: 35,
    genderIdentity: "Man",
    pronouns: "he/him",
    orientation: "Asexual",
    interestedIn: ["Men", "Nonbinary people"],
    bio: "Veterinarian, gardener, slow-cooker, slow-faller. Looking for a partner I can build a quiet, devoted life with.",
    relationshipIntention: "Life partner",
    relationshipStructure: "Monogamous",
    communicationStyle: "I value direct honesty",
    conflictStyle: "I name what I feel early",
    attachmentStyle: "Secure",
    emotionalNeeds: ["Quality time", "Acts of care", "Being understood without explaining"],
    values: ["Stability", "Kindness", "Loyalty", "Family", "Growth"],
    loveLanguages: ["Acts of service", "Quality time", "Words of affirmation"],
    lifestyle: ["Early riser, slow morning", "Balanced and routined"],
    futureGoals: [
      "Build a long-term partnership",
      "Open to marriage",
      "Open to fostering or adopting",
    ],
    familyViews: "Open to fostering or adopting",
    astrologySign: "Taurus",
    birthChartStyle: "Rising-led",
    broadRegion: "Northern Ontario",
    datingRegion: ["Northern Ontario", "Ottawa Region", "Southern Ontario"],
    dealbreakers: [
      "Dishonesty",
      "Pushes physical pace too fast",
      "Won't respect boundaries",
    ],
    prompts: {
      lifeFeel:
        "Like a house I've slowly made my own — warm, considered, and full of small living things.",
      loveMeans:
        "Choosing closeness in your own language, on your own pace, and being met there.",
      handleConflict:
        "Honestly and early. I'd rather have an awkward conversation than a quiet resentment.",
      greenFlag:
        "I make space for what 'love' means to you, even if it doesn't look like the script.",
      idealSunday:
        "The garden in the morning, a long lunch, a movie, an early evening walk with the dog.",
      feelSafe:
        "Being trusted with your pace — and trusting mine in return.",
    },
    highlightPromptKey: "feelSafe",
    compatibility: 80,
    astroCompatibility: 74,
    breakdown: {
      identityFit: 84,
      relationshipIntention: 94,
      emotionalAvailability: 90,
      communicationRhythm: 78,
      conflictStyle: 86,
      sharedValues: 82,
      lifestyleFit: 80,
      regionalCompatibility: 72,
      astrologyAlignment: 74,
    },
    sharedValues: ["Loyalty", "Kindness", "Growth"],
    matchRationale:
      "Same long-term intention and explicit care for pace, boundaries, and quiet devotion.",
    accent: "peach",
    standing: "Verified member",
  },
];

export function getProfileById(id: string): Profile | undefined {
  return mockProfiles.find((p) => p.id === id);
}

// =============================================================================
// Match selection (mock)
// =============================================================================

// In the prototype we treat all profiles as compatible with the "current user"
// (whose preferences we keep loose so the demo always shows a rich list).
// In production this would respect identity, attraction settings, dealbreakers,
// and broad region overlap.

export function getCompatibilityMatches(): Profile[] {
  return [...mockProfiles]
    .sort((a, b) => b.compatibility - a.compatibility)
    .slice(0, 5);
}

export function getAstroMatches(): Profile[] {
  return [...mockProfiles]
    .sort((a, b) => b.astroCompatibility - a.astroCompatibility)
    .slice(0, 5);
}

// =============================================================================
// Mock chat threads
// =============================================================================

export const mockMessagesByProfileId: Record<string, ChatMessage[]> = {
  elias: [
    {
      id: "m1",
      authorId: "elias",
      text: "Hi — your line about wanting a life that feels like a Sunday afternoon really stayed with me.",
      time: "Yesterday · 8:42 PM",
    },
    {
      id: "m2",
      authorId: "me",
      text: "That means a lot. I think I'm finally at an age where 'quiet' sounds like a love language.",
      time: "Yesterday · 9:15 PM",
    },
    {
      id: "m3",
      authorId: "elias",
      text: "Same. What does emotional honesty look like for you on a regular Tuesday, not just on a big date?",
      time: "Today · 7:58 AM",
    },
  ],
  noah: [
    {
      id: "m1",
      authorId: "noah",
      text: "I really liked your answer about coming home to a person who feels like a quiet room. That landed.",
      time: "Today · 11:02 AM",
    },
  ],
  sam: [
    {
      id: "m1",
      authorId: "me",
      text: "Your ideal Sunday sounds close to mine — what would make it perfect?",
      time: "Today · 9:30 AM",
    },
    {
      id: "m2",
      authorId: "sam",
      text: "Honestly? Not having to perform. Pancakes, a record on, no phone, and someone who laughs at my bad puns.",
      time: "Today · 9:47 AM",
    },
  ],
  julian: [],
  marco: [],
  amara: [
    {
      id: "m1",
      authorId: "amara",
      text: "Your answer about being met without translating yourself made me put my phone down for a minute.",
      time: "Today · 10:14 AM",
    },
  ],
  rhea: [],
  ines: [],
  kai: [],
  owen: [],
};
