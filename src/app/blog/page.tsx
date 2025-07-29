import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-purple-600 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Blog & Articles
          </h1>
          <p className="text-xl md:text-2xl">
            Educational zone for in-depth strategies and language-learning
            advice
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Coming Soon
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We&apos;re working on creating valuable content about Finnish
              language learning strategies, success stories, and practical tips.
              Check back soon for articles and resources!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
