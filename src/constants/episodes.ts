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

export const episodes = [
  {
    id: 10,
    title: "010: The Moment I Stopped Resisting: Learning by Lifestyle - Hamed",
    description:
      "In this engaging discussion, Hamed, a 43-year-old software engineer originally from Iran, recounts his experiences adapting to life in Finland. Hamed shares his journey of learning Finnish, which was initially challenging due to his temporary mindset and resistance to the language. Eventually, his perspective shifted as he accepted Finland as his new home. Hamed highlights the role of making Finnish friends, listening to music, and immersing himself in Finnish culture as crucial to his language acquisition. He recounts specific experiences, such as working in a multicultural center, participating in language courses, and navigating daily interactions. Notably, he discusses how expressing emotions in Finnish significantly improved his fluency. Hamed emphasizes the importance of mindset, cultural immersion, and having fun in the process of learning a new language. His story provides valuable insights for anyone struggling to learn Finnish or integrate into a new culture.",
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
  },
  {
    id: 9,
    title: "009: This One Shift Made Me Fluent in Finnish",
    description:
      "In this episode, we explore the transformative power of embracing discomfort to achieve personal growth. Through heartfelt anecdotes and candid reflections, our guest reveals how pushing through initial unease can lead to newfound confidence and freedom. Learn why striving for perfection can actually hinder progress, and how allowing yourself to be imperfect can open doors to more meaningful interactions and self-discovery.",
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
  },
  {
    id: 8,
    title: "008: From Hallway Listener to Fluent Finnish Speaker - Jojo Pratt",
    description:
      "In this episode, we dive into the life story of Jojo Pratt, a nurse originally from Ghana. Jojo shares his unique experiences and challenges of learning Finnish, from his early days in a Finnish refugee camp to becoming fluent and integrated into Finnish society. Join us as Jojo recounts the creative and relentless methods he used, the cultural and societal barriers he overcame, and the crucial mindset needed to master a new language. Discover valuable insights and tips for anyone striving to learn Finnish or any new language. This is an episode filled with inspiring anecdotes, humorous moments, and practical advice you won't want to miss!",
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
    tags: [
      FilterTags.Parent,
      FilterTags.WithKids,
      FilterTags.Immersion,
      FilterTags.FinnishSpeakingPartner,
      FilterTags.FastPaced,
    ],
    videoUrl: "https://youtu.be/V0jzUitkKL4?si=AEY553jX9wk0qV_W",
    thumbnail: "/thumbnails/5_Deborah.jpg",
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
