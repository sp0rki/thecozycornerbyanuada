import Image from "next/image";
import Navigation from "../components/Navigation";

export const metadata = {
  title: "Book Recommendations - The Cozy Corner",
  description: "Browse our curated collection of hand-picked book recommendations. Discover meaningful stories that inspire and bring comfort at The Cozy Corner.",
};

export default function BooksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-50 dark:from-black dark:via-zinc-950 dark:to-black">
      <Navigation />
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Book Recommendations
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Discover our carefully curated selection of books chosen for their ability to inspire, comfort, and bring joy to your reading journey.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-6">
            Featured Books
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-sm border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-shadow group">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image 
                  src="/images/book1.png" 
                  alt="Featured book cover - A cozy reading recommendation from The Cozy Corner" 
                  width={300} 
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-50 mb-2">
                  Curated Selection
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  A thoughtfully chosen book for your reading pleasure.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-sm border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-shadow group">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image 
                  src="/images/book2.png" 
                  alt="Featured book cover - An inspiring story recommendation from The Cozy Corner" 
                  width={300} 
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-50 mb-2">
                  Inspiring Stories
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Discover meaningful narratives that resonate.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-sm border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-shadow group">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image 
                  src="/images/book3.jpg" 
                  alt="Featured book cover - A comforting reading recommendation from The Cozy Corner" 
                  width={300} 
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-50 mb-2">
                  Comforting Reads
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Books that bring peace and tranquility to your day.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
            More Coming Soon
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            We're continuously adding new recommendations to our collection. Check back soon for more curated picks!
          </p>
        </section>
      </main>
    </div>
  );
}