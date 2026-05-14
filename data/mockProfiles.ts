import type { ChatMessage, Profile } from "@/types";

export const mockProfiles: Profile[] = [
  {
    id: "elias",
    name: "Elias",
    age: 31,
    city: "Brooklyn, NY",
    pronouns: "he/him",
    bio: "Therapist by training, romantic by nature. I love long dinners, slow mornings, and the kind of friendships that turn into family.",
    intention: "Life partner",
    style: "Monogamous",
    communication: "I value direct honesty",
    values: [
      "Emotional maturity",
      "Kindness",
      "Loyalty",
      "Growth",
      "Family",
      "Community",
    ],
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
    },
    compatibility: 94,
    breakdown: {
      relationshipIntention: 98,
      communicationStyle: 92,
      emotionalAvailability: 96,
      sharedValues: 90,
      lifestyleFit: 88,
    },
    sharedValues: ["Emotional maturity", "Kindness", "Loyalty"],
    highlightPromptKey: "loveMeans",
    accent: "rose",
  },
  {
    id: "noah",
    name: "Noah",
    age: 34,
    city: "Portland, OR",
    pronouns: "he/him",
    bio: "Architect who designs quiet spaces. I believe in second coffees, third dates, and not rushing what's meant to last.",
    intention: "Serious relationship",
    style: "Monogamous",
    communication: "I prefer slower thoughtful replies",
    values: [
      "Stability",
      "Creativity",
      "Emotional maturity",
      "Growth",
      "Loyalty",
    ],
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
    },
    compatibility: 89,
    breakdown: {
      relationshipIntention: 94,
      communicationStyle: 85,
      emotionalAvailability: 90,
      sharedValues: 88,
      lifestyleFit: 86,
    },
    sharedValues: ["Emotional maturity", "Growth", "Loyalty"],
    highlightPromptKey: "greenFlag",
    accent: "violet",
  },
  {
    id: "sam",
    name: "Sam",
    age: 28,
    city: "Austin, TX",
    pronouns: "he/they",
    bio: "Music teacher and amateur baker. Looking for someone who takes their feelings seriously and their hobbies playfully.",
    intention: "Slow dating",
    style: "Open to discussing",
    communication: "I need emotional reassurance",
    values: [
      "Kindness",
      "Creativity",
      "Community",
      "Adventure",
      "Growth",
      "Emotional maturity",
    ],
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
    },
    compatibility: 86,
    breakdown: {
      relationshipIntention: 84,
      communicationStyle: 88,
      emotionalAvailability: 92,
      sharedValues: 82,
      lifestyleFit: 84,
    },
    sharedValues: ["Kindness", "Creativity", "Growth"],
    highlightPromptKey: "lifeFeel",
    accent: "mauve",
  },
  {
    id: "julian",
    name: "Julian",
    age: 36,
    city: "Chicago, IL",
    pronouns: "he/him",
    bio: "Hospital chaplain. I've learned that real intimacy is mostly listening. Looking for a partner I can build a quiet, honest life with.",
    intention: "Life partner",
    style: "Monogamous",
    communication: "I like independence and space",
    values: [
      "Emotional maturity",
      "Loyalty",
      "Family",
      "Community",
      "Stability",
      "Kindness",
    ],
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
      greenFlag:
        "I'll show up for your hard week without needing to be asked twice.",
      idealSunday:
        "A long service of nothing — coffee, the paper, a nap, dinner with people we love.",
    },
    compatibility: 83,
    breakdown: {
      relationshipIntention: 96,
      communicationStyle: 78,
      emotionalAvailability: 88,
      sharedValues: 84,
      lifestyleFit: 80,
    },
    sharedValues: ["Emotional maturity", "Loyalty", "Family"],
    highlightPromptKey: "handleConflict",
    accent: "indigo",
  },
  {
    id: "marco",
    name: "Marco",
    age: 30,
    city: "Seattle, WA",
    pronouns: "he/him",
    bio: "Climate researcher with a soft spot for poetry. Trying to date the way I'd want to be dated: patiently, honestly, on purpose.",
    intention: "Serious relationship",
    style: "Monogamous",
    communication: "I like frequent communication",
    values: [
      "Growth",
      "Community",
      "Kindness",
      "Adventure",
      "Emotional maturity",
    ],
    dealbreakers: [
      "Not emotionally available",
      "Poor communication",
      "Dishonesty",
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
    },
    compatibility: 81,
    breakdown: {
      relationshipIntention: 88,
      communicationStyle: 86,
      emotionalAvailability: 84,
      sharedValues: 78,
      lifestyleFit: 76,
    },
    sharedValues: ["Growth", "Kindness", "Emotional maturity"],
    highlightPromptKey: "idealSunday",
    accent: "sky",
  },
];

export function getProfileById(id: string): Profile | undefined {
  return mockProfiles.find((p) => p.id === id);
}

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
};
