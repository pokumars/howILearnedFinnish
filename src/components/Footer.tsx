import Image from "next/image";
import Link from "next/link";

const hubLinks = [
  { href: "/", label: "Episodes" },
  { href: "/learn-finnish", label: "Learn Finnish" },
  { href: "/guests", label: "Guests" },
  { href: "/blog", label: "Blog" },
  { href: "/resources", label: "Resources" },
];

export default function Footer() {
  const socialLinks = [
    {
      icon: "/instagram.svg",
      href: "https://www.instagram.com/how_i_learned_finnish/",
      label: "Instagram",
    },
    {
      icon: "/Tiktok.svg",
      href: "https://www.tiktok.com/@how_i_learned_finnish",
      label: "TikTok",
    },
    {
      icon: "/LinkedIn.svg",
      href: "https://www.linkedin.com/company/how-i-learned-finnish-with-ohe/",
      label: "LinkedIn",
    },
    {
      icon: "/Facebook.svg",
      href: "https://www.facebook.com/profile.php?id=61577815680212",
      label: "Facebook",
    },
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hub navigation */}
        <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
          {hubLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
          <div className="text-sm text-gray-300 mb-4 md:mb-0">
            © 2025 How I Learned Finnish with Ohe. All rights reserved.
          </div>

          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label={social.label}
              >
                <Image
                  src={social.icon}
                  alt={social.label}
                  width={20}
                  height={20}
                  className="h-8 w-8"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
