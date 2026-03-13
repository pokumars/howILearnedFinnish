import { FilterTags } from "@/constants/episodes";

export interface TagData {
  filterTag: FilterTags;
  slug: string;
  label: string;
  heading: string;
  intro: string;
}

export const tagData: TagData[] = [
  {
    filterTag: FilterTags.Parent,
    slug: "as-a-parent",
    label: "Learn Finnish as a Parent",
    heading: "Learning Finnish as a Parent",
    intro:
      "Raising kids in Finland while learning the language creates a unique dynamic — and a powerful motivator. Finnish paperwork, school meetings, and parent evenings don't wait for you to catch up. The guests in these episodes learned Finnish while navigating parenthood in Finland, and their stories show how parenting can become both the pressure and the fuel that drives real progress.",
  },
  {
    filterTag: FilterTags.Student,
    slug: "as-a-student",
    label: "Learn Finnish as a Student",
    heading: "Learning Finnish as a Student",
    intro:
      "Student life in Finland puts you in one of the most immersive environments for learning the language. Classes, study groups, canteens, and social life all create constant exposure. These guests used their student years to build real fluency — some faster than anyone expected — and they share exactly how they made that environment work for them.",
  },
  {
    filterTag: FilterTags.FinnishSpeakingPartner,
    slug: "with-a-finnish-speaking-partner",
    label: "Learn Finnish with a Finnish-Speaking Partner",
    heading: "Learning Finnish with a Finnish-Speaking Partner",
    intro:
      "Having a Finnish-speaking partner at home is one of the most powerful accelerators for learning the language — if you choose to use it. Many people don't. These guests made a deliberate choice to let their relationship become their classroom, and the results speak for themselves.",
  },
  {
    filterTag: FilterTags.NonFinnishSpeakingPartner,
    slug: "without-a-finnish-speaking-partner",
    label: "Learn Finnish Without a Finnish-Speaking Partner",
    heading: "Learning Finnish Without a Finnish-Speaking Partner",
    intro:
      "No Finnish-speaking partner at home? You're not at a disadvantage — you just have to find the language elsewhere. These guests built their Finnish through work, friendships, and deliberate daily choices, proving that a Finnish-speaking partner is not a prerequisite for fluency.",
  },
  {
    filterTag: FilterTags.A1toC,
    slug: "a1-to-c-level",
    label: "From A1 to C Level Finnish",
    heading: "The Full Journey: From A1 to C Level Finnish",
    intro:
      "Starting from zero and reaching C-level fluency is the full Finnish language journey. It means going from not understanding a single word to living, working, and thinking in Finnish. Every guest in these episodes completed that journey as an adult — and they each got there differently.",
  },
  {
    filterTag: FilterTags.B1toC,
    slug: "b1-to-c-level",
    label: "From B1 to C Level Finnish",
    heading: "Breaking the Intermediate Plateau: From B1 to C Level",
    intro:
      "Reaching B1 in Finnish is a real achievement — but it can also be where progress stalls. The gap between functional and fluent is one of the hardest stretches. These guests made the leap from intermediate to advanced, and the strategies they used at that stage are very different from what works at A1.",
  },
  {
    filterTag: FilterTags.WithKids,
    slug: "with-kids",
    label: "Learn Finnish with Kids at Home",
    heading: "Learning Finnish with Kids at Home",
    intro:
      "Learning Finnish while also raising children in Finland means the language is never just for you — it's for your whole family. Homework, school events, other parents: the language shows up everywhere. These guests navigated it all at once.",
  },
  {
    filterTag: FilterTags.Immersion,
    slug: "immersion-method",
    label: "Learning Finnish Through Immersion",
    heading: "Learning Finnish Through Immersion",
    intro:
      "Total immersion — living, thinking, and making mistakes in Finnish every day — is the approach most guests on this podcast credit for their breakthrough. But immersion doesn't mean moving to a remote Finnish cabin and refusing to speak English. These episodes dig into what immersion actually looks like in real life, in a modern Finnish city.",
  },
  {
    filterTag: FilterTags.FastPaced,
    slug: "fast-paced",
    label: "Fast-Paced Finnish Learning",
    heading: "Fast-Paced Finnish Learning",
    intro:
      "Some learners went from A-level to fluency in one to three years — a timeline most people are told is impossible for Finnish. These guests moved fast, and they're specific about what made the difference. Not shortcuts, but very deliberate choices about where to put their time and energy.",
  },
];
