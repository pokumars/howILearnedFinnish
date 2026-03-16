export type ResourceCategory =
  | "Textbooks & Grammar"
  | "Apps & Digital Tools"
  | "TV & Video"
  | "Radio & Podcasts"
  | "Reading"
  | "Music"
  | "Community & Social"
  | "Courses & Institutions"
  | "Exams & Certifications";

export const resourceCategories: ResourceCategory[] = [
  "Textbooks & Grammar",
  "Apps & Digital Tools",
  "TV & Video",
  "Radio & Podcasts",
  "Reading",
  "Music",
  "Community & Social",
  "Courses & Institutions",
  "Exams & Certifications",
];

export interface ResourceMention {
  personName: string;
  episodeId: number;
}

export interface Resource {
  id: string;
  name: string;
  description: string;
  category: ResourceCategory;
  mentions: ResourceMention[];
}

export const resources: Resource[] = [
  // ─── Textbooks & Grammar ───────────────────────────────────────────────────
  {
    id: "suomi-sun",
    name: "Suomi Sun",
    description:
      "Finnish textbook with CD and dictionary designed for independent English-speaking learners.",
    category: "Textbooks & Grammar",
    mentions: [{ personName: "Chloe", episodeId: 13 }],
  },
  {
    id: "finnish-for-foreigners",
    name: "Finnish for Foreigners",
    description:
      "4-book series with graduated difficulty. Recommended for self-study.",
    category: "Textbooks & Grammar",
    mentions: [{ personName: "Chloe", episodeId: 13 }],
  },
  {
    id: "suomen-mestari",
    name: "Suomen Mestari",
    description:
      "Widely-used Finnish language textbook series (books 1–4). Best used with a teacher.",
    category: "Textbooks & Grammar",
    mentions: [
      { personName: "Chloe", episodeId: 13 },
      { personName: "Kseniia", episodeId: 9 },
      { personName: "Emily", episodeId: 6 },
      { personName: "Deborah", episodeId: 5 },
      { personName: "Erik", episodeId: 4 },
      { personName: "Oheneba", episodeId: 2 },
    ],
  },
  {
    id: "harjoitus-tekee-mestari",
    name: "Harjoitus tekee mestari",
    description: "Finnish grammar and exercise workbook, good for intermediate learners.",
    category: "Textbooks & Grammar",
    mentions: [
      { personName: "Kseniia", episodeId: 9 },
      { personName: "Emily", episodeId: 6 },
    ],
  },
  {
    id: "start-to-finnish",
    name: "Start to Finnish",
    description: "Grammar reference book with explanations written in English.",
    category: "Textbooks & Grammar",
    mentions: [{ personName: "Emily", episodeId: 6 }],
  },
  {
    id: "kyna-kateen",
    name: "Kynä käteen",
    description: "Writing-focused workbook for Finnish learners.",
    category: "Textbooks & Grammar",
    mentions: [{ personName: "Emily", episodeId: 6 }],
  },
  {
    id: "uusi-kielemme",
    name: "Uusi kielemme",
    description: "Finnish grammar reference website.",
    category: "Textbooks & Grammar",
    mentions: [{ personName: "Emily", episodeId: 6 }],
  },
  {
    id: "dellert-grammar-slides",
    name: "Prof. Dellert's Finnish Grammar Slides",
    description:
      "Finnish grammar lecture slides from Tübingen University, written in German. Freely available online.",
    category: "Textbooks & Grammar",
    mentions: [{ personName: "Matthias", episodeId: 11 }],
  },
  {
    id: "langenscheidt-dictionary",
    name: "Langenscheidt Pocket Dictionary",
    description:
      "Compact Finnish-German dictionary. Matthias copied words out by hand from it to reinforce memory.",
    category: "Textbooks & Grammar",
    mentions: [{ personName: "Matthias", episodeId: 11 }],
  },
  {
    id: "german-3000-word-book",
    name: "German-Language 3,000-Word Finnish Vocabulary Book",
    description:
      "A Finnish vocabulary book written in German (title not recalled). Matthias memorised it before arriving in Finland.",
    category: "Textbooks & Grammar",
    mentions: [{ personName: "Matthias", episodeId: 11 }],
  },
  {
    id: "bilingual-dictionary",
    name: "Bilingual English-Finnish Dictionary",
    description: "Physical English-Finnish / Finnish-English dictionary for everyday lookup.",
    category: "Textbooks & Grammar",
    mentions: [
      { personName: "Jojo", episodeId: 8 },
      { personName: "Magdalene", episodeId: 7 },
    ],
  },

  // ─── Apps & Digital Tools ──────────────────────────────────────────────────
  {
    id: "duolingo",
    name: "Duolingo",
    description:
      "Popular gamified language learning app. Mentioned by multiple guests — mostly dismissed as ineffective for Finnish, though useful for getting started.",
    category: "Apps & Digital Tools",
    mentions: [
      { personName: "Chloe", episodeId: 13 },
      { personName: "Jamie", episodeId: 12 },
      { personName: "Kseniia", episodeId: 9 },
      { personName: "Emily", episodeId: 6 },
      { personName: "Erik", episodeId: 4 },
    ],
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    description:
      "AI assistant used to look up Finnish phrases, check grammar, translate sentences for verification, and explain legal vocabulary.",
    category: "Apps & Digital Tools",
    mentions: [
      { personName: "Deborah", episodeId: 5 },
      { personName: "Oheneba", episodeId: 2 },
      { personName: "Oheneba", episodeId: 3 },
    ],
  },
  {
    id: "claude",
    name: "Claude",
    description:
      "AI writing assistant used to check and correct Finnish writing at B2 level.",
    category: "Apps & Digital Tools",
    mentions: [{ personName: "Emily", episodeId: 6 }],
  },
  {
    id: "google-translate",
    name: "Google Translate",
    description:
      "Used as a post-writing checking tool — write in Finnish first, then check — not as a translation crutch.",
    category: "Apps & Digital Tools",
    mentions: [
      { personName: "Jamie", episodeId: 12 },
      { personName: "Hamed", episodeId: 10 },
    ],
  },
  {
    id: "quizlet",
    name: "Quizlet",
    description: "Flashcard app used for active vocabulary memorisation.",
    category: "Apps & Digital Tools",
    mentions: [{ personName: "Oheneba", episodeId: 2 }],
  },
  {
    id: "voc-lab",
    name: "Voc Lab",
    description:
      "Spaced-repetition vocabulary app. Erik built up ~8,000 words with native-speaker audio recorded by family members. No longer available.",
    category: "Apps & Digital Tools",
    mentions: [{ personName: "Erik", episodeId: 4 }],
  },
  {
    id: "pimsleur",
    name: "Pimsleur",
    description:
      "Audio language learning programme. Jojo used it in the evenings to practise pronunciation of words he planned to use the next day.",
    category: "Apps & Digital Tools",
    mentions: [{ personName: "Jojo", episodeId: 8 }],
  },
  {
    id: "sanakirja",
    name: "Sanakirja",
    description: "Finnish online dictionary used for word lookup when writing.",
    category: "Apps & Digital Tools",
    mentions: [{ personName: "Kseniia", episodeId: 9 }],
  },
  {
    id: "glosbe",
    name: "Glosbe",
    description:
      "Multilingual example-sentence search. Used to find Finnish-language definitions and context for new vocabulary.",
    category: "Apps & Digital Tools",
    mentions: [{ personName: "Oheneba", episodeId: 2 }],
  },
  {
    id: "genius",
    name: "Genius",
    description:
      "Lyrics site with community annotations. Kseniia used it to find Finnish rap lyrics and translations.",
    category: "Apps & Digital Tools",
    mentions: [{ personName: "Kseniia", episodeId: 9 }],
  },

  // ─── TV & Video ────────────────────────────────────────────────────────────
  {
    id: "yle-areena",
    name: "YLE / Yle Areena",
    description:
      "Finnish public broadcaster's streaming platform. Offers news, dramas, selkosuomi content, and subtitles at different difficulty levels.",
    category: "TV & Video",
    mentions: [
      { personName: "Chloe", episodeId: 13 },
      { personName: "Jamie", episodeId: 12 },
      { personName: "Magdalene", episodeId: 7 },
    ],
  },
  {
    id: "yle-kielikoulu",
    name: "Yle Kielikoulu",
    description:
      "Yle's dedicated language-learning platform with colour-coded level subtitles for simultaneous listening and reading.",
    category: "TV & Video",
    mentions: [{ personName: "Emily", episodeId: 6 }],
  },
  {
    id: "pikku-kakkonen",
    name: "Pikku Kakkonen",
    description:
      "Finnish children's TV programme — simple, clear Finnish ideal for early learners.",
    category: "TV & Video",
    mentions: [{ personName: "Chloe", episodeId: 13 }],
  },
  {
    id: "muumit",
    name: "Muumit",
    description: "Finnish children's TV series based on the Moomin stories.",
    category: "TV & Video",
    mentions: [{ personName: "Deborah", episodeId: 5 }],
  },
  {
    id: "kauneus-ja-rohkeus",
    name: "Kauneus ja rohkeus",
    description:
      "Finnish broadcast of Bold and Beautiful. Magdalene watched it with Finnish subtitles on national TV.",
    category: "TV & Video",
    mentions: [{ personName: "Magdalene", episodeId: 7 }],
  },
  {
    id: "neiti-romantiikka",
    name: "Neiti Romantiikka",
    description: "Finnish dark comedy series available on YLE.",
    category: "TV & Video",
    mentions: [{ personName: "Jamie", episodeId: 12 }],
  },
  {
    id: "finnished",
    name: "Finnished",
    description: "YouTube channel and podcast specifically for Finnish learners.",
    category: "TV & Video",
    mentions: [{ personName: "Emily", episodeId: 6 }],
  },
  {
    id: "gimara",
    name: "Gimara",
    description: "YouTube channel run by a Finnish teacher.",
    category: "TV & Video",
    mentions: [{ personName: "Deborah", episodeId: 5 }],
  },
  {
    id: "lotta-youtube",
    name: "Lotta (YouTube)",
    description:
      "Finnish YouTube channel focused on absorbing Finnish naturally through immersive content.",
    category: "TV & Video",
    mentions: [{ personName: "Deborah", episodeId: 5 }],
  },

  // ─── Radio & Podcasts ──────────────────────────────────────────────────────
  {
    id: "yle-uutiset-selkosuomeksi",
    name: "Yle Uutiset Selkosuomeksi",
    description:
      "Yle news in plain/easy Finnish. Slow, clearly spoken — Erik called it 'by far the best way to learn listening skills'.",
    category: "Radio & Podcasts",
    mentions: [
      { personName: "Erik", episodeId: 4 },
      { personName: "Oheneba", episodeId: 2 },
    ],
  },
  {
    id: "selkouutiset",
    name: "Selkouutiset",
    description:
      "YLE simplified Finnish news available in both text and audio. Good for beginner to intermediate listening.",
    category: "Radio & Podcasts",
    mentions: [
      { personName: "Deborah", episodeId: 5 },
      { personName: "Emily", episodeId: 6 },
    ],
  },
  {
    id: "radio-helsinki",
    name: "Radio Helsinki",
    description: "Finnish radio station. Jamie listened in the car, especially news broadcasts.",
    category: "Radio & Podcasts",
    mentions: [{ personName: "Jamie", episodeId: 12 }],
  },
  {
    id: "yle-radio",
    name: "Finnish Radio (YLE)",
    description:
      "YLE news and music radio stations. Used for daily passive listening during commutes and errands.",
    category: "Radio & Podcasts",
    mentions: [
      { personName: "Magdalene", episodeId: 7 },
      { personName: "Hamed", episodeId: 10 },
      { personName: "Jojo", episodeId: 8 },
      { personName: "Anita", episodeId: 3 },
    ],
  },
  {
    id: "kulttuuri-ykkonen",
    name: "Kulttuuri Ykkönen",
    description:
      "Finnish public radio podcast covering movies, books, TV, and popular culture.",
    category: "Radio & Podcasts",
    mentions: [{ personName: "Oheneba", episodeId: 2 }],
  },
  {
    id: "melkein-kaikki-rahasta",
    name: "Melkein kaikki rahasta",
    description: "Finnish personal finance podcast by Julia Thurén.",
    category: "Radio & Podcasts",
    mentions: [{ personName: "Oheneba", episodeId: 2 }],
  },
  {
    id: "mimmit-sijoittaa",
    name: "Mimmit Sijoittaa",
    description: "Finnish investing podcast.",
    category: "Radio & Podcasts",
    mentions: [{ personName: "Oheneba", episodeId: 2 }],
  },
  {
    id: "politiikka-radio",
    name: "Politiikka Radio",
    description: "Finnish politics podcast.",
    category: "Radio & Podcasts",
    mentions: [{ personName: "Oheneba", episodeId: 2 }],
  },
  {
    id: "rahapodi",
    name: "Rahapodi by Nordnet",
    description: "Finnish investing and personal finance podcast.",
    category: "Radio & Podcasts",
    mentions: [{ personName: "Oheneba", episodeId: 2 }],
  },
  {
    id: "inderes",
    name: "Inderes",
    description: "Finnish stock market analysis content and podcast.",
    category: "Radio & Podcasts",
    mentions: [{ personName: "Oheneba", episodeId: 2 }],
  },
  {
    id: "paakasittelyssa",
    name: "Pääkäsittelyssä",
    description: "Finnish legal podcast.",
    category: "Radio & Podcasts",
    mentions: [{ personName: "Deborah", episodeId: 5 }],
  },
  {
    id: "juristipodi",
    name: "Juristipodi",
    description: "Finnish legal podcast.",
    category: "Radio & Podcasts",
    mentions: [{ personName: "Deborah", episodeId: 5 }],
  },

  // ─── Reading ───────────────────────────────────────────────────────────────
  {
    id: "punainen-kuin-veri",
    name: "Punainen kuin veri (Red Like Blood)",
    description:
      "Finnish murder mystery written in selkokieli (plain Finnish), with Spotify audio and vocabulary support.",
    category: "Reading",
    mentions: [{ personName: "Chloe", episodeId: 13 }],
  },
  {
    id: "ilkka-remes",
    name: "Ilkka Remes (Finnish thrillers)",
    description:
      "Finnish thriller author. Anita started reading his novels around year 6–7 of living in Finland.",
    category: "Reading",
    mentions: [{ personName: "Anita", episodeId: 3 }],
  },
  {
    id: "mika-waltari",
    name: "Mika Waltari",
    description: "Classic Finnish author. Matthias read his books in Finnish.",
    category: "Reading",
    mentions: [{ personName: "Matthias", episodeId: 11 }],
  },
  {
    id: "sinuhe-egyptilainen",
    name: "Sinuhe Egyptiläinen",
    description:
      "Finnish historical novel by Mika Waltari. Jamie read it as an advanced reading challenge.",
    category: "Reading",
    mentions: [{ personName: "Jamie", episodeId: 12 }],
  },
  {
    id: "hobitti",
    name: "Hobitti (The Hobbit in Finnish)",
    description: "Finnish translation of The Hobbit, used by Matthias for reading practice.",
    category: "Reading",
    mentions: [{ personName: "Matthias", episodeId: 11 }],
  },
  {
    id: "michelle-obama-memoir",
    name: "Michelle Obama's memoir (in Finnish)",
    description: "Read in Finnish translation as a reading challenge.",
    category: "Reading",
    mentions: [{ personName: "Magdalene", episodeId: 7 }],
  },
  {
    id: "konmari-finnish",
    name: "The Life-Changing Magic of Tidying Up (in Finnish)",
    description: "KonMari book read in Finnish translation.",
    category: "Reading",
    mentions: [{ personName: "Oheneba", episodeId: 2 }],
  },
  {
    id: "sapiens-finnish",
    name: "Sapiens (in Finnish)",
    description:
      "Yuval Noah Harari's Sapiens attempted in Finnish — abandoned as too advanced, but a useful calibration tool.",
    category: "Reading",
    mentions: [{ personName: "Oheneba", episodeId: 2 }],
  },
  {
    id: "tears-of-my-soul",
    name: "Tears of My Soul (in Finnish)",
    description: "Kim Hyun Hee memoir read in Finnish translation.",
    category: "Reading",
    mentions: [{ personName: "Oheneba", episodeId: 2 }],
  },
  {
    id: "finnish-bible",
    name: "Finnish-language Bible",
    description: "Used for vocabulary building in a personally meaningful context.",
    category: "Reading",
    mentions: [{ personName: "Anita", episodeId: 3 }],
  },
  {
    id: "finnish-newspapers",
    name: "Finnish Newspapers",
    description:
      "Free Finnish newspapers and Helsingin Sanomat used for reading practice and absorbing natural written Finnish.",
    category: "Reading",
    mentions: [
      { personName: "Anita", episodeId: 3 },
      { personName: "Jojo", episodeId: 8 },
      { personName: "Jamie", episodeId: 12 },
    ],
  },
  {
    id: "mainoslehti",
    name: "Mainoslehti (Finnish advertising leaflets)",
    description:
      "Free advertising leaflets used as beginner reading material — short sentences, pictures, and clear context make them accessible.",
    category: "Reading",
    mentions: [{ personName: "Hamed", episodeId: 10 }],
  },
  {
    id: "aku-ankka",
    name: "Aku Ankka",
    description: "Finnish-language Donald Duck comics.",
    category: "Reading",
    mentions: [{ personName: "Jamie", episodeId: 12 }],
  },
  {
    id: "fingerpori",
    name: "Fingerpori",
    description:
      "Finnish newspaper comic strip. Short, punchy text with wordplay that rewards close reading.",
    category: "Reading",
    mentions: [{ personName: "Jamie", episodeId: 12 }],
  },

  // ─── Music ─────────────────────────────────────────────────────────────────
  {
    id: "tapani-kansa",
    name: "Tapani Kansa",
    description:
      "Finnish singer with slow, clearly pronounced music — ideal for listening practice.",
    category: "Music",
    mentions: [{ personName: "Hamed", episodeId: 10 }],
  },
  {
    id: "antti-tuisku",
    name: "Antti Tuisku",
    description: "Finnish pop artist — the first Finnish artist Hamed remembers hearing.",
    category: "Music",
    mentions: [{ personName: "Hamed", episodeId: 10 }],
  },
  {
    id: "behm",
    name: "Behm",
    description:
      "Finnish singer-songwriter. Kseniia credits Behm's song 'Hei rakas' as the first Finnish song she fully understood.",
    category: "Music",
    mentions: [{ personName: "Kseniia", episodeId: 9 }],
  },
  {
    id: "finnish-rap",
    name: "Finnish Rap & Pop (Gettomasa, JVG, Costi, IBE)",
    description:
      "Finnish rap and pop artists whose songs Kseniia translated word by word to learn vocabulary and everyday spoken Finnish (puhekieli).",
    category: "Music",
    mentions: [{ personName: "Kseniia", episodeId: 9 }],
  },

  // ─── Community & Social ────────────────────────────────────────────────────
  {
    id: "kielikahvilat",
    name: "Kielikahvilat (Language Cafes)",
    description:
      "Community conversation practice events where Finnish learners meet to practise speaking in a relaxed, pressure-free setting.",
    category: "Community & Social",
    mentions: [
      { personName: "Chloe", episodeId: 13 },
      { personName: "Kseniia", episodeId: 9 },
    ],
  },
  {
    id: "muskari",
    name: "Muskari",
    description:
      "Finnish parent-and-toddler music classes featuring repetitive songs and nursery rhymes — a natural, low-pressure way to absorb Finnish.",
    category: "Community & Social",
    mentions: [{ personName: "Chloe", episodeId: 13 }],
  },
  {
    id: "choir",
    name: "Finnish Choir (Viipurilaisten Osakunnan Laulajat)",
    description:
      "Finnish-language choir Matthias joined to immerse himself in spoken Finnish with native speakers.",
    category: "Community & Social",
    mentions: [{ personName: "Matthias", episodeId: 11 }],
  },

  // ─── Courses & Institutions ────────────────────────────────────────────────
  {
    id: "integration-course",
    name: "Finnish Government Integration Programme (Kotoutumisohjelma)",
    description:
      "State-run 6-month course covering Finnish language basics and social rights, available to new immigrants.",
    category: "Courses & Institutions",
    mentions: [{ personName: "Anita", episodeId: 3 }],
  },
  {
    id: "red-cross-classes",
    name: "Finnish Language Classes at Red Cross Refugee Camp",
    description:
      "Finnish lessons offered at refugee reception centres. Jojo pushed to join ahead of schedule due to rapid progress.",
    category: "Courses & Institutions",
    mentions: [{ personName: "Jojo", episodeId: 8 }],
  },
  {
    id: "tyovaenopisto",
    name: "Työväenopisto (Workers' Institute)",
    description:
      "Community adult education institute. Hamed attended a 3-month intensive Finnish course around 2005–2006.",
    category: "Courses & Institutions",
    mentions: [{ personName: "Hamed", episodeId: 10 }],
  },
  {
    id: "mava-koulutus",
    name: "Mava-koulutus at Diaconia opisto",
    description:
      "Roughly one-year preparatory course for immigrants covering Finnish language and subject-specific terminology.",
    category: "Courses & Institutions",
    mentions: [{ personName: "Hamed", episodeId: 10 }],
  },
  {
    id: "laurea",
    name: "Laurea University of Applied Sciences",
    description:
      "Magdalene completed her nursing degree here, which included embedded Finnish language modules at basic, intermediate, and advanced levels.",
    category: "Courses & Institutions",
    mentions: [{ personName: "Magdalene", episodeId: 7 }],
  },
  {
    id: "jamk",
    name: "JAMK (Jyväskylä University of Applied Sciences)",
    description: "Where Kseniia completed her Bachelor of Business Administration.",
    category: "Courses & Institutions",
    mentions: [{ personName: "Kseniia", episodeId: 9 }],
  },

  // ─── Exams & Certifications ────────────────────────────────────────────────
  {
    id: "yki-test",
    name: "YKI Test (Yleinen kielitutkinto)",
    description:
      "Finland's national general language proficiency test. Levels range from A1 to C1. Required for citizenship and recognised by employers.",
    category: "Exams & Certifications",
    mentions: [
      { personName: "Matthias", episodeId: 11 },
      { personName: "Kseniia", episodeId: 9 },
      { personName: "Hamed", episodeId: 10 },
      { personName: "Deborah", episodeId: 5 },
      { personName: "Oheneba", episodeId: 2 },
    ],
  },
  {
    id: "vkt",
    name: "Valtionhallinnon kielitutkinto (VKT)",
    description:
      "State administration language exam at B2–C1 level. Deborah passed this to qualify for the University of Helsinki Law School.",
    category: "Exams & Certifications",
    mentions: [{ personName: "Deborah", episodeId: 5 }],
  },
];
