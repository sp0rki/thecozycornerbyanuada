import Navigation from "../components/Navigation";

export const metadata = {
  title: "About Us - The Cozy Corner",
  description: "Learn about The Cozy Corner, an online bookstore dedicated to curating meaningful stories that inspire, comfort, and bring joy to readers.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-50 dark:from-black dark:via-zinc-950 dark:to-black">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
            About The Cozy Corner
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
            The Cozy Corner is an online bookstore built for readers who enjoy calm,
            comfort, and meaningful stories. Our goal is to recommend books that
            inspire and relax.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
            Our Mission
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
            At The Cozy Corner, we believe that reading should be a peaceful and enriching experience. 
            We carefully select each book in our collection to ensure it meets our standards for quality, 
            meaning, and the ability to provide comfort and inspiration.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Whether you're looking for a quiet escape, a thought-provoking narrative, or a story that 
            warms your heart, we're here to help you find your next perfect read.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
            What We Offer
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-50 mb-2">
                Curated Selection
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Every book in our collection is hand-picked for its ability to inspire, comfort, and bring value to your reading experience.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-50 mb-2">
                Meaningful Stories
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                We focus on stories that resonate deeply and leave a lasting impact on readers.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-50 mb-2">
                Peaceful Reading Experience
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Our platform is designed to be calm and inviting, making it easy to discover your next favorite book.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}