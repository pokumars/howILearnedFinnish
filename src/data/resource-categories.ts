import { type ResourceCategory } from "./resources";

export interface ResourceCategoryMeta {
  slug: string;
  category: ResourceCategory;
  heading: string;
  metaDescription: string;
  intro: string;
}

export const resourceCategoryMeta: ResourceCategoryMeta[] = [
  {
    slug: "textbooks-and-grammar",
    category: "Textbooks & Grammar",
    heading: "Finnish Textbooks & Grammar Books Recommended by Real Learners",
    metaDescription:
      "Finnish textbooks and grammar books actually used by adult learners — with honest accounts of what worked, what didn't, and who recommended each one.",
    intro:
      "These are the books real Finnish learners used — not a generic list. Each recommendation comes with the person who used it and the episode where they explain what worked and what didn't.",
  },
  {
    slug: "apps-and-digital-tools",
    category: "Apps & Digital Tools",
    heading: "Apps & Digital Tools for Learning Finnish",
    metaDescription:
      "Apps and digital tools recommended by Finnish learners on the podcast — including honest takes on Duolingo, AI tools, dictionaries, and more.",
    intro:
      "From Duolingo to ChatGPT, these are the digital tools guests tried. Some became daily habits; others were quickly abandoned. Each comes with an honest account from someone who actually used it.",
  },
  {
    slug: "tv-and-video",
    category: "TV & Video",
    heading: "Finnish TV Shows & YouTube Channels for Language Learning",
    metaDescription:
      "Finnish TV shows, streaming platforms, and YouTube channels used by real learners — from children's programmes for beginners to native drama for advanced learners.",
    intro:
      "Watching Finnish TV is one of the most recommended ways to absorb the language naturally. These are the shows, platforms, and channels guests actually sat down and watched — from simple children's programmes to full-speed native drama.",
  },
  {
    slug: "radio-and-podcasts",
    category: "Radio & Podcasts",
    heading: "Finnish Podcasts & Radio for Language Learning",
    metaDescription:
      "Finnish podcasts and radio stations recommended by real learners — from slow selkouutiset for beginners to full-speed Finnish talk radio for advanced learners.",
    intro:
      "Passive listening through radio and podcasts was a turning-point habit for many guests. These are the shows they listened to — from slow, clear selkouutiset for beginners to full-speed Finnish programming for advanced learners.",
  },
  {
    slug: "reading",
    category: "Reading",
    heading: "Finnish Books & Reading Materials Recommended by Learners",
    metaDescription:
      "Finnish books and reading materials used by real adult learners — from advertising leaflets for absolute beginners to classic Finnish novels for advanced readers.",
    intro:
      "Reading in Finnish is hard at first — and these guests remember exactly what made it click. From advertising leaflets for absolute beginners to classic Finnish novels for the advanced, here's what real learners actually read.",
  },
  {
    slug: "music",
    category: "Music",
    heading: "Finnish Music for Language Learning",
    metaDescription:
      "Finnish artists and songs used by real learners to absorb the language — chosen for clarity, cultural depth, or simply because they fell in love with the music.",
    intro:
      "Learning through music is underrated. These are the Finnish artists and songs guests used to absorb the language — some chosen for their clear pronunciation, others because the learner simply fell in love with them.",
  },
  {
    slug: "community-and-social",
    category: "Community & Social",
    heading: "Finnish Language Communities & Social Learning",
    metaDescription:
      "Real-world Finnish language communities, conversation groups, and social settings used by learners — from language cafes to choirs.",
    intro:
      "Speaking practice and community were crucial for many guests. These are the real-world groups, classes, and social settings where learners found people to practise with — from language cafes to Finnish-language choirs.",
  },
  {
    slug: "courses-and-institutions",
    category: "Courses & Institutions",
    heading: "Finnish Language Courses & Schools",
    metaDescription:
      "Finnish language courses and institutions attended by real learners — from government integration programmes to university language modules.",
    intro:
      "Formal courses gave many guests their foundation. These are the classes, programmes, and institutions that shaped their learning — from state-run integration courses to embedded language modules at Finnish universities.",
  },
  {
    slug: "exams-and-certifications",
    category: "Exams & Certifications",
    heading: "Finnish Language Exams & Certifications",
    metaDescription:
      "Finnish language exams taken by real learners — including the YKI test for citizenship and the VKT state administration exam.",
    intro:
      "Finnish language exams serve as checkpoints, motivators, and formal proof of proficiency. Here are the tests guests took — and what each one means for residency, citizenship, and employment in Finland.",
  },
];
