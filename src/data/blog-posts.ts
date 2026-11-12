export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  authorUrl?: string;
  publishDate: string;
  metaDescription: string;
  excerpt: string;
  featuredImage?: string;
  content: string;
  /** Internal paths shown as "Read or listen next" cards after the article */
  readNext?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "finnish-citizenship-test",
    readNext: [
      "/blog/who-is-exempt-from-finnish-citizenship-test",
      "/blog/finnish-citizenship-test-reading-test",
      "/blog/finnish-citizenship-test-vocabulary",
    ],
    title:
      "Finnish Citizenship Test (Kansalaisuuskoe) 2027: Test Dates, Fee, Locations and Format",
    author: 'Oheneba "Ohe" Poku-Marboah',
    authorUrl: "https://x.com/pokumars",
    publishDate: "2026-11-12",
    metaDescription:
      "How Finland's citizenship test works: who has to take it, when it starts, test days and cities, the fee, the format, the learning material and what is still unknown.",
    excerpt:
      "From 1 March 2027, most adults applying for Finnish citizenship have to pass a citizenship test first. Here is everything known so far about the logistics: test days, cities, the fee, the format and the learning material.",
    content: `*Last updated: 12 November 2026. Migri hasn't published every detail yet, so I'll update this page when the fee, the test dates and the learning material come out.*

*Every fact below links to its source. In Chrome, Edge and Safari, the link also highlights the exact sentence on the page.*

From **1 March 2027**, most adults who apply for Finnish citizenship have to pass a citizenship test before they apply. In Finnish it's called the **kansalaisuuskoe**. The law calls the underlying rule the requirement of knowledge of Finnish society (*yhteiskuntatietoa koskeva edellytys*).

This page covers the practical side: who takes it, when, where, how much it costs and what it looks like. If you're wondering how much Finnish you need for it, I wrote a separate piece on [why the citizenship test is also a Finnish reading test](/blog/finnish-citizenship-test-reading-test).

## The short version

- The test applies to citizenship applications submitted on or after 1 March 2027. ([Migri](https://migri.fi/en/amendments-to-the-citizenship-act-2027#:~:text=will%20apply%20to%20applications%20submitted%20on%20or%20after%201%20March%202027))
- It applies to people aged 18 to 64. If you're 65 or older, you don't take it. ([Migri](https://migri.fi/en/amendments-to-the-citizenship-act-2027#:~:text=persons%20between%20the%20ages%20of%2018%20and%2064), [Migri FAQ](https://migri.fi/en/faq-finnish-citizenship#:~:text=reached%20the%20age%20of%2065%2C%20the%20requirement%20does%20not%20apply))
- You have to pass it before you submit your citizenship application. ([Migri](https://migri.fi/en/-/up-to-date-information-on-amendments-to-citizenship-act-learning-material-for-citizenship-test-to-be-published-at-turn-of-the-year#:~:text=You%20must%20pass%20the%20test%20before%20you%20submit%20a%20citizenship%20application))
- It's taken on site, on a computer, under supervision. The questions are multiple choice. ([Migri](https://migri.fi/en/amendments-to-the-citizenship-act-2027#:~:text=The%20test%20will%20be%20taken%20in%20digital%20form%20on%20site), [Ministry of the Interior](https://intermin.fi/en/projects/reform-of-the-citizenship-act/faq))
- The test is in Finnish or Swedish only. There is no English version. ([Migri](https://migri.fi/en/amendments-to-the-citizenship-act-2027#:~:text=the%20questions%20can%20be%20answered%20in%20Finnish%20or%20Swedish))
- There are 6 to 10 test sessions a year, on national test days. ([Migri](https://migri.fi/en/-/up-to-date-information-on-amendments-to-citizenship-act-learning-material-for-citizenship-test-to-be-published-at-turn-of-the-year#:~:text=We%20will%20organise%206%20to%2010%20test%20sessions%20per%20year))
- In 2027, the test is held in the Helsinki capital region, Tampere, Turku, Oulu, Kuopio, Vaasa and Rovaniemi. ([Migri](https://migri.fi/en/-/up-to-date-information-on-amendments-to-citizenship-act-learning-material-for-citizenship-test-to-be-published-at-turn-of-the-year#:~:text=in%20Tampere%2C%20Turku%2C%20Oulu%2C%20Kuopio%2C%20Vaasa%20and%20Rovaniemi))
- There is a fee. The amount hasn't been published yet. ([Migri](https://migri.fi/en/-/up-to-date-information-on-amendments-to-citizenship-act-learning-material-for-citizenship-test-to-be-published-at-turn-of-the-year#:~:text=The%20test%20is%20subject%20to%20a%20fee))
- Your result doesn't expire. If you pass in 2027 and apply in 2030, the pass still counts. ([Migri](https://migri.fi/en/-/up-to-date-information-on-amendments-to-citizenship-act-learning-material-for-citizenship-test-to-be-published-at-turn-of-the-year#:~:text=The%20test%20result%20does%20not%20expire))
- It does not replace the language requirement. You still need YKI or another accepted proof of Finnish or Swedish. ([Ministry of the Interior](https://intermin.fi/en/projects/reform-of-the-citizenship-act/faq#:~:text=Language%20skills%20will%2C%20however%2C%20remain%20a%20separate%20requirement%20for%20acquiring%20citizenship))

## When does it start?

The amended Citizenship Act takes effect on **1 January 2027**. January and February 2027 are a transition period. ([Migri](https://migri.fi/en/amendments-to-the-citizenship-act-2027#:~:text=that%20will%20enter%20into%20force%20on%201%20January%202027), [Migri](https://migri.fi/en/amendments-to-the-citizenship-act-2027#:~:text=transitional%20period%20from%201%20January%20to%2028%20February%202027)) Applications submitted between 1 January and 28 February 2027 don't need the test.

From **1 March 2027**, it's required. Migri expects the **first test in March 2027**. ([Migri](https://migri.fi/en/amendments-to-the-citizenship-act-2027#:~:text=The%20first%20test%20is%20expected%20to%20take%20place%20in%20March%202027))

"Submitted" has a specific meaning here. If you apply online, it's the day you submit in Enter Finland. If you apply on paper, it's the day you visit a Migri service point. ([Migri](https://migri.fi/en/-/up-to-date-information-on-amendments-to-citizenship-act-learning-material-for-citizenship-test-to-be-published-at-turn-of-the-year)) If you're close to the deadline, I wrote a separate article on [applying before 1 March 2027](/blog/apply-for-finnish-citizenship-before-march-2027).

## Who has to take it?

Anyone aged **18 to 64** who applies for Finnish citizenship with a **citizenship application** (*kansalaisuushakemus*). ([Migri](https://migri.fi/en/amendments-to-the-citizenship-act-2027#:~:text=persons%20between%20the%20ages%20of%2018%20and%2064), [Migri FAQ](https://migri.fi/en/faq-finnish-citizenship#:~:text=those%20who%20can%20apply%20by%20declaration%20are%20not%20affected))

You don't need the test if:

- you're 65 or older ([Migri FAQ](https://migri.fi/en/faq-finnish-citizenship#:~:text=reached%20the%20age%20of%2065%2C%20the%20requirement%20does%20not%20apply))
- you get citizenship through a **citizenship declaration** (*kansalaisuusilmoitus*), for example as a Nordic citizen or a young adult who grew up in Finland ([Migri FAQ](https://migri.fi/en/faq-finnish-citizenship#:~:text=those%20who%20can%20apply%20by%20declaration%20are%20not%20affected))
- you've completed a **matriculation examination** in Finnish or Swedish ([Migri](https://migri.fi/en/amendments-to-the-citizenship-act-2027#:~:text=by%20completing%20a%20Finnish%2Dlanguage%20or%20Swedish%2Dlanguage%20matriculation%20examination%20in%20Finland))
- you've completed a **Finnish- or Swedish-language higher education degree** in Finland ([Migri](https://migri.fi/en/amendments-to-the-citizenship-act-2027#:~:text=by%20completing%20a%20Finnish%2Dlanguage%20or%20Swedish%2Dlanguage%20higher%20education%20degree%20in%20Finland))
- you have a long-term health reason, disability or other very serious reason that prevents you from taking it ([Migri](https://migri.fi/en/amendments-to-the-citizenship-act-2027#:~:text=due%20to%20state%20of%20health%2C%20disability%20or%20other%20very%20serious%20reason))

Each of these has details that matter, so I put them in their own article: [who is exempt from the Finnish citizenship test](/blog/who-is-exempt-from-finnish-citizenship-test).

## Test days and locations

Migri says there will be **6 to 10 test sessions per year**, held on national test days. ([Migri](https://migri.fi/en/-/up-to-date-information-on-amendments-to-citizenship-act-learning-material-for-citizenship-test-to-be-published-at-turn-of-the-year#:~:text=We%20will%20organise%206%20to%2010%20test%20sessions%20per%20year)) Everyone taking the test that day sits it at the same time across the country.

In 2027, the test locations are: ([Migri](https://migri.fi/en/-/up-to-date-information-on-amendments-to-citizenship-act-learning-material-for-citizenship-test-to-be-published-at-turn-of-the-year#:~:text=in%20Tampere%2C%20Turku%2C%20Oulu%2C%20Kuopio%2C%20Vaasa%20and%20Rovaniemi))

- Helsinki capital region
- Tampere
- Turku
- Oulu
- Kuopio
- Vaasa
- Rovaniemi

If you live in Joensuu, Lahti, Jyväskylä or somewhere smaller, plan for a trip. And with 6 to 10 sessions a year, you might wait a month or two for the next date, so don't leave it until the week before you planned to apply.

The exact dates and the registration period weren't public when I wrote this. Migri said it would publish them around the turn of the year 2026/2027. You can't register yet. ([Migri](https://migri.fi/en/-/up-to-date-information-on-amendments-to-citizenship-act-learning-material-for-citizenship-test-to-be-published-at-turn-of-the-year#:~:text=We%20will%20publish%20the%20test%20dates%20and%20registration%20times), [Migri FAQ](https://migri.fi/en/faq-finnish-citizenship#:~:text=you%20cannot%20register%20for%20the%20test%20yet))

## How much does it cost?

There is a fee. Migri has confirmed that much. The amount hasn't been announced. ([Migri](https://migri.fi/en/-/up-to-date-information-on-amendments-to-citizenship-act-learning-material-for-citizenship-test-to-be-published-at-turn-of-the-year#:~:text=The%20test%20is%20subject%20to%20a%20fee))

For context, the citizenship application itself costs **€550 online and €650 on paper** ([Migri's 2026 fees](https://migri.fi/en/processing-fees-and-payment-methods#:~:text=Fees%20of%20the%20Finnish%20Immigration%20Service%20%28EUR%29%20in%202026)), and a YKI test costs extra on top. Budget for all three if you're starting from scratch.

## What does the test look like?

What's confirmed:

- Digital, on site. You take it on a computer at a test venue, supervised. You can't take it from home. ([Migri](https://migri.fi/en/amendments-to-the-citizenship-act-2027#:~:text=The%20test%20will%20be%20taken%20in%20digital%20form%20on%20site))
- Multiple choice. ([Migri](https://migri.fi/en/amendments-to-the-citizenship-act-2027#:~:text=will%20comprise%20multiple%2Dchoice%20questions))
- In Finnish or Swedish. You pick one. ([Migri](https://migri.fi/en/amendments-to-the-citizenship-act-2027#:~:text=the%20questions%20can%20be%20answered%20in%20Finnish%20or%20Swedish))
- Pass mark: Migri only says that "most of the answers" must be correct. The exact number of points hasn't been published. ([Migri](https://migri.fi/en/amendments-to-the-citizenship-act-2027#:~:text=Most%20of%20the%20answers%20must%20be%20correct))

What isn't known yet:

- how many questions there are
- how long you get
- the exact pass mark
- whether, how soon and how often you can retake it
- the fee

## What's on the test?

The questions cover: ([Migri](https://migri.fi/en/amendments-to-the-citizenship-act-2027#:~:text=covering%20topics%20such%20as%20key%20legislation%20governing%20life%20in%20Finnish%20society))

- key laws that govern life in Finnish society
- fundamental rights and human rights
- equality, including gender equality
- Finnish history and culture

The questions are based on **public learning material** prepared for the test. The **University of Helsinki** is writing both the material and the questions. ([Migri](https://migri.fi/en/-/up-to-date-information-on-amendments-to-citizenship-act-learning-material-for-citizenship-test-to-be-published-at-turn-of-the-year#:~:text=the%20University%20of%20Helsinki%2C%20will%20prepare%20the%20learning%20material%20and%20questions)) Migri runs the test itself. The material builds on the civic orientation material that already exists for integration. ([Finnish Government](https://valtioneuvosto.fi/en/-/1410869/citizenship-test-to-be-introduced-in-early-2027))

Migri said it would publish the material on its website **around the turn of the year 2026/2027**, well before the first test. ([Migri](https://migri.fi/en/-/up-to-date-information-on-amendments-to-citizenship-act-learning-material-for-citizenship-test-to-be-published-at-turn-of-the-year#:~:text=Finnish%20Immigration%20Service%20at%20the%20turn%20of%20the%20year), [Migri](https://migri.fi/en/amendments-to-the-citizenship-act-2027#:~:text=We%20will%20publish%20the%20material%20on%20our%20website%20well%20in%20advance)) Once it's out, that material is the thing to study. Nothing else is guaranteed to match the questions.

While you wait, start on the words. Most of the material will use the same legal and civic vocabulary, and I've collected it in [Finnish citizenship test vocabulary](/blog/finnish-citizenship-test-vocabulary).

## Special arrangements

You can ask for special arrangements in advance, for example because of an illness, a disability, or reading and writing difficulties. Migri's examples are: ([Migri](https://migri.fi/en/amendments-to-the-citizenship-act-2027#:~:text=Special%20arrangements%20may%20include%20additional%20time%20to%20complete%20the%20test))

- extra time
- an oral test instead of the on-screen one
- using your own assistive device

People who can't read or write can take the test orally. ([Migri](https://migri.fi/en/-/up-to-date-information-on-amendments-to-citizenship-act-learning-material-for-citizenship-test-to-be-published-at-turn-of-the-year#:~:text=you%20can%20take%20the%20citizenship%20test%20as%20an%20oral%20test))

## How it fits with the rest of the application

The test is one more box on top of the existing requirements. You still need:

- enough years of residence in Finland ([Migri](https://migri.fi/en/period-of-residence#:~:text=you%20have%20been%20living%20in%20Finland%20for%20the%20past%208%20years))
- a Finnish or Swedish language certificate (usually [YKI level 3](/blog/finnish-language-requirements-for-citizenship)) ([Migri](https://migri.fi/en/national-certificate-of-language-proficiency-yki-#:~:text=at%20least%20satisfactory%20skills%20in%20the%20Finnish%20or%20Swedish%20language))
- to have supported yourself, without long stretches on unemployment benefit or social assistance ([Migri FAQ](https://migri.fi/en/faq-finnish-citizenship#:~:text=for%20longer%20than%203%20months%20in%20total%20during%20the%20past%202%20years))
- a clean enough criminal record ([Ministry of the Interior](https://intermin.fi/en/projects/reform-of-the-citizenship-act/faq#:~:text=Waiting%20periods%20imposed%20because%20of%20offences%20were%20generally%20extended%20by%20one%20year))
- an established identity ([Ministry of the Interior](https://intermin.fi/en/projects/reform-of-the-citizenship-act/faq#:~:text=does%20not%20actively%20help%20the%20authorities%20to%20establish%20their%20identity))

I go through the whole thing in order in [how to get Finnish citizenship in 2027, step by step](/blog/how-to-get-finnish-citizenship-2027).

## What I'll add when Migri publishes more

This page will change. These are the gaps I'm waiting on:

- the fee amount
- the 2027 test dates and how to register
- the number of questions, time limit and pass mark
- the retake rules
- a link to the learning material

Official sources: [Migri: Amendments to the Citizenship Act 2027](https://migri.fi/en/amendments-to-the-citizenship-act-2027), [Migri customer bulletin on the learning material](https://migri.fi/en/-/up-to-date-information-on-amendments-to-citizenship-act-learning-material-for-citizenship-test-to-be-published-at-turn-of-the-year), [Ministry of the Interior FAQ](https://intermin.fi/en/projects/reform-of-the-citizenship-act/faq).`,
  },
  {
    slug: "apply-for-finnish-citizenship-before-march-2027",
    readNext: [
      "/blog/finnish-citizenship-test",
      "/blog/how-to-get-finnish-citizenship-2027",
      "/blog/is-yki-easiest-path-finnish-citizenship",
    ],
    title:
      "Applied for Finnish Citizenship Before 1 March 2027? When You Need the Citizenship Test",
    author: 'Oheneba "Ohe" Poku-Marboah',
    authorUrl: "https://x.com/pokumars",
    publishDate: "2026-11-12",
    metaDescription:
      "Finnish citizenship applications submitted before 1 March 2027 don't need the new citizenship test. What counts as submitted, who should hurry, and who shouldn't.",
    excerpt:
      "If you submit your Finnish citizenship application before 1 March 2027, you don't need the new citizenship test. But a rushed application can cost you more than it saves. Here's how the cutoff works and how to decide.",
    content: `*Last updated: 12 November 2026.*

Finland's new [citizenship test](/blog/finnish-citizenship-test) only applies to applications **submitted on or after 1 March 2027**. Anything submitted before that date is handled without it. ([Migri](https://migri.fi/en/amendments-to-the-citizenship-act-2027#:~:text=will%20apply%20to%20applications%20submitted%20on%20or%20after%201%20March%202027))

*Every fact below links to its source. In Chrome, Edge and Safari, the link also highlights the exact sentence on the page.*

So if you're already close to eligible, there's a real question: should you apply now and skip the test?

## Where the cutoff falls

- Until 31 December 2026: current rules, no test.
- 1 January to 28 February 2027: the amended law is in force, but this is a transition period. No test. ([Migri](https://migri.fi/en/amendments-to-the-citizenship-act-2027#:~:text=transitional%20period%20from%201%20January%20to%2028%20February%202027))
- From 1 March 2027: applicants aged 18 to 64 must pass the test (or have an accepted alternative) before they submit. ([Migri](https://migri.fi/en/-/up-to-date-information-on-amendments-to-citizenship-act-learning-material-for-citizenship-test-to-be-published-at-turn-of-the-year#:~:text=You%20must%20pass%20the%20test%20before%20you%20submit%20a%20citizenship%20application))

What matters is the date you **submit your citizenship application**, not the date you start filling it in or the date you get a decision:

- if you apply online, it's the day you submit your citizenship application in **Enter Finland**
- if you apply on paper, it's the day you **visit a Migri service point** to hand in your citizenship application ([Migri](https://migri.fi/en/-/up-to-date-information-on-amendments-to-citizenship-act-learning-material-for-citizenship-test-to-be-published-at-turn-of-the-year))

Since booking a service point appointment can take time, if you have a deadline on how quickly you want to do things, you should probably apply online. You can avoid situations where you only get appointment times later than you anticipated.

## You still need everything else on your citizenship application submission day

If you apply before 1 March 2027, you don't need the citizenship test. But the other requirements for citizenship haven't gone away. You must already meet all of them on the day you submit your citizenship application:

- **Residence:** how many years you must have lived in Finland depends on whether you have a language certificate.
  - **With a language certificate: 5 years.** This is the rule for most people, because almost every applicant needs the certificate anyway ([Migri](https://migri.fi/en/period-of-residence#:~:text=you%20need%20to%20have%20lived%20in%20Finland%20for%20the%20past%205%20years)).
  - **Without a language certificate: 8 years.** This only applies if Migri has made an exception to the language requirement for you, for example because of a permanent health condition. Migri says these exceptions are very rare ([Migri](https://migri.fi/en/period-of-residence#:~:text=you%20have%20been%20living%20in%20Finland%20for%20the%20past%208%20years), [Migri](https://migri.fi/en/exceptions-to-the-language-skills-requirement#:~:text=Exceptions%20to%20the%20language%20skills%20requirement%20are%20made%20very%20rarely.)).
  - You must already have those years behind you on the day you submit your citizenship application. Migri counts your residence up to the day you submit your citizenship application online in Enter Finland, or the day you hand it in at a service point ([Migri](https://migri.fi/en/period-of-residence#:~:text=to%20the%20day%20when%20you%20submit%20your%20online%20application%20through%20Enter%20Finland), [Migri](https://migri.fi/en/period-of-residence#:~:text=you%20must%20also%20meet%20the%20other%20requirements%20for%20Finnish%20citizenship%20when%20you%20submit%20the%20application)).
  - During those years, you can have spent up to 365 days abroad in total, but no more than 90 of them in the year before you apply ([Migri](https://migri.fi/en/period-of-residence#:~:text=may%20include%20a%20total%20of%20365%20days%20spent%20abroad), [Migri](https://migri.fi/en/period-of-residence#:~:text=Up%20to%2090%20of%20these%20days%20may%20be%20from%20a%20one%2Dyear%20period)).
- **Language certificate in hand:** YKI level 3 in an [accepted combination](/blog/finnish-language-requirements-for-citizenship), or another accepted proof. Migri won't accept "I'm taking YKI next month." ([Migri](https://migri.fi/en/language-skills#:~:text=before%20you%20submit%20a%20citizenship%20application))
- **Income:** for applications from 17 December 2025, you can't have received unemployment benefit or social assistance for more than 3 months in total in the past 2 years. ([Migri FAQ](https://migri.fi/en/faq-finnish-citizenship#:~:text=for%20longer%20than%203%20months%20in%20total%20during%20the%20past%202%20years))
- **Clean record** and an **established identity**. ([Ministry of the Interior](https://intermin.fi/en/projects/reform-of-the-citizenship-act/faq#:~:text=Waiting%20periods%20imposed%20because%20of%20offences%20were%20generally%20extended%20by%20one%20year), [Ministry of the Interior](https://intermin.fi/en/projects/reform-of-the-citizenship-act/faq#:~:text=does%20not%20actively%20help%20the%20authorities%20to%20establish%20their%20identity))
- **The fee:** €550 online, €650 on paper (2026 prices). ([Migri](https://migri.fi/en/processing-fees-and-payment-methods#:~:text=Fees%20of%20the%20Finnish%20Immigration%20Service%20%28EUR%29%20in%202026))

If one of these is missing, an application submitted in February 2027 isn't a shortcut. You'll get a refusal after a long wait, and by then your next application falls under the new rules.

## Who should apply before March 2027

It makes sense to apply now if **all** of these are true:

- you'll have lived in Finland long enough (5 years for most people) by the day you submit, and you can submit by 28 February 2027
- you already have your YKI certificate (or other language proof)
- your income history fits the 3-months-in-2-years rule
- you have nothing on your record that triggers a waiting period

Processing currently takes a long time. [Migri's processing times page](https://migri.fi/en/processing-times#:~:text=Citizenship%20application%20for%20an%20adult) says most adult citizenship applications are decided within 35 months, and a smaller share within 17 months. Migri also has a backlog of about 17,300 citizenship applications waiting for processing ([Migri](https://migri.fi/en/processing-of-citizenship-applications#:~:text=citizenship%20applications%20are%20waiting%20for%20processing)), and it doesn't process applications in the order they arrive ([Migri FAQ](https://migri.fi/en/faq-finnish-citizenship#:~:text=All%20applications%20are%20not%20processed%20in%20the%20order%20in%20which%20they%20arrive)). That's another reason not to wait if you're ready: the clock starts when you submit.

## Who shouldn't rush

- **You don't have your language certificate yet.** The next YKI dates and results might not arrive in time. Don't apply without it.
- **You're a few weeks short on residence.** You need the full number of years on the day you submit. Migri says it's very important not to apply before you meet all the requirements ([Migri](https://migri.fi/en/processing-of-citizenship-applications#:~:text=do%20not%20submit%20your%20application%20before%20you%20meet%20all%20the%20requirements)).
- **You've been on unemployment benefit recently.** Check the income rule carefully before paying €550.
- **You'll take the test easily anyway.** If your Finnish is great and you're familiar with the concepts of Finnish society, then the only thing you risk is the fee and the morning you sacrifice for the exam. That might be annoying, but it's not worth a rushed application. 

## What if my application was submitted before March 2027 and I get a refusal?

Your next application is a new application. If you submit it on or after 1 March 2027 and you're between 18 and 64, you'll need the test or one of the [exemptions](/blog/who-is-exempt-from-finnish-citizenship-test). The test result doesn't expire, so you could take it while you wait for your first decision. ([Migri](https://migri.fi/en/-/up-to-date-information-on-amendments-to-citizenship-act-learning-material-for-citizenship-test-to-be-published-at-turn-of-the-year#:~:text=The%20test%20result%20does%20not%20expire)) Then a refusal wouldn't set you back as far.

## If you're reading this after March 2027

The window has closed. You need the test unless you're 65 or older, apply by declaration, or have a Finnish- or Swedish-language matriculation exam or higher education degree from Finland. Start with [the test logistics](/blog/finnish-citizenship-test), then [how to study for it](/blog/how-to-study-for-finnish-citizenship-test).

*This is general information based on Migri's published guidance, not legal advice. If your situation is unusual, ask Migri or an immigration lawyer.*

Sources: [Migri: Amendments to the Citizenship Act 2027](https://migri.fi/en/amendments-to-the-citizenship-act-2027), [Migri: Period of residence](https://migri.fi/en/period-of-residence), [Migri: Processing fees](https://migri.fi/en/processing-fees-and-payment-methods), [Migri FAQ on Finnish citizenship](https://migri.fi/en/faq-finnish-citizenship).`,
  },
  {
    slug: "finnish-citizenship-test-reading-test",
    readNext: [
      "/blog/finnish-citizenship-test-vocabulary",
      "/blog/how-to-study-for-finnish-citizenship-test",
      "/blog/not-fluent-after-yki",
    ],
    title:
      "The Finnish Citizenship Test Is Also a Finnish Reading Test: How Good Does Your Finnish Need to Be?",
    author: 'Oheneba "Ohe" Poku-Marboah',
    authorUrl: "https://x.com/pokumars",
    publishDate: "2026-11-11",
    metaDescription:
      "Finland's citizenship test is only in Finnish or Swedish, so it tests your reading as much as your civics. What level of Finnish you need and how to prepare.",
    excerpt:
      "The Finnish citizenship test is officially about society, laws and history. But it's only available in Finnish or Swedish, which makes it a reading test as well. Here's what that means if your Finnish is around B1.",
    content: `Finland's [citizenship test](/blog/finnish-citizenship-test) is officially a test of knowledge of Finnish society: laws, fundamental rights, equality, history and culture.

But it's only offered in **Finnish or Swedish** ([Migri](https://migri.fi/en/amendments-to-the-citizenship-act-2027#:~:text=the%20questions%20can%20be%20answered%20in%20Finnish%20or%20Swedish)). You can't take it in English, Arabic, Russian or anything else (except as an oral test under special arrangements) ([Migri](https://migri.fi/en/amendments-to-the-citizenship-act-2027#:~:text=Special%20arrangements%20may%20include%20additional%20time%20to%20complete%20the%20test)). So whatever else it measures, it also measures whether you can read civic Finnish under time pressure.

I think that's the part most people will underestimate.

## The YKI loophole the test closes

Here's something that surprised me when I looked at it closely. For citizenship, Migri accepts YKI level 3 in one of three combinations: ([Migri](https://migri.fi/en/national-certificate-of-language-proficiency-yki-#:~:text=The%20following%20combinations%20of%20subtests%20are%20accepted))

- speaking + writing
- listening + writing
- reading + speaking

Two of those three don't include **reading** at all. You can meet the language requirement for citizenship without ever proving you can read Finnish.

The citizenship test changes that in practice. If you passed YKI with speaking and writing, and your reading is weak, this is where it shows.

## What kind of Finnish will be on it?

The learning material and questions aren't published yet (Migri expects to publish the material around the turn of the year 2026/2027 ([Migri](https://migri.fi/en/-/up-to-date-information-on-amendments-to-citizenship-act-learning-material-for-citizenship-test-to-be-published-at-turn-of-the-year#:~:text=Finnish%20Immigration%20Service%20at%20the%20turn%20of%20the%20year))). But we know the topics, and we know it builds on the existing civic orientation material ([Finnish Government](https://valtioneuvosto.fi/en/-/1410869/citizenship-test-to-be-introduced-in-early-2027)). So I'm fairly confident about what kind of language to expect:

- **Long compound words.** *Perusoikeudet*, *yhdenvertaisuus*, *eduskuntavaalit*, *sananvapaus*. Most of them are two familiar words glued together, but you have to see the seam.
- **The passive.** Official Finnish loves it. *Eduskuntavaalit järjestetään neljän vuoden välein* (parliamentary elections are held every four years). *Laissa säädetään...* (the law states...). If the passive still trips you up, fix that first.
- **Nouns made from verbs.** *Äänestäminen* (voting), *syrjiminen* (discriminating), *kotoutuminen* (integration).
- **Formal vocabulary you don't hear in your day-to-day.** You might speak decent everyday Finnish and never have said *tuomioistuin* (court) out loud.
- **Multiple-choice traps.** Answer options that look almost the same, where one case ending or one *ei* changes the meaning. Migri hasn't said how many options each question has, or whether some are true-or-false.

The test asks about things like rights and laws, so your everyday Finnish won't carry you on its own.

## So what level do you need?

No official level has been set for the test. The language requirement for citizenship is YKI 3, which is B1 ([Migri](https://migri.fi/en/national-certificate-of-language-proficiency-yki-#:~:text=Grade%203%20on%20the%20intermediate%20level%20corresponds%20to%20the%20level%20B1)), and the test is clearly meant to be passable by people at that level.

My honest take: if your **reading** is around B1, you can pass, but only if you study the actual material in Finnish. Reading it once in English and hoping for the best won't work, because the questions won't be in English.

If your reading is A2 or below, budget real time. Not for the facts, but for the language. The facts are the easy part.

## Why I don't think this is a bad thing

Some people see the language part as an unfair extra hurdle. I understand that, especially for people who work all day in English.

But speaking for myself: the most useful Finnish I learned was the Finnish I needed for something real. When I studied for YKI in 2019, I passed with 4, 4, 4 and 3, and I still [couldn't hold a proper conversation](/blog/not-fluent-after-yki). The test made me good at the test. What made me good at Finnish was using it for things that mattered.

Reading about your own rights in Finnish (what your employer can't do, how to vote in a municipal election, what to do if you're discriminated against) is about as real as it gets. You'll use those words again long after the test.

## How to prepare your reading

1. **Learn the vocabulary first.** I've put together a list of [Finnish citizenship test vocabulary](/blog/finnish-citizenship-test-vocabulary) grouped by topic.
2. **Read civic Finnish now, before the material is out.** [InfoFinland](https://www.infofinland.fi/fi) has its pages in Finnish and English, so you can read in Finnish and check yourself against the English.
3. **Practise splitting compound words.** When you see a long word, find the seam before you reach for a dictionary.
4. **Get comfortable with the passive.** Read news in [Yle Selkouutiset](https://yle.fi/selkouutiset), which uses simpler Finnish but plenty of passives.
5. **When the material comes out, read it in Finnish first.** Then check anything unclear in a translation, if one exists. More on this in [how to study for the Finnish citizenship test](/blog/how-to-study-for-finnish-citizenship-test).

If you want to hear how other people built their Finnish reading for exams, [Matthias](/episode/11) took medical school entrance exams in Finnish 18 months after he arrived, and [Deborah](/episode/5) got into Finnish-language law school within three years.`,
  },
  {
    slug: "finnish-citizenship-test-vocabulary",
    readNext: [
      "/blog/finnish-citizenship-test-reading-test",
      "/blog/how-to-study-for-finnish-citizenship-test",
      "/blog/finnish-citizenship-test",
    ],
    title:
      "Finnish Citizenship Test Vocabulary: 100+ Finnish Words for the Kansalaisuuskoe",
    author: 'Oheneba "Ohe" Poku-Marboah',
    authorUrl: "https://x.com/pokumars",
    publishDate: "2026-11-11",
    metaDescription:
      "Finnish words you need for the citizenship test: democracy, law, fundamental rights, equality, work, history and culture, with English translations.",
    excerpt:
      "The Finnish citizenship test covers laws, rights, equality, history and culture, all in Finnish. Here are 100+ words to learn before you open the official learning material, grouped by topic.",
    content: `The Finnish [citizenship test](/blog/finnish-citizenship-test) is in Finnish or Swedish ([Migri](https://migri.fi/en/amendments-to-the-citizenship-act-2027#:~:text=the%20questions%20can%20be%20answered%20in%20Finnish%20or%20Swedish)), and it covers ([Migri](https://migri.fi/en/amendments-to-the-citizenship-act-2027#:~:text=covering%20topics%20such%20as%20key%20legislation%20governing%20life%20in%20Finnish%20society)):

- key laws governing life in Finland
- fundamental and human rights
- equality, including gender equality
- Finnish history and culture

Below are the words I'd learn first, grouped by those topics. They're the words you'd meet in any Finnish text about these subjects, so they'll be useful whether you study the official learning material or just read the news.

I'll add to this list once the official learning material is published, which Migri expects around the turn of the year 2026/2027 ([Migri](https://migri.fi/en/-/up-to-date-information-on-amendments-to-citizenship-act-learning-material-for-citizenship-test-to-be-published-at-turn-of-the-year#:~:text=Finnish%20Immigration%20Service%20at%20the%20turn%20of%20the%20year)).

**How to use this list:** don't try to learn it in one sitting. Put one topic at a time into a flashcard app (I use Quizlet), and for each word, write one short sentence you'd actually say. That's the method I describe in [how I learned Finnish by banning English](/blog/how-to-learn-finnish-english-only-thursdays).

## The test and the application

- *kansalaisuuskoe*: citizenship test
- *kansalaisuus*: citizenship
- *kansalaisuushakemus*: citizenship application
- *kansalaisuusilmoitus*: citizenship declaration
- *yhteiskuntatieto*: knowledge of society, civics
- *edellytys*: requirement, condition
- *oppimateriaali*: learning material
- *monivalintakysymys*: multiple-choice question
- *oikea vastaus / väärä vastaus*: correct answer / wrong answer
- *ilmoittautuminen*: registration
- *koepäivä*: test day
- *maksu*: fee
- *todistus*: certificate
- *erityisjärjestelyt*: special arrangements
- *hyväksytty / hylätty*: passed / failed (also: approved / rejected)
- *Maahanmuuttovirasto (Migri)*: the Finnish Immigration Service

## The state and democracy

- *valtio*: the state
- *tasavalta*: republic
- *demokratia*: democracy
- *perustuslaki*: the constitution
- *eduskunta*: parliament
- *kansanedustaja*: member of parliament
- *hallitus*: the government
- *pääministeri*: prime minister
- *tasavallan presidentti*: president of the republic
- *ministeriö*: ministry
- *puolue*: political party
- *vaalit*: elections
- *eduskuntavaalit*: parliamentary elections
- *kuntavaalit*: municipal elections
- *aluevaalit*: county elections
- *presidentinvaali*: presidential election
- *äänestää*: to vote
- *äänioikeus*: the right to vote
- *ehdokas*: candidate
- *kunta*: municipality
- *hyvinvointialue*: wellbeing services county
- *viranomainen*: authority, public official
- *Euroopan unioni (EU)*: the European Union

A sentence you'll see in some form: *Valtiovalta Suomessa kuuluu kansalle.* (In Finland, the powers of the state belong to the people.) It's from [section 2 of the constitution](https://finlex.fi/fi/lainsaadanto/1999/731#:~:text=Valtiovalta%20Suomessa%20kuuluu%20kansalle).

## Law and justice

- *laki*: law
- *lainsäädäntö*: legislation
- *säätää*: to enact, to lay down (in law)
- *oikeusvaltio*: a state governed by the rule of law
- *tuomioistuin*: court
- *käräjäoikeus*: district court
- *hovioikeus*: court of appeal
- *korkein oikeus*: Supreme Court
- *tuomari*: judge
- *poliisi*: police
- *rikos*: crime
- *rangaistus*: punishment, sentence
- *sakko*: fine
- *vankeus*: imprisonment
- *eduskunnan oikeusasiamies*: Parliamentary Ombudsman
- *valittaa*: to appeal, to complain

## Fundamental and human rights

- *perusoikeudet*: fundamental rights
- *ihmisoikeudet*: human rights
- *sananvapaus*: freedom of speech
- *uskonnonvapaus*: freedom of religion
- *kokoontumisvapaus*: freedom of assembly
- *yhdistymisvapaus*: freedom of association
- *liikkumisvapaus*: freedom of movement
- *yksityisyyden suoja*: right to privacy
- *henkilökohtainen koskemattomuus*: personal integrity, bodily integrity
- *oikeus koulutukseen*: right to education
- *lapsen oikeudet*: children's rights
- *velvollisuus*: duty, obligation
- *asevelvollisuus*: compulsory military service
- *oppivelvollisuus*: compulsory education

Notice the pattern: *-vapaus* means freedom, and *-velvollisuus* means duty. Learn those two endings and a dozen words become easy.

## Equality and non-discrimination

- *tasa-arvo*: equality (very often meaning gender equality)
- *sukupuolten tasa-arvo*: gender equality
- *yhdenvertaisuus*: equal treatment, equality between people regardless of background
- *tasa-arvolaki*: the Equality Act (gender equality)
- *yhdenvertaisuuslaki*: the Non-Discrimination Act
- *syrjintä*: discrimination
- *syrjiä*: to discriminate
- *vähemmistö*: minority
- *saamelaiset*: the Sámi
- *alkuperäiskansa*: indigenous people
- *seksuaalinen suuntautuminen*: sexual orientation
- *vammainen*: disabled person
- *väkivalta*: violence
- *lähisuhdeväkivalta*: domestic violence, violence in close relationships

*Tasa-arvo* and *yhdenvertaisuus* both translate as "equality", and that's exactly the kind of difference a multiple-choice question can test. *Tasa-arvo* is mostly used about women and men. *Yhdenvertaisuus* covers everyone: origin, religion, age, disability and so on.

## Work, taxes and the welfare state

- *hyvinvointivaltio*: welfare state
- *vero*: tax
- *verokortti*: tax card
- *Kela*: the Social Insurance Institution
- *sosiaaliturva*: social security
- *terveydenhuolto*: healthcare
- *työsopimus*: employment contract
- *työehtosopimus*: collective agreement
- *ammattiliitto*: trade union
- *työnantaja / työntekijä*: employer / employee
- *palkka*: salary, wage
- *eläke*: pension

## History

The dates are from [InfoFinland's Finnish history page](https://infofinland.fi/fi/information-about-finland/finnish-history) (in Finnish).

- *itsenäisyys*: independence
- *itsenäisyyspäivä*: Independence Day (6 December; Finland became independent in 1917) ([InfoFinland](https://infofinland.fi/fi/information-about-finland/finnish-history#:~:text=Suomi%20julistautui%20itsen%C3%A4iseksi%206.12.1917))
- *Ruotsin vallan aika*: the period of Swedish rule
- *suuriruhtinaskunta*: grand duchy (Finland under Russia, 1809 to 1917) ([InfoFinland](https://infofinland.fi/fi/information-about-finland/finnish-history#:~:text=Suomi%20osana%20Ven%C3%A4j%C3%A4n%20keisarikuntaa))
- *autonomia*: autonomy
- *sisällissota*: civil war (1918)
- *talvisota*: the Winter War (1939 to 1940) ([InfoFinland](https://infofinland.fi/fi/information-about-finland/finnish-history#:~:text=syttyy%20talvisota))
- *jatkosota*: the Continuation War (1941 to 1944) ([InfoFinland](https://infofinland.fi/fi/information-about-finland/finnish-history#:~:text=v%C3%A4lisen%C3%A4%20jatkosotana))
- *Lapin sota*: the Lapland War (1944 to 1945)
- *naisten äänioikeus*: women's right to vote (Finland, 1906) ([InfoFinland](https://infofinland.fi/fi/information-about-finland/finnish-history#:~:text=Yleinen%20ja%20yht%C3%A4l%C3%A4inen%20%C3%A4%C3%A4nioikeus%2C%20my%C3%B6s%20naisille))
- *jälleenrakennus*: reconstruction (after the wars)
- *EU-jäsenyys*: EU membership (1995) ([InfoFinland](https://infofinland.fi/fi/information-about-finland/finnish-history#:~:text=Suomi%20liittyi%20EU%3An%20j%C3%A4seneksi%201995))
- *Nato-jäsenyys*: NATO membership (2023) ([InfoFinland](https://infofinland.fi/fi/information-about-finland/finnish-history#:~:text=Suomi%20liittyy%20Natoon))

## Culture and everyday life

- *kulttuuri*: culture
- *virallinen kieli*: official language
- *kaksikielisyys*: bilingualism (Finland's official languages are Finnish and Swedish)
- *kotimaiset kielet*: the national languages
- *Kalevala*: the national epic
- *kansalliseepos*: national epic
- *evankelisluterilainen kirkko*: the Evangelical Lutheran Church
- *ortodoksinen kirkko*: the Orthodox Church
- *juhlapyhä*: public holiday
- *juhannus*: Midsummer
- *vappu*: May Day
- *joulu*: Christmas
- *jokamiehenoikeudet*: everyone's rights (the right to roam in nature)
- *talkoot*: voluntary group work
- *sauna*: sauna, of course

## A few grammar patterns worth knowing

You'll understand the material much faster if these don't slow you down:

- **The passive:** *järjestetään* (is organised), *valitaan* (is chosen), *säädetään* (is laid down). Official texts use it constantly.
- **-minen nouns:** *äänestäminen* (voting), *kotoutuminen* (integration), *syrjiminen* (discriminating).
- **-ton/-tön:** *maksuton* (free of charge), *puolueeton* (neutral, non-partisan).
- **Compounds:** read long words from the end. *Eduskuntavaalit* is *vaalit* (elections) for the *eduskunta* (parliament).

If the reading side worries you more than the words, read [why the citizenship test is also a Finnish reading test](/blog/finnish-citizenship-test-reading-test).`,
  },
  {
    slug: "how-to-get-finnish-citizenship-2027",
    readNext: [
      "/blog/finnish-citizenship-test",
      "/blog/finnish-language-requirements-for-citizenship",
      "/blog/apply-for-finnish-citizenship-before-march-2027",
    ],
    title:
      "How to Get Finnish Citizenship in 2027: Requirements and Timeline, Step by Step",
    author: 'Oheneba "Ohe" Poku-Marboah',
    authorUrl: "https://x.com/pokumars",
    publishDate: "2026-11-10",
    metaDescription:
      "Every requirement for Finnish citizenship in 2027 in the order to tackle them: residence, YKI, the new citizenship test, income, criminal record and the application.",
    excerpt:
      "Finnish citizenship in 2027 means residence, a language certificate, the new citizenship test, an income check and a long wait. Here's the order I'd do them in, and how long each step really takes.",
    content: `*Last updated: 10 November 2026.*

*Every fact below links to its source. In Chrome, Edge and Safari, the link also highlights the exact sentence on the page.*

Getting Finnish citizenship has more steps than it used to. The residence rules changed in October 2024 ([Migri FAQ](https://migri.fi/en/faq-finnish-citizenship#:~:text=was%20extended%20from%205%20years%20to%208%20years)), the income rule tightened in December 2025 ([Migri FAQ](https://migri.fi/en/faq-finnish-citizenship#:~:text=The%20Citizenship%20Act%20was%20amended%20on%2017%20December%202025)), and from **1 March 2027** there's a [citizenship test](/blog/finnish-citizenship-test) as well.

Here's the whole thing, in the order I'd do it. This is for the usual route: an adult (18 to 64) applying with a citizenship application. If you're a Nordic citizen or grew up in Finland, check the citizenship declaration route first, because it's simpler.

## Step 1: Count your years of residence

The required period depends on your situation:

- 5 years if you have the required Finnish or Swedish language certificate ([Migri](https://migri.fi/en/period-of-residence#:~:text=you%20need%20to%20have%20lived%20in%20Finland%20for%20the%20past%205%20years))
- 5 years if your spouse is a Finnish citizen (and you've lived together for at least 3 years) ([Migri](https://migri.fi/en/period-of-residence#:~:text=your%20spouse%20is%20a%20Finnish%20citizen%2C%20you%20need%20to%20have%20lived))
- 5 years if you're stateless ([Migri](https://migri.fi/en/period-of-residence#:~:text=If%20you%20are%20stateless%20%28you%20do%20not%20have%20a%20citizenship%29))
- 8 years if you don't have a language certificate because Migri has granted you an exception to the language requirement ([Migri](https://migri.fi/en/period-of-residence#:~:text=you%20have%20been%20living%20in%20Finland%20for%20the%20past%208%20years))
- 2 years for Nordic citizens ([Migri](https://migri.fi/en/period-of-residence#:~:text=If%20you%20are%20a%20citizen%20of%20Denmark%2C%20Iceland%2C%20Norway%20or%20Sweden))

Almost everyone needs a language certificate to get citizenship, so 5 years is the normal rule. The 8-year rule only applies to the rare people who get citizenship without one. Migri can make an exception to the language requirement, for example for a permanent health condition, or for someone who arrived in Finland as an adult and couldn't read or write, but it says these exceptions are made very rarely ([Migri](https://migri.fi/en/exceptions-to-the-language-skills-requirement#:~:text=Exceptions%20to%20the%20language%20skills%20requirement%20are%20made%20very%20rarely.)).

How the years are counted:

- With a continuous (A) permit, counting starts when you moved to Finland or when the A permit was granted, whichever is later. ([Migri](https://migri.fi/en/period-of-residence))
- Time on a temporary (B) permit before you got an A permit counts at half value. ([Migri](https://migri.fi/en/period-of-residence#:~:text=half%20of%20the%20time%20you%20have%20lived%20in%20Finland))
- You can have up to **365 days abroad** in total, with no more than **90** in the year before you apply. ([Migri](https://migri.fi/en/period-of-residence#:~:text=may%20include%20a%20total%20of%20365%20days%20spent%20abroad), [Migri](https://migri.fi/en/period-of-residence#:~:text=Up%20to%2090%20of%20these%20days%20may%20be%20from%20a%20one%2Dyear%20period))
- Residence is counted up to the day you submit your citizenship application ([Migri](https://migri.fi/en/period-of-residence#:~:text=to%20the%20day%20when%20you%20submit%20your%20online%20application%20through%20Enter%20Finland)).

Migri's [period of residence page](https://migri.fi/en/period-of-residence) has the details for your permit type. Read it, because this is where many applications fail.

## Step 2: Get your language certificate

You need at least satisfactory skills in Finnish or Swedish, and you need the certificate **before** you apply. ([Migri](https://migri.fi/en/national-certificate-of-language-proficiency-yki-#:~:text=at%20least%20satisfactory%20skills%20in%20the%20Finnish%20or%20Swedish%20language), [Migri](https://migri.fi/en/language-skills#:~:text=before%20you%20submit%20a%20citizenship%20application)) The most common proof is YKI level 3 in one of these combinations: ([Migri](https://migri.fi/en/national-certificate-of-language-proficiency-yki-#:~:text=The%20following%20combinations%20of%20subtests%20are%20accepted))

- speaking + writing
- listening + writing
- reading + speaking

There are other accepted proofs too, like Finnish-language schooling, a vocational qualification or a degree. I covered those in [Finnish language requirements for citizenship](/blog/finnish-language-requirements-for-citizenship) and [is YKI the easiest path?](/blog/is-yki-easiest-path-finnish-citizenship).

**Timing:** YKI test dates are set months ahead, registration fills up, and results take weeks. Give yourself at least 6 months from starting to prepare to having a certificate in hand.

## Step 3: Pass the citizenship test (or have an alternative)

From 1 March 2027, you need to show knowledge of Finnish society before you apply. You can do it by:

- passing the citizenship test, **or**
- having completed a matriculation examination in Finnish or Swedish, **or** ([Migri](https://migri.fi/en/amendments-to-the-citizenship-act-2027#:~:text=by%20completing%20a%20Finnish%2Dlanguage%20or%20Swedish%2Dlanguage%20matriculation%20examination%20in%20Finland))
- having completed a Finnish- or Swedish-language higher education degree in Finland ([Migri](https://migri.fi/en/amendments-to-the-citizenship-act-2027#:~:text=by%20completing%20a%20Finnish%2Dlanguage%20or%20Swedish%2Dlanguage%20higher%20education%20degree%20in%20Finland))

The test is multiple choice, on a computer, in Finnish or Swedish ([Migri](https://migri.fi/en/amendments-to-the-citizenship-act-2027#:~:text=The%20test%20will%20be%20taken%20in%20digital%20form%20on%20site)). It's held 6 to 10 times a year ([Migri](https://migri.fi/en/-/up-to-date-information-on-amendments-to-citizenship-act-learning-material-for-citizenship-test-to-be-published-at-turn-of-the-year#:~:text=We%20will%20organise%206%20to%2010%20test%20sessions%20per%20year)), and the result doesn't expire ([Migri](https://migri.fi/en/-/up-to-date-information-on-amendments-to-citizenship-act-learning-material-for-citizenship-test-to-be-published-at-turn-of-the-year#:~:text=The%20test%20result%20does%20not%20expire)). All the logistics are in [the citizenship test guide](/blog/finnish-citizenship-test), and the exemptions are in [who is exempt from the Finnish citizenship test](/blog/who-is-exempt-from-finnish-citizenship-test).

**Why I'd do this after YKI, not before:** the test is in Finnish. Studying for YKI builds the reading you'll need for the citizenship test material. If you do it the other way round, you're doing the hard language work twice. (More on this in [the citizenship test is also a reading test](/blog/finnish-citizenship-test-reading-test).)

## Step 4: Check your income history

For applications submitted from **17 December 2025**, you can't have received unemployment benefit or social assistance for more than **3 months in total during the past 2 years**. ([Migri FAQ](https://migri.fi/en/faq-finnish-citizenship#:~:text=for%20longer%20than%203%20months%20in%20total%20during%20the%20past%202%20years)) There's no euro income threshold. ([Migri FAQ](https://migri.fi/en/faq-finnish-citizenship#:~:text=There%20are%20no%20specific%20income%20thresholds%20for%20acquiring%20Finnish%20citizenship)) The question is whether you've supported yourself.

If you've had a stretch on benefits, work out when the 2-year window clears before you pay the fee.

## Step 5: Check your record and identity

- **Criminal record:** offences trigger waiting periods, generally from 1 to 8 years depending on the sentence. The October 2024 reform extended most of them by a year. ([Ministry of the Interior](https://intermin.fi/en/projects/reform-of-the-citizenship-act/faq#:~:text=Waiting%20periods%20imposed%20because%20of%20offences%20were%20generally%20extended%20by%20one%20year)) A very serious offence rules out citizenship altogether. ([Ministry of the Interior](https://intermin.fi/en/projects/reform-of-the-citizenship-act/faq#:~:text=a%20person%20guilty%20of%20a%20very%20serious%20offence%20cannot%20acquire%20Finnish%20citizenship))
- **Identity:** you have to be able to establish your identity, and you're expected to actively help with that. ([Ministry of the Interior](https://intermin.fi/en/projects/reform-of-the-citizenship-act/faq#:~:text=does%20not%20actively%20help%20the%20authorities%20to%20establish%20their%20identity))

## Step 6: Apply

- **Online in Enter Finland: €550.** On paper: €650 (2026 fees). ([Migri](https://migri.fi/en/processing-fees-and-payment-methods#:~:text=Fees%20of%20the%20Finnish%20Immigration%20Service%20%28EUR%29%20in%202026))
- You pay when you submit.
- Attach your language certificate, your citizenship test result or alternative, and the other documents the form asks for.

## Step 7: Wait

This is the step nobody enjoys. [Migri's processing times page](https://migri.fi/en/processing-times#:~:text=Citizenship%20application%20for%20an%20adult) says most adult citizenship applications are decided within 35 months, and a smaller share within 17 months. Migri has a backlog of about 17,300 citizenship applications ([Migri](https://migri.fi/en/processing-of-citizenship-applications#:~:text=citizenship%20applications%20are%20waiting%20for%20processing)), and it doesn't process them in the order they arrive ([Migri FAQ](https://migri.fi/en/faq-finnish-citizenship#:~:text=All%20applications%20are%20not%20processed%20in%20the%20order%20in%20which%20they%20arrive)). Migri updates these figures regularly, so check the page for the current numbers. Keep living in Finland and keep your permit valid while you wait.

## A realistic timeline

If you've just reached your residence years and you're starting from zero on the language:

1. Months 0 to 6: prepare for and pass YKI.
2. Months 6 to 9: study the citizenship test material and pass the test.
3. Month 9: apply.
4. Then wait for a decision. Migri says most adult applications are decided within 35 months.

If you already have YKI, you can do it in a few months, depending on when the next test day is.

*This is general information based on Migri's published guidance as of November 2026, not legal advice.*

Sources: [Migri: Period of residence](https://migri.fi/en/period-of-residence), [Migri: YKI for citizenship](https://migri.fi/en/national-certificate-of-language-proficiency-yki-), [Migri: Amendments to the Citizenship Act 2027](https://migri.fi/en/amendments-to-the-citizenship-act-2027), [Migri FAQ on Finnish citizenship](https://migri.fi/en/faq-finnish-citizenship), [Ministry of the Interior FAQ](https://intermin.fi/en/projects/reform-of-the-citizenship-act/faq).`,
  },
  {
    slug: "how-to-study-for-finnish-citizenship-test",
    readNext: [
      "/blog/finnish-citizenship-test-vocabulary",
      "/blog/finnish-citizenship-test-reading-test",
      "/episode/11",
    ],
    title:
      "How to Study for the Finnish Citizenship Test When Finnish Isn't Your First Language",
    author: 'Oheneba "Ohe" Poku-Marboah',
    authorUrl: "https://x.com/pokumars",
    publishDate: "2026-11-10",
    metaDescription:
      "A study plan for Finland's citizenship test, from someone who learned Finnish as an adult: what to read, how to learn the vocabulary, and how to practise in Finnish.",
    excerpt:
      "The Finnish citizenship test is in Finnish, so studying for it is half civics and half language learning. Here's how I'd prepare, using the methods that worked for me and the people I've interviewed.",
    content: `*Last updated: 10 November 2026. Migri plans to publish the official learning material around the turn of the year 2026/2027. When it's out, I'll add a link and update this plan.*

The [Finnish citizenship test](/blog/finnish-citizenship-test) asks about laws, rights, equality, history and culture. The questions come from public learning material written by the University of Helsinki. ([Migri](https://migri.fi/en/-/up-to-date-information-on-amendments-to-citizenship-act-learning-material-for-citizenship-test-to-be-published-at-turn-of-the-year#:~:text=the%20University%20of%20Helsinki%2C%20will%20prepare%20the%20learning%20material%20and%20questions)) 

If you were born here, that's a civics test. If you learned Finnish as an adult, it's a civics test **and** a Finnish reading test. So the study plan has to cover both.

## Step 1: Get the official material and make it your source of truth

The questions are based on the official learning material, so everything you study should come back to it, not to what someone remembers from their integration course in 2019.

Once it's published on Migri's website:

- download it
- check how long it is and count the chapters
- give yourself a schedule, for example one chapter every few days

Courses, apps and practice quizzes can save you a lot of time, as long as they're built on the official material. Before you pay for one, check that it says which version of the material it follows. If anything you study says something different from the official material, the official material wins.

### What I'm building

I'm working on an app where you can study for the citizenship test and take practice quizzes, so you know you're ready before you book a test date. When the official material comes out, I'll also turn it into a course. Both will be based on the official material, and I'll add the links here when they're ready.

## Step 2: Learn the vocabulary before you read

Reading a chapter where every fourth word is new is miserable and slow. You'll spend all your energy on the dictionary and remember none of the content.

So do it the other way round: learn the words first, then read. I've put the core words in [Finnish citizenship test vocabulary](/blog/finnish-citizenship-test-vocabulary). Once the material is out, skim each chapter and pull out the words you don't know before you read it properly.

What worked for me: I put new words in Quizlet with **one short example sentence each**, simple enough that I'd actually say it. Not the dictionary sentence. My sentence. I explain the routine in [how I learned Finnish by banning English](/blog/how-to-learn-finnish-english-only-thursdays).

## Step 3: Read each chapter in Finnish first

Read the chapter in Finnish. Mark what you didn't understand. Only then check a translation, if there is one.

If you start with a translation, your brain will relax, and the test is in Finnish. You want to recognise *perusoikeudet* on the screen, not "fundamental rights".

## Step 4: Explain it out loud

After each chapter, explain it to someone in Finnish, in your own words. A partner, a friend, a colleague, your mirror. Two minutes is enough.

- "Suomessa on eduskuntavaalit neljän vuoden välein."
- "Työnantaja ei saa syrjiä ketään iän tai uskonnon takia."

If you can't explain it, you haven't learned it yet. This also does double duty as speaking practice, which most people neglect.

Erik paid for [more than 100 lunches with retired Finns](/episode/4) to get his speaking practice. You don't need to go that far. Just find someone who'll let you practise.

## Step 5: Practise the format

Multiple choice in a second language has its own tricks:

- Read **every** option before choosing. Two may look nearly identical.
- Watch for small words that flip the meaning: *ei* (not), *vain* (only), *aina* (always), *kaikki* (all), *myös* (also).
- Watch the case endings. *Eduskunnassa* (in parliament) and *eduskunnalle* (to parliament) can make the difference between two answers.
- Don't get stuck. If one question is eating your time, mark your best guess and move on.

## Step 6: Connect it to your real life

This is the part that turns the test into something useful. When you read about:

- **work rights:** look at your own work contract (*työsopimus*) and find the collective agreement (*työehtosopimus*) for your field
- **elections:** look up who's on your municipality's council
- **equality:** read your workplace's equality plan, if it has one
- **history:** next 6 December, watch the Independence Day coverage in Finnish

The facts stick much better when they're about your life. And the Finnish sticks too.

## How long should you study?

It depends far more on your reading level than on the content. As a rough guide:

- **Strong reader (B2 or above):** a few weeks with the material should be enough.
- **Reading around B1:** plan for one to two months. Most of that time goes to the language.
- **Reading at A2:** start with the [reading side](/blog/finnish-citizenship-test-reading-test) and the vocabulary now, months before your planned test date.

Remember there are only 6 to 10 test days a year. ([Migri](https://migri.fi/en/-/up-to-date-information-on-amendments-to-citizenship-act-learning-material-for-citizenship-test-to-be-published-at-turn-of-the-year#:~:text=We%20will%20organise%206%20to%2010%20test%20sessions%20per%20year)) Pick a date, then plan backwards.

## Don't stop when you pass

I passed YKI in 2019 and [still couldn't hold a real conversation](/blog/not-fluent-after-yki). Passing a test is a milestone, not the finish line.

If you want stories from people who kept going after their exams, start with [Matthias](/episode/11), who wrote the medical school entrance exams in Finnish, or [Jojo](/episode/8), who went from listening in hallways to working as a nurse.`,
  },
  {
    slug: "who-is-exempt-from-finnish-citizenship-test",
    readNext: [
      "/blog/finnish-citizenship-test",
      "/blog/is-yki-easiest-path-finnish-citizenship",
      "/episode/5",
    ],
    title:
      "Who Is Exempt From the Finnish Citizenship Test? Age, Degrees, Matriculation Exam and Health Reasons",
    author: 'Oheneba "Ohe" Poku-Marboah',
    authorUrl: "https://x.com/pokumars",
    publishDate: "2026-11-09",
    metaDescription:
      "Who doesn't need Finland's citizenship test: people 65+, declaration applicants, Finnish matriculation exam or degree holders, health exemptions and pre-March 2027 applicants.",
    excerpt:
      "Not everyone applying for Finnish citizenship has to take the new citizenship test. Age, how you apply, a Finnish-language degree or matriculation exam, and serious health reasons can all exempt you. Here's who qualifies.",
    content: `*Last updated: 9 November 2026.*

*Every fact below links to its source. In Chrome, Edge and Safari, the link also highlights the exact sentence on the page.*

From 1 March 2027, most adults applying for Finnish citizenship need to pass the [citizenship test](/blog/finnish-citizenship-test) first. "Most" is doing some work in that sentence. Several groups don't need it.

## 1. People aged 65 or over

The requirement applies to applicants **aged 18 to 64**. If you're 65 or older, you don't need it. ([Migri](https://migri.fi/en/amendments-to-the-citizenship-act-2027#:~:text=persons%20between%20the%20ages%20of%2018%20and%2064), [Migri FAQ](https://migri.fi/en/faq-finnish-citizenship#:~:text=reached%20the%20age%20of%2065%2C%20the%20requirement%20does%20not%20apply))

## 2. Children under 18

The test is for adult applicants. ([Migri](https://migri.fi/en/amendments-to-the-citizenship-act-2027#:~:text=persons%20between%20the%20ages%20of%2018%20and%2064)) Children who get citizenship as part of a parent's application, or through their own application, don't take it.

## 3. People applying by citizenship declaration

The test only applies to people who apply with a **citizenship application** (*kansalaisuushakemus*). A **citizenship declaration** (*kansalaisuusilmoitus*) is a separate, simpler route, and it isn't affected by the reform. ([Migri FAQ](https://migri.fi/en/faq-finnish-citizenship#:~:text=those%20who%20can%20apply%20by%20declaration%20are%20not%20affected)) Declarations are available to, for example:

- Nordic citizens ([Migri](https://migri.fi/en/citizenship-declaration#:~:text=You%20can%20become%20a%20Finnish%20citizen%20by%20declaration%20if%20you%20are))
- young adults aged 18 to 22 who grew up in Finland ([Migri](https://migri.fi/en/citizenship-declaration#:~:text=a%20young%20person%20between%2018%20and%2022%20years%20of%20age))
- some children of Finnish citizens and adopted children ([Migri](https://migri.fi/en/citizenship-declaration#:~:text=an%20adopted%20child%20between%2012%20and%2017%20years%20of%20age))

Check Migri's declaration pages to see if you qualify. If you do, it's usually the easier option.

## 4. People with a matriculation examination in Finnish or Swedish

If you've completed the Finnish matriculation examination (*ylioppilastutkinto*) in **Finnish or Swedish**, you already meet the civic knowledge requirement. ([Migri](https://migri.fi/en/amendments-to-the-citizenship-act-2027#:~:text=by%20completing%20a%20Finnish%2Dlanguage%20or%20Swedish%2Dlanguage%20matriculation%20examination%20in%20Finland))

## 5. People with a Finnish- or Swedish-language higher education degree from Finland

If you've completed a degree in Finland **in Finnish or Swedish**, you don't need the test. This covers: ([Migri](https://migri.fi/en/amendments-to-the-citizenship-act-2027#:~:text=by%20completing%20a%20Finnish%2Dlanguage%20or%20Swedish%2Dlanguage%20higher%20education%20degree%20in%20Finland))

- a bachelor's or master's degree from a university
- a bachelor's or master's degree from a university of applied sciences
- a licentiate or doctorate ([Migri](https://migri.fi/en/amendments-to-the-citizenship-act-2027#:~:text=a%20licentiate%20or%20doctoral%20degree))

**The language of the degree is what counts.** An English-language degree from a Finnish university doesn't exempt you, even though you studied in Finland.

This is also why I keep saying the education route deserves more attention. A Finnish-language degree can cover both the [language requirement](/blog/is-yki-easiest-path-finnish-citizenship) and the civic knowledge requirement, with no YKI and no citizenship test. [Deborah](/episode/5) went from zero to Finnish-language law school in three years. [Matthias](/episode/11) wrote his bachelor's thesis in Finnish. For people like them, both tests are irrelevant.

## 6. People with a serious health reason or disability

Migri can waive the requirement "due to state of health, disability or other very serious reason". The reason has to prevent you from taking the test **in the long term**, for example a significant, long-lasting medical condition. ([Migri](https://migri.fi/en/amendments-to-the-citizenship-act-2027#:~:text=due%20to%20state%20of%20health%2C%20disability%20or%20other%20very%20serious%20reason)) You'll need documentation.

If the problem is something special arrangements can fix, you'll probably be expected to take the test with arrangements instead. These can include: ([Migri](https://migri.fi/en/amendments-to-the-citizenship-act-2027#:~:text=Special%20arrangements%20may%20include%20additional%20time%20to%20complete%20the%20test))

- extra time
- an oral test
- your own assistive device

People who can't read or write can take the test orally. ([Migri](https://migri.fi/en/-/up-to-date-information-on-amendments-to-citizenship-act-learning-material-for-citizenship-test-to-be-published-at-turn-of-the-year#:~:text=you%20can%20take%20the%20citizenship%20test%20as%20an%20oral%20test))

## 7. Anyone who applied before 1 March 2027

Applications submitted before 1 March 2027 are handled without the test. That includes the transition period from 1 January to 28 February 2027. ([Migri](https://migri.fi/en/amendments-to-the-citizenship-act-2027#:~:text=transitional%20period%20from%201%20January%20to%2028%20February%202027)) The details are in [applying before 1 March 2027](/blog/apply-for-finnish-citizenship-before-march-2027).

## Who is *not* exempt


- **Having a YKI certificate doesn't exempt you.** YKI only covers the language requirement. You still need the test. ([Migri FAQ](https://migri.fi/en/faq-finnish-citizenship#:~:text=you%20can%20only%20meet%20the%20language%20skills%20requirement))
- **An English-language degree from Finland doesn't exempt you.**
- **Having lived in Finland for a long time doesn't exempt you.** Ten years or thirty, if you're 18 to 64 and apply with an application, you need it.
- **Being married to a Finn doesn't exempt you.** It shortens the residence requirement, not the test.

If none of the exemptions apply to you, start with [how to study for the Finnish citizenship test](/blog/how-to-study-for-finnish-citizenship-test).

*This is general information based on Migri's published guidance, not legal advice.*

Sources: [Migri: Amendments to the Citizenship Act 2027](https://migri.fi/en/amendments-to-the-citizenship-act-2027), [Migri FAQ on Finnish citizenship](https://migri.fi/en/faq-finnish-citizenship), [Migri customer bulletin](https://migri.fi/en/-/up-to-date-information-on-amendments-to-citizenship-act-learning-material-for-citizenship-test-to-be-published-at-turn-of-the-year).`,
  },
  {
    slug: "nordic-citizenship-tests-compared",
    readNext: [
      "/blog/finnish-citizenship-test",
      "/blog/finnish-citizenship-test-reading-test",
      "/blog/how-to-get-finnish-citizenship-2027",
    ],
    title:
      "Citizenship Tests in Finland, Sweden, Norway and Denmark Compared",
    author: 'Oheneba "Ohe" Poku-Marboah',
    authorUrl: "https://x.com/pokumars",
    publishDate: "2026-11-09",
    metaDescription:
      "How Finland's new citizenship test compares with Denmark's indfødsretsprøve, Norway's statsborgerprøve and Sweden's medborgarskapsprov: questions, pass marks, fees and language.",
    excerpt:
      "With Finland's citizenship test arriving in 2027, all four big Nordic countries now test new citizens on their society. Here's how the Finnish test compares with Denmark's, Norway's and Sweden's.",
    content: `*Last updated: 9 November 2026. Finland's and Sweden's tests are new, so some details are still missing. I'll fill them in as they're published.*

*Every fact below links to its source. In Chrome, Edge and Safari, the link also highlights the exact sentence on the page.*

With Finland's [citizenship test](/blog/finnish-citizenship-test) starting in 2027, Finland, Sweden, Norway and Denmark all test new citizens on knowledge of their society. Denmark and Norway have done it for years. Sweden held its first test in August 2026, and Finland's comes in March 2027.

They're more different than you'd expect.

## Finland: kansalaisuuskoe

- **Starts:** applications from 1 March 2027. First test expected in March 2027. ([Migri](https://migri.fi/en/amendments-to-the-citizenship-act-2027#:~:text=will%20apply%20to%20applications%20submitted%20on%20or%20after%201%20March%202027), [Migri](https://migri.fi/en/amendments-to-the-citizenship-act-2027#:~:text=The%20first%20test%20is%20expected%20to%20take%20place%20in%20March%202027))
- **Format:** multiple choice, on a computer, on site. ([Migri](https://migri.fi/en/amendments-to-the-citizenship-act-2027#:~:text=The%20test%20will%20be%20taken%20in%20digital%20form%20on%20site))
- **Language:** Finnish or Swedish. ([Migri](https://migri.fi/en/amendments-to-the-citizenship-act-2027#:~:text=the%20questions%20can%20be%20answered%20in%20Finnish%20or%20Swedish))
- **Questions and pass mark:** not published yet. Migri says "most of the answers" must be correct. ([Migri](https://migri.fi/en/amendments-to-the-citizenship-act-2027#:~:text=Most%20of%20the%20answers%20must%20be%20correct))
- **Fee:** confirmed, amount not published. ([Migri](https://migri.fi/en/-/up-to-date-information-on-amendments-to-citizenship-act-learning-material-for-citizenship-test-to-be-published-at-turn-of-the-year#:~:text=The%20test%20is%20subject%20to%20a%20fee))
- **How often:** 6 to 10 sessions a year, in seven cities in 2027. ([Migri](https://migri.fi/en/-/up-to-date-information-on-amendments-to-citizenship-act-learning-material-for-citizenship-test-to-be-published-at-turn-of-the-year#:~:text=We%20will%20organise%206%20to%2010%20test%20sessions%20per%20year))
- **Study material:** free official learning material from the University of Helsinki, published by Migri around the turn of the year 2026/2027. ([Migri](https://migri.fi/en/-/up-to-date-information-on-amendments-to-citizenship-act-learning-material-for-citizenship-test-to-be-published-at-turn-of-the-year#:~:text=the%20University%20of%20Helsinki%2C%20will%20prepare%20the%20learning%20material%20and%20questions))
- **Who takes it:** applicants aged 18 to 64. People 65 and over are exempt. ([Migri](https://migri.fi/en/amendments-to-the-citizenship-act-2027#:~:text=persons%20between%20the%20ages%20of%2018%20and%2064), [Migri FAQ](https://migri.fi/en/faq-finnish-citizenship#:~:text=reached%20the%20age%20of%2065%2C%20the%20requirement%20does%20not%20apply))
- **Alternatives:** a Finnish- or Swedish-language matriculation exam or higher education degree from Finland. ([Migri](https://migri.fi/en/amendments-to-the-citizenship-act-2027#:~:text=by%20completing%20a%20Finnish%2Dlanguage%20or%20Swedish%2Dlanguage%20higher%20education%20degree%20in%20Finland))
- **Language requirement:** separate. YKI level 3 (about B1) or equivalent. ([Migri](https://migri.fi/en/national-certificate-of-language-proficiency-yki-#:~:text=Grade%203%20on%20the%20intermediate%20level%20corresponds%20to%20the%20level%20B1))

## Sweden: medborgarskapsprovet

- **Started:** new citizenship rules from 6 June 2026. The first test, a trial run, was held in August 2026. ([UHR](https://www.uhr.se/medborgarskapsprovet/om-medborgarskapsprovet/#:~:text=Den%206%20juni%202026%20%C3%A4ndrades%20medborgarskapslagen), [UHR](https://www.uhr.se/medborgarskapsprovet/om-medborgarskapsprovet/#:~:text=Det%20f%C3%B6rsta%20provet%20i%20samh%C3%A4llskunskap%20genomf%C3%B6rdes%20i%20augusti%202026))
- **Format:** on paper, multiple choice with four options. ([UHR](https://www.uhr.se/medborgarskapsprovet/om-medborgarskapsprovet/#:~:text=skrivs%20p%C3%A5%20papper%20och%20best%C3%A5r%20av%20flervalsfr%C3%A5gor), [UHR](https://www.uhr.se/medborgarskapsprovet/om-medborgarskapsprovet/#:~:text=Provet%20best%C3%A5r%20av%20flervalsfr%C3%A5gor%20med%20fyra%20svarsalternativ))
- **Language:** Swedish. ([UHR](https://www.uhr.se/medborgarskapsprovet/om-medborgarskapsprovet/#:~:text=Provet%20%C3%A4r%20p%C3%A5%20svenska))
- **Questions, time and pass mark:** not yet published for the next sitting. ([UHR](https://www.uhr.se/medborgarskapsprovet/om-medborgarskapsprovet/))
- **Fee:** not yet published. ([UHR](https://www.uhr.se/medborgarskapsprovet/om-medborgarskapsprovet/#:~:text=Information%20om%20anm%C3%A4lningsavgift%20kommer))
- **How often:** the next sitting is planned for April to May 2027. You can only register if Migrationsverket has invited you. ([UHR](https://www.uhr.se/medborgarskapsprovet/om-medborgarskapsprovet/#:~:text=under%20perioden%20april%2Dmaj%202027), [UHR](https://www.uhr.se/medborgarskapsprovet/om-medborgarskapsprovet/#:~:text=Det%20kommer%20bara%20g%C3%A5%20att%20anm%C3%A4la%20sig%20till%20provet))
- **Study material:** *Sverige i fokus*, a free study book (PDF and audio) from UHR, the agency that runs the test. ([UHR](https://www.uhr.se/medborgarskapsprovet/utbildningsmaterial/#:~:text=Grundl%C3%A4ggande%20kunskaper%20om%20det%20svenska%20samh%C3%A4llet))
- **Language requirement:** a Swedish language test is planned but hasn't been introduced yet. ([UHR](https://www.uhr.se/medborgarskapsprovet/om-medborgarskapsprovet/#:~:text=Prov%20i%20svenska%20kommer%20att%20inf%C3%B6ras%20vid%20senare%20tillf%C3%A4lle))

## Norway: statsborgerprøven

- **Format:** 36 multiple-choice questions with three options each. 32 count toward your score, and 4 are trial questions. ([HK-dir](https://prove.hkdir.no/en/norwegian-citizenship-test/read-about-the-test-citizenship-test#:~:text=The%20citizenship%20test%20consists%20of%2036%20questions), [HK-dir](https://prove.hkdir.no/en/norwegian-citizenship-test/read-about-the-test-citizenship-test#:~:text=Only%2032%20of%20the%20questions%20in%20the%20test%20are%20scored))
- **Pass mark:** 24 correct answers. ([HK-dir](https://prove.hkdir.no/en/norwegian-citizenship-test/read-about-the-test-citizenship-test#:~:text=You%20must%20have%2024%20correct%20answers%20to%20pass%20the%20test))
- **Time:** up to 60 minutes. ([HK-dir](https://prove.hkdir.no/en/norwegian-citizenship-test/read-about-the-test-citizenship-test#:~:text=The%20test%20lasts%20for%20a%20maximum%20of%20one%20hour))
- **Language:** Norwegian (Bokmål or Nynorsk), written at A2 level. You can have the questions read aloud. ([HK-dir](https://prove.hkdir.no/en/norwegian-citizenship-test/read-about-the-test-citizenship-test#:~:text=You%20can%20choose%20whether%20to%20take%20the%20test%20in%20Nynorsk%20or%20Bokm%C3%A5l), [HK-dir](https://prove.hkdir.no/en/norwegian-citizenship-test/read-about-the-test-citizenship-test#:~:text=The%20test%20is%20at%20language%20level%20A2), [HK-dir](https://prove.hkdir.no/en/norwegian-citizenship-test/read-about-the-test-citizenship-test#:~:text=You%20can%20have%20the%20questions%20read%20aloud%20through%20audio%20files))
- **Fee:** set by each municipality, between NOK 300 and 1,800. ([HK-dir](https://prove.hkdir.no/en/norwegian-citizenship-test/register-for-the-test-citizenship-test#:~:text=Your%20municipality%20decides%20the%20cost%20of%20the%20test))
- **How often:** depends on the municipality and test centre. ([HK-dir](https://prove.hkdir.no/en/norwegian-citizenship-test/register-for-the-test-citizenship-test))
- **Study material:** based on the social studies curriculum for adult immigrants. ([HK-dir](https://prove.hkdir.no/en/norwegian-citizenship-test/read-about-the-test-citizenship-test))
- **Language requirement:** separate. An oral Norwegian test at B1 for most applicants. ([UDI](https://www.udi.no/en/important-messages/changes-in-requirements-for-norwegian-skills-to-obtain-norwegian-citizenship/#:~:text=raise%20requirements%20for%20proficiency%20in%20spoken%20Norwegian%20to%20the%20B1%20level), [UDI](https://www.udi.no/en/important-messages/changes-in-requirements-for-norwegian-skills-to-obtain-norwegian-citizenship/#:~:text=the%20citizenship%20test%20or%20the%20Norwegian%20social%20studies%20test))

## Denmark: indfødsretsprøven

- **Format:** 45 multiple-choice questions. 35 come from the official study book, 5 are about current affairs from the past six months, and 5 are about Danish values. ([Danskogprøver](https://danskogproever.dk/borger/indfoedsretsproeve-statsborgerskab/forberedelse-til-indfoedsretsproeven/#:~:text=Pr%C3%B8ven%20best%C3%A5r%20af%2045%20sp%C3%B8rgsm%C3%A5l), [Danskogprøver](https://danskogproever.dk/borger/indfoedsretsproeve-statsborgerskab/forberedelse-til-indfoedsretsproeven/#:~:text=handler%20om%20aktuelle%20forhold%20og%20begivenheder))
- **Pass mark:** 36 correct, including at least 4 of the 5 values questions. ([Danskogprøver](https://danskogproever.dk/borger/indfoedsretsproeve-statsborgerskab/forberedelse-til-indfoedsretsproeven/#:~:text=Mindst%2036%20sp%C3%B8rgsm%C3%A5l%20skal%20v%C3%A6re%20besvaret%20korrekte%20for%20at%20best%C3%A5), [Danskogprøver](https://danskogproever.dk/borger/indfoedsretsproeve-statsborgerskab/forberedelse-til-indfoedsretsproeven/#:~:text=4%20ud%20af%20de%205%20sp%C3%B8rgsm%C3%A5l%20om%20danske%20v%C3%A6rdier))
- **Time:** 45 minutes. ([Studieskolen](https://www.studieskolen.dk/en/tests/danish-tests/indfoedsretsproeven#:~:text=25%20November%202026%20at%2013%3A00%2D13%3A45))
- **Language:** Danish.
- **Fee:** DKK 946. ([Studieskolen](https://www.studieskolen.dk/en/tests/danish-tests/indfoedsretsproeven#:~:text=The%20test%20costs%20946%20DKK))
- **How often:** twice a year, in early summer and November. ([Studieskolen](https://www.studieskolen.dk/en/tests/danish-tests/indfoedsretsproeven#:~:text=Indf%C3%B8dsretspr%C3%B8ven%20is%20held%20twice%20a%20year))
- **Study material:** a free official study book (about 250 pages, PDF and audio). Past papers with answers are published. ([Danskogprøver](https://danskogproever.dk/borger/indfoedsretsproeve-statsborgerskab/forberedelse-til-indfoedsretsproeven/#:~:text=Der%20er%20gratis%20adgang%20til%20l%C3%A6rematerialet), [Danskogprøver](https://danskogproever.dk/borger/indfoedsretsproeve-statsborgerskab/forberedelse-til-indfoedsretsproeven/#:~:text=Her%20kan%20du%20finde%20tidligere%20udgaver%20af%20Indf%C3%B8dsretspr%C3%B8ven))

## What stands out

**Denmark's is the hardest.** You need 80% correct, and the current affairs questions mean you can't just memorise a book. At the November 2025 sitting, only 47.2% of the 2,903 people who took it passed ([Studieskolen, citing SIRI](https://www.studieskolen.dk/en/about-us/news/studieskolens-deltagere-bestaar-indfoedsret#:~:text=only%2047.2%25%20of%20the%202%2C903%20people%20taking%20the%20test%20passed)).

**Norway's is the most predictable.** A fixed format, a clear pass mark and a test deliberately written in simple A2 Norwegian. ([HK-dir](https://prove.hkdir.no/en/norwegian-citizenship-test/read-about-the-test-citizenship-test#:~:text=The%20test%20is%20at%20language%20level%20A2)) The language bar is set by the separate B1 oral test instead.

**Finland's is somewhere in the middle, but we don't know where yet.** The pass mark and the number of questions will tell us a lot. If "most of the answers" means just over half, it's a gentle test. If it means 80%, it's closer to Denmark.

**Finland's age exemption is clear-cut.** If you're 65 or older, you don't take it. ([Migri](https://migri.fi/en/amendments-to-the-citizenship-act-2027#:~:text=persons%20between%20the%20ages%20of%2018%20and%2064), [Migri FAQ](https://migri.fi/en/faq-finnish-citizenship#:~:text=reached%20the%20age%20of%2065%2C%20the%20requirement%20does%20not%20apply)) Some unofficial guides mention age exemptions for Sweden too, but I couldn't confirm age rules on the official Danish, Norwegian or Swedish pages I read, so check them yourself if it matters to you.

**Finland lets your education count instead.** A Finnish- or Swedish-language matriculation exam or degree replaces the test. Norway has a similar idea with exemptions for schooling and university credits in Norwegian. ([UDI](https://www.udi.no/en/important-messages/changes-in-requirements-for-norwegian-skills-to-obtain-norwegian-citizenship/))

**All four are in the national language.** None of them can be taken in English. So in every Nordic country, the citizenship test is also partly a [reading test](/blog/finnish-citizenship-test-reading-test).

My own view: a test you can prepare for from free, public material is a reasonable thing to ask. Denmark's current affairs section is the part I'd find hardest to defend, because you can't study for it. It rewards people who already follow Danish news. Finland's version, at least on paper, avoids that.

Sources: [Migri: Amendments to the Citizenship Act 2027](https://migri.fi/en/amendments-to-the-citizenship-act-2027), [UHR: Om medborgarskapsprovet](https://www.uhr.se/medborgarskapsprovet/om-medborgarskapsprovet/), [UHR: Utbildningsmaterial](https://www.uhr.se/medborgarskapsprovet/utbildningsmaterial/), [HK-dir: Norwegian citizenship test](https://prove.hkdir.no/en/norwegian-citizenship-test/read-about-the-test-citizenship-test), [HK-dir: Register for the test](https://prove.hkdir.no/en/norwegian-citizenship-test/register-for-the-test-citizenship-test), [UDI: Norwegian language requirement for citizenship](https://www.udi.no/en/important-messages/changes-in-requirements-for-norwegian-skills-to-obtain-norwegian-citizenship/), [Danskogprøver: Indfødsretsprøven](https://danskogproever.dk/borger/indfoedsretsproeve-statsborgerskab/forberedelse-til-indfoedsretsproeven/), [Studieskolen: Indfødsretsprøven](https://www.studieskolen.dk/en/tests/danish-tests/indfoedsretsproeven).`,
  },
  {
    slug: "jobs-and-internships-in-finland",
    title: "Finding Jobs and Internships in Finland, and How Much Finnish You Need",
    author: 'Oheneba "Ohe" Poku-Marboah',
    authorUrl: "https://x.com/pokumars",
    publishDate: "2026-10-23",
    metaDescription:
      "An English guide to Finnish job boards, internships, public sector, research and EU jobs, plus which sectors expect Finnish and which hire in English.",
    excerpt:
      "Most guides to job hunting in Finland are written in Finnish. Here's an English version: the job boards, internship programmes, public sector and EU career sites worth knowing, plus an honest look at where you'll need Finnish.",
    content: `I recently sent someone a list of Finnish job boards from the University of Helsinki's student guide. Their first reply: "It's in Finnish."

Fair point. If you're new to Finland and looking for work, the most useful guides are often written in the language you're still learning. So here is an English version, reorganised, with my own notes on **where Finnish matters and where it doesn't**.

## **1. General Finnish job boards**

These are the main places Finnish employers post jobs. Most of the listings are in Finnish, but you can search for "English" as a keyword on most of them to filter for roles where English is the working language.

- **[Työmarkkinatori](https://tyomarkkinatori.fi/)**: The official public job marketplace, run by the state and the employment services. It has an English interface and covers jobs across all sectors.
- **[Duunitori](https://duunitori.fi/)**: One of the biggest private job boards in Finland.
- **[Oikotie Työpaikat](https://tyopaikat.oikotie.fi/)**: A large general job board.
- **[Jobly](https://www.jobly.fi/)**: A general job board.
- **[Laura](https://laura.fi/)**: Another job board.
- **[Indeed Finland](https://fi.indeed.com/)**: A search engine that collects listings from many sites.
- **[JobCrawls](https://www.jobcrawls.com/en)**: Collects jobs from Finnish and international websites.
- **[Barona](https://barona.fi/)** and **[Manpower](https://www.manpower.fi/)**: Recruitment and staffing agencies. These are often a realistic first step into the Finnish job market, especially for hourly and shift work.

A board the university's list doesn't mention, but which is worth knowing as an international: **[Work in Finland](https://www.workinfinland.com/)**, the government's site for international talent. It has an English job search and guidance on moving and working here.

## **2. Public sector jobs**

The public sector is a huge employer in Finland: the state, municipalities, wellbeing services counties, universities and the church.

- **[Valtiolle.fi](https://www.valtiolle.fi/)**: Jobs in central government.
- **[Kuntarekry](https://www.kuntarekry.fi/)**: Jobs in municipalities and wellbeing services counties. This is where a lot of healthcare, education and social work jobs are posted.
- **[City of Helsinki](https://www.hel.fi/fi/avoimet-tyopaikat)**: Open positions with the city.
- **[City of Vantaa](https://vantaa.rekrytointi.com/paikat/index.php?o=A_LOJ&list=1)**: Open positions with the city.
- **[KirkkoRekry](https://kirkkorekry.fi/)**: Jobs in the Evangelical Lutheran Church of Finland.

**A note on language:** most public sector jobs expect Finnish, and many government positions also require some Swedish. This is the area where Finnish opens the most doors. Two of my guests are proof: [Jojo](/episode/8) works as a nurse, and [Magdalene](/episode/7) became a deputy municipal director in healthcare. Both jobs require working in Finnish every day.

## **3. University jobs, research and academia**

Research is one of the most English-friendly sectors in Finland. Many research groups work in English, and job listings are often published in English.

- **University job pages**: Every university lists its own open positions, including summer jobs. For example, the University of Helsinki has [open positions](https://www.helsinki.fi/fi/avoimet-tyopaikat) and [summer jobs](https://www.helsinki.fi/fi/tutustu-meihin/ura-ja-avoimet-tyopaikat/avoimet-tyopaikat/kesatyopaikat). Other universities (Aalto, Tampere, Turku, Oulu, Jyväskylä and so on) have their own pages.
- **[Academic Positions](https://academicpositions.fi/)**: An academic career network for Northern and Central Europe.
- **[EuroScienceJobs](https://www.eurosciencejobs.com/)**: Science jobs across Europe.
- **[Terra.do](https://terra.do/climate-jobs/)**: Climate-related jobs, if that's your field.

## **4. For students: your university's career services**

If you're a student or recent graduate, start with your own university's career services. They're often the best source of internships, because employers post there specifically to reach students.

For example, the University of Helsinki uses **[JobTeaser](https://helsinki.jobteaser.com/)**, where students and alumni can find jobs, internships, career events and career guidance. Other universities and universities of applied sciences have their own job portals and career services, so **check what yours offers** (search for your university's name plus "career services" or "urapalvelut").

Student associations and trade unions also run job boards for their own fields. Some examples from Helsinki:

- **[Paragraaffi](https://paragraaffi.fi/)**: Law students
- **[Loimu](https://tyopaikat.loimu.fi/)**: Natural sciences (biosciences, environmental sciences, chemistry, geography, geosciences, mathematics, physics, forestry)
- **[YKA](https://yka.fi/palvelumme/avoimet-tyopaikat/)**: Social sciences
- **[Klinikalle](https://www.klinikalle.fi/)**: Medical students
- **[Panakeia](https://panakeia.fi/tyonhakijalle/avoimet-tyopaikat/)**: Pharmacy students
- **[TKO-äly](https://jobs.tko-aly.fi/)**: Computer science students

If you study somewhere else, your own subject's student association very likely has something similar. Ask them.

## **5. Jobs and internships abroad**

If you want international experience, or you're open to working outside Finland:

- **[EURES](https://europa.eu/eures/portal/jv-se/home)**: The EU's job mobility portal, with jobs across Europe.
- **[Indeed worldwide](https://www.indeed.com/worldwide)**, **[CareerJet](https://www.careerjet.com/)** and **[Monster](https://www.monster.com/geo/siteselection)**: International job search engines.
- **[Finnish National Agency for Education (OPH)](https://www.oph.fi/fi/kansainvalisyys/kansainvalistymispalvelut-yksiloille)**: Internship programmes for higher education students, including internships at international organisations.
- **[ErasmusIntern](https://erasmusintern.org/)**: Internships across Europe. You can create a profile.
- **[Training Experience](https://www.trainingexperience.org/)**: A collection of international internships.
- **[UNjobnet](https://www.unjobnet.org/)**: UN jobs.

## **6. EU careers and traineeships**

EU institutions hire people from all member states, and they also run paid traineeship programmes.

- **[EPSO / EU Careers](https://epso.europa.eu/en)**: The official recruitment office for EU institutions. It covers jobs, [traineeships](https://epso.europa.eu/en/job-opportunities/traineeships), how to apply and who is eligible.
- **[Working in the EU (Finnish Government)](https://vnk.fi/eu/tyopaikat)**: Information and support from the Prime Minister's Office for people from Finland looking at EU careers.
- **EU Careers Finland** on [Facebook](https://www.facebook.com/EUCareersFinland/) and [Instagram](https://www.instagram.com/eucareersfinland/): A network of EU career ambassadors who share upcoming traineeships and jobs and answer questions about applying.

## **7. Social media and networking**

A lot of hiring in Finland happens through people you know, and a lot of jobs are shared on social media before (or instead of) being posted on job boards.

- **[LinkedIn](https://www.linkedin.com/)**: Use the job search, follow companies you're interested in, and keep your profile up to date so recruiters can find you. It's especially active for sales, marketing, communications, HR, technical and IT roles.
- **Facebook groups**: There are many job groups, including groups for internationals in Finland. Not the main recruitment channel, but worth joining.
- **Hashtags**: Search for **#rekry** (recruitment), **#duuni** (job, slang), **#työpaikat** (jobs), **#jobs** and **#career**.

Learning even a few Finnish job words helps here: *rekry*, *työpaikka* (job), *harjoittelu* (internship), *kesätyö* (summer job), *osa-aikainen* (part-time) and *kokoaikainen* (full-time).

## **So, how much Finnish do you need?**

It depends on the field.

**You can often get by with English** in tech and IT, research and academia, startups and many international companies, especially in the Helsinki region.

**You'll usually need Finnish** in the public sector, healthcare, education, social work, customer service and most jobs outside the capital region.

That said, "needs Finnish" doesn't always mean "needs fluent Finnish". I got a job as a cashier in a grocery store when I could barely string together a sentence I hadn't memorised beforehand. For a lot of entry-level jobs, basic Finnish and a willingness to use it are enough to get started, and the job itself becomes daily practice.

But even in English-friendly fields, Finnish is what moves you up. That was my experience. I was working as a software developer and noticed that the people in senior positions all had one thing in common: **fluent Finnish**. So I spent a year [pretending not to speak English](/blog/how-to-learn-finnish-english-only-thursdays), and that September I got a consulting job that required Finnish.

Finnish doesn't only open the jobs that require it. It also widens your network, and in Finland a lot of jobs are found through your network.

If you want to see how other people reached working-level Finnish while holding down jobs, studies and families, browse the [interviews on the homepage](/). You can filter by life situation to find people whose circumstances match yours. A good place to start is [Deborah](/episode/5), who got into Finnish law school within 3 years of arriving.`,
  },
  {
    slug: "how-to-learn-finnish-english-only-thursdays",
    title: 'How to Learn Finnish: Told My Ex-GF "English Only on Thursdays"',
    author: 'Oheneba "Ohe" Poku-Marboah',
    authorUrl: "https://x.com/pokumars",
    publishDate: "2026-03-11",
    metaDescription:
      "I pretended not to speak English for a year and told my girlfriend 'English only on Thursdays.' Here's the six-part system that got me fluent.",
    excerpt:
      'I told my Finnish-speaking girlfriend: "We will only speak English on Thursdays." What followed was a year of deliberate discomfort—pretending not to speak English—until I landed a job that required Finnish. Here is the system I used.',
    content: `I was stubborn. I had to be.

I told my girlfriend at the time, who was fluent in Finnish, **"We will only speak English on Thursdays."**

Before I get into that story, there are many ways to go about learning Finnish. If you want to reach high-level fluency, I have collected a number of interviews on how [myself](/episode/2) and some other people have managed to successfully achieve that goal.

They are available as videos on [YouTube](https://www.youtube.com/@HowILearnedFinnish) and also in podcast form on [Spotify](https://open.spotify.com/show/266bYZrif8U0I1OJnOTTgU), [Apple podcasts](https://podcasts.apple.com/us/podcast/how-i-learned-finnish-with-ohe/id1820396129) and other podcast platforms.

When I say high level, I don't mean just the YKI-passing level to get citizenship.

I am talking about:

- being able to [write your thesis in Finnish](/episode/11) like Matthias did
- get on [stage and perform comedy in Finnish](/episode/12) like theHappeningFish
- become the [deputy municipal director of a health care zone](/episode/7) like Magdalene
- get into [Finnish law school within 3 years of arriving in Finland](/episode/5) like Deborah
- studying in [Finnish to become a therapist](/episode/13) like Chloe

I got the idea to do these interviews because I realised that my way of learning was quite unsuitable for many people due to how much you have to get out of your social comfort zone.

Also, when people would ask me how I accomplished the goal, I would tell them and they would have some excuse of, "well you were able to do it because..." you are young, or you didn't have any kids or some other excuse.

So I thought: surely, I am not the only one who has managed to achieve this level of Finnish as an adult. Let me find the others who have achieved this goal and then ask them how they did — because their styles may be more suitable for other people.

That is why I have consciously made the website for this project so that you can filter based on life circumstances to see whose life matches yours more — student? with kids? without kids? with a Finnish-speaking partner? without a Finnish-speaking partner?

## **MY STORY**

Step 1: Be me.

It's 2021. I'm 23 years old, writing my bachelor's thesis and I've landed a job in my industry as a software developer in a neo-bank.

You look around you and realise that the next thing is career progression and figuring out how to thrive in this life.

But... BIG BUT: you live in Finland and barely speak the local language.

Notice that all the higher ups in your workplace have 1 common denominator: **fluent Finnish**. So you will need that if you want to network (+ work) your way into a promotion. Career progression often happens because someone likes you, and your surface area for luck decreases a lot if you can't engage with the relevant parties.

Notice that you can't connect with strangers on the streets or make a joke to the cashier in the grocery store. You can't organically communicate and show your full self.

Mind you, at this time I had already passed the YKI test in 2019 with 4, 4, 4 and 3. But I remain dissatisfied with the lack of meaningful conversational skill in Finnish. (I [made a video](https://www.youtube.com/shorts/hWEKmqgrlc4) about the difference between passing YKI and fluency.)

So around January 1st, 2022, I decided to post on all my social media channels — Facebook, LinkedIn, Instagram — that if anyone speaks Finnish, for the year of 2022, we will only be speaking Finnish for the year.

![My LinkedIn announcement: Finnish for 2022](/blog-finnish-for-1-year-linkedin.png)

![The same announcement reposted on Instagram Stories](/blog-finnish-for-1-year-ig-story.png)

What followed was a year of me essentially pretending not to speak English for a year in order to force the improvement of my Finnish.

I broke the parts down into 6 and made sure to get in some reps in all of the different parts of knowing a language.

1. **Vocabulary:** I write down new words, their definitions and simple enough example sentences in Quizlet.

2. **Speaking:** I speak Finnish if the person I'm interacting with knows Finnish.

3. **Listening comprehension:** The speaking part applies here and also [listening to podcasts](/blog/best-finnish-podcasts-for-learning-the-language), preferably on subjects that already interest me.

4. **Grammar:** I went through the Suomen Mestari books just doing exercises.

5. **Reading comprehension:** I read a lot of articles on subjects that interested me like football and Formula 1 and a few books. I get new vocabulary from them.

6. **Writing:** I didn't write nearly as much as I had hoped partially due to feeling lazy but occasionally in my library sessions I would think of a subject and write down things in my notebook. I didn't really have anyone to check for the correctness of my written texts and I didn't want to burden my ex with this so I just wrote and hoped for the best.

Some of the reps were done in conversation with others, some involved me going to the library (Maunula library and Oodi) on weekends and free time to fulfill, and some — like podcasts — were done while I cooked or cleaned or did chores.

My journey required being stubborn. I had known some of my friends for many years by then and our default language was English, so the switch was really hard with some.

In fact, I won't say I was achieving 100% pretense of not speaking English. I was probably around 70% consistent with that.

But guess what... in September of that year, I landed a job in a consulting role that required Finnish.

## **NO FINNISH-SPEAKING PARTNER?**

It is important to note that having a partner who speaks Finnish is not necessary to achieve this goal. That is again one of the reasons why I created this project.

[Matthias](/episode/11) who wrote the medical school exams in Finnish 18 months after arrival in Finland and also wrote his bachelor's thesis in Finnish a few years later did not have a Finnish-speaking partner.

[Magdalene](/episode/7) also did not have a Finnish-speaking partner and she found herself in a very high position in the municipal healthcare hierarchy that absolutely requires Finnish.

That is why I have made the homepage of this project such that you can filter for the interviews where people have similar situations to what you have in your life.`,
  },
  {
    slug: "not-fluent-after-yki",
    title: "Not Fluent After YKI? Why It Happens (and How to Fix It)",
    author: 'Oheneba "Ohe" Poku-Marboah',
    authorUrl: "https://x.com/pokumars",
    publishDate: "2026-03-11",
    metaDescription:
      "Passed YKI but still can't hold a conversation in Finnish? Here's why the test doesn't equal fluency and how to close the gap.",
    excerpt:
      "If you passed YKI but still struggle with real conversations, you’re not alone. Here’s why the gap happens—and a practical 6-skill plan (vocab, speaking, listening, grammar, reading, writing) to finally become fluent.",
    content: `Passing the YKI can feel like “I did it.” You proved you can function in Finnish, you can handle official requirements, and on paper everything looks good.

Then real life happens.

You’re in a meeting and can’t jump in fast enough. You can’t tell a story without getting lost halfway. You understand headlines but not casual speech. You can survive Finnish—but you can’t *live* in it.

If that’s you, you’re not broken. You just trained for the wrong target.

This article explains **why YKI success doesn’t automatically create fluency**, and gives you a practical system to close the gap.

---

## **YKI Finnish ≠ life Finnish**

YKI is a test of language ability under controlled conditions. Real Finnish is messy:

- People interrupt
- Topics shift fast
- *Puhekieli* compresses words
- Humor and emotion change the vocabulary
- You need speed more than correctness

That’s why many learners plateau *after* the exam. They practiced “performance Finnish,” not “relationship Finnish.”

If your goal is citizenship logistics, start here:

- [Finnish Language Requirements for Citizenship](/blog/finnish-language-requirements-for-citizenship)
- [Is YKI the Easiest Path to Finnish Citizenship?](/blog/is-yki-easiest-path-finnish-citizenship)

This post is about what comes **after**.

---

## **The 6-skill fluency model (what you must train to become conversational)**

Fluency isn’t one skill. It’s six. If even one is neglected, conversation feels fragile.

### **1) Vocabulary (but from your life)**

Fluency vocabulary isn’t “all Finnish.” It’s the words you repeatedly need for:

- Your work
- Your hobbies
- Daily admin (healthcare, housing, school, banking)
- Your personality (how you joke, complain, explain, disagree)

**Fix:** build vocabulary from your real inputs (meetings, podcasts, news, your recurring situations). Keep example sentences simple enough to reuse.

### **2) Speaking (the skill most YKI-passers under-train)**

Many people can write a safe paragraph but can’t speak in real time.

**Fix:** create unavoidable speaking reps. Even short reps count if they’re frequent.

Want examples of engineered real-world reps? Erik’s episode is full of them:
- [Why Duolingo Failed, Paying for 100 Lunches, and More (Erik)](/episode/4)

### **3) Listening (the real bottleneck)**

If you can’t parse Finnish quickly, you can’t respond quickly.

**Fix:** daily listening that matches real life:

- “Easy Finnish” + “native-speed Finnish”
- Topics you actually care about (so you can predict context)

If you want a ready-made method + list, start here:
- [Best Finnish Podcasts for Learning the Language](/blog/best-finnish-podcasts-for-learning-the-language)

### **4) Grammar (trained as a tool, not a hobby)**

Grammar helps you avoid getting stuck mid-sentence. But doing only grammar creates the illusion of progress while speaking stays hard.

**Fix:** do “minimum effective grammar” that immediately shows up in speech: the cases and structures you keep tripping over.

### **5) Reading (cheap reps, massive payoff)**

Reading builds speed, structures, and repeat exposure to words—without social pressure.

**Fix:** read short, frequent, interest-based texts (sports, tech, politics, culture). Quantity beats perfection.

### **6) Writing (the bridge between knowledge and speech)**

Writing forces you to produce language without the time pressure of speaking—but with more precision than casual talk.

**Fix:** one short weekly writing session:

- A “mini-essay” about your week
- A complaint you wish you could say smoothly
- A story you want to be able to tell at work

---

## **What “real immersion” looks like (without needing a Finnish partner)**

Immersion doesn’t have to mean quitting your job or marrying a Finn. In the interviews on this site, people reach high Finnish through **designed environments**:

- Matthias (immersion + high word focus + integration habits): [episode 11](/episode/11)
- Jamie / HappeningFish (performance + social integration): [episode 12](/episode/12)
- Magdalene (belonging + persistence + professional rise): [episode 7](/episode/7)
- Jojo (relentless creative methods + mindset): [episode 8](/episode/8)
- Deborah (clear goal pressure + disciplined resources): [episode 5](/episode/5)

Common thread: they didn’t wait to “feel ready.” They created systems that produced reps.

---

## **A 30-day plan for “YKI-but-not-fluent” learners**

### **Daily (30–60 minutes total)**

- **Listening (20–30 min):** podcasts (mix easy + native)
- **Vocabulary (10 min):** 5–10 useful words from today’s input

### **3x/week (20–40 min)**

- **Speaking reps:** one intentional conversation (or hobby group / lunch / call)

### **2x/week (30–45 min)**

- **Grammar drills:** exercises that unblock your most common mistakes

### **2x/week (15–30 min)**

- **Reading:** one article about something you already follow

### **1x/week (20–40 min)**

- **Writing:** one story/opinion you want to be able to say out loud

Do this for 30 days and you’ll feel a specific change: **faster comprehension + less “blanking out” when you speak.**

---

## **The goal: Finnish that changes your life (not just your paperwork)**

YKI is a valid milestone. But if you want Finnish that unlocks:

- Career surface area (networking, visibility, promotions)
- Friendships that don’t default to English
- The ability to be funny, persuasive, and relaxed

…you need reps across all six skills, every week, for long enough that Finnish becomes normal.
`,
  },
  {
    slug: "is-yki-easiest-path-finnish-citizenship",
    title: "Is YKI the Easiest Path to Finnish Citizenship?",
    author: 'Oheneba "Ohe" Poku-Marboah',
    authorUrl: "https://x.com/pokumars",
    publishDate: "2026-01-13",
    metaDescription:
      "YKI isn't the only way to prove Finnish for citizenship. Explore alternative routes including education certificates and vocational qualifications.",
    excerpt:
      "Many people assume that the YKI test is the default ticket to citizenship. It isn't! Is it even the easiest path? Understanding your options can save you time, frustration, and misplaced effort. Explore whether YKI is truly the simplest route or if education-based paths might be easier for you.",
    content: `# **Is YKI the Easiest Path to Finnish Citizenship?**

Becoming a Finnish citizen involves several requirements; residence time, clean legal standing, and [language skills](/blog/finnish-language-requirements-for-citizenship). Many people assume that **the YKI test** is the default ticket to citizenship. It isn't! Is it even the _easiest_ path? Understanding your options can save you time, frustration, and misplaced effort.

Let's break down what the Finnish Immigration Service (Migri) requires and explore whether YKI is truly the simplest route.

## **What Language Skills Are Required for Citizenship?**

To obtain Finnish citizenship, you must demonstrate at least **satisfactory skills** in one of these:

- **Spoken and written Finnish**, or
- **Spoken and written Swedish**.
  (If you have a hearing impairment or speech disability, sign language options are also accepted.)

Crucially: **you must have proof of these skills before you submit your citizenship application** — there's no way around it unless you qualify for a specific exception (which is rare and only for exceptional circumstances).

## **So What Counts as Proof?**

Migri recognizes **six main ways** to show language proficiency. Most people think of YKI first — but it's far from the only method.

### **1) Certificates of Language Proficiency**

- **YKI (National Certificate of Language Proficiency)** — intermediate level (level 3) or higher in Finnish or Swedish.
- **Civil Service Language Proficiency Certificate** — with at least satisfactory spoken and written skills.

This is the "standard" route and the one most applicants use.

### **2) Basic or Upper Secondary Education in Finnish/Swedish**

You can qualify if you have:

- A **comprehensive school certificate** showing the language as native or second language,
- An **upper secondary certificate**,
- Or a **Finnish matriculation examination** in Finnish/Swedish.

This is commonly overlooked but extremely relevant if you completed school here.

### **3) Vocational Qualifications**

If you've completed:

- An **initial, further, or specialist vocational qualification in Finnish/Swedish**,
  and it was done entirely in the language — that counts as proof too.

Certificates of partial completion or preparatory training _do not_ count.

### **4) Higher Education in Finland**

If you've graduated from a **university or university of applied sciences** where Finnish or Swedish was the language of instruction — or completed a maturity test in Finnish/Swedish — this satisfies the requirement.

This is often easier for people who studied in Finland, especially degree programs taught in Finnish.

### **5) Sign Language Certificate**

For applicants with hearing impairments, a proficiency certificate in **Finnish Sign Language or Finland-Swedish Sign Language** issued by the Finnish Association of the Deaf is accepted.

## **Comparing Pathways: Is YKI Really the Easiest?**

Let's look at the pros and cons of YKI _compared to other recognized paths_.

### **YKI: the most common**

**Pros**

- Standardized and widely understood by officials.
- Available in multiple test centers and dates.
- If you _prepare effectively_, it's a predictable milestone.

**Cons**

- You must [pass specific sections](/blog/finnish-language-requirements-for-citizenship)(e.g., speaking + listening), not just a single overall score.
- Preparation often focuses on test skills, not real-life Finnish.
- Test dates and registrations can be limited.

### **Education-Based Paths (Easier if You Already Have Them)**

If you've studied in Finnish or Swedish in Finland:

- A **comprehensive/upper secondary school certificate**,
- Or a **degree where Finnish/Swedish was the language of instruction**,
  can automatically satisfy the language requirement without taking a separate exam.

For immigrants who entered the Finnish education system early or chose schooling in Finnish, this option can be significantly **easier and less stressful** than taking YKI.

### **Vocational Qualifications (A Hidden Shortcut)**

If you've completed a **full vocational qualification in Finnish**, that _already shows real-world language use_. These qualifications are _work-focused_, and the language you needed to complete them tends to be practical, not academic.

This can be a more direct reflection of everyday Finnish ability than an exam.

## **Exceptions: When You Might Not Need YKI or Anything Else**

Migri allows exceptions to the language requirement **only in rare, justified cases**, such as severe disability or documented inability to learn language due to medical reasons.

These are **not** general-purpose exemptions, and simply _feeling like Finnish is hard_ is _not_ a basis for waiver.


## **Conclusion: Don't Default to YKI Without Exploring Other Routes**

YKI is the most well-known way to demonstrate language skills for citizenship, but it isn't inherently easier than:

- Education certificates,
- Degrees completed in Finnish/Swedish,
- Complete vocational qualifications.

If you're aiming for citizenship, your first step should be to **check your existing credentials**. You might already qualify without an exam.

If you _do_ need YKI, [plan well ahead](/blog/deborah-laajanen-finnish-learning-journey), particularly for the speaking and listening sections.`,
  },
  {
    slug: "finnish-language-requirements-for-citizenship",
    readNext: [
      "/blog/is-yki-easiest-path-finnish-citizenship",
      "/resources/exams-and-certifications",
      "/blog/not-fluent-after-yki",
    ],
    title:
      "Finnish Language Requirements for Citizenship - What You Actually Need to Know",
    author: 'Oheneba "Ohe" Poku-Marboah',
    authorUrl: "https://x.com/pokumars",
    publishDate: "2026-01-12",
    metaDescription:
      "Everything you need to know about Finnish language requirements for citizenship: YKI levels, accepted certificates, and practical advice.",
    excerpt:
      "Becoming a Finnish citizen is a significant milestone for many immigrants. In addition to time spent living in Finland, having no serious criminal record, and meeting other legal criteria, you must prove your language skills in Finnish or Swedish. Naturally, language proficiency isn't just a bureaucratic box to tick it's tied directly into how you'll live, work, and participate in Finnish society.",
    content: `## **Finnish Language Requirements for Citizenship - What You Actually Need to Know**

Becoming a Finnish citizen is a significant milestone for many immigrants. In addition to time spent living in Finland, having no serious criminal record, and meeting other legal criteria, **you must prove your language skills in Finnish or Swedish**. Naturally, language proficiency isn't just a bureaucratic box to tick it's tied directly into how you'll live, work, and participate in Finnish society. I might be biased but for your own good, it is very good for your wellbeing in Finland. ([Maahanmuuttovirasto][1])

---

### **What Level of Language Proficiency Is Required?**

To qualify linguistically for Finnish citizenship:

- You must hold an **official language certificate** showing you can use Finnish (or Swedish) at a minimum _intermediate_ level. ([Maahanmuuttovirasto][1])
- The most common way to demonstrate this is through the **National Certificate of Language Proficiency (YKI)** at _intermediate level_ (level 3 on the YKI scale, roughly equivalent to **B1 on the CEFR scale**). ([InfoFinland][2])

The YKI test isn't a single grade; it's made up of **four skills**:

1. Speaking
2. Writing
3. Listening comprehension
4. Reading comprehension ([Opetushallitus][3])

For citizenship, you need at least **grade 3 (intermediate level)** in specific _combinations_ of these skills. You don't have to pass all four at level 3. The accepted combinations are:

- **Speaking + Writing**,
- **Listening comprehension + Writing**, or
- **Reading comprehension + Speaking**. ([Opetushallitus][3])

This approach ensures that you can both **produce and understand** Finnish at a functional level.

---

### **Why Is This Language Level the Standard?**

Intermediate-level Finnish (YKI 3) generally means you can:

- Understand everyday Finnish speech and texts on familiar topics,
- [Participate in basic conversations](/episode/4),
- [Write clear, simple texts](/blog/deborah-laajanen-finnish-learning-journey) related to daily life or work. ([learnfinnished.com][4])

It doesn't require _native-like fluency_ — you're not expected to speak perfectly. But you _do_ need enough capability to navigate common situations without translation. ([InfoFinland][2])

This is a practical threshold: it shows that you can get by in Finnish in typical social and professional settings once you have citizenship.

---

### **Other Ways to Prove Language Skills**

While the YKI test is the most widely used method, There are actually a lot of different ways of demonstrating Finnish/Swedish proficiency. They are

- You can also use the **Civil Service Language Proficiency Certificate (VKT)** at a sufficiently high level. ([Opetushallitus][5])

- Some lesser known methods for proving language skill include ([Maahanmuuttovirasto][1])
  - Certificates of basic eductaion complete in Finnish or Swedish
  - Certificates of upper secondary or vocational education completed in Finnish or Swedish
  - Proof of university or university of applied sciences degree completed in Finnish
    Certificate of proficiency in the Finnish or Finland-Swedish Sign Language

The key point is that whatever certificate you present must be officially accepted by the Finnish Immigration Service ("Migri") as proof of **at least intermediate-level skills** in both expression and comprehension. In rare cases, you can be exempted from having to prove language proficiency ([Maahanmuuttovirasto][7])

---

### **When Should You Take the Test?**

Preparing for the YKI test takes [significant time and practice](/episode/8), especially if your goal is [_real communicative ability_](/episode/2) rather than simply passing an exam. Many applicants wait until they're already [working, studying, or socialising regularly](/episode/7) in Finnish environments where they can practice functional language before taking the test. ([Opetushallitus][6])

Also bear in mind that test registrations and results schedules are set months in advance, so plan early if citizenship timing matters to you. ([Opetushallitus][6])

---

### **Citizenship Isn't Just About Passing a Test**

It's crucial to recognise that _passing an exam_ and [_being able to live comfortably in Finnish_](/episode/10) are not the same thing.

Many applicants study to pass YKI without gaining the level of fluency needed for daily life; jobs, networking, or meaningful social engagement. That's why so many learners find themselves [hitting a plateau](/episode/9) _after_ they've passed YKI: they have the certificate but still struggle with real conversation. Your language journey shouldn't stop with a piece of paper; [it should prepare you for life here](/blog/deborah-laajanen-finnish-learning-journey).

---

### **Summary: What You Need**

1. Intermediate-level Finnish proficiency (YKI level 3 / CEFR B1)
2. Certificate showing minimum level in _both_ expressive and comprehension skills acceptable by the Finnish Immigration Service (Migri)
3. Early planning and preparation well before your citizenship application deadline

[1]: https://migri.fi/en/language-skills?utm_source=howilearnedfinnish.fi "Language skills - Finnish citizenship"
[2]: https://www.infofinland.fi/en/finnish-and-swedish/official-certificate-of-language-proficiency?utm_source=howilearnedfinnish.fi "Official certificate of language proficiency"
[3]: https://www.oph.fi/en/education-and-qualifications/demonstrating-your-language-proficiency-when-applying-finnish?utm_source=howilearnedfinnish.fi "Proving your language skills for the Finnish citizenship ..."
[4]: https://www.learnfinnished.com/the-finnish-level-you-need-to-pass-the-yki-test?utm_source=howilearnedfinnish.fi "The Finnish level you need to pass the YKI test"
[5]: https://www.oph.fi/en/koulutus-ja-tutkinnot/kieli-ja-kaantajatutkinnot/valtionhallinnon-kielitutkinnot-vkt/kielitaidon-osoittaminen-suomen-kansalaisuutta-varten?utm_source=howilearnedfinnish.fi "Proving your language skills when you apply for Finnish ..."
[6]: https://www.oph.fi/en/education-and-qualifications/selecting-right-yki-test-test-days?utm_source=howilearnedfinnish.fi "Selecting the right YKI test, the test days"
[7]: https://migri.fi/en/exceptions-to-the-language-skills-requirement?utm_source=howilearnedfinnish.fi "Exceptions to the language skills requirement"
`,
  },
  {
    slug: "immigrants-pay-more-taxes-than-they-receive-benefits",
    title:
      "Immigrants Are Not a Burden: They Pay More Taxes than They Receive Benefits",
    author: 'Oheneba "Ohe" Poku-Marboah',
    authorUrl: "https://x.com/pokumars",
    publishDate: "2025-11-05",
    metaDescription:
      "A Finnish study shows immigrants contributed a net \u20AC225 million to public finances. The data proves they sustain the welfare system, not drain it.",
    excerpt:
      "When the Helsinki Times reported that immigrants in Finland now pay more in taxes than they receive in benefits, it didn’t surprise me. A new study from Diaconia University of Applied Sciences found that foreign-language speakers contributed a net €225 million to public finances last year. It’s the first time national data has clearly shown that immigrants are, in fact, helping sustain the Finnish welfare system — not draining it.",
    featuredImage: "/blog-immigrants-are-not-a-burden.png",
    content: ` 
# Immigrants Are Not a Burden — They’re Building Finland

When the *[Helsinki Times](https://www.helsinkitimes.fi/176-information/study/28175-study-immigrants-pay-more-in-taxes-than-they-receive-in-benefits.html)* reported that immigrants in Finland now **pay more in taxes than they receive in benefits**, it didn’t surprise me. A new study from [Diakonia University of Applied Sciences](https://www.diak.fi) found that foreign-language speakers contributed a net **€225 million** to public finances last year. It’s the first time national data has clearly shown that immigrants are, in fact, helping sustain the Finnish welfare system; not draining it. (Read the full report [here](https://www.theseus.fi/handle/10024/899598)).

But behind these numbers are thousands of individual stories — people who learned the language, built careers, and made Finland their permanent home. That’s exactly what I explore in this interview series *How I Learned Finnish*. In episode after episode, I meet immigrants who arrived with no Finnish, sometimes as refugees, and who now work, pay taxes, and speak the language at a high-level of fluency.

One of them, **Jojo Pratt**, came from Ghana and spent his first year in a refugee camp. He learned Finnish by standing outside classrooms to listen and carrying a dictionary everywhere he went. Today he’s a nurse serving Finnish patients entirely in Finnish. His story, and many others like it, puts a human face on the numbers in this new report. [Check out his story here](https://www.howilearnedfinnish.fi/episode/8).

Another example is my story In my case, I set out to get from B-level to C-level Dinnish fluency and achieved that goal in 1 year. 9 months after I started, I landed my first job that required me to work in Finnish - a consulting job in software development. [Check out how I did it here](https://www.howilearnedfinnish.fi/episode/2).

The study’s authors said there’s been “a deliberate tendency to present immigrants in a negative light.” That’s why these real-life journeys matter. Language isn’t just a skill; it’s the bridge to full participation; to friendship, to work, and to belonging.

Finland’s future workforce depends on immigrants, but real integration happens only when newcomers are seen — and see themselves — as contributors. The data now proves it. The stories have shown it all along.

*Listen to these stories of integration and language mastery on* **How I Learned Finnish** — *available on [Spotify](https://open.spotify.com/show/266bYZrif8U0I1OJnOTTgU?si=bc6664cb5a2b4b51), [YouTube](https://www.youtube.com/@HowILearnedFinnish), and [Apple Podcasts](https://apple.co/4kEDw4K)*.
I made this so that you can hear how they learned Finnish as adults and you can pick the methods that work best for you.
`,
  },

  {
    slug: "deborah-laajanen-finnish-learning-journey",
    readNext: [
      "/episode/5",
      "/guests/deborah-laajanen",
      "/blog/is-yki-easiest-path-finnish-citizenship",
    ],
    title: "Debi's Finnish Language Learning Journey: From A1 to C1-C2",
    author: 'Deborah "Debi" Laajanen',
    authorUrl: "https://www.linkedin.com/in/deborahlaajanen",
    publishDate: "2025-10-04",
    metaDescription:
      "How Deborah Laajanen learned Finnish from A1 to C1-C2 while navigating immigration and motherhood, earning a place at Helsinki Law School.",
    excerpt:
      "If I were asked how I would describe the Finnish language, I would say it is *sui generis*. Finnish is indeed distinct—its origins and structure differ significantly from its neighboring Indo-European languages. In this article, I recount my own learning experience to humanize the journey, list the references I used, and share the advice I would give myself at each stage.",
    featuredImage: "/thumbnails/5_Deborah.jpg",
    content: `# Debi's Finnish Language Learning Journey

If I were asked how I would describe the Finnish language, I would say it is *sui generis*.  
*Sui generis* is a Latin phrase I learned in law school which means "a kind of its own." Finnish is indeed distinct—its origins and structure differ significantly from its neighboring Indo-European languages. It belongs to the Proto-Finnic branch of the broader Proto-Uralic language family.  

All this is to say: the learning journey is not necessarily easy. But with the right mindset and determination, it can be done.  

In this short article, I aim to recount my own learning experience to humanize the journey, to list the references I used, and to share the advice I would give myself at each stage. For clarity, I will divide this account according to the CEFR levels of language proficiency (A1–C2).  

---

## A1–A2

Under the Finnish government's Integration Program, I began learning Finnish at an educational institution that assessed my skills and placed me in a group suited to my level.  

Unlike many language courses, Finnish was taught in context. As adult learners, we studied grammar—cases, verbs, nouns, and so on—through practical, everyday situations relevant to immigrants. For instance, we learned grammar in the context of a doctor's appointment, a trip to the market, and other daily tasks. This contextual approach was highly effective; learning is always easier when it is connected to lived experience.  

Realistically, at this level, one cannot yet hold a proper conversation. It is about laying foundations: through imitation and memorization. I imitated my teachers' speech, copied Finns' pronunciation, and memorized greetings and common phrases.  

My classmates thought I was more advanced because I could exchange words with them and my teacher, but in truth, I was not yet able to do the same with a native Finn.  

The references and books I used at this stage (with comments) are as follows:  

1. **Ahaa! 1**  
   This book was okay, but I find the next book *Suomen Mestari* more comprehensive, contextual, and well-written.  

2. **Suomen Mestari 1**  
   This is one of the most well-known, if not the most, grammar books used by immigrants, whether or not they are in the integration program or doing self-study.  

3. **Suomi-englanti sanakirja**  
   Needless to say, a good dictionary is always a must in studying Finnish or any language, for that matter.  

4. **Children's comics like Akku Ankka**  
   I did not really go through a lot of these, but in the next levels of language learning, I realized that if I wanted to get more acquainted with *puhekieli*, I should have read this more.  

5. **Children's shows like Muummilakson tarinoita**  
   These shows were fun, although at this stage, there are lots of words and phrases that still went over my head.  

6. **Children's songs like Jumppalaulu**  
   I remember our teacher asked us to sing this while acting it out. Well, it was quite memorable together with the other songs about the Finnish season, alphabet, etc. But as an adult, it felt really embarrassing. So, you can sing and play these children's songs privately instead.  

If I could advise myself at this stage, I would say:  
> "Do not overthink everything. Take it one step at a time: one grammar point, one phrase, one task at a time. Comparing grammar rules is fine, but do not delve too much into the differences distinct to the Finnish language."  

---

## A2–B1

Before finishing my first course, I became pregnant with my son. Still, I managed almost a year of studies, including a month-long language internship at a small Finnish law firm in Lahti. My evaluation placed me at B1 in speaking and writing, and A2.2 in listening and comprehension.  

Because I was due soon, I decided not to continue to the next course level. After giving birth, I took six months of maternity leave, then enrolled in an online open university course while caring for my baby.  

Even without a formal course, I continued learning, albeit more passively. At this stage, grammar remained challenging. The partitive case, a concept absent in both English and my native language, was particularly perplexing. I was also frustrated by the differences between spoken and written Finnish; it felt like learning two languages at once.  

Progress was not always visible. Conversations with natives were still frustrating, though my comprehension had improved compared to the first stage.  

Some of the prior mentioned references are still in use at this stage, especially the dictionary, but here are some specific references and books I used at this stage:  

1. **Finnish Christian hymns and verses:**  
   I am well acquainted with Christian hymns and songs, so singing them (not always with full understanding) is not as cumbersome as studying grammar, since singing is one of my hobbies.  

2. **The Finnish Bible:**  
   This one was quite tough and still is. The Finnish Bible is also composed of words and phrases that are no longer in use, so some of them won't necessarily be found in modern and common Finnish literature. However, since this book is most important to me, I'd like to be able to fully read it through as I do in English and Tagalog.  

3. **Suomen Mestari 2**  

4. **From Start to Finnish by Leila White:**  
   This is my favorite grammar book, obviously, because I am an English speaker. Making sense of the Finnish grammar, as explained or even compared in English, was so useful for me.  

5. **Glosbe and Redfox Dictionaries:**  
   Even though not all of the words can be found through these platforms, I like that they offer examples for the words being searched.  

Looking back, I would tell myself:  
> "Be kind to yourself. You are raising a child while adjusting to so many changes in life. Finnish is not everything. Celebrate small victories—the little concepts you understood, the phrases you managed to use, the idioms you jotted down in your notebook."  

---

## B1–B2

In my second year of learning, I decided to take the YKI Intermediate Test (which assesses at B1–B2). Unsure if I was ready, I enrolled in an intensive B1–B2 course online.  

This course was both challenging and rewarding. The fast pace suited me, and my classmates—many of whom had lived in Finland far longer than I had—pushed me to improve. It was intimidating, but necessary. I needed a teacher who could explain nuances and classmates whose fluency inspired me. It became a fruitful learning curve.  

When the YKI exam came, I found the speaking section most difficult. The test setting was less than ideal—we had to listen to recordings and respond while others around us spoke simultaneously. Even so, I focused on my own test, did my best, and applied what I had learned.  

Months later, I received the results: B1 in writing and listening, B2 in speaking and comprehension. I was satisfied. I had achieved the goal I had set for myself.  

Some of the prior mentioned references are still in use at this stage, especially the dictionaries, but here are some specific references and books I used at this stage:  

1. **Gimara YT channel**  
   I was just looking for some videos on YouTube that can help with listening and understanding, and this channel popped out. It was helpful, although I was not able to go through every one of them because of time constraints.  

2. **Suomen Mestari 3 and 4**  

3. **Lotta from Finished**  
   As I was scrolling through my Facebook, my algorithm must have directed me to such sort of pages and promotions. She is a multi-lingual Finnish native who promotes understanding and listening as the main avenue for learning Finnish and not grammar learning especially for beginners. I bought a subscription (this is not promotional) because I was curious about the claims made, and the materials turned out to be useful to a certain extent, although, up to date, I have not finished them all. And also, I am a firm believer in studying grammar as essential as other methods.  

My advice to that version of me:  
> "You do not need to meet everyone's expectations. Learn at your own pace. Leverage your strengths, improve your weaknesses. In listening, focus on the 80% you understood and let go of the 20% you did not. The essence is what matters."  

---

## B2–C1

In my third year of Finnish studies, I realized that if I wanted to work in my profession, I needed to reach C1–C2. This was non-negotiable. Law is not about personal interest—it is about life, liberty, property, and society. From the moment I took my oath as an attorney-at-law in my home country, I knew that being a lawyer is always larger than oneself.  

With this conviction, I decided to challenge myself by studying the Finnish legal system in Finnish. It was uncomfortable, but I knew that discomfort would lead to growth. For me, these goals, though perhaps unrealistic for some immigrants, were a necessary reality.  

I applied to the Master of Laws (OTM) program at the University of Helsinki. To demonstrate my language skills, I took the *Valtionhallinnon kielitutkinto (VKT)*, the Civil Service Language Proficiency Test. Thankfully, I passed at *hyvä taso* (B2–C1). Compared with YKI, I found the VKT harder for it demanded fluency in societal issues, workplace communication, and abstract discussion. The one-on-one format with the examiner required a level of precision and nuance far beyond everyday interaction.  

A few months later, I received my admission letter: I was accepted into the Master of Laws program at the University of Helsinki. The next stage of my Finnish journey had begun.  

Some of the prior mentioned references are still in use at this stage, especially the dictionaries, but here are some specific references, courses, and tools I used at this stage:  

1. **Valmentava koulutus korkeakouluopintoihin maahanmuuttajille at LAB University:**  
   I applied to this six-month course in order to be acquainted with how university life works, such as tasks, assignments, and lectures in Finnish. Although every university may be different in its system and mode of instruction, I find the tasks here, such as article writing, reporting, and reading academic writing in one's own profession, were really beneficial.  

2. **Artificial Intelligence Apps such as ChatGPT:**  
   During my preparation for the VKT, I have had lots of questions regarding construction, spoken Finnish, grammar, expressions, and legal phrases and terms. Many of these may not be answered by a teacher, but AI was able to. Although there are some sort of glitches here and there, I find AI as my language companion for the latter part of my studies.  

3. **Podcasts:**  
   I listen to podcasts specifically related to my profession. Some of them are *Pääkäsittely*, *Juristipodi*, *Päätös*, etc. These are interviews of lawyers, thought leaders, and experts on their respective fields of specialization. Through this, I learned a lot of mixed spoken and formal Finnish, technical terms, nuanced concepts, and so on.  

To myself at this stage, I would say:  
> "You have worked hard, and your efforts have borne fruit. You are not yet at your ultimate goal, but you will get there. Remember: faith, family, and well-being matter more than Finnish. By grace, all will fall into place."  

---

## C1–C2

This is the level I still aspire to—and one that, according to linguists, may take a lifetime. And that is completely fine. Finnish is unique, challenging, and beautiful.  

So I end with this: to myself now, and to anyone learning Finnish at any level, a quote from Harvard Law School,  

> "You are ready to aid in the shaping and application of those wise restraints that make men free."  

I am convinced that at the height of this journey lies freedom, not from discipline, but through it. Freedom from the struggles of learning Finnish, or any language, comes only through the wise restraints we willingly set for ourselves.`,
  },
  {
    slug: "best-finnish-podcasts-for-learning-the-language",
    readNext: [
      "/episode/2",
      "/blog/how-to-learn-finnish-english-only-thursdays",
      "/resources/radio-and-podcasts",
    ],
    title: "Best Finnish Podcasts for Learning the Language",
    author: `Oheneba "Ohe" Poku-Marboah`,
    authorUrl: "https://x.com/pokumars",
    publishDate: "2025-09-23",
    metaDescription:
      "The best Finnish podcasts for language learning, from easy news to finance and culture. How I used podcasts to reach fluency in one year.",
    excerpt:
      "Discover the best Finnish podcasts to boost your language learning. From easy Finnish news to finance, culture and language learning podcasts,  here’s how I used podcasts to reach fluency in one year.",
    featuredImage: "/blog-best-finnish-podcasts.png",
    content: `
    # Best Finnish Podcasts for Learning the Language (My 2022 Immersion Journey)

---

## How I Used Podcasts to Learn Finnish in One Year

On January 1st, 2022, I announced to the world, on LinkedIn, Instagram, and all my socials, that if anyone I knew spoke Finnish, our conversations would only be in Finnish. It was my New Year’s resolution.

This was a calculated move: to force myself to speak Finnish for an entire year so that, by the end of it, I’d feel much more comfortable with the language.

It was a brutally uncomfortable year in that aspect. Significant time was spent outside my comfort zone. But I also knew the discomfort was temporary, and if I pushed through, the payoff would last for the rest of my life.

To accelerate my progress, I threw myself into Finnish: reading books and articles, watching with Finnish subtitles, doing grammar exercises, and most importantly, listening to podcasts. Podcasts were one of the best ways I found to learn Finnish fast.

This article is about the podcasts that helped me most.

---

## Why Podcasts Are So Powerful

I once met a British-Pakistani doctor who spoke surprisingly good Finnish after living in Finland for only a few months. His secret? For the year before relocating, he listened to *FinnishPod101* on his commute every single day.

That story convinced me: podcasts would be essential for my own learning too. Now I make the ["How I Learned Finnish - with Ohe"](https://www.howilearnedfinnish.fi/) podcast. where I interiview people who have learned Finnish to a high level of fluency to show you how anyone in any life circumstance can also learn Finnish. I even have a filter that allows you to filter guests based on life circumstance (Parent, Student, having a Finnish speaking partner or not, with kids?, fast-paced etc)

---

## How to Start Listening (Even If You Don’t Understand)

At first, I barely understood anything. Most Finnish podcasts are subject-matter heavy and spoken fluently.

But here’s the trick: you don’t need to understand everything. Just listen, pick up words here and there, and let your brain adapt.

Balance harder shows with **selkouutiset** (easy Finnish news). Listen to 30–60 minutes of selkouutiset daily, and you’ll notice progress fast. By month three, I was already making sense of more advanced podcasts and learning about Finnish culture along the way.

---

## My Recommended Finnish Podcasts

Here are the categories and podcasts that worked for me:

### Easy Finnish

* **Yle Selkouutiset** (news in beginner Finnish)
* **FinnishPod101**
  *Perfect for building a base.*

*Essential for building a strong base. You can find more by searching “selkouutiset” or “easy Finnish podcasts.”*


### Personal Finance, Investing & Real Estate

* *Melkein kaikki rahasta*
* *Nordnet’s Rahapodi*
* *Ostan Asuntoja Podcast*
* *Mimmit Sijoittaa*
* *Rahamania*
* *Salkunrakentaja-podi*
* *Sijoituskaverit*
* *Taloudellinen mielenrauha*

*I wanted to understand both personal finance and how the world works so this was one of my favorite categories.*

### Technology & Science

* *Herrasmieshakkerit*
* *Tiedetrippi*
* *Tiedeykkönen*


*I’ve always been a bit of a nerd. My favorite subject in school was biology, so this category was both fun and fascinating.*


### Pop Culture (Music, Movies, Books)

* *Yle’s Kulttuuriykkönen*
* *Kysy mitä vaan*

*Light and enjoyable. Great when I wanted input that wasn’t too demanding.*


### News & Politics

* *HS Visio*
* *Yle Politiikkaradio*

### Storytelling & Lifestyle

* *Kaverin puolesta kyselen*
* *Yle’s 12 diktaattoria*
* *Ootsä Varma*

*Documentary-style and story-driven shows made learning more entertaining and immersive.*

### Sports

Search for your favorite sport (football, Formula 1, boxing, etc.) in Finnish podcast apps. That’s how I found mine.

---

## A Handy App Hack

I use **Castbox**, which lets you label subscribed podcasts. I created a label called *Finnish*, so whenever one show ended, the next Finnish podcast started automatically.

This small system kept me immersed without needing extra actions. Systems like this are game-changers they make doing a thing easier than not doing it because you don't have to think about it.

---

## A Newer Podcast Worth Trying

Recently I discovered the **Finnish with Eemeli** podcast. It’s spoken slowly and clearly, making it perfect for learners who want easier listening practice.

---

## Final Thoughts

Podcasts became one of the most powerful tools in my Finnish-learning journey. They gave me constant exposure, connected me with Finnish culture, and fit naturally into my daily routines.

If you’re learning Finnish, pick at least one podcast today and just start listening. The first weeks will feel hard, but your brain adapts quickly. Choose a subject you love, stick with it, and you’ll be amazed at how far you can get.
`,
  },
  {
    slug: "why-i-started-a-podcast-about-language-learning",
    title:
      "How I Learned Finnish Fast as an Adult Immigrant (and Why I Started a Language Learning Podcast)",
    author: `Oheneba "Ohe" Poku-Marboah`,
    authorUrl: "https://x.com/pokumars",
    publishDate: "2025-07-05",
    metaDescription:
      "How I pretended not to speak English for a year to learn Finnish as an adult immigrant, and why I started a podcast to share fluency strategies.",
    excerpt:
      "I have been having a slowly growing burning feeling in the back of my head to do something for a while now, especially to help other immigrants learn Finnish and thrive in Finland. I think it started when I heard of the concept of reparenting oneself, i.e., providing for yourself the physical and emotional needs you wish you had as a child but didn't receive.",
    featuredImage: "/blog-no-english.jpg",
    content: `I have been having a slowly growing burning feeling in the back of my head to do something for a while now, especially to help other immigrants learn Finnish and thrive in Finland. I think it started when I heard of the concept of reparenting oneself, i.e., providing for yourself the physical and emotional needs you wish you had as a child but didn't receive. In noticing the need for me to do that, I realized that even though I am 27 years old, I still feel like a child who has no idea what to do with all the incoming flow of decisions I need to make. I thought adults had all the answers, but nope, here I am in adulthood, still not knowing anything. A kid in an adult's body - I am sure a lot of you can relate.

Well, hold on a minute; does that mean my parents' shortcomings were for the same reason? They were living that episode of their life for the first time. Parenting me, parenting my siblings, living in a country where they didn’t understand Finnish, struggling with the same challenges many adult immigrants learning Finnish face today, buying a house, graduating from their master's, starting a business, attempting a PhD - all for the first time.

So I have been wanting to create things that would have helped my parents if I had been their friend when they were my age, having just moved to Finland. Something that would have enabled them not just to survive in Finland but to thrive in Finland. There were a few things I would want to do to help internationals living in Finland adjust better and succeed, such as providing language learning aids and education about real estate, among others. That is why I decided to create this limited language learning podcast series: **How I Learned Finnish - with Ohe**.

To be clear, this helps anyone learn a new language - not just Finnish. This podcast project aims to help **immigrants in Finland not only survive but also thrive** by improving their language skills. Through storytelling, it explores what it takes to achieve **adult fluency in one of the world's most difficult languages: Finnish**.

🎧 **Listen/Watch** "How I Learned Finnish - with Ohe" via this link: [https://www.howilearnedfinnish.fi](https://www.howilearnedfinnish.fi)

In 2022, I did something remarkable. I *pretended not to speak English for an entire year* to immerse myself in Finnish and learn Finnish fast as an adult immigrant, eventually reaching high-level fluency.

On January 1st, I publicly announced on LinkedIn and my social media that I would only speak Finnish with Finnish speakers from that point forward. What followed was an intense and mentally demanding immersion journey.

Now, through the podcast *How I Learned Finnish - with Ohe*, I share exactly what I did during that year to learn the language fluently. But more importantly, I seek out and interview others who have also successfully learned Finnish as adults, many reaching at least C-level fluency on the CEFR scale.

These cases are rare: according to a Finnish language educator, only about **2% of immigrants in Finland reach this level of fluency**. My podcast documents their stories, strategies, and insights.

---

### 🎯 The goal is threefold:

1. **Normalizing Finnish Fluency for Adult Immigrants**  
   By showcasing diverse individuals who have achieved high-level Finnish fluency, the podcast aims to show that it is possible, even for those learning later in life.

2. **Practical Guidance for Learning Finnish as an Adult**  
   I interview people from a variety of backgrounds and life situations (parents, workers, students, different relationship and parenting statuses, etc.) so that listeners can find someone whose journey mirrors their own. This ensures that the advice and inspiration are not only aspirational but also applicable.

3. **Different Methods to Learn Finnish Fast**  
   For the listener to pick and choose which methods work best for them and their lifestyle.

---

In addition to these interviews, I also explore the **daily habits, lifestyle changes, resources**, and **mindsets** that make successful language learning possible - especially for busy adults. Many people start learning a new language but use their limited time ineffectively, often due to a lack of guidance.

This language learning podcast aims to change that, by showing it’s possible to learn Finnish fast as an adult immigrant through immersion, daily habits, and shared success stories

---

I aim to have a total of **10–15 episodes**. It is essential for me that this body of work exists. Even if just five people, ten years from now, say this project helped them achieve their language goals, I will consider the mission accomplished.

---

### 📡 Where to Listen to the (How I Learned Finnish - with Ohe)[www.howilearnedfinnish.fi] Podcast

- 🎧 **Spotify**: [https://open.spotify.com/show/266bYZrif8U0I1OJnOTTgU](https://open.spotify.com/show/266bYZrif8U0I1OJnOTTgU)  
- 📺 **YouTube**: [https://www.youtube.com/@HowILearnedFinnish](https://www.youtube.com/@HowILearnedFinnish)  
- 🍎 **Apple Podcasts**: [https://apple.co/4kEDw4K](https://apple.co/4kEDw4K)  
- 🎙️ **Castbox**: [https://castbox.fm/vh/6638003](https://castbox.fm/vh/6638003)  
- 🎵 **Amazon Music**: [https://music.amazon.com/podcasts/2d25ed33-22f6-4050-a54e-26af59c99c48/how-i-learned-finnish-with-ohe](https://music.amazon.com/podcasts/2d25ed33-22f6-4050-a54e-26af59c99c48/how-i-learned-finnish-with-ohe)  
- 🎥 **TikTok**: [https://www.tiktok.com/@how_i_learned_finnish](https://www.tiktok.com/@how_i_learned_finnish)`,
  },
];
