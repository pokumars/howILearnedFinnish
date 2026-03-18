export interface Guest {
  name: string;
  slug: string;
  age: number;
  profession: string;
  from?: string;
  movedToFinland?: number;
  bio: string;
  metaDescription?: string;
  socialUrl?: string;
}

export interface Episode {
  id: number;
  title: string;
  description: string;
  metaDescription?: string;
  guest?: Guest;
  tags: FilterTags[];
  videoUrl: string;
  thumbnail: string;
  platforms: { name: string; url: string }[];
  timeToFluency?: string;
  keyMethods?: string[];
  resourcesMentioned?: string[];
  keyTakeaways?: string[];
}

export enum FilterTags {
  AllEpisodes = "All",
  Parent = "Parent",
  Student = "Student",
  FinnishSpeakingPartner = "Finnish-speaking partner",
  NonFinnishSpeakingPartner = "Non-Finnish-speaking partner",
  A1toC = "A1 to C",
  B1toC = "B1 to C",
  Immersion = "Immersion method",
  FastPaced = "Fast-paced",
  //Introvert = "Introvert",
}
export const filterTags = Object.values(FilterTags);

export const episodes: Episode[] = [
  {
    id: 13,
    title:
      "013: Living Fully in Finland (Not Just Surviving) - Learning Finnish with Chloe Järvinen",
    metaDescription:
      "Chloe Järvinen shares how she moved from the UK to Finland and learned Finnish by rejecting the 'impossible' narrative and setting small daily goals.",
    description:
      "In this episode, I sit down with Chloe Järvinen, a UK-born project manager in the social field who moved to Finland in 2015 after a music-inspired trip unexpectedly changed her life. What began as a fascination with Finnish rock led to marriage, relocation, and ultimately a deep commitment to learning the language. Chloe explains why mastering Finnish became non-negotiable for her independence and sense of belonging. She shares what genuinely helped her progress, what completely missed the mark, and why some popular learning materials can actually demotivate learners without proper guidance—while offering practical alternatives that worked better for her. We dive into mindset shifts, rejecting the 'Finnish is impossible' narrative, setting small tangible goals, leveraging passive exposure in daily life, and navigating serious setbacks without giving up. This conversation isn’t just about learning a language. It’s about building a life—and how Finnish expanded Chloe’s confidence, career opportunities, and connection to the society around her.",
    guest: {
      name: "Chloe Järvinen",
      slug: "chloe-jarvinen",
      age: 39,
      profession: "Project Manager",
      from: "United Kingdom",
      movedToFinland: 2015,
      bio: "Chloe moved to Finland from the UK in October 2015 after a weekend trip to see Finnish rock music turned into something far bigger. At a Helsinki gig she met the man who would become her husband, and within two months she had relocated and married. Ten years on, she works as a project manager in the social field — in Finnish. Her learning journey is defined by rejecting the ‘Finnish is impossible’ narrative, setting small tangible goals, and weaving the language into everyday life rather than waiting for some distant moment of perfection.",
      metaDescription:
        "UK-born project manager who moved to Finland in 2015 and learned Finnish by rejecting the 'impossible' narrative and setting small tangible goals.",
    },
    tags: [
      FilterTags.A1toC,
      FilterTags.Immersion,
      FilterTags.FinnishSpeakingPartner,
    ],
    videoUrl: "https://youtu.be/51uR_HiQnMo?si=RYrVsj0T1Yw54Gkm",
    thumbnail: "/thumbnails/13_chloe.png",
    platforms: [
      {
        name: "Apple",
        url: "https://podcasts.apple.com/fi/podcast/013-living-fully-in-finland-not-just-surviving-learning/id1820396129?i=1000751324121",
      },
      {
        name: "Spotify",
        url: "https://open.spotify.com/episode/4Z9KoXEkPEZgWvLWCzLeJ4?si=Ra59oQy4TzWIiB4hNbqaWw",
      },
      {
        name: "YouTube",
        url: "https://youtu.be/51uR_HiQnMo?si=RYrVsj0T1Yw54Gkm",
      },
    ],
    timeToFluency:
      "About 1.5–2 years to stable day-to-day Finnish; passed YKI B2 test in 2018 (~3 years after arriving in October 2015)",
    keyMethods: [
      "Independent study with Finnish textbooks (Suomi Sun with CD and dictionary) before and after arriving",
      "Listening to Finnish rock music (Negative, Hanoi Rocks, HIM) to train ear for vowel sounds and word boundaries",
      "Watching English TV crime dramas (Criminal Minds, CSI) with Finnish subtitles",
      "Forced real-life use: all errands — shopping, Kela forms, school meetings — done in Finnish with only a pocket dictionary",
      "Making friends at integration course who shared no common language, forcing natural Finnish conversation with no performance pressure",
      "Attending Finnish integration classes and preparing a Finnish question for the teacher before each session",
      "Passive immersion: Finnish Facebook groups, metro advertisements, Lidl leaflets, Pikku Kakkonen children's TV, Muskari classes",
      "Structured grammar study for the YKI test with daily 5–10 minute habits rather than marathon sessions",
    ],
    resourcesMentioned: [
      "Suomi Sun — Finnish textbook with CD and dictionary for independent English-speaking learners",
      "Finnish for Foreigners — 4-book series with graduated difficulty, recommended for self-study",
      "Suomen Mestari — widely-used classroom textbook; not recommended for independent learners without a teacher",
      "YLE — short videos of everyday Finnish interactions",
      "Duolingo — used during pandemic, recommended to a friend",
      "Punainen kuin veri (Red Like Blood) — Finnish murder mystery in selko kieli with Spotify audio and vocabulary support",
      "Kielikahvilat (language cafes) — community conversation practice",
      "Pikku Kakkonen — Finnish children's TV",
      "Muskari — Finnish parent-and-toddler music classes with repetitive songs and nursery rhymes",
    ],
    keyTakeaways: [
      "Rejecting the 'Finnish is impossible' narrative is itself a learning strategy — going in with that belief kills motivation before you start.",
      "Set tiny, tangible goals instead of chasing perfection: 'I'll understand the difference between the milks at the supermarket' beats waiting until you're ready.",
      "Suomen Mestari is not for self-study — it's demotivating without a teacher; Finnish for Foreigners is a better starting point for independent learners.",
      "You're already learning Finnish every day without realising it: bus stop names, metro screens, supermarket leaflets, and children's TV add up constantly.",
      "Speaking broken Finnish with other non-native speakers can accelerate fluency faster than class time — pressure-free, purpose-driven conversation beats drills.",
    ],
  },
  {
    id: 12,
    title:
      "012: Stand-Up Comedy as a Finnish Language Hack - with Jamie McDonald AKA HappeningFish",
    metaDescription:
      "Comedian Jamie McDonald explains how performing stand-up comedy in Finnish, yoga classes, and refusing to switch to English built his fluency.",
    description:
      "In this episode of ‘How I Learned Finnish with Ohe,’ I interview Jamie McDonald, a 48-year-old standup comedian and artist, about his journey of learning Finnish. Jamie, who performs under the stage name ‘Happening Fish,’ discusses the challenges and motivations in learning a language spoken by only a few million people. He shares insights into his methods, from taking classes and integrating into Finnish society through family and social circles, to the unconventional approaches of performing standup and attending yoga classes. Jamie also reflects on the emotional hurdles, the importance of persistence, and the cultural immersion necessary for mastering Finnish.. He covers topics such as integrating into Finnish culture, overcoming language barriers in personal and professional settings, and the importance of stepping out of one’s comfort zone to truly master a new language. This episode is filled with humor, valuable insights, and encouragement for anyone looking to learn Finnish or navigate a new linguistic and cultural environment.",
    guest: {
      name: "Jamie McDonald",
      slug: "jamie-mcdonald",
      age: 48,
      profession: "Standup Comedian & Artist",
      from: "Canada",
      bio: "Jamie McDonald — known online as HappeningFish — is a standup comedian and artist living in Finland. He took one of the most unconventional routes to Finnish fluency: getting on stage and performing comedy in a language he was still acquiring. Alongside his Finnish-speaking household and daily cultural immersion, Jamie used yoga classes, social circles, and the pressure of making Finnish audiences laugh as his classroom. He is one of the most honest voices on why you have to find a deeply personal reason to invest in a language that only a few million people speak.",
      metaDescription:
        "Canadian comedian performing stand-up in Finnish as HappeningFish. He used comedy, yoga, and social immersion to learn the language.",
      socialUrl: "https://instagram.com/HappeningFish",
    },
    tags: [
      FilterTags.A1toC,
      FilterTags.Immersion,
      FilterTags.FinnishSpeakingPartner,
    ],
    videoUrl: "https://youtu.be/22kmIRFCfRA",
    thumbnail: "/thumbnails/12_jamie.jpg",
    platforms: [
      {
        name: "Apple",
        url: "https://podcasts.apple.com/fi/podcast/012-stand-up-comedy-as-a-finnish-language-hack/id1820396129?i=1000740216154",
      },
      {
        name: "Spotify",
        url: "https://open.spotify.com/episode/1CYl1zf6HszJt9ZE93LNjg?si=D0fuTuiZSr25J725VgeXYA",
      },
      {
        name: "YouTube",
        url: "https://youtu.be/22kmIRFCfRA",
      },
    ],
    timeToFluency:
      "Approximately 18 years — arrived in Finland in 2002 and reached confident conversational Finnish around 2020–2021, primarily due to working almost exclusively in English throughout",
    keyMethods: [
      "Attending yoga and dance/theater classes in Finnish — absorbing physical vocabulary in context",
      "Listening to Finnish standup comedy sets at open mic nights 10–15 times to slowly decode jokes word by word",
      "Listening to Finnish radio (Radio Helsinki) in the car, especially news broadcasts where context was already known",
      "Watching Finnish TV with Finnish subtitles to map idioms rather than translating from English",
      "Attending Finnish theater productions of plays already known in English to decode the Finnish through prior knowledge",
      "Reading Fingerpori (Finnish newspaper comic strip) — short, punchy text rewarding close reading",
      "Writing in Finnish first, then checking with translation tools to identify errors rather than using translation as a crutch",
      "Defaulting to Finnish with every new person met and committing not to switch languages",
    ],
    resourcesMentioned: [
      "YLE / YLE app — selkosuomi (simplified Finnish) news and subtitled content",
      "Radio Helsinki — Finnish radio station",
      "Helsingin Sanomat (Hesari) — Finnish newspaper",
      "Fingerpori — Finnish comic strip",
      "Neiti Romantiikka (Ms. Romantic) — Finnish dark comedy series on YLE",
      "Sinuhe Egyptiläinen — Finnish historical novel",
      "Aku Ankka — Donald Duck comics in Finnish",
      "Duolingo — tried in Swedish only; dismissed as ineffective for Finnish",
      "Google Translate — used as a post-writing checking tool, not a translation crutch",
    ],
    keyTakeaways: [
      "External pressure beats internal motivation: Jamie's in-laws refusing to speak English at the dinner table pushed him further in weeks than years of self-directed effort.",
      "Ego is the biggest obstacle for intelligent people — the humiliation of sounding incompetent in Finnish feels worse than the actual difficulty of the language.",
      "Immersive, enjoyable activities beat formal study every time: yoga classes, theater, and standup comedy produced real gains because the context was physical, repetitive, and enjoyable.",
      "Start every conversation in Finnish and don't switch — once you commit, the social dynamic makes it hard to flip to English.",
      "You need a genuine personal reason to care about Finnish: without a stake in Finnish life — family, community, civic participation — the discomfort will always win.",
    ],
  },
  {
    id: 11,
    title:
      "011: How Immersion, Emotions, and 3,000 Words Made Matthias Fluent - Finnish Language Journey",
    metaDescription:
      "Matthias memorised 3,000 Finnish words before moving from Germany, then used choir singing and psychotherapy in Finnish to reach fluency.",
    description:
      "Starting even before he moved to Finland, Mathias discusses how he memorized 1000+ Finnish words from a vocabulary book and immersed himself in the language. He explains his methods, such as focusing on grammar, practicing speaking with native Finnish speakers, and integrating into Finnish culture through activities like joining choirs. Mathias also reveals unconventional approaches, including conducting psychotherapy in Finnish to deepen his emotional connection to the language. Despite many challenges and the onset of the COVID-19 pandemic, Mathias achieved fluency within a relatively short period by dedicating significant time and effort, employing both systematic and creative learning strategies. His story highlights the importance of persistence, immersion, and making use of emotions in the language learning process.",
    guest: {
      name: "Matthias",
      slug: "matthias",
      age: 25,
      profession: "Research Assistant",
      from: "Germany",
      movedToFinland: 2020,
      bio: "Matthias moved to Finland from Germany in February 2020 — arriving just weeks before COVID-19 lockdowns began — having already memorised thousands of Finnish words from a vocabulary book before he ever set foot in the country. A research assistant working on physics at Aalto University, he reached fluency through a combination of pre-arrival obsession, choir singing, children's audiobooks on repeat, and the unconventional technique of conducting psychotherapy sessions entirely in Finnish to give the language an emotional anchor.",
      metaDescription:
        "German research assistant who memorised 3,000 Finnish words before arriving, then deepened fluency through choir singing and psychotherapy in Finnish.",
    },
    tags: [
      FilterTags.A1toC,
      FilterTags.Immersion,
      FilterTags.FastPaced,
      FilterTags.Student,
    ],
    videoUrl: "https://youtu.be/k_eVInE7fHY",
    thumbnail: "/thumbnails/matthias.png",
    platforms: [
      {
        name: "Apple",
        url: "https://podcasts.apple.com/fi/podcast/011-how-immersion-emotions-and-3-000-words-made/id1820396129?i=1000737004909",
      },
      {
        name: "Spotify",
        url: "https://open.spotify.com/episode/0IEzhNRXZNtos4taYUeNGG?si=D0fuTuiZSr25J725VgeXYA",
      },
      {
        name: "YouTube",
        url: "https://youtu.be/k_eVInE7fHY",
      },
    ],
    timeToFluency:
      "Approximately 15–17 months from starting (January 2019) to certified B1 (June 2020), spending only ~3–4 months physically in Finland; later reached C1 at Aalto University",
    keyMethods: [
      "Brute-force vocabulary memorisation from a 3,000-word book before even arriving in Finland",
      "Copying vocabulary out by hand from a pocket dictionary — a meditative practice he found strongly reinforced memory",
      "Mastering Finnish grammar systematically using Professor Johannes Dellert's university lecture slides (in German), read repeatedly",
      "Joining multiple Finnish choirs (up to four simultaneously) to immerse in spoken Finnish with native speakers",
      "Staying with a Finnish-speaking Airbnb family for the first month to force daily spoken exposure",
      "Conducting psychotherapy sessions entirely in Finnish to connect feelings to Finnish vocabulary at a deep level",
      "Writing notes from Finnish biology textbooks in Finnish while preparing for the university medicine entrance exam",
      "Emotionally connecting with vocabulary words during study — concentrating intensely until he felt something associated with each word",
    ],
    resourcesMentioned: [
      "A German-language 3,000-word Finnish vocabulary book (title not recalled)",
      "Langenscheidt pocket dictionary — used to copy out vocabulary by hand",
      "Professor Johannes Dellert's Finnish grammar slides from Tübingen University (in German)",
      "Mika Waltari — Finnish author whose books Matthias read in Finnish",
      "The Hobbit (Hobitti) — read in Finnish translation",
      "Finnish biology textbooks — read and annotated in Finnish for the medicine entrance exam",
      "YKI test (Yleinen kielitutkinto) — Finnish language proficiency certification",
      "Viipurilaisten Osakunnan Laulajat — the Finnish choir he was most deeply involved with",
    ],
    keyTakeaways: [
      "Learn vocabulary first, then grammar — trying to study grammar without a base of 2,000+ words is pointless; the ingredients have to exist before you can cook.",
      "Physical writing beats screens: copying words by hand creates sensory and spatial memory anchors that dramatically improve retention over scrolling through an app.",
      "Immerse yourself in uncomfortable social situations from day one — avoiding the awkwardness of speaking imperfectly in front of native speakers is the single biggest mistake learners make.",
      "Consistency over intensity: 30–60 minutes of focused daily study beats five years of 10-minute Duolingo sessions.",
      "Finnish grammar has no exceptions — once you know the rules thoroughly, your brain is freed from clutter and can focus entirely on using the language.",
    ],
  },
  {
    id: 10,
    title: "010: The Moment I Stopped Resisting: Learning by Lifestyle - Hamed",
    metaDescription:
      "Hamed shares how accepting Finland as home — not formal study — unlocked his Finnish fluency after years of resistance as an engineer from Iran.",
    description:
      "In this engaging discussion, Hamed, a 43-year-old software engineer originally from Iran, recounts his experiences adapting to life in Finland. Hamed shares his journey of learning Finnish, which was initially challenging due to his temporary mindset and resistance to the language. Eventually, his perspective shifted as he accepted Finland as his new home. Hamed highlights the role of making Finnish friends, listening to music, and immersing himself in Finnish culture as crucial to his language acquisition. He recounts specific experiences, such as working in a multicultural center, participating in language courses, and navigating daily interactions. Notably, he discusses how expressing emotions in Finnish significantly improved his fluency. Hamed emphasizes the importance of mindset, cultural immersion, and having fun in the process of learning a new language. His story provides valuable insights for anyone struggling to learn Finnish or integrate into a new culture.",
    guest: {
      name: "Hamed Shahidi",
      slug: "hamed",
      age: 43,
      profession: "Software Engineer",
      from: "Iran",
      movedToFinland: 2004,
      bio: "Hamed arrived in Finland from Iran in March 2004, landing in Oulu having not planned to settle there — or anywhere in Finland. For years he resisted the language, treating the country as a temporary stop. The shift came when he accepted Finland as home: he moved to Espoo in 2005, built genuine Finnish friendships, and discovered that expressing emotion in Finnish unlocked a fluency that formal classes had never reached. He now works as a software engineer and looks back on that mindset change as the single most important step in his language journey.",
      metaDescription:
        "Iranian software engineer who spent years resisting Finnish until accepting Finland as home unlocked the mindset shift behind his fluency.",
    },
    tags: [
      FilterTags.A1toC,
      FilterTags.Immersion,
      FilterTags.FastPaced,
      FilterTags.NonFinnishSpeakingPartner,
    ],
    videoUrl: "https://youtu.be/WEa0xp-74y8",
    thumbnail: "/thumbnails/10_hamed.png",
    platforms: [
      {
        name: "Apple",
        url: "https://podcasts.apple.com/us/podcast/010-the-moment-i-stopped-resisting-learning-by/id1820396129?i=1000733651184",
      },
      {
        name: "Spotify",
        url: "https://open.spotify.com/episode/4dWL9ZGFLDFM4kb9SPUxgg?si=S2R6-lj-SIqpxaloFZNKCA",
      },
      {
        name: "YouTube",
        url: "https://youtu.be/WEa0xp-74y8",
      },
    ],
    timeToFluency:
      "Approximately 6–7 years — arrived March 2004, felt fluent around 2010–2011, entirely through immersive living rather than deliberate study",
    keyMethods: [
      "Keeping a vocabulary notebook: writing down frequently heard words and asking Finnish friends how to say phrases he wanted to use",
      "Immersive listening without pressure: sitting with Finnish-speaking friends and letting the language wash over him, treating it like a child's natural acquisition process",
      "Listening to Finnish radio (news) and slow, older Finnish music (Tapani Kansa) where words were clearly pronounced",
      "Watching movies with Finnish subtitles instead of English subtitles, pausing to read unfamiliar words",
      "Forcing himself to use even basic Finnish greetings with strangers — bus drivers, shop workers — to stay connected to the language daily",
      "Working in customer-facing jobs (multicultural centre, kindergarten, restaurant) where Finnish was obligatory under real pressure",
      "Using the kindergarten environment specifically: easier to make mistakes in front of children, who repeat simple everyday vocabulary constantly",
      "Expressing feelings in Finnish with his life partner, forcing him to find exact words for things he knew deeply",
    ],
    resourcesMentioned: [
      "Mainoslehti (Finnish advertising leaflets) — used as reading material for their short sentences, pictures, and clear context",
      "Työväenopisto (workers' institute) — attended a 3-month intensive Finnish course around 2005–2006",
      "Mava-koulutus at Diaconia opisto — roughly one-year preparatory course for immigrants covering Finnish and subject terminology",
      "Tapani Kansa — Finnish artist whose slow, clearly pronounced music Hamed used for listening practice",
      "Antti Tuisku — the first Finnish artist/song Hamed remembers hearing",
      "Finnish radio (news) — listened to regularly even before understanding anything",
      "YKI test — took it around 2017–2018 when applying for Finnish citizenship; found it easy by that point",
      "Google Translate — used when writing Finnish work documentation around 2020",
    ],
    keyTakeaways: [
      "Mindset is everything: Hamed did not start learning until he accepted he was staying in Finland permanently — as long as he saw his time there as temporary, the language simply would not stick.",
      "Immersion beats study: he skipped most formal classes and still scored among the highest; the bulk of his learning came from living in Finnish — friends, work, music, and radio.",
      "Make it enjoyable or it won't work: enjoyment raises dopamine and improves memory; stress raises cortisol and impairs it — Hamed found the neurological explanation for why fun is a strategy, not an excuse.",
      "Showing effort earns respect: even broken, halting Finnish opened doors — Finns who had answered in English suddenly switched to helping him when they saw he was genuinely trying.",
      "Being emotionally invested accelerates fluency: talking about his own feelings in Finnish with his partner pushed him to a qualitatively higher level, because you're motivated to find exact words for things you know with certainty.",
    ],
  },
  {
    id: 9,
    title: "009: This One Shift Made Me Fluent in Finnish",
    metaDescription:
      "Kseniia reveals how embracing discomfort and switching all her media to Finnish transformed her from a reluctant student to a confident speaker.",
    description:
      "In this episode, we explore the transformative power of embracing discomfort to achieve personal growth. Through heartfelt anecdotes and candid reflections, our guest reveals how pushing through initial unease can lead to newfound confidence and freedom. Learn why striving for perfection can actually hinder progress, and how allowing yourself to be imperfect can open doors to more meaningful interactions and self-discovery.",
    guest: {
      name: "Kseniia",
      slug: "kseniia",
      age: 27,
      profession: "Musician & Singer",
      from: "Russia",
      movedToFinland: 2016,
      bio: "Kseniia moved from St. Petersburg to Jyväskylä at 18 to study international business at JAMK, with no plan to stay long-term and little interest in learning Finnish seriously. She spent years coasting on English, did an exchange year in the UK, and returned to Finland in 2019 in the middle of an identity search — deciding to make it home. Starting almost from scratch, she worked with Russian-speaking Finnish teachers, immersed herself in Finnish YouTube and TV, and learned to push through the discomfort of real conversations rather than waiting for perfection. A musician and singer, she is one of the more introspective voices in this series on what it means to choose a country and a language.",
      metaDescription:
        "Russian musician who overcame years of coasting on English to learn Finnish through media immersion and embracing discomfort.",
    },
    tags: [
      FilterTags.Student,
      FilterTags.A1toC,
      FilterTags.Immersion,
      FilterTags.FastPaced,
    ],
    videoUrl: "https://youtu.be/D8NneGabhtw",
    thumbnail: "/thumbnails/9_kseniia.jpg",
    platforms: [
      {
        name: "Apple",
        url: " https://podcasts.apple.com/fi/podcast/009-this-one-shift-made-me-fluent-in-finnish/id1820396129?i=1000731456332",
      },

      {
        name: "Spotify",
        url: "https://open.spotify.com/episode/28OenrBhyMzVPkvRSzNDsh?si=tnuWMK7SRweByQdAhwzjVw",
      },
      {
        name: "YouTube",
        url: "https://youtu.be/D8NneGabhtw",
      },
    ],
    timeToFluency:
      "About 3.5 years of active study (autumn 2019 to May 2023 YKI B1 certification), having lived in Finland since 2016 but not studying seriously until 2019",
    keyMethods: [
      "Private lessons with Russian-speaking Finnish teachers over Zoom/WhatsApp, using textbooks sent to her",
      "Consuming Finnish media the same way she consumed English content — Finnish YouTube vloggers, TV series, comedy sketches, and TikToks",
      "Listening to and translating Finnish rap and pop music (Behm, Gettomasa, JVG, Costi, IBE) lyric by lyric to understand vocabulary and puhekieli",
      "Setting her phone to Finnish at all times, even while travelling abroad",
      "Self-talk in Finnish: narrating daily tasks (unpacking groceries, chores) and debriefing difficult interactions in Finnish",
      "Attending language cafes for peer-to-peer conversation practice after university",
      "Enrolling at two Finnish-language music schools (musiikkiopisto) where all instruction operated exclusively in Finnish",
      "Asking Finnish friends to review important written texts (CVs, emails, essays) for accuracy",
    ],
    resourcesMentioned: [
      "Suomen mestari — primary Finnish textbook series used with her private teachers",
      "Harjoitus tekee mestari — Finnish grammar and exercise textbook used alongside lessons",
      "YKI test (Yleinen kielitutkinto) — passed at B1 level in May 2023",
      "Duolingo — tried early on; described as the least useful resource she used",
      "Genius — used to find Finnish rap lyrics and community annotations/translations",
      "Sanakirja — Finnish online dictionary used when writing",
      "Behm — Finnish artist; her song 'Hei rakas' was the first Finnish song Kseniia fully understood",
      "Gettomasa, JVG, Costi, IBE — Finnish rap/pop artists whose songs she translated word by word",
      "JAMK (Jyväskylä University of Applied Sciences) — where she completed her BBA",
    ],
    keyTakeaways: [
      "Discomfort is the engine, not the obstacle — Kseniia's most traumatic moment (running out of a library in tears after failing a conversation) became her primary motivation; she kept returning to uncomfortable situations specifically to not feel that way again.",
      "Perfectionism kills fluency: she made a deliberate agreement with herself that as long as she made sense and didn't offend anyone, the interaction counted as a success — letting go of perfect grammar gave her freedom to actually communicate.",
      "Transpose your existing habits into Finnish, don't build new ones: she simply switched YouTube, music, and media from English to Finnish rather than creating artificial study routines.",
      "Passive immersion compounds quietly: switching her phone to Finnish and talking to herself in Finnish during chores created thousands of low-effort reps that built fluency beyond her certified B1 level.",
      "A big goal sustains you through the dark moments: throughout years of awkward interactions and feeling inadequate, she held a clear image of herself holding a Finnish passport — without that anchor, she said, 'nothing is enough.'",
    ],
  },
  {
    id: 8,
    title: "008: From Hallway Listener to Fluent Finnish Speaker - Jojo Pratt",
    metaDescription:
      "Jojo Pratt went from listening through classroom doors in a refugee camp to becoming a fluent Finnish-speaking nurse through relentless immersion.",
    description:
      "In this episode, we dive into the life story of Jojo Pratt, a nurse originally from Ghana. Jojo shares his unique experiences and challenges of learning Finnish, from his early days in a Finnish refugee camp to becoming fluent and integrated into Finnish society. Join us as Jojo recounts the creative and relentless methods he used, the cultural and societal barriers he overcame, and the crucial mindset needed to master a new language. Discover valuable insights and tips for anyone striving to learn Finnish or any new language. This is an episode filled with inspiring anecdotes, humorous moments, and practical advice you won't want to miss!",
    guest: {
      name: "Jojo Pratt",
      slug: "jojo-pratt",
      age: 37,
      profession: "Nurse",
      from: "Ghana",
      movedToFinland: 2009,
      bio: "Jojo Pratt — born Godson, nicknamed Cyborg back in boarding school — arrived in Finland at the end of 2009 from Ghana via London, spending his first year in a Red Cross refugee camp with no Finnish and no plan. What followed was a relentless self-education: listening through classroom doors until the teacher started leaving the door open for him, absorbing every Finnish conversation within earshot, and refusing to let circumstance become an excuse. He eventually qualified as a nurse and built a life fully integrated into Finnish society — one of the most honest voices in this series on what learning a language with no safety net actually demands.",
      metaDescription:
        "Ghanaian nurse who arrived in Finland via a refugee camp and learned Finnish by listening through classroom doors and refusing to give up.",
    },
    tags: [FilterTags.A1toC, FilterTags.Immersion, FilterTags.Student],
    videoUrl: "https://www.youtube.com/watch?v=bz0lTCmgv_U",
    thumbnail: "/thumbnails/008_Jojo_Pratt.jpg",
    platforms: [
      {
        name: "Apple",
        url: "https://podcasts.apple.com/fi/podcast/008-from-hallway-listener-to-fluent-finnish-speaker/id1820396129?i=1000724656633",
      },
      {
        name: "Spotify",
        url: "https://open.spotify.com/episode/0WQ9VIngZuO739W76IKTtr?si=59056a8068e3419d",
      },
      {
        name: "YouTube",
        url: "https://www.youtube.com/watch?v=bz0lTCmgv_U",
      },
    ],
    timeToFluency:
      "Conversationally functional within 4–6 months of arriving; reached professional/advanced level over several years of immersion and nursing work — he describes fluency as a continuous progression rather than a fixed point",
    keyMethods: [
      "Attending Finnish language classes at the refugee camp — stood at the door listening until the teacher let him in, admitted ahead of schedule due to his rapid progress",
      "Carrying a Finnish–English dictionary everywhere and looking up words in real time during conversations",
      "Using Pimsleur audio software in the evenings to learn pronunciation of words he planned to use the next day",
      "Planning what to say in Finnish before errands, then using it at the cashier or shop counter",
      "Socialising exclusively in Finnish — his Finnish friends spoke no English, so every interaction forced the language from day one",
      "Going to bars specifically to talk to Finns, who were willing to talk at length and gave extended speaking practice",
      "Watching Finnish children's TV to hear simple, clear Finnish and understand how words sound",
      "Attending Finnish church services to listen to formal, clear Finnish and test comprehension",
      "Welcoming corrections from elderly patients at an old people's home, actively asking staff and residents to fix his grammar",
      "Reading Finnish newspapers and listening to Finnish radio as his level improved",
    ],
    resourcesMentioned: [
      "Pimsleur — audio language learning programme he used in the evenings for pronunciation practice",
      "Finnish–English / English–Finnish physical dictionary — carried everywhere",
      "Finnish language classes at the Red Cross refugee camp",
      "Finnish newspapers — used for reading practice",
      "Finnish radio — used for listening practice",
      "Finnish children's TV programmes",
      "Finnish children's books",
    ],
    keyTakeaways: [
      "Mentality comes first: wanting to learn Finnish as badly as you need to breathe is the single biggest predictor of success — people who stay in camps for years without learning the language simply didn't want it badly enough.",
      "Practice beats classroom time: Jojo saw classmates attend Finnish courses for years without being able to speak; going out and using the language every day moved him faster than any formal class.",
      "Immersion is not optional: because his Finnish friends spoke no English, he had no choice but to communicate in Finnish from the very beginning — being forced to use the language to survive socially was the biggest single accelerant.",
      "Embrace correction, not comfort: he actively welcomed being corrected by elderly patients and friends, and advises resisting the urge to switch to English when Finns offer it.",
      "Nobody can teach you Finnish — you have to learn it: courses can show you how the language connects, but if you're not practising in the real world, passing classroom exams is a false sense of progress.",
    ],
  },
  {
    id: 7,
    title:
      "007: I Didn't Wait To Be Included, I Learned The Language To Belong - Magdalene",
    metaDescription:
      "Magdalene Awahnde shares how she rose from immigrant student to nursing manager in Finland by making Finnish her language of belonging.",
    description:
      "Join us for an inspiring conversation with Magdalene Awahnde, a nursing manager in Finland. In this episode, Magdalene shares her journey from Cameroon to Finland, her challenges and triumphs in learning the Finnish language, and her rise in the healthcare sector. Discover her key strategies for overcoming language barriers, her motivational tips for aspiring immigrants, and how her determination and positive attitude opened doors to remarkable opportunities. Magdalene's story is a testament to the power of perseverance and the importance of embracing opportunities. Don't miss this insightful and motivational episode!",
    guest: {
      name: "Magdalene Awahnde",
      slug: "magdalene-awahnde",
      age: 40,
      profession: "Nursing Manager",
      from: "Cameroon",
      movedToFinland: 2004,
      bio: "Magdalene Awahnde came to Finland from Cameroon around 2004, joining her husband who had already been there for several years. She arrived as a student and pivoted into healthcare — studying nursing while raising a family and learning Finnish in parallel. Over two decades she rose to nursing manager, a role she notes she was among the first Black women to hold in her field. Her philosophy was straightforward: she was here, this was her home, and she was going to learn the language — not because it was easy, but because belonging required it.",
      metaDescription:
        "Cameroonian nursing manager who learned Finnish over two decades, rising to leadership by making the language her tool for belonging.",
    },
    tags: [
      FilterTags.Student,
      FilterTags.A1toC,
      FilterTags.Immersion,
      FilterTags.NonFinnishSpeakingPartner,
    ],
    videoUrl: "https://www.youtube.com/watch?v=EwjMZfRKnaU&si=XAOUE8JQr90KaIxh",
    thumbnail: "/thumbnails/7_Magdalene.jpg",
    platforms: [
      {
        name: "Apple",
        url: "https://podcasts.apple.com/us/podcast/007-i-didnt-wait-to-be-included-i-learned-the/id1820396129?i=1000720558960",
      },
      {
        name: "Spotify",
        url: "https://open.spotify.com/episode/4LfR7dkyrQWbv0qy4uZtiI?si=TbgcCBRkT6eQJHthAVS-NQ",
      },
      {
        name: "YouTube",
        url: "https://www.youtube.com/watch?v=EwjMZfRKnaU&si=XAOUE8JQr90KaIxh",
      },
    ],
    timeToFluency:
      "Approximately 7–8 years to a high functioning level — arrived 2004, reached confident working Finnish around 2011–2012; continued formal grammar study as late as 2018 for advanced professional contexts",
    keyMethods: [
      "Attended a 3–4 month basic Finnish course at an NGO shortly after arriving",
      "Completed mandatory Finnish language modules (basic, intermediate, advanced) embedded in her nursing degree at Laurea University of Applied Sciences",
      "Practised Finnish in everyday situations — greeting cashiers, riding the bus, using new words immediately after learning them",
      "Kept a pen-and-paper notebook during work placements to write down words and phrases heard from patients and colleagues",
      "Learned one new Finnish word every day deliberately, a habit maintained with her school friend group",
      "Watched Finnish TV (Kauneus ja rohkeus / Bold and Beautiful dubbed in Finnish) with Finnish subtitles",
      "Listened to Finnish radio (Yle news and music stations) on daily commute to absorb pronunciation and natural speech",
      "Cultivated a social circle of both Finnish native speakers and motivated immigrant classmates who all spoke Finnish together",
      "Engaged in her children's school life in Finnish — attending parent meetings, reading Wilma messages, helping with Finnish schoolwork",
      "Took formal grammar courses around 2018 when promoted to managerial roles requiring formal meeting and report-writing Finnish",
    ],
    resourcesMentioned: [
      "Laurea University of Applied Sciences — nursing degree with embedded Finnish language courses",
      "Kauneus ja rohkeus (Finnish broadcast of Bold and Beautiful) — watched with Finnish subtitles on national TV",
      "Yle / Finnish national television — general Finnish language exposure",
      "Finnish radio (Yle news and music stations) — listened to daily on commute",
      "Bilingual English-Finnish dictionary/translation books",
      "Wilma — Finnish school communication platform, used to read teacher messages",
      "Michelle Obama's memoir — read in Finnish translation as a reading challenge",
    ],
    keyTakeaways: [
      "Motivation rooted in a clear personal vision separates those who succeed from those who stall — Magdalene committed to Finnish before she even arrived because her husband said 'this is my home', and that decision carried her through years of difficulty.",
      "Immersion through work placements drove the biggest leaps — the vocabulary and confidence from real nursing shifts outpaced anything she learned in a course.",
      "Your social circle is a learning environment: surrounding herself with Finnish native speakers and motivated immigrant classmates who practiced Finnish together meant the language was always normal and expected.",
      "Don't wait until your Finnish is perfect to use it — Magdalene used broken Finnish from day one and kept going despite mistakes; Finns' non-judgmental reaction to imperfect Finnish made this possible.",
      "If you stop using the language, you lose it — a short period living in the US caused her Finnish to noticeably decline, reinforcing that consistent daily exposure must be woven into life, not treated as a separate study activity.",
    ],
  },
  {
    id: 6,
    title: "006: Stop Saying It's Too Hard, That's Why You're Stuck - Emily",
    metaDescription:
      "Emily shares why language apps failed and how a bilingual tutor and Finnish-language vocational school finally broke through her plateau.",
    description:
      "Meet Emily, an entrepreneur and hairdresser who shares her unique strategies, challenges, and experiences that shaped her language-learning process. In this episode, we dive deep into Emily's journey of learning Finnish. From studying abroad to integrating into Finnish society, Emily covers essential topics like vocabulary building, speaking, listening, grammar, reading, and writing. She also discusses the importance of mindset, staying motivated, and leveraging resources like podcasts, books, and online platforms to master Finnish. Learn how Emily overcame the hurdles of learning a new language and how you can apply her insights to your language-learning journey.",
    guest: {
      name: "Emily Nguyen",
      slug: "emily",
      age: 0,
      profession: "Hairdresser & Entrepreneur",
      from: "Vietnam",
      movedToFinland: 2012,
      bio: "Emily came to Finland from Vietnam in 2012 to study international business on a free tuition scholarship — and spent years trying to leave. She lived in Spain and the Netherlands for a year each as part of her studies, assumed Finland was temporary, and kept Finnish firmly on the back burner. It was only after deciding to stay for good — realising that citizenship, career, and belonging all required it — that she committed to the language. She found her breakthrough with a Vietnamese-speaking Finnish tutor and pushed through the intermediate plateau that stops many learners. She now runs her own hairdressing business in Helsinki.",
      metaDescription:
        "Vietnamese hairdresser and entrepreneur who broke through the Finnish plateau with a bilingual tutor and a Finnish-language vocational programme.",
    },
    tags: [
      FilterTags.Student,
      FilterTags.A1toC,
      FilterTags.Immersion,
      FilterTags.NonFinnishSpeakingPartner,
    ],
    videoUrl: "https://www.youtube.com/watch?v=t3QWADJcyJI",
    thumbnail: "/thumbnails/6_emily.jpg",
    platforms: [
      {
        name: "Apple",
        url: "https://podcasts.apple.com/us/podcast/006-stop-saying-its-too-hard-thats-why-youre-stuck-emily/id1820396129?i=1000719482259",
      },
      {
        name: "Spotify",
        url: "https://open.spotify.com/episode/7BDemlxKdsBU9PtPAEatnd?si=vAUc2ghJTx2yZa8M1HI_Aw",
      },
      {
        name: "YouTube",
        url: "https://www.youtube.com/watch?v=t3QWADJcyJI",
      },
    ],
    timeToFluency:
      "Passed YKI B1 in 2018 (~6 years after arriving in 2012); reached genuine B2 around 2022–2023 (~10–11 years) — the biggest leap came from enrolling in a Finnish-language hairdressing programme",
    keyMethods: [
      "Private tuition with a Vietnamese-Finnish bilingual tutor (2015–2017) who could explain Finnish by comparing it to both Vietnamese and English",
      "Self-study with workbooks (Suomen mestari, Start to Finnish, Kynä käteen, YKI-prep books) focusing on exercises with answer keys",
      "Using Yle Kielikoulu / Yle Areena for simultaneous listening and reading with colour-coded level subtitles",
      "Reading Selkouutiset (simplified Finnish news) in both text and audio form",
      "Studying daily (30–60 min) for three months before the YKI exam, applying test-taking strategy from her TOEFL iBT experience",
      "Using AI (Claude) to check and correct her own Finnish writing at B2 level so she could proofread and learn from the output",
      "Enrolling in a hairdressing diploma taught entirely in Finnish with native-speaker classmates — the single most impactful step",
      "Deliberately speaking Finnish to customers at work even when they opened in English",
    ],
    resourcesMentioned: [
      "Suomen mestari (book series, particularly book 3 and its lisää harjoitus exercises)",
      "Start to Finnish — grammar reference book explained in English",
      "Kynä käteen — writing-focused workbook",
      "Harjoitus tekee mestari — higher-level exercise book",
      "Yle Kielikoulu / Yle Areena — Finnish public broadcaster's language-learning platform with level-coded subtitles",
      "Selkouutiset — simplified Finnish news in text and audio",
      "Uusi kielemme — Finnish grammar reference website",
      "Finnished — YouTube channel and podcast for Finnish learners",
      "Claude (AI writing assistant) — used for Finnish writing correction, preferred over ChatGPT",
      "Duolingo — mentioned as what she uses for Swedish, not Finnish",
    ],
    keyTakeaways: [
      "Classroom courses didn't work for Emily because a tight work schedule broke the feedback loop — self-study with an answer key solved this by making it possible to learn at any time and check your own work.",
      "The single biggest improvement came from enrolling in a Finnish-language vocational school surrounded by native speakers; she saw more progress in one year there than in the preceding decade.",
      "Passing a formal exam (YKI B1 in 2018) and genuinely functioning at that level (B2 in 2022) can be years apart — the certificate is not the same as real fluency.",
      "Deliberately speaking Finnish to customers at work — even when they opened in English — was her most consistent and practical daily immersion habit.",
      "When motivation dips, switch to another language for a while then return to Finnish: the brain consolidates what it has learned and you often come back stronger.",
    ],
  },
  {
    id: 5,
    title: "005: From Zero to Finnish Law School in 3 years - Deborah Laajanen",
    metaDescription:
      "Deborah Laajanen went from zero Finnish to Helsinki Law School in three years using podcasts, mind maps, and relentless exam-driven discipline.",
    description:
      "3 years to go from zero Finnish to law school admission. Check out this interview of how Deborah was able to learn such high level Finnish. In this episode, we delve into the inspiring journey of Deborah Laajanen, a lawyer from the Philippines who managed to get accepted into a Finnish law school despite being in Finland for just a few years. Deborah shares her struggles and strategies for learning Finnish to an advanced level, including the use of resources like Suomen mestari, podcasts, and integrating herself into Finnish society. She also discusses the motivation behind her efforts, the role of discipline, and the importance of setting concrete goals. This conversation is a must-listen for anyone facing the daunting task of learning a new language, especially in a new country.",
    guest: {
      name: "Deborah Laajanen",
      slug: "deborah-laajanen",
      age: 0,
      profession: "Lawyer & Law Student",
      from: "Philippines",
      movedToFinland: 2021,
      bio: "Deborah Laajanen is a licensed attorney from the Philippines who moved to Finland in 2021 after marrying a Finn. Back home she had spent years earning a bachelor's degree, a juris doctor, and clearing the bar exam — none of which counted for much in a Finnish job market that required advanced Finnish even for paralegal roles. She turned that frustration into fuel: studying on and off over three years through a difficult pregnancy and major life adjustments, she passed the demanding valtionhallinnon kielitutkinto exam and earned a place at the University of Helsinki Law School to study a master of laws entirely in Finnish.",
      metaDescription:
        "Filipino lawyer who went from zero Finnish to Helsinki Law School in three years through exam-driven discipline and legal podcast immersion.",
    },
    tags: [
      FilterTags.Parent,
      FilterTags.Immersion,
      FilterTags.FinnishSpeakingPartner,
      FilterTags.FastPaced,
    ],
    videoUrl: "https://youtu.be/V0jzUitkKL4?si=AEY553jX9wk0qV_W",
    thumbnail: "/thumbnails/5_Deborah.png",
    platforms: [
      {
        name: "Apple",
        url: "https://podcasts.apple.com/us/podcast/005-from-zero-to-finnish-law-school-in-3-years-deborah/id1820396129?i=1000718214596",
      },
      {
        name: "Spotify",
        url: "https://open.spotify.com/episode/5O6ggH0eHRKd6nfdEcBy66?si=sgP3fQrhQ2-deXnnmo_DXA",
      },
      {
        name: "YouTube",
        url: "https://youtu.be/V0jzUitkKL4?si=AEY553jX9wk0qV_W",
      },
    ],
    timeToFluency:
      "Approximately 3 years on-and-off (starting 2022, one year after arriving in 2021) — passed YKI B1 in year two, then the valtionhallinnon kielitutkinto (B2–C1) in year three, the level required for the University of Helsinki Law School master's programme",
    keyMethods: [
      "Passive listening from day one — before formally studying, listened to her husband and his friends speak Finnish and tried to process the sentence structure",
      "Integration course followed by an intensive evening course for professionals preparing for the YKI test",
      "Completed a 30-credit, six-month advanced Finnish programme at a University of Applied Sciences designed for highly educated immigrants",
      "Listened to Finnish podcasts — especially Finnish legal podcasts — during walks and at the gym as the default for all leisure audio",
      "Learned Finnish songs (particularly gospel songs she already knew in English) to absorb the language enjoyably",
      "Watched Muumit and selkouutiset for accessible listening at early stages, then progressed to harder Finnish texts and academic theses",
      "Wrote down unfamiliar phrases and idioms in a notebook, then used ChatGPT to investigate meaning and context, especially for legal jargon",
      "Made grammar mind maps to visualise sentence structures, cases, and grammatical relationships",
      "Asked Finnish-speaking people around her (in-laws, community) not to switch to English so conversations stayed in Finnish by default",
      "Set explicit, time-bound exam goals (YKI B1 in year two, VKT in year three) and structured her study around meeting them",
    ],
    resourcesMentioned: [
      "Selkouutiset — YLE easy Finnish news for listening and reading at beginner/intermediate level",
      "Suomen mestari 1, 2, 3, 4 — textbook series used in her integration programme",
      "Muumit — Finnish children's TV for accessible early listening",
      "Pääkäsittelyssä — Finnish legal podcast",
      "Juristipodi — Finnish legal podcast",
      "Lotta — YouTube channel focused on absorbing Finnish naturally",
      "Gimara — YouTube channel by a Finnish teacher",
      "ChatGPT — used to look up meaning and context of unfamiliar Finnish phrases and legal jargon",
      "Valtionhallinnon kielitutkinto (VKT) — state administration language exam at B2–C1",
      "YKI intermediate test — national Finnish language proficiency certificate",
    ],
    keyTakeaways: [
      "There is no hard and fast rule — what worked for Deborah (grammar-first, legal podcasts, heavy reading) won't work for everyone; find methods that match your own background and profession.",
      "The way through the intermediate plateau is to deliberately seek out difficult, abstract content — complex articles, legal podcasts, academic research — rather than staying comfortable at survival-level Finnish.",
      "Not having English as a fallback is the single biggest accelerant: Deborah's Russian and Ukrainian classmates, who had no option to switch to English, reached near-equivalent Finnish levels through sheer necessity.",
      "Setting concrete, time-bound exam targets transformed language learning from a vague aspiration into a structured programme with measurable milestones.",
      "Integration is a bilateral relationship — learning the language is an act of respect toward the host country and its people, and framing it that way sustains motivation when the process feels discouraging.",
    ],
  },
  {
    id: 4,
    title: "004: Why Duolingo Failed, Paying for 100 Lunches, and More - Erik",
    metaDescription:
      "Erik Åkesson shares why Duolingo failed, how paying for 100+ lunches with retired Finns built his skills, and why stress kills language learning.",
    description:
      "In this episode, we explore Erik's unique approach to learning Finnish through real-world interactions and practical experiences. Erik shares why traditional language learning apps like Duolingo weren't effective for him and how he discovered more effective methods. He discusses his strategy of paying for lunches to practice Finnish with native speakers, the importance of immersion, and how he overcame common challenges faced by adult language learners. This episode is packed with actionable insights for anyone looking to learn Finnish through authentic experiences.",
    guest: {
      name: "Erik Åkesson",
      slug: "erik-akesson",
      age: 0,
      profession: "Banker",
      from: "Sweden",
      movedToFinland: 2015,
      bio: "Erik Åkesson is a Swedish banker who moved to Finland around 2015 after a career spanning London, Copenhagen, and Stockholm — most recently as global head of foreign exchange trading at Danske Bank. With a Finnish wife and four kids each born in a different country, learning Finnish was always the intention but a high-pressure career left no space for it. A 15-month paternity leave changed everything: with a quieter mind and a baby asleep in a pram outside the restaurant window, he paid for over 100 lunches with retired Finns who would speak only Finnish with him, worked through three Suomen mestari books with a private teacher, and forced Finnish into every haircut, taxi ride, and errand he could.",
      metaDescription:
        "Swedish banker who paid for 100+ lunches with retired Finns after Duolingo failed, proving real conversation beats any app.",
    },
    tags: [
      FilterTags.A1toC,
      FilterTags.FinnishSpeakingPartner,
      FilterTags.Parent,
    ],
    videoUrl: "https://youtu.be/qD6RTlqPmRA?si=fte-t1TsGpENFrCT",
    thumbnail: "/thumbnails/4_Erik.jpg",
    platforms: [
      {
        name: "Apple",
        url: "https://podcasts.apple.com/us/podcast/004-why-duolingo-failed-paying-for-100-lunches-and/id1820396129?i=1000717294968",
      },
      {
        name: "Spotify",
        url: "https://open.spotify.com/episode/4lHHYmEPxsX9WCKdYCgebo",
      },
      {
        name: "YouTube",
        url: "https://youtu.be/qD6RTlqPmRA?si=fte-t1TsGpENFrCT",
      },
    ],
    timeToFluency:
      "Still a work in progress at time of recording — Erik moved to Finland ~10 years before the interview but only began seriously learning during a 15-month paternity leave (~4–5 years after arriving). His Finnish is 'decent' but not yet fluent.",
    keyMethods: [
      "Over 100 paid weekly lunches with retired Finnish speakers — standing table booked, strict no-English rule agreed upfront from the first meeting",
      "One-on-one grammar lessons via Skype with a private teacher, working chapter by chapter through Suomen mestari books 1–3",
      "Vocabulary building with the Voc Lab app — built a personal bank of ~8,000 words with native-speaker family members recording audio for each word",
      "Sending new unknown words to his teacher via WhatsApp as they were encountered, clearing the backlog at the start of every lesson",
      "Forcing Finnish into every simple social situation — hairdresser, taxi, grocery shopping — and telling people upfront not to switch to English",
      "Attending a church soup kitchen and cafe to find Finnish speakers who would not default to English",
      "Negotiating a language teacher into his employment contract before moving to Finland so his employer covered early lessons",
      "Making public commitments to force follow-through — a LinkedIn post offering to pay lunch for any Finnish speaker who would speak only Finnish with him",
    ],
    resourcesMentioned: [
      "Voc Lab — spaced-repetition vocabulary app; Erik built up ~8,000 words (app no longer exists)",
      "Suomen mestari — Finnish grammar textbook series; completed books 1–3, started book 4",
      "Yle Uutiset Selkosuomeksi (via Yle Areena) — slow, clearly spoken Finnish news, ~5 minutes daily; Erik called it 'by far the best way to learn listening skills'",
      "Duolingo — tried but dismissed; disliked the gamification and streak mechanics",
    ],
    keyTakeaways: [
      "Engineer your speaking opportunities deliberately — almost no Finnish person will force you to speak Finnish, so you have to create the environment yourself, whether that's paid lunches with retired locals or telling your coach upfront not to switch to English.",
      "The default language you set with a person sticks: once you establish Finnish as the default from the very first meeting, it's effectively impossible to change — which is why the no-English rule must be set upfront.",
      "Vocabulary plus conversation are two separate legs — both are required: grammar lessons gave Erik the structure, Voc Lab gave him the words, but neither replaced 100+ lunches of actual speaking practice.",
      "Stress is the enemy of language acquisition: early high-pressure lessons as a trading floor executive produced almost nothing that stayed; the same material absorbed far more easily during his low-stress paternity leave.",
      "Learning Finnish carries a poor cost-benefit ratio unless you commit long-term — you can live and work in Finland entirely in English and Swedish, so the real driver has to be personal commitment, not practical necessity.",
    ],
  },
  {
    id: 3,
    title:
      "003: I Lost Custody of My Kids Because I Couldn't Speak Finnish - Anita Anttila",
    metaDescription:
      "Anita Anttila lost custody of her children due to a language barrier — hear how that moment drove her to master Finnish over three decades.",
    description:
      "Reasons why you should Learn Finnish. Anita shares her heartbreaking yet inspiring story of how language barriers affected her family life and custody situation. This powerful episode explores the real consequences of not being able to communicate in Finnish, especially when it comes to family matters. Anita discusses her journey to learn Finnish, the challenges she faced in the legal system, and how she eventually regained custody of her children. This episode highlights the importance of language learning beyond just personal development - it can literally change lives and family dynamics.",
    guest: {
      name: "Anita Anttila",
      slug: "anita-anttila",
      age: 0,
      profession: "Restaurant Worker",
      from: "Indonesia",
      movedToFinland: 1996,
      bio: "Anita Anttila arrived in Finland in 1996 — before Google Translate, Duolingo, or social media — as a young mother in a small town near Seinäjoki where almost no one spoke English and Finnish was unavoidable from day one. She learned her first words from a dictionary and got through early months by pointing at items in shops. Her journey took a harrowing turn when a language barrier during her divorce left her without custody of her sons — the moment she describes as the real turning point that made fluency non-negotiable. Thirty years on, she works in restaurant service and speaks Finnish with the ease of someone who has lived it rather than studied it.",
      metaDescription:
        "Indonesian restaurant worker who arrived in Finland in 1996 and mastered Finnish through three decades of daily immersion and sheer necessity.",
    },
    tags: [
      FilterTags.Parent,
      FilterTags.A1toC,
      FilterTags.Immersion,
      FilterTags.NonFinnishSpeakingPartner,
    ],
    videoUrl: "https://www.youtube.com/watch?v=zcW4ibdkGc4",
    thumbnail: "/thumbnails/3_Anita.jpg",
    platforms: [
      {
        name: "Apple",
        url: "https://podcasts.apple.com/us/podcast/003-i-lost-custody-of-my-kids-because-i-anita-anttila/id1820396129?i=1000715713161",
      },
      {
        name: "Spotify",
        url: "https://open.spotify.com/episode/4C4SWQZEJzKBRw3lbVJnhe?si=c19b1e847a804da8",
      },
      { name: "YouTube", url: "https://www.youtube.com/watch?v=zcW4ibdkGc4" },
    ],
    timeToFluency:
      "Approximately 6–7 years to a functional communicative level, though she describes it as a gradual ongoing process rather than a fixed milestone — after about one year of full-time Finnish-language work (starting year 3) her vocabulary noticeably developed, and she was reading Finnish novels by year 6–7",
    keyMethods: [
      "Government integration programme (6-month course covering Finnish language, grammar basics, and social rights) — her only formal course",
      "Reading free Finnish newspapers to observe correct grammatical and communicative Finnish in context",
      "Listening to Finnish radio and watching TV news to absorb how the language is naturally used",
      "Speaking Finnish daily and consistently at work for 26+ years in Finnish restaurants surrounded by native speakers",
      "Deliberately abandoning the English grammatical mindset and forcing herself to think in Finnish patterns rather than translating",
      "Reading Finnish novels (starting around year 6–7, specifically Ilkka Remes) to develop sentence-building ability",
      "Practising with a Finnish-language Bible and Finnish church preaching to build vocabulary in personally meaningful areas",
      "Writing official letters and forms exclusively in Finnish (e.g. health department reports), using real bureaucratic needs as writing practice",
    ],
    resourcesMentioned: [
      "Finnish government integration programme (kotoutumisohjelma) — 6-month state-run course covering language and social rights",
      "Ilkka Remes — Finnish thriller author; Anita read his novels around year 6–7 of living in Finland",
      "Finnish-language Bible — used for vocabulary building in a personally meaningful context",
      "Finnish newspapers (free papers) — used for reading practice",
      "Finnish TV news and radio — used for listening practice",
      "ChatGPT — recommended as a modern tool: write in Finnish, ask it to translate to English to verify correctness",
    ],
    keyTakeaways: [
      "Survival necessity, not motivation, drove Anita to fluency — losing custody of her sons because she signed a document she didn't understand was the defining turning point: 'From now on, I have to manage my affairs.'",
      "The biggest mistake early learners make is keeping an English grammatical mindset — Finnish word forms change so drastically that translating mentally from English makes the language 'triple difficult'; you have to let the English go.",
      "Courses alone are not enough: Anita had only one six-month integration course in nearly 30 years; everything else came from reading newspapers, listening to TV and radio, and speaking Finnish at work every single day.",
      "Don't stop once you reach a basic level — Anita's key differentiator was continuing to use Finnish everywhere: 'I will be talking everywhere — to the shop, to the people, on the bus — always in Finnish.'",
      "Mental rest is a legitimate part of the process: 'If you keep pressing on yourself, your body becomes stressed and you won't get better. Give yourself a time out, then go back again when you feel fresh.'",
    ],
  },
  {
    id: 2,
    title: "002: How I Achieved Fluency in Finnish in Just One Year",
    metaDescription:
      "Ohe pretended not to speak English for a year to force Finnish fluency. Learn the six components and daily habits behind his radical immersion experiment.",
    description:
      "In 2022, I embarked on a radical experiment — I pretended not to speak English for an entire year in order to immerse myself in Finnish and reach fluency as an adult. My  journey of mastering the Finnish language in just one year starting from a weak level! How to learn Finnish language easily. From setting specific targets and creating a language immersion environment to utilizing podcasts, books, and articles, I provide actionable tips that can help you learn any language. Learn about the six essential components of language learning—vocabulary, speaking, listening, grammar, reading, and writing—and discover how I kept myself motivated, and adapted my strategies along the way. Whether you're starting from scratch or looking to refine your skills, this video is packed with valuable advice for achieving your language learning goals.",
    guest: {
      name: "Oheneba Poku-Marboah",
      slug: "oheneba-poku-marboah",
      age: 0,
      profession: "Podcast Creator",
      from: "Ghana",
      bio: "Oheneba — known as Ohe — is the creator and host of How I Learned Finnish. This episode is his own story: in 2022, he publicly committed to speaking Finnish whenever possible for an entire year, having concluded that simulating the conditions of a non-English speaker was the only reliable path to reflex-level fluency. He built daily habits around Finnish podcasts, a vocabulary-building Excel sheet, translated phrase banks, and reading books entirely in Finnish. By summer he had already landed a new job partly because of how well he spoke the language — and came out of the year with the fluency he had set out to find.",
      metaDescription:
        "Creator and host of How I Learned Finnish. In 2022 he pretended not to speak English for a year to reach fluency in Finnish.",
      socialUrl: "https://www.instagram.com/oheneba_poku_marboah/",
    },
    tags: [
      FilterTags.B1toC,
      FilterTags.Immersion,
      FilterTags.FinnishSpeakingPartner,
      FilterTags.FastPaced,
    ],
    videoUrl: "https://www.youtube.com/watch?v=mEQKGH0IN_s",
    thumbnail: "/thumbnails/fluency_thumbnail.png",
    platforms: [
      {
        name: "Apple",
        url: "https://podcasts.apple.com/us/podcast/002-how-i-achieved-fluency-in-finnish-in-just-one-year/id1820396129?i=1000712731337",
      },
      {
        name: "Spotify",
        url: "https://open.spotify.com/episode/2HZRp9VclECv2UVydJer0y?si=5c4CxcRYSZ2wRm6VizMrIQ",
      },
      { name: "YouTube", url: "https://www.youtube.com/watch?v=mEQKGH0IN_s" },
    ],
    timeToFluency:
      "In one sense, ~10 years: he had lived in Finland since roughly 2011, done all his education in English, and had some school Finnish but was not actively speaking the language as of 2021. In another sense, 12 months: a deliberate all-in immersion experiment throughout 2022 was the decisive lever that brought him to high fluency. He had also passed the YKI (national Finnish language certificate) in 2019, suggesting a functional baseline before the intensive year. Passive residence alone did not produce fluency — the structured 1-year experiment was what actually got him there.",
    keyMethods: [
      "Publicly declared a Finnish-only rule on LinkedIn, Instagram, and WhatsApp on 1 January 2022 — simulating the conditions of a non-English speaker with no fallback language and creating social accountability",
      "Daily podcast listening in Finnish aligned to personal interests (sports, investing, politics, entertainment) to cover listening comprehension across a wide register of spoken Finnish",
      "Vocabulary pipeline: unfamiliar words went into an Excel spreadsheet with Finnish-language definitions and personally relevant example sentences (via Glosbe), then transferred to Quizlet for active memorisation",
      "Translated personal phrase bank: identified phrases used frequently in English, translated them into Finnish, and memorised them for reflex-level use without in-the-moment translation",
      "Extensive reading — books and articles on topics he already cared about (football, Formula 1, stock market, technology, news) — to encounter vocabulary in context and maintain momentum",
      "Structured grammar study at the library on weekends using Suomen mestari textbooks and working through the exercises",
      "Using his Finnish-speaking girlfriend as a constant correction and explanation resource for day-to-day usage questions",
    ],
    resourcesMentioned: [
      "Kulttuuri Ykkönen — Finnish public radio podcast covering movies, books, TV, and popular culture",
      "Melkein kaikki rahasta by Julia Thurén — Finnish personal finance podcast",
      "Mimmit Sijoittaa — Finnish investing podcast",
      "Politiikka Radio — Finnish politics podcast",
      "Rahapodi by Nordnet — Finnish investing/finance podcast",
      "Inderes — Finnish stock market and investing content",
      "Yle Uutiset selkosuomeksi — Yle News in plain/easy Finnish",
      "Glosbe — multilingual example-sentence search used to write Finnish-language definitions",
      "Quizlet — flashcard app used for active vocabulary memorisation",
      "Suomen mestari — Finnish language textbook series used for weekend grammar study",
      "Sapiens by Yuval Noah Harari — attempted in Finnish but abandoned as too advanced",
      "The Life-Changing Magic of Tidying Up (KonMari) — read in Finnish",
      "Tears of My Soul (Kim Hyun Hee memoir) — read in Finnish",
      "ChatGPT — discussed as a tool he didn't have in 2022 but would now use for grammar explanations and writing correction",
    ],
    keyTakeaways: [
      "Passive residence does not produce fluency — he lived in Finland for roughly a decade without becoming fluent; it took a deliberate, structured, full-year commitment to actually get there.",
      "Simulating necessity is the core lever: he modelled his year on immigrants from non-anglophone countries who had no English fallback, making Finnish the only available language in every interaction.",
      "Public accountability amplifies commitment: posting his Finnish-only goal on LinkedIn turned his entire social network into correction partners and made backing down socially costly.",
      "Match learning materials to genuine personal interests: consuming podcasts, articles, and books on topics he already cared about kept motivation high and made new vocabulary stick in relevant context.",
      "Difficulty calibration matters in reading: a book requiring dictionary use every sentence kills momentum, while one that is challenging but flowing produces real progress.",
    ],
  },
];
