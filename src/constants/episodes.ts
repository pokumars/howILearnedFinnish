export interface Guest {
  name: string;
  slug: string;
  age: number;
  profession: string;
  from?: string;
  movedToFinland?: number;
  bio: string;
  socialUrl?: string;
}

export interface Episode {
  id: number;
  title: string;
  description: string;
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
  WithKids = "With Kids",
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
    description:
      "In this episode of ‘How I Learned Finnish with Ohe,’ I interview Jamie McDonald, a 48-year-old standup comedian and artist, about his journey of learning Finnish. Jamie, who performs under the stage name ‘Happening Fish,’ discusses the challenges and motivations in learning a language spoken by only a few million people. He shares insights into his methods, from taking classes and integrating into Finnish society through family and social circles, to the unconventional approaches of performing standup and attending yoga classes. Jamie also reflects on the emotional hurdles, the importance of persistence, and the cultural immersion necessary for mastering Finnish.. He covers topics such as integrating into Finnish culture, overcoming language barriers in personal and professional settings, and the importance of stepping out of one’s comfort zone to truly master a new language. This episode is filled with humor, valuable insights, and encouragement for anyone looking to learn Finnish or navigate a new linguistic and cultural environment.",
    guest: {
      name: "Jamie McDonald",
      slug: "jamie-mcdonald",
      age: 48,
      profession: "Standup Comedian & Artist",
      from: "Canada",
      bio: "Jamie McDonald — known online as HappeningFish — is a standup comedian and artist living in Finland. He took one of the most unconventional routes to Finnish fluency: getting on stage and performing comedy in a language he was still acquiring. Alongside his Finnish-speaking household and daily cultural immersion, Jamie used yoga classes, social circles, and the pressure of making Finnish audiences laugh as his classroom. He is one of the most honest voices on why you have to find a deeply personal reason to invest in a language that only a few million people speak.",
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
    timeToFluency: "Approximately 15–17 months from starting (January 2019) to certified B1 (June 2020), spending only ~3–4 months physically in Finland; later reached C1 at Aalto University",
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
    description:
      "In this engaging discussion, Hamed, a 43-year-old software engineer originally from Iran, recounts his experiences adapting to life in Finland. Hamed shares his journey of learning Finnish, which was initially challenging due to his temporary mindset and resistance to the language. Eventually, his perspective shifted as he accepted Finland as his new home. Hamed highlights the role of making Finnish friends, listening to music, and immersing himself in Finnish culture as crucial to his language acquisition. He recounts specific experiences, such as working in a multicultural center, participating in language courses, and navigating daily interactions. Notably, he discusses how expressing emotions in Finnish significantly improved his fluency. Hamed emphasizes the importance of mindset, cultural immersion, and having fun in the process of learning a new language. His story provides valuable insights for anyone struggling to learn Finnish or integrate into a new culture.",
    guest: {
      name: "Hamed",
      slug: "hamed",
      age: 43,
      profession: "Software Engineer",
      from: "Iran",
      movedToFinland: 2004,
      bio: "Hamed arrived in Finland from Iran in March 2004, landing in Oulu having not planned to settle there — or anywhere in Finland. For years he resisted the language, treating the country as a temporary stop. The shift came when he accepted Finland as home: he moved to Espoo in 2005, built genuine Finnish friendships, and discovered that expressing emotion in Finnish unlocked a fluency that formal classes had never reached. He now works as a software engineer and looks back on that mindset change as the single most important step in his language journey.",
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
    timeToFluency: "Approximately 6–7 years — arrived March 2004, felt fluent around 2010–2011, entirely through immersive living rather than deliberate study",
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
    timeToFluency: "About 3.5 years of active study (autumn 2019 to May 2023 YKI B1 certification), having lived in Finland since 2016 but not studying seriously until 2019",
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
  },
  {
    id: 7,
    title:
      "007: I Didn't Wait To Be Included, I Learned The Language To Belong - Magdalene",
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
  },
  {
    id: 6,
    title: "006: Stop Saying It's Too Hard, That's Why You're Stuck - Emily",
    description:
      "Meet Emily, an entrepreneur and hairdresser who shares her unique strategies, challenges, and experiences that shaped her language-learning process. In this episode, we dive deep into Emily's journey of learning Finnish. From studying abroad to integrating into Finnish society, Emily covers essential topics like vocabulary building, speaking, listening, grammar, reading, and writing. She also discusses the importance of mindset, staying motivated, and leveraging resources like podcasts, books, and online platforms to master Finnish. Learn how Emily overcame the hurdles of learning a new language and how you can apply her insights to your language-learning journey.",
    guest: {
      name: "Emily",
      slug: "emily",
      age: 0,
      profession: "Hairdresser & Entrepreneur",
      from: "Vietnam",
      movedToFinland: 2012,
      bio: "Emily came to Finland from Vietnam in 2012 to study international business on a free tuition scholarship — and spent years trying to leave. She lived in Spain and the Netherlands for a year each as part of her studies, assumed Finland was temporary, and kept Finnish firmly on the back burner. It was only after deciding to stay for good — realising that citizenship, career, and belonging all required it — that she committed to the language. She found her breakthrough with a Vietnamese-speaking Finnish tutor and pushed through the intermediate plateau that stops many learners. She now runs her own hairdressing business in Helsinki.",
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
  },
  {
    id: 5,
    title: "005: From Zero to Finnish Law School in 3 years - Deborah Laajanen",
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
    },
    tags: [
      FilterTags.Parent,
      FilterTags.WithKids,
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
  },
  {
    id: 4,
    title: "004: Why Duolingo Failed, Paying for 100 Lunches, and More - Erik",
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
    },
    tags: [
      FilterTags.A1toC,
      FilterTags.FinnishSpeakingPartner,
      FilterTags.WithKids,
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
  },
  {
    id: 3,
    title:
      "003: I Lost Custody of My Kids Because I Couldn't Speak Finnish - Anita Anttila",
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
    },
    tags: [
      FilterTags.Parent,
      FilterTags.WithKids,
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
  },
  {
    id: 2,
    title: "002: How I Achieved Fluency in Finnish in Just One Year",
    description:
      "In 2022, I embarked on a radical experiment — I pretended not to speak English for an entire year in order to immerse myself in Finnish and reach fluency as an adult. My  journey of mastering the Finnish language in just one year starting from a weak level! How to learn Finnish language easily. From setting specific targets and creating a language immersion environment to utilizing podcasts, books, and articles, I provide actionable tips that can help you learn any language. Learn about the six essential components of language learning—vocabulary, speaking, listening, grammar, reading, and writing—and discover how I kept myself motivated, and adapted my strategies along the way. Whether you're starting from scratch or looking to refine your skills, this video is packed with valuable advice for achieving your language learning goals.",
    guest: {
      name: "Oheneba Poku-Marboah",
      slug: "oheneba-poku-marboah",
      age: 0,
      profession: "Podcast Creator",
      from: "Ghana",
      bio: "Oheneba — known as Ohe — is the creator and host of How I Learned Finnish. This episode is his own story: in 2022, he publicly committed to speaking Finnish whenever possible for an entire year, having concluded that simulating the conditions of a non-English speaker was the only reliable path to reflex-level fluency. He built daily habits around Finnish podcasts, a vocabulary-building Excel sheet, translated phrase banks, and reading books entirely in Finnish. By summer he had already landed a new job partly because of how well he spoke the language — and came out of the year with the fluency he had set out to find.",
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
  },
];
