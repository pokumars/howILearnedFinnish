import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, FileText, BookOpen } from "lucide-react";
import Image from "next/image";
const width = 24;
const height = 24;

const socialMediaLinks = [
  {
    icon: (
      <Image
        src="/instagram.svg"
        alt="Instagram"
        width={width}
        height={height}
        className="w-12 h-12"
      />
    ),

    title: "Instagram",
    href: "https://www.instagram.com/how_i_learned_finnish/",
  },
  {
    icon: (
      <Image
        src="/Tiktok.svg"
        alt="TikTok"
        width={width}
        height={height}
        className="w-12 h-12"
      />
    ),
    title: "TikTok",
    href: "https://www.tiktok.com/@how_i_learned_finnish",
  },
  {
    icon: (
      <Image
        src="/LinkedIn.svg"
        alt="LinkedIn"
        width={width}
        height={height}
        className="w-12 h-12"
      />
    ),
    title: "LinkedIn",
    href: "https://www.linkedin.com/company/how-i-learned-finnish-with-ohe/",
  },
  {
    icon: (
      <Image
        src="/Facebook.svg"
        alt="Facebook"
        width={width}
        height={height}
        className="w-11 h-11"
      />
    ),
    title: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61577815680212",
  },
];

const quickLinks = [
  {
    icon: (
      <Image
        src="/youtube.svg"
        alt="YouTube"
        width={width}
        height={height}
        className="w-12 h-12"
      />
    ),
    title: "YouTube Channel",
    description: "Watch episodes on YouTube",
    href: "https://www.youtube.com/@HowILearnedFinnish",
  },
  {
    icon: (
      <Image
        src="/Spotify.svg"
        alt="Spotify"
        width={width}
        height={height}
        className="w-12 h-12"
      />
    ),
    title: "Spotify",
    description: "Listen to all episodes on Spotify",
    href: "https://open.spotify.com/show/266bYZrif8U0I1OJnOTTgU?si=bc6664cb5a2b4b51",
  },
  {
    icon: (
      <Image
        src="/Apple.svg"
        alt="Apple Podcasts"
        width={width}
        height={height}
        className="w-12 h-12"
      />
    ),
    title: "Apple Podcasts",
    description: "Subscribe and listen on Apple Podcasts",
    href: "https://apple.co/4kEDw4K",
  },
  {
    icon: <FileText className="w-6 h-6 text-white" />,
    title: "Blog/Articles",
    description: "Read in-depth Finnish learning articles",
    href: "/blog",
    color: "bg-green-600",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-white" />,
    title: "Resources (Coming Soon)",
    description: "Finnish learning materials and guides",
    href: "#",
    color: "bg-orange-500",
  },
];

export default function QuickLinks() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-purple-600 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            How I Learned Finnish - with Ohe
          </h1>
          <p className="text-xl md:text-2xl">
            All important links in one place
          </p>
        </div>
      </section>

      {/* Social Media Links Section */}
      <section className="py-8 bg-pink-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-pink-200 rounded-lg p-4">
              <div className="flex gap-6">
                {socialMediaLinks.map((link) => (
                  <a
                    key={link.title}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-200"
                  >
                    <div className=" w-12 h-12 rounded-lg flex items-center justify-center shadow-sm">
                      {link.icon}
                    </div>
                    <span className="text-xs font-medium text-gray-700">
                      {link.title}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4">
            {quickLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 ${link.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    {link.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-200">
                      {link.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{link.description}</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors duration-200" />
              </a>
            ))}
          </div>
        </div>
      </section>
      {/* About Ohe Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 -mt-8 relative z-10">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-2xl font-bold">O</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  About Ohe
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  I pretended not to speak English for an entire year in order
                  to reach fluency in Finnish.
                  <br />
                  <br />
                  Now, through this limited podcast series &quot;How I Learned
                  Finnish – with Ohe&quot;, I and my guests share exactly what
                  we did to learn the Finnish language fluently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
