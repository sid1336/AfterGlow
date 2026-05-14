import type { ChatMessage, CompatibilityBreakdown, Profile } from "@/types";

/**
 * Fifteen emotionally rich profiles spanning a worldwide set of countries.
 *
 * The UI never reveals exact city, distance, maps, or live location. The
 * location object is only used by the backend (and by the prototype's
 * matching helpers) to keep matches within a private 200 km compatibility
 * region inside the same country.
 */

function bd(
  partial: Partial<CompatibilityBreakdown>
): CompatibilityBreakdown {
  return {
    identityFit: 90,
    relationshipIntention: 90,
    emotionalAvailability: 88,
    emotionalSafety: 86,
    communicationRhythm: 86,
    conflictStyle: 84,
    attachmentCompatibility: 84,
    sharedValues: 85,
    lifestyleFit: 82,
    futureCompatibility: 84,
    regionalCompatibility: 90,
    ...partial,
  };
}

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
    partnershipShape: "A life companion",
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
    socialEnergy: "Mostly introverted, small groups",
    futureGoals: [
      "Build a long-term partnership",
      "Open to marriage",
      "Open to kids",
    ],
    familyViews: "Open to kids",
    astrologySign: "Cancer",
    birthChartStyle: "Moon-led",
    location: {
      continent: "North America",
      country: "Canada",
      region: "Ontario",
      city: "Toronto",
    },
    dealbreakers: [
      "Not emotionally available",
      "Dishonesty",
      "Disrespectful behavior",
    ],
    prompts: {
      lifeFeel:
        "Steady. Like a Sunday afternoon that doesn't need to prove anything. A small kitchen full of music, two pairs of mugs on the counter, and someone whose plans for the day include me without making a thing of it. I want the kind of life that doesn't need to perform itself to feel romantic.",
      loveMeans:
        "Being chosen on the ordinary days, not just the cinematic ones. It's the quiet things: remembering my therapist's name, sitting with me through hard weeks, learning what my silence usually means before I have to translate it for you.",
      feelSafe:
        "Being met without having to translate myself. Soft eyes when something is hard, slow questions instead of fixes, and someone who treats my softness like a gift rather than a risk. Reassurance offered before I ask for it.",
      greenFlag:
        "I remember the small things, your coffee order, your sister's name, the song you cried to once. I'd rather take care of small details now than apologize for missing them later.",
      partnership:
        "A calm, devoted partnership where we keep choosing each other on the slow days. Two careers we respect, a kitchen we cook in often, a few good friends who become family, and the kind of trust that doesn't need a performance to keep itself alive.",
      conflictRepair:
        "I pause, I listen, I come back. I'd rather be soft than right. I will name what I'm feeling early so it doesn't compound, and I won't disappear on you when something is hard.",
      emotionalEnergy:
        "Warm, grounded, deeply honest. I'm not interested in performance or push-pull energy. I want someone who can be tender out loud and still hold their own, and who lets me do the same.",
      idealSunday:
        "Farmer's market, slow brunch, a long walk, and reading on the couch with someone whose foot is touching mine.",
    },
    highlightPromptKey: "loveMeans",
    compatibility: 94,
    astroCompatibility: 88,
    breakdown: bd({
      identityFit: 96,
      relationshipIntention: 98,
      emotionalAvailability: 96,
      emotionalSafety: 95,
      communicationRhythm: 92,
      conflictStyle: 90,
      attachmentCompatibility: 92,
      sharedValues: 90,
      lifestyleFit: 88,
      futureCompatibility: 94,
      regionalCompatibility: 95,
      astrologyAlignment: 86,
    }),
    sharedValues: ["Emotional maturity", "Kindness", "Loyalty"],
    matchRationale:
      "You both want a life partner, both value emotional maturity, and both communicate honestly. You sit in the same compatibility region too.",
    matchExplanation:
      "You both describe stability and affection in the same language, and you both want it to last.",
    accent: "mauve",
    standing: "Verified member",
  },
  {
    id: "noah",
    name: "Noah",
    age: 34,
    genderIdentity: "Man",
    pronouns: "he/him",
    orientation: "Queer",
    interestedIn: ["Men", "Nonbinary people", "Genderqueer or genderfluid people"],
    bio: "Architect who designs quiet spaces. I believe in second coffees, third dates, and not rushing what's meant to last.",
    relationshipIntention: "Serious relationship",
    partnershipShape: "A long-term partnership",
    communicationStyle: "I prefer slower thoughtful replies",
    conflictStyle: "I work through it through writing",
    attachmentStyle: "Secure",
    emotionalNeeds: ["Quality time", "Acts of care", "Space to recharge"],
    values: ["Stability", "Creativity", "Emotional maturity", "Growth", "Loyalty"],
    loveLanguages: ["Quality time", "Acts of service"],
    lifestyle: ["Quiet weekdays, social weekends", "Early riser, slow morning"],
    socialEnergy: "Mostly introverted, small groups",
    futureGoals: [
      "Co-create a calm, creative life",
      "Build a long-term partnership",
      "Move cities together one day",
    ],
    familyViews: "Open to kids",
    astrologySign: "Taurus",
    birthChartStyle: "Sun-led",
    location: {
      continent: "North America",
      country: "United States",
      region: "Oregon",
      city: "Portland",
    },
    dealbreakers: [
      "Poor communication",
      "Not looking for commitment",
      "Disrespectful behavior",
    ],
    prompts: {
      lifeFeel:
        "Warm. A house full of plants, books, and someone humming in the kitchen. The kind of week that has its own gentle rhythm, and a Sunday I am not trying to escape from. I want our life to feel like something we've chosen rather than something we landed in.",
      loveMeans:
        "Coming home to a person who feels like a quiet room after a loud day. Love is the small architecture of returning. Light in the window, dinner started, a hand on my back as I take off my shoes.",
      feelSafe:
        "Predictability with warmth. Knowing what I'm walking into, even when the day is hard. A partner who tells me the thing instead of letting me guess. Honesty in small things, not just the big ones.",
      greenFlag:
        "I notice when you go quiet and I gently ask what is underneath it. I don't take silence personally; I read it like architecture, what is it holding up and what does it need to feel supported.",
      partnership:
        "A long, slow build. We do the unglamorous work of repair often, we say what we mean, and we keep a small, well-tended life with room for the people we love. A relationship that doesn't need a performance to feel romantic.",
      conflictRepair:
        "I take a beat, then I show up honestly. I won't disappear on you. I will often write what I'm feeling first because that's how I find the truer version of it.",
      emotionalEnergy:
        "Steady, considered, soft. I value people who think before they speak and stay when it gets hard. I'm not built for chaos or push-pull energy; I'd rather have boring loyalty than dramatic intensity.",
      idealSunday:
        "Pottery studio in the morning, ramen at our spot, then a long evening walk by the river.",
    },
    highlightPromptKey: "greenFlag",
    compatibility: 89,
    astroCompatibility: 76,
    breakdown: bd({
      identityFit: 92,
      relationshipIntention: 94,
      emotionalAvailability: 90,
      emotionalSafety: 90,
      communicationRhythm: 85,
      conflictStyle: 84,
      attachmentCompatibility: 88,
      sharedValues: 88,
      lifestyleFit: 86,
      futureCompatibility: 90,
      regionalCompatibility: 88,
      astrologyAlignment: 76,
    }),
    sharedValues: ["Emotional maturity", "Growth", "Loyalty"],
    matchRationale:
      "Same intention, complementary communication rhythms, and a quiet shared aesthetic of life.",
    matchExplanation:
      "You appear aligned on long-term partnership goals and prefer the same calm pace.",
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
    interestedIn: ["Anyone who shares my values"],
    bio: "Music teacher and amateur baker. Looking for someone who takes their feelings seriously and their hobbies playfully.",
    relationshipIntention: "Slow dating",
    partnershipShape: "Slow intentional dating",
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
    socialEnergy: "Ambivert, depends on the day",
    futureGoals: [
      "Co-create a calm, creative life",
      "Open to chosen family without kids",
      "Travel often together",
    ],
    familyViews: "Still figuring it out",
    astrologySign: "Pisces",
    birthChartStyle: "Moon-led",
    location: {
      continent: "North America",
      country: "Canada",
      region: "Ontario",
      city: "Hamilton",
    },
    dealbreakers: [
      "Not emotionally available",
      "Disrespectful behavior",
      "Poor communication",
    ],
    prompts: {
      lifeFeel:
        "Like a porch with string lights. Open, soft, a little bit loud with laughter. I want a life I can invite people into, and a partner who treats my softness like a feature, not a leak. Music in the kitchen, late dinners, a friend always two streets away.",
      loveMeans:
        "Telling the truth even when your voice shakes, and being met anyway. Love is being witnessed at your most uncertain and still wanted in the morning. It is the patience of being known across time.",
      feelSafe:
        "Reassurance, even when it sounds obvious. I want to feel like I never have to read between lines. Tell me you love me on a Tuesday. Tell me when something is bothering you while it's still small.",
      greenFlag:
        "I send you the song that reminded me of you before I overthink it. I show up for my friends' boring weeks. I'd rather risk being too much than perform being chill.",
      partnership:
        "A relationship that feels like a creative project. Gentle, ongoing, full of inside jokes and shared rituals. We are each other's first listener for the half-finished thoughts, and we let love be domestic without losing the art of it.",
      conflictRepair:
        "I name what I'm feeling early so it doesn't turn into something bigger. I will cry sometimes. I won't punish you with silence.",
      emotionalEnergy:
        "Tender, expressive, a little romantic. I want someone who notices feelings out loud and meets mine without needing them to be smaller. Calm warmth over cool detachment, every time.",
      idealSunday:
        "Pancakes, a record store, and an evening of nothing planned with someone I actually like talking to.",
    },
    highlightPromptKey: "lifeFeel",
    compatibility: 86,
    astroCompatibility: 91,
    breakdown: bd({
      identityFit: 90,
      relationshipIntention: 84,
      emotionalAvailability: 92,
      emotionalSafety: 92,
      communicationRhythm: 88,
      conflictStyle: 86,
      attachmentCompatibility: 80,
      sharedValues: 82,
      lifestyleFit: 84,
      futureCompatibility: 80,
      regionalCompatibility: 90,
      astrologyAlignment: 91,
    }),
    sharedValues: ["Kindness", "Creativity", "Growth"],
    matchRationale:
      "Open communication, shared creative values, and a love language overlap around quality time.",
    matchExplanation:
      "You both value emotional reassurance and creative warmth in equal measure.",
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
    partnershipShape: "A life companion",
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
    socialEnergy: "Quietly introverted, recharge alone",
    futureGoals: [
      "Build a long-term partnership",
      "Open to marriage",
      "Open to fostering or adopting",
    ],
    familyViews: "Open to fostering or adopting",
    astrologySign: "Virgo",
    birthChartStyle: "Rising-led",
    location: {
      continent: "North America",
      country: "Canada",
      region: "Ontario",
      city: "Ottawa",
    },
    dealbreakers: [
      "Dishonesty",
      "Not looking for commitment",
      "Incompatible relationship goals",
    ],
    prompts: {
      lifeFeel:
        "Grounded. Like good bread and a long marriage of small kindnesses. A life I'm not trying to outrun, and a partner whose presence keeps me honest with myself. Slow mornings, full Sundays, friends who keep showing up.",
      loveMeans:
        "Choosing each other, gently, every morning, even when it's not easy. Love is the discipline of staying soft when you have every excuse to harden. It is patient, particular, and stubborn in a quiet way.",
      feelSafe:
        "Being trusted with your harder days, not just your easier ones. I want a partner who lets me see them tired, scared, unedited, and who lets me show up there with care, without making it a project.",
      greenFlag:
        "I will show up for your hard week without needing to be asked twice. I will bring soup. I will sit in the waiting room. I will be there before you notice I am needed.",
      partnership:
        "A long, quietly devoted partnership. Two people who choose each other every day without making it loud. A small home, a few good rituals, a family of people we keep promising back to.",
      conflictRepair:
        "Slowly and with care. I don't yell. I ask what we're really fighting about. I'd rather we are honest with each other than performatively easy.",
      emotionalEnergy:
        "Calm, attentive, deeply present. I'm not interested in intensity for its own sake. I value someone who listens like it's their job and shows up like it's their calling.",
      idealSunday:
        "A long service of nothing. Coffee, the paper, a nap, dinner with people we love.",
    },
    highlightPromptKey: "conflictRepair",
    compatibility: 83,
    astroCompatibility: 70,
    breakdown: bd({
      identityFit: 88,
      relationshipIntention: 96,
      emotionalAvailability: 88,
      emotionalSafety: 90,
      communicationRhythm: 78,
      conflictStyle: 82,
      attachmentCompatibility: 88,
      sharedValues: 84,
      lifestyleFit: 80,
      futureCompatibility: 88,
      regionalCompatibility: 76,
      astrologyAlignment: 70,
    }),
    sharedValues: ["Emotional maturity", "Loyalty", "Family"],
    matchRationale:
      "Same long-term intention and overlapping values around family, loyalty, and steady care.",
    matchExplanation:
      "You'd both rather build something quietly real than chase something briefly bright.",
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
    interestedIn: [
      "Men",
      "Nonbinary people",
      "Genderqueer or genderfluid people",
    ],
    bio: "Climate researcher with a soft spot for poetry. Trying to date the way I'd want to be dated. Patiently, honestly, on purpose.",
    relationshipIntention: "Serious relationship",
    partnershipShape: "A long-term partnership",
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
    lifestyle: [
      "Always a little adventurous",
      "Quiet weekdays, social weekends",
    ],
    socialEnergy: "Ambivert, depends on the day",
    futureGoals: [
      "Build a long-term partnership",
      "Travel often together",
      "Co-create a calm, creative life",
    ],
    familyViews: "Open to kids",
    astrologySign: "Aquarius",
    birthChartStyle: "Sun-led",
    location: {
      continent: "North America",
      country: "Canada",
      region: "Ontario",
      city: "Toronto",
    },
    dealbreakers: [
      "Not emotionally available",
      "Poor communication",
      "Dishonesty",
      "Won't respect boundaries",
    ],
    prompts: {
      lifeFeel:
        "Quietly hopeful. A small apartment, big windows, and someone worth coming home to. A life that has room for grief and joy in the same week. The kind of evenings where the wine gets warm because the conversation got better.",
      loveMeans:
        "Letting someone see the parts of you that are still becoming. Love isn't a finished photograph. It is the patient work of being witnessed in motion, and choosing to keep witnessing.",
      feelSafe:
        "Being someone's first thought, not their backup plan. Direct, kind, and consistent. People who say what they mean and trust me to do the same. No reading between lines.",
      greenFlag:
        "I ask follow-up questions. I want to actually know you, not just date you. I notice when you skirt around something and I ask gently, not as a gotcha.",
      partnership:
        "A relationship rooted in mutual respect and curiosity. We grow together more than we fix each other, we keep showing up for the work, and we make space for tenderness as a daily practice, not a special occasion.",
      conflictRepair:
        "I will say the awkward thing instead of the polite thing. I'd rather be honest than smooth. I will come back the same evening and try again if it didn't land right.",
      emotionalEnergy:
        "Warm, intelligent, present. I want someone who can hold complexity without flattening it. Joy alongside the politics, softness alongside the ambition.",
      idealSunday:
        "Hike in the morning, oysters in the afternoon, slow conversation that runs into night.",
    },
    highlightPromptKey: "idealSunday",
    compatibility: 81,
    astroCompatibility: 84,
    breakdown: bd({
      identityFit: 86,
      relationshipIntention: 88,
      emotionalAvailability: 84,
      emotionalSafety: 86,
      communicationRhythm: 86,
      conflictStyle: 82,
      attachmentCompatibility: 80,
      sharedValues: 78,
      lifestyleFit: 76,
      futureCompatibility: 80,
      regionalCompatibility: 92,
      astrologyAlignment: 84,
    }),
    sharedValues: ["Growth", "Kindness", "Emotional maturity"],
    matchRationale:
      "Same compatibility region, aligned communication rhythms, and shared values around growth and justice.",
    matchExplanation:
      "You both move through the world with curiosity and care, and you communicate like it.",
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
    partnershipShape: "Marriage someday",
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
    socialEnergy: "Mostly introverted, small groups",
    futureGoals: [
      "Build a long-term partnership",
      "Open to marriage",
      "Open to kids",
    ],
    familyViews: "I want kids",
    astrologySign: "Libra",
    birthChartStyle: "Rising-led",
    location: {
      continent: "North America",
      country: "Canada",
      region: "Quebec",
      city: "Montreal",
    },
    dealbreakers: [
      "Not emotionally available",
      "Disrespectful behavior",
      "Dishonesty",
    ],
    prompts: {
      lifeFeel:
        "Like the last hour of golden light. Full, warm, and a little bit grateful. Long dinners. A garden I am slowly learning. People who feel like home. A life I built on purpose with someone I keep choosing.",
      loveMeans:
        "Being the person who gets the unedited story first. Love is the trust of being told the awkward sentence before it has been smoothed. It is a daily, particular care.",
      feelSafe:
        "Someone who has already done their own work and isn't asking me to do it for them. A partner who knows their own patterns and is honest about them. No silent treatment, no scorekeeping.",
      greenFlag:
        "I will ask what you actually need before I assume. I don't read minds. I ask, and I listen for what is underneath the answer.",
      partnership:
        "Two careers we respect, a kitchen we cook in together, a small group of people we keep promising back to. I want the kind of partnership where 'home' is mostly a feeling and rarely a transaction.",
      conflictRepair:
        "I need a beat. Then I always come back, softer than I left. I will never pretend something didn't happen, I'd rather sit with it once than circle it forever.",
      emotionalEnergy:
        "Warm, grounded, witty. I want someone who can be playful and serious in the same conversation, and who lets feelings exist without rushing them somewhere.",
      idealSunday:
        "Croissants, a slow gallery walk, then a long phone-off dinner.",
    },
    highlightPromptKey: "feelSafe",
    compatibility: 92,
    astroCompatibility: 93,
    breakdown: bd({
      identityFit: 95,
      relationshipIntention: 96,
      emotionalAvailability: 92,
      emotionalSafety: 92,
      communicationRhythm: 88,
      conflictStyle: 86,
      attachmentCompatibility: 90,
      sharedValues: 90,
      lifestyleFit: 84,
      futureCompatibility: 92,
      regionalCompatibility: 78,
      astrologyAlignment: 93,
    }),
    sharedValues: ["Emotional maturity", "Kindness", "Family"],
    matchRationale:
      "Long-term intention, deeply aligned values, and complementary communication.",
    matchExplanation:
      "You describe stability and affection in nearly the same language.",
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
    partnershipShape: "A long-term partnership",
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
    socialEnergy: "Quietly introverted, recharge alone",
    futureGoals: [
      "Build a long-term partnership",
      "Open to marriage",
      "Co-create a calm, creative life",
    ],
    familyViews: "Open to kids",
    astrologySign: "Scorpio",
    birthChartStyle: "Moon-led",
    location: {
      continent: "North America",
      country: "Canada",
      region: "Ontario",
      city: "Toronto",
    },
    dealbreakers: [
      "Disrespectful behavior",
      "Dishonesty",
      "Won't respect boundaries",
    ],
    prompts: {
      lifeFeel:
        "Slow, intentional, and a little bit musical. Tea steeping. A window open. A partner who can sit in the same room reading and feel close without needing to fill the silence. A life that does not depend on volume to feel romantic.",
      loveMeans:
        "Showing up for the quiet middle, not just the dramatic beginning. Love is the long, unglamorous tenderness of staying interested.",
      feelSafe:
        "Being explicitly chosen, not just defaulted to. A partner who says 'you' on purpose, with both hands. Honesty in small things, the kind that adds up over time.",
      greenFlag:
        "I will ask, plainly, what you'd like more or less of, and I will mean it. I would rather find out early than make us both fake a fit.",
      partnership:
        "A partnership built on the slow, beautiful work of being known. We listen well, we revisit hard conversations without panic, and we trust each other with the parts of ourselves the world doesn't get to see.",
      conflictRepair:
        "Directly and kindly. I won't leave you guessing. I'd rather have the awkward conversation today than rehearse it in my head for a week.",
      emotionalEnergy:
        "Calm, intentional, and tender. I value people who can name a feeling without dramatizing it, and who don't mistake softness for weakness.",
      idealSunday:
        "Morning rehearsal, a small bookstore, then dinner I cooked with you.",
    },
    highlightPromptKey: "loveMeans",
    compatibility: 88,
    astroCompatibility: 78,
    breakdown: bd({
      identityFit: 92,
      relationshipIntention: 92,
      emotionalAvailability: 90,
      emotionalSafety: 92,
      communicationRhythm: 86,
      conflictStyle: 90,
      attachmentCompatibility: 90,
      sharedValues: 84,
      lifestyleFit: 82,
      futureCompatibility: 88,
      regionalCompatibility: 95,
      astrologyAlignment: 78,
    }),
    sharedValues: ["Kindness", "Loyalty", "Emotional maturity"],
    matchRationale:
      "Both ready for something serious, with direct communication and aligned regions.",
    matchExplanation:
      "You both value emotional safety and slow, considered communication.",
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
      "Genderqueer or genderfluid people",
    ],
    bio: "Public-school art teacher with a tiny garden. Looking for someone who is gentle with their feelings and curious about mine.",
    relationshipIntention: "Slow dating",
    partnershipShape: "Slow intentional dating",
    communicationStyle: "I like frequent communication",
    conflictStyle: "I work through it through writing",
    attachmentStyle: "Anxious-leaning, working on it",
    emotionalNeeds: [
      "Consistent communication",
      "Shared rituals",
      "Verbal reassurance",
    ],
    values: ["Creativity", "Kindness", "Community", "Growth", "Curiosity"],
    loveLanguages: ["Words of affirmation", "Quality time", "Acts of service"],
    lifestyle: ["Spontaneous and flexible", "Night owl, late conversations"],
    socialEnergy: "Outgoing, energized by people",
    futureGoals: ["Co-create a calm, creative life", "Travel often together"],
    familyViews: "Still figuring it out",
    astrologySign: "Gemini",
    birthChartStyle: "Just here for fun",
    location: {
      continent: "North America",
      country: "Canada",
      region: "Ontario",
      city: "Hamilton",
    },
    dealbreakers: [
      "Poor communication",
      "Disrespectful behavior",
      "Pushes physical pace too fast",
    ],
    prompts: {
      lifeFeel:
        "A small kitchen full of herbs and music, and someone reading by the window. A life that has room for spontaneity and ritual in the same weekend. The kind of evenings where someone reaches across the table and means it.",
      loveMeans:
        "Being curious about each other long past the easy part. Love is the patient interest in someone's interiority, not just their best moments.",
      feelSafe:
        "Knowing that my softness won't be used against me. A partner who treats my anxious days as part of me, not a problem to be fixed.",
      greenFlag:
        "I will ask about your inner world, not just your week. I want to know what you are afraid of, what you are hoping for, what you are slowly becoming.",
      partnership:
        "A creative, communicative partnership where we are each other's first audience. We try things, we make things, we tell the truth even when we're not sure how it will land, and we let love be domestic without losing the art of it.",
      conflictRepair:
        "I write you a long, honest note. Then we talk it through over tea. I will bring my softest version of the truth, not my sharpest.",
      emotionalEnergy:
        "Warm, expressive, a little romantic. I want feelings out loud, ideas across the dinner table, and Sunday afternoons that don't feel like they need a plan.",
      idealSunday:
        "Watercolors, a long walk in the park, and a movie I have made you watch.",
    },
    highlightPromptKey: "greenFlag",
    compatibility: 85,
    astroCompatibility: 80,
    breakdown: bd({
      identityFit: 88,
      relationshipIntention: 80,
      emotionalAvailability: 88,
      emotionalSafety: 86,
      communicationRhythm: 90,
      conflictStyle: 82,
      attachmentCompatibility: 78,
      sharedValues: 84,
      lifestyleFit: 86,
      futureCompatibility: 78,
      regionalCompatibility: 90,
      astrologyAlignment: 80,
    }),
    sharedValues: ["Kindness", "Creativity", "Growth"],
    matchRationale:
      "Curious, communicative, and creative. Same compatibility region too.",
    matchExplanation:
      "You both meet other people with curiosity first, and that tends to make safety follow.",
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
    partnershipShape: "A long-term partnership",
    communicationStyle: "I prefer slower thoughtful replies",
    conflictStyle: "I take space and come back gently",
    attachmentStyle: "Avoidant-leaning, working on it",
    emotionalNeeds: ["Space to recharge", "Quality time", "Acts of care"],
    values: ["Creativity", "Loyalty", "Honesty", "Growth", "Community"],
    loveLanguages: ["Quality time", "Acts of service"],
    lifestyle: ["Balanced and routined", "Quiet weekdays, social weekends"],
    socialEnergy: "Mostly introverted, small groups",
    futureGoals: [
      "Build a long-term partnership",
      "Open to chosen family without kids",
      "Co-create a calm, creative life",
    ],
    familyViews: "I don't want kids",
    astrologySign: "Capricorn",
    birthChartStyle: "Sun-led",
    location: {
      continent: "North America",
      country: "United States",
      region: "Washington",
      city: "Seattle",
    },
    dealbreakers: [
      "Dishonesty",
      "Poor communication",
      "Not looking for commitment",
    ],
    prompts: {
      lifeFeel:
        "Quietly curated. A few good friends, a few good rituals, a lot of breathing room. The kind of life that doesn't perform itself online. Books, slow Saturdays, and people who can be told the truth.",
      loveMeans:
        "Trust that doesn't need to be re-earned every week. Love is a steady, low-drama baseline that doesn't crumble when the day gets hard.",
      feelSafe:
        "Not having to perform for someone who already chose me. A partner who tells me when something is off, and trusts me to do the same.",
      greenFlag:
        "I will text you mid-week just to say I was thinking about you. I keep my word and I am honest about my bandwidth.",
      partnership:
        "A grown-up partnership. Two independent lives that choose to overlap, not collapse into each other. A shared library, slow Saturdays, and a quiet kind of devotion that holds even through hard weeks.",
      conflictRepair:
        "I will ask for a night to think. I will always come back. I will tell you what I need instead of expecting you to guess.",
      emotionalEnergy:
        "Calm, considered, dryly affectionate. I'm allergic to chaos and unimpressed by intensity. I want warmth that doesn't have to announce itself.",
      idealSunday:
        "Coffee in bed, book club, then dinner with one good friend.",
    },
    highlightPromptKey: "lifeFeel",
    compatibility: 84,
    astroCompatibility: 72,
    breakdown: bd({
      identityFit: 86,
      relationshipIntention: 88,
      emotionalAvailability: 84,
      emotionalSafety: 84,
      communicationRhythm: 84,
      conflictStyle: 80,
      attachmentCompatibility: 76,
      sharedValues: 82,
      lifestyleFit: 88,
      futureCompatibility: 82,
      regionalCompatibility: 88,
      astrologyAlignment: 72,
    }),
    sharedValues: ["Loyalty", "Growth", "Community"],
    matchRationale:
      "Slow, considered, and clear about what they want. Compatible rhythms.",
    matchExplanation:
      "You both want grown-up steadiness more than a story to tell.",
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
    bio: "Veterinarian, gardener, slow cooker, slow faller. Looking for a partner I can build a quiet, devoted life with.",
    relationshipIntention: "Life partner",
    partnershipShape: "A life companion",
    communicationStyle: "I value direct honesty",
    conflictStyle: "I name what I feel early",
    attachmentStyle: "Secure",
    emotionalNeeds: [
      "Quality time",
      "Acts of care",
      "Being understood without explaining",
    ],
    values: ["Stability", "Kindness", "Loyalty", "Family", "Growth"],
    loveLanguages: ["Acts of service", "Quality time", "Words of affirmation"],
    lifestyle: ["Early riser, slow morning", "Balanced and routined"],
    socialEnergy: "Quietly introverted, recharge alone",
    futureGoals: [
      "Build a long-term partnership",
      "Open to marriage",
      "Open to fostering or adopting",
    ],
    familyViews: "Open to fostering or adopting",
    astrologySign: "Taurus",
    birthChartStyle: "Rising-led",
    location: {
      continent: "North America",
      country: "Canada",
      region: "Ontario",
      city: "Sudbury",
    },
    dealbreakers: [
      "Dishonesty",
      "Pushes physical pace too fast",
      "Won't respect boundaries",
    ],
    prompts: {
      lifeFeel:
        "Like a house I have slowly made my own. Warm, considered, and full of small living things. A life I'm not trying to outrun, with morning light and animals underfoot and a partner who knows my routines.",
      loveMeans:
        "Choosing closeness in your own language, on your own pace, and being met there. Love is being seen as whole even when intimacy looks different.",
      feelSafe:
        "Being trusted with your pace, and trusting mine in return. A partner who knows that affection doesn't have a single shape.",
      greenFlag:
        "I make space for what 'love' means to you, even if it doesn't look like the script. I won't make you defend who you are to keep being loved.",
      partnership:
        "A quietly devoted partnership where we build something slow and real. Two careers we respect, animals we share, and the kind of trust that lets us be soft in private and steady in public.",
      conflictRepair:
        "Honestly and early. I'd rather have an awkward conversation than a quiet resentment. I will bring my best version of the truth.",
      emotionalEnergy:
        "Calm, kind, and considered. I want a partner who values warmth without needing it loud, and who knows that quiet care is one of the most romantic things in the world.",
      idealSunday:
        "The garden in the morning, a long lunch, a movie, an early evening walk with the dog.",
    },
    highlightPromptKey: "feelSafe",
    compatibility: 80,
    astroCompatibility: 74,
    breakdown: bd({
      identityFit: 84,
      relationshipIntention: 94,
      emotionalAvailability: 90,
      emotionalSafety: 92,
      communicationRhythm: 78,
      conflictStyle: 86,
      attachmentCompatibility: 88,
      sharedValues: 82,
      lifestyleFit: 80,
      futureCompatibility: 86,
      regionalCompatibility: 72,
      astrologyAlignment: 74,
    }),
    sharedValues: ["Loyalty", "Kindness", "Growth"],
    matchRationale:
      "Same long-term intention and explicit care for pace, boundaries, and quiet devotion.",
    matchExplanation:
      "You both treat pace and boundaries as part of how love is built, not obstacles to it.",
    accent: "peach",
    standing: "Verified member",
  },
  {
    id: "harper",
    name: "Harper",
    age: 29,
    genderIdentity: "Trans woman",
    pronouns: "she/her",
    orientation: "Bisexual",
    interestedIn: ["Women", "Men", "Nonbinary people", "Trans women", "Trans men"],
    bio: "Theatre lighting designer, sister, cyclist. I take feelings seriously and tea even more seriously.",
    relationshipIntention: "Serious relationship",
    partnershipShape: "A long-term partnership",
    communicationStyle: "I value direct honesty",
    conflictStyle: "I want to repair the same day",
    attachmentStyle: "Secure",
    emotionalNeeds: ["Verbal reassurance", "Quality time", "Shared rituals"],
    values: ["Kindness", "Loyalty", "Creativity", "Justice", "Emotional maturity"],
    loveLanguages: ["Words of affirmation", "Quality time", "Acts of service"],
    lifestyle: ["Balanced and routined", "Quiet weekdays, social weekends"],
    socialEnergy: "Ambivert, depends on the day",
    futureGoals: [
      "Build a long-term partnership",
      "Open to marriage",
      "Co-create a calm, creative life",
    ],
    familyViews: "Open to kids",
    astrologySign: "Leo",
    birthChartStyle: "Sun-led",
    location: {
      continent: "North America",
      country: "United States",
      region: "New York",
      city: "Brooklyn",
    },
    dealbreakers: [
      "Dishonesty",
      "Disrespectful behavior",
      "Won't respect boundaries",
    ],
    prompts: {
      lifeFeel:
        "Like a tech rehearsal that finally clicks. Focused, generous, a little bit golden. A life with rituals I love and people I keep showing up for. Long bike rides, late dinners, work that means something.",
      loveMeans:
        "Being witnessed in the parts of yourself you don't put in your bio. Love is the slow trust of being told the awkward sentence first.",
      feelSafe:
        "A partner who has already chosen me by the time they're asking. Honesty without sharpness, and a willingness to do small repairs often.",
      greenFlag:
        "I will tell you when I am tired before I disappear. I will check in mid-week, not just when I want something.",
      partnership:
        "A creative, communicative partnership where we hold each other's biggest selves and softest selves with the same care. Two lives that choose to overlap on purpose, not by accident.",
      conflictRepair:
        "Directly and kindly. I will repair the same day. I won't make you fish around for what is wrong.",
      emotionalEnergy:
        "Warm, expressive, kind. I want someone who listens like it matters and shows up like they meant it.",
      idealSunday:
        "A late breakfast, a long bike ride along the water, theatre in the evening, dinner with people I love.",
    },
    highlightPromptKey: "partnership",
    compatibility: 90,
    astroCompatibility: 82,
    breakdown: bd({
      identityFit: 94,
      relationshipIntention: 92,
      emotionalAvailability: 92,
      emotionalSafety: 90,
      communicationRhythm: 90,
      conflictStyle: 88,
      attachmentCompatibility: 90,
      sharedValues: 88,
      lifestyleFit: 86,
      futureCompatibility: 90,
      regionalCompatibility: 80,
      astrologyAlignment: 82,
    }),
    sharedValues: ["Kindness", "Loyalty", "Emotional maturity"],
    matchRationale:
      "Aligned on long-term partnership, with warm, repair-first communication.",
    matchExplanation:
      "You're both warm communicators who repair early rather than wait it out.",
    accent: "blush",
    standing: "Verified member",
  },
  {
    id: "theo",
    name: "Theo",
    age: 33,
    genderIdentity: "Man",
    pronouns: "he/him",
    orientation: "Gay",
    interestedIn: ["Men", "Trans men", "Nonbinary people"],
    bio: "Pediatric nurse, weekend baker, terrible-on-purpose karaoke singer. Looking for someone who is good at staying.",
    relationshipIntention: "Life partner",
    partnershipShape: "A life companion",
    communicationStyle: "I like frequent communication",
    conflictStyle: "I name what I feel early",
    attachmentStyle: "Secure",
    emotionalNeeds: [
      "Consistent communication",
      "Quality time",
      "Verbal reassurance",
    ],
    values: ["Kindness", "Loyalty", "Family", "Stability", "Community"],
    loveLanguages: ["Acts of service", "Words of affirmation", "Physical touch"],
    lifestyle: ["Quiet weekdays, social weekends", "Early riser, slow morning"],
    socialEnergy: "Outgoing, energized by people",
    futureGoals: [
      "Build a long-term partnership",
      "Open to marriage",
      "Open to kids",
    ],
    familyViews: "I want kids",
    astrologySign: "Sagittarius",
    birthChartStyle: "Balanced chart",
    location: {
      continent: "Europe",
      country: "United Kingdom",
      region: "England",
      city: "London",
    },
    dealbreakers: [
      "Not emotionally available",
      "Dishonesty",
      "Disrespectful behavior",
    ],
    prompts: {
      lifeFeel:
        "Warm. A small flat that smells like bread on Sundays. Nieces and nephews on the calendar. A partner who is good at the long, unglamorous middle of love. The kind of evenings where the kettle goes on twice.",
      loveMeans:
        "Being chosen on the hard days, the ones nobody else would see. Love is showing up before you're asked.",
      feelSafe:
        "Honesty without sharpness. A partner who tells me what they need and trusts me to do the same. No silent treatment, no scorekeeping.",
      greenFlag:
        "I will cook for you when you're sick. I will text your sister back when she asks how you are. I will remember your hospital appointments.",
      partnership:
        "A warm, devoted partnership. Two careers we respect, a kitchen full of bread, friends who become family, and the kind of love that doesn't need a story to stay alive.",
      conflictRepair:
        "I will name it the same evening. I will bring my softer version of the truth, even when I'm hurt.",
      emotionalEnergy:
        "Warm, attentive, present. I want someone who notices feelings out loud and doesn't make me ask twice.",
      idealSunday:
        "Bread proofing in the morning, a long walk in the park, dinner with friends, a phone-off evening.",
    },
    highlightPromptKey: "feelSafe",
    compatibility: 87,
    astroCompatibility: 81,
    breakdown: bd({
      identityFit: 90,
      relationshipIntention: 96,
      emotionalAvailability: 92,
      emotionalSafety: 90,
      communicationRhythm: 90,
      conflictStyle: 86,
      attachmentCompatibility: 92,
      sharedValues: 88,
      lifestyleFit: 84,
      futureCompatibility: 92,
      regionalCompatibility: 72,
      astrologyAlignment: 81,
    }),
    sharedValues: ["Kindness", "Loyalty", "Family"],
    matchRationale:
      "Long-term, warm, and reliably communicative. Aligned on partnership shape.",
    matchExplanation:
      "You both want the same warm, quietly devoted shape of partnership.",
    accent: "peach",
    standing: "Verified member",
  },
  {
    id: "leandra",
    name: "Léandra",
    age: 31,
    genderIdentity: "Woman",
    pronouns: "she/her",
    orientation: "Queer",
    interestedIn: ["Women", "Nonbinary people", "Trans women"],
    bio: "Curator at a small contemporary art space. I take poetry seriously and gossip even more seriously.",
    relationshipIntention: "Serious relationship",
    partnershipShape: "A future we can grow into",
    communicationStyle: "I prefer slower thoughtful replies",
    conflictStyle: "I need a pause, then return calmly",
    attachmentStyle: "Secure",
    emotionalNeeds: ["Quality time", "Acts of care", "Shared rituals"],
    values: ["Creativity", "Emotional maturity", "Kindness", "Community", "Justice"],
    loveLanguages: ["Quality time", "Thoughtful gifts", "Acts of service"],
    lifestyle: ["Balanced and routined", "Quiet weekdays, social weekends"],
    socialEnergy: "Mostly introverted, small groups",
    futureGoals: [
      "Co-create a calm, creative life",
      "Build a long-term partnership",
      "Travel often together",
    ],
    familyViews: "Open to kids",
    astrologySign: "Libra",
    birthChartStyle: "Rising-led",
    location: {
      continent: "Europe",
      country: "France",
      region: "Île-de-France",
      city: "Paris",
    },
    dealbreakers: [
      "Disrespectful behavior",
      "Dishonesty",
      "Not emotionally available",
    ],
    prompts: {
      lifeFeel:
        "Like the last hour of a long, beautiful dinner. Full, slow, and a little bit reluctant to end. A life with rituals I would hate to skip, and a partner whose company keeps the city quieter.",
      loveMeans:
        "Being known beyond the easy parts. Love is the patient curiosity in someone's interior life, not just their best stories.",
      feelSafe:
        "Honesty in small things. A partner who notices when something is off without making it a crisis, and who tells me the truth in a voice I can hear.",
      greenFlag:
        "I will bring you the book I think you would love before I bring you my opinion of it.",
      partnership:
        "A calm, creative partnership. Two careers we respect, a small kitchen full of light, and a few good people we keep promising back to. The kind of love that becomes its own private language over time.",
      conflictRepair:
        "I need a beat. Then I always come back, softer than I left. I'd rather find the right sentence than the fast one.",
      emotionalEnergy:
        "Warm, considered, witty. I want someone who can be playful and serious in the same conversation, and who treats softness as a kind of intelligence.",
      idealSunday:
        "A long museum morning, a Mediterranean lunch, a slow walk along the river, and a film at home.",
    },
    highlightPromptKey: "partnership",
    compatibility: 89,
    astroCompatibility: 87,
    breakdown: bd({
      identityFit: 92,
      relationshipIntention: 92,
      emotionalAvailability: 90,
      emotionalSafety: 92,
      communicationRhythm: 88,
      conflictStyle: 86,
      attachmentCompatibility: 90,
      sharedValues: 88,
      lifestyleFit: 86,
      futureCompatibility: 88,
      regionalCompatibility: 78,
      astrologyAlignment: 87,
    }),
    sharedValues: ["Creativity", "Emotional maturity", "Kindness"],
    matchRationale:
      "Aligned values around creativity, kindness, and a calm partnership shape.",
    matchExplanation:
      "You both build emotional safety through small, considered care.",
    accent: "lilac",
    standing: "Verified member",
  },
  {
    id: "yui",
    name: "Yui",
    age: 30,
    genderIdentity: "Woman",
    pronouns: "she/her",
    orientation: "Lesbian",
    interestedIn: ["Women", "Trans women", "Nonbinary people"],
    bio: "Software engineer, quiet runner, hot-spring evangelist. Looking for a partner I can build a long, calm life with.",
    relationshipIntention: "Life partner",
    partnershipShape: "A long-term partnership",
    communicationStyle: "I prefer slower thoughtful replies",
    conflictStyle: "I take space and come back gently",
    attachmentStyle: "Secure",
    emotionalNeeds: [
      "Quality time",
      "Space to recharge",
      "Being understood without explaining",
    ],
    values: ["Stability", "Loyalty", "Kindness", "Emotional maturity", "Family"],
    loveLanguages: ["Quality time", "Acts of service"],
    lifestyle: ["Early riser, slow morning", "Quiet weekdays, social weekends"],
    socialEnergy: "Quietly introverted, recharge alone",
    futureGoals: [
      "Build a long-term partnership",
      "Open to marriage",
      "Open to kids",
    ],
    familyViews: "Open to kids",
    astrologySign: "Capricorn",
    birthChartStyle: "Sun-led",
    location: {
      continent: "Asia",
      country: "Japan",
      region: "Tokyo",
      city: "Tokyo",
    },
    dealbreakers: [
      "Dishonesty",
      "Not looking for commitment",
      "Disrespectful behavior",
    ],
    prompts: {
      lifeFeel:
        "Quiet, considered, and a little bit hopeful. A small apartment with morning light. Time for the long run, the long dinner, and the long conversation. A life that doesn't need to announce itself to feel full.",
      loveMeans:
        "Choosing each other in the unglamorous middle of a normal week. Love is the discipline of staying interested.",
      feelSafe:
        "A partner who treats my quiet as company, not as a problem. Someone who tells me what they need before it becomes a tension we have to translate.",
      greenFlag:
        "I will show you a side of a city you live in but haven't really seen yet, and I will be quietly thrilled to do it.",
      partnership:
        "A long, calm life built with the same patience I bring to running. The practice of repeating the small good things until they become a whole shape. We grow up together, gently.",
      conflictRepair:
        "I will ask for a beat, write it down, and bring my real answer back the next morning.",
      emotionalEnergy:
        "Calm, deliberate, deeply present. I value warmth that doesn't have to perform itself, and patience that doesn't keep score.",
      idealSunday:
        "A 10k run at sunrise, breakfast at the same place we always go, an afternoon onsen, dinner I cooked with you.",
    },
    highlightPromptKey: "partnership",
    compatibility: 86,
    astroCompatibility: 78,
    breakdown: bd({
      identityFit: 92,
      relationshipIntention: 94,
      emotionalAvailability: 88,
      emotionalSafety: 90,
      communicationRhythm: 84,
      conflictStyle: 86,
      attachmentCompatibility: 88,
      sharedValues: 84,
      lifestyleFit: 86,
      futureCompatibility: 88,
      regionalCompatibility: 74,
      astrologyAlignment: 78,
    }),
    sharedValues: ["Stability", "Loyalty", "Kindness"],
    matchRationale:
      "Both want the same calm long-term partnership and respect each other's pace.",
    matchExplanation:
      "You both treat patience as a love language, and you both communicate like it.",
    accent: "sky",
    standing: "Verified member",
  },
  {
    id: "milo",
    name: "Milo",
    age: 32,
    genderIdentity: "Nonbinary",
    pronouns: "they/them",
    orientation: "Queer",
    interestedIn: [
      "Women",
      "Men",
      "Nonbinary people",
      "Genderqueer or genderfluid people",
      "Trans women",
      "Trans men",
    ],
    bio: "Marine biologist, ocean swimmer, slow texter. Looking for someone who would rather build something than perform something.",
    relationshipIntention: "Serious relationship",
    partnershipShape: "A long-term partnership",
    communicationStyle: "I value direct honesty",
    conflictStyle: "I name what I feel early",
    attachmentStyle: "Secure",
    emotionalNeeds: [
      "Quality time",
      "Verbal reassurance",
      "Being understood without explaining",
    ],
    values: ["Kindness", "Growth", "Curiosity", "Loyalty", "Justice"],
    loveLanguages: ["Quality time", "Words of affirmation", "Acts of service"],
    lifestyle: ["Always a little adventurous", "Balanced and routined"],
    socialEnergy: "Ambivert, depends on the day",
    futureGoals: [
      "Build a long-term partnership",
      "Travel often together",
      "Open to chosen family without kids",
    ],
    familyViews: "Still figuring it out",
    astrologySign: "Aquarius",
    birthChartStyle: "Balanced chart",
    location: {
      continent: "Oceania",
      country: "Australia",
      region: "New South Wales",
      city: "Sydney",
    },
    dealbreakers: [
      "Dishonesty",
      "Disrespectful behavior",
      "Won't respect boundaries",
    ],
    prompts: {
      lifeFeel:
        "Like the morning swim that turns the rest of the day soft. Salt on my skin, coffee with someone I love, an evening full of small good things. A life that has room for adventure and quiet in the same week.",
      loveMeans:
        "Choosing curiosity over assumption. Love is the daily decision to keep being interested in someone, especially when you think you already know them.",
      feelSafe:
        "A partner who has already chosen me before they're asking. Direct, kind, and consistent, and willing to tell me the small thing before it becomes the big thing.",
      greenFlag:
        "I will send you the article I think you would love. I will ask follow-up questions about your work without making it small talk.",
      partnership:
        "A grown-up partnership built on curiosity, kindness, and reliability. Two careers we respect, a small house near water, friends who become family, and the slow art of choosing each other on quiet days.",
      conflictRepair:
        "I will name it the same day. I'd rather have an awkward conversation than a polite distance.",
      emotionalEnergy:
        "Calm, curious, warm. I value people who think before they speak, who listen like they mean it, and who don't mistake affection for performance.",
      idealSunday:
        "Sunrise swim, a long brunch, a slow afternoon read, dinner I cooked with someone I'd cook for again.",
    },
    highlightPromptKey: "lifeFeel",
    compatibility: 85,
    astroCompatibility: 80,
    breakdown: bd({
      identityFit: 90,
      relationshipIntention: 92,
      emotionalAvailability: 90,
      emotionalSafety: 88,
      communicationRhythm: 88,
      conflictStyle: 86,
      attachmentCompatibility: 88,
      sharedValues: 84,
      lifestyleFit: 82,
      futureCompatibility: 84,
      regionalCompatibility: 76,
      astrologyAlignment: 80,
    }),
    sharedValues: ["Kindness", "Growth", "Curiosity"],
    matchRationale:
      "Both calm communicators, aligned on curiosity, kindness, and a partnership shape that prefers depth over performance.",
    matchExplanation:
      "You both lead with curiosity and treat communication like care.",
    accent: "sky",
    standing: "Verified member",
  },
];

export function getProfileById(id: string): Profile | undefined {
  return mockProfiles.find((p) => p.id === id);
}

// =============================================================================
// Match selection (mock)
// =============================================================================

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
      text: "Hi. Your line about wanting a life that feels like a Sunday afternoon really stayed with me.",
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
      text: "Your ideal Sunday sounds close to mine. What would make it perfect?",
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
  harper: [],
  theo: [],
  leandra: [],
  yui: [],
  milo: [],
};
