import Link from "next/link";
import Image from "next/image";
import Navigation from "./components/Navigation";

export const metadata = {
  title: "The Cozy Corner - Your Online Bookstore for Calm & Meaningful Stories",
  description: "Discover hand-picked book recommendations at The Cozy Corner. A curated online bookstore for readers who enjoy calm, comfort, and meaningful stories.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-50 dark:from-black dark:via-zinc-950 dark:to-black">
      <Navigation />
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-zinc-50 mb-6 leading-tight">
            Welcome to The Cozy Corner
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Your peaceful haven for discovering books that inspire, comfort, and bring joy
          </p>
        </div>

        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
              Featured Books
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Discover our hand-picked selection of meaningful stories
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Link 
              href="/books"
              className="group"
            >
              <div className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-lg border-2 border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all hover:shadow-2xl hover:-translate-y-2">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image 
                    src="/images/book1.png" 
                    alt="Featured book cover - A cozy reading recommendation from The Cozy Corner" 
                    width={400} 
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    priority
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                    Curated Selection
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    A thoughtfully chosen book for your reading pleasure.
                  </p>
                </div>
              </div>
            </Link>

            <Link 
              href="/books"
              className="group"
            >
              <div className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-lg border-2 border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all hover:shadow-2xl hover:-translate-y-2">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image 
                    src="/images/book2.png" 
                    alt="Featured book cover - An inspiring story recommendation from The Cozy Corner" 
                    width={400} 
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    priority
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                    Inspiring Stories
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Discover meaningful narratives that resonate.
                  </p>
                </div>
              </div>
            </Link>

            <Link 
              href="/books"
              className="group"
            >
              <div className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-lg border-2 border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all hover:shadow-2xl hover:-translate-y-2">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image 
                    src="/images/book3.jpg" 
                    alt="Featured book cover - A comforting reading recommendation from The Cozy Corner" 
                    width={400} 
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    priority
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                    Comforting Reads
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Books that bring peace and tranquility to your day.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Link 
            href="/books"
            className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-sm border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 transition-colors">
              <svg className="w-6 h-6 text-zinc-700 dark:text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
              Curated Selection
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
              Hand-picked recommendations chosen for their ability to inspire and provide comfort.
            </p>
            <span className="inline-block text-zinc-900 dark:text-zinc-50 font-medium group-hover:underline">
              Browse Books →
            </span>
          </Link>

          <Link 
            href="/about"
            className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-sm border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 transition-colors">
              <svg className="w-6 h-6 text-zinc-700 dark:text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
              Our Story
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
              Learn about our mission to bring meaningful stories to readers who value calm and comfort.
            </p>
            <span className="inline-block text-zinc-900 dark:text-zinc-50 font-medium group-hover:underline">
              Read More →
            </span>
          </Link>

          <Link 
            href="/contacts"
            className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-sm border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 transition-colors">
              <svg className="w-6 h-6 text-zinc-700 dark:text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
              Get in Touch
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
              Have questions or recommendations? We'd love to hear from you.
            </p>
            <span className="inline-block text-zinc-900 dark:text-zinc-50 font-medium group-hover:underline">
              Contact Us →
            </span>
          </Link>
        </div>

        <section className="text-center">
          <h2 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50 mb-8">
            Why Choose The Cozy Corner?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-50 mb-3">
                Thoughtfully Selected
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Every book is carefully chosen for its ability to inspire and provide comfort.
              </p>
            </div>
            <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-50 mb-3">
                Meaningful Stories
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                We focus on stories that resonate and bring value to your reading experience.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
