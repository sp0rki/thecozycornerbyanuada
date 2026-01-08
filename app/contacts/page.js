import Navigation from "../components/Navigation";

export const metadata = {
  title: "Contact Us - The Cozy Corner",
  description: "Get in touch with The Cozy Corner. Have questions, book recommendations, or feedback? We'd love to hear from you.",
};

export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-50 dark:from-black dark:via-zinc-950 dark:to-black">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
            We'd love to hear from you! Whether you have questions, book recommendations, or just want to say hello, feel free to reach out.
          </p>
        </div>

        <section className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-sm border border-zinc-200 dark:border-zinc-800">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-6">
            Get in Touch
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-50 mb-2">
                Email
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                <a 
                  href="mailto:hello@thecozycorner.example" 
                  className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors underline"
                >
                  hello@thecozycorner.example
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-50 mb-2">
                Response Time
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                We typically respond within 24-48 hours. Thank you for your patience!
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}