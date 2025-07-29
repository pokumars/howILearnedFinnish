import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Headphones, FileText, BookOpen } from "lucide-react";

const quickLinks = [
  {
    icon: "spotify",
    title: "Spotify",
    description: "Listen to all episodes on Spotify",
    href: "#",
    color: "bg-green-500",
  },
  {
    icon: "apple",
    title: "Apple Podcasts",
    description: "Subscribe and listen on Apple Podcasts",
    href: "#",
    color: "bg-purple-500",
  },
  {
    icon: "youtube",
    title: "YouTube Channel",
    description: "Watch episodes  YouTube",
    href: "#",
    color: "bg-red-500",
  },
  {
    icon: "instagram",
    title: "Instagram",
    description: "Daily Finnish tips and behind-the-scenes",
    href: "#",
    color: "bg-pink-500",
  },
  {
    icon: "tiktok",
    title: "TikTok",
    description: "Short-form Finnish learning content",
    href: "#",
    color: "bg-black",
  },
  {
    icon: "linkedin",
    title: "LinkedIn",
    description: "Professional updates and language learning insights",
    href: "#",
    color: "bg-blue-600",
  },
  {
    icon: "facebook",
    title: "Facebook",
    description: "Join our Finnish learning community",
    href: "#",
    color: "bg-blue-500",
  },
  {
    icon: "headphones",
    title: "Latest Episode",
    description: "Listen to the most recent podcast episode",
    href: "#",
    color: "bg-purple-600",
  },
  {
    icon: "file-text",
    title: "Blog/Articles",
    description: "Read in-depth Finnish learning articles",
    href: "/blog",
    color: "bg-green-600",
  },
  {
    icon: "book-open",
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
                  Language enthusiast and podcaster sharing my journey of
                  learning Finnish. Through this podcast, I explore language
                  learning techniques, cultural insights, and the ups and downs
                  of mastering a new language. Join me on this linguistic
                  adventure!
                </p>
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
                    {link.icon === "headphones" && (
                      <Headphones className="w-6 h-6 text-white" />
                    )}
                    {link.icon === "file-text" && (
                      <FileText className="w-6 h-6 text-white" />
                    )}
                    {link.icon === "book-open" && (
                      <BookOpen className="w-6 h-6 text-white" />
                    )}
                    {link.icon === "spotify" && (
                      <span className="text-white text-lg font-bold">♪</span>
                    )}
                    {link.icon === "apple" && (
                      <span className="text-white text-lg font-bold">A</span>
                    )}
                    {link.icon === "youtube" && (
                      <span className="text-white text-lg">▶</span>
                    )}
                    {link.icon === "instagram" && (
                      <span className="text-white text-lg">📷</span>
                    )}
                    {link.icon === "tiktok" && (
                      <span className="text-white text-lg">♪</span>
                    )}
                    {link.icon === "linkedin" && (
                      <span className="text-white text-lg font-bold">in</span>
                    )}
                    {link.icon === "facebook" && (
                      <span className="text-white text-lg font-bold">f</span>
                    )}
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

      <Footer />
    </div>
  );
}
