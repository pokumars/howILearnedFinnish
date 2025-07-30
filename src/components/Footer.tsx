import Image from "next/image";

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
        <div className="flex flex-col md:flex-row justify-between items-center">
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
