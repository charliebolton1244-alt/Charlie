import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-cream text-brown">
      <Head>
        <title>Charlie Bolton AI Coaching</title>
        <meta name="description" content="AI coaching for professionals, entrepreneurs, students." />
      </Head>
      <main className="overflow-x-hidden">
        {/* Hero */}
        <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 py-20">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-brown">
              Transform How You Work, Think, and Build—With AI as Your Partner
            </h1>
            <p className="text-lg md:text-xl">
              I help professionals, entrepreneurs, and students unlock AI as a strategic thinking partner—not just a productivity tool. Learn to use AI intentionally, build leverage, and create the clarity you need to move forward.
            </p>
            <a href="#" className="inline-block bg-green text-cream px-6 py-3 rounded-md font-semibold">
              Book a Free Discovery Call
            </a>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            {/* placeholder for headshot */}
            <div className="w-64 h-64 bg-gray-200 rounded-full"></div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 px-4 bg-cream">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold">Who I Am</h2>
            <p className="text-lg">
              I'm Charlie—23, filmmaker, entrepreneur, and AI coach. I run multiple businesses (a vintage clothing shop, a video production company) and use AI daily to navigate decisions, build systems, and punch above my weight. I've spent the past year learning how to use AI not as a shortcut, but as a thinking partner—someone (or something) that helps me see my blind spots, refine my strategy, and move faster without burning out. Now, I'm teaching others to do the same. I'm not a coder. I'm not a tech expert. I'm someone who figured out how to make AI work for real life—career decisions, business growth, personal clarity—and I want to show you how. This isn't about productivity hacks or prompt templates. It's about transformation.
            </p>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20 px-4 bg-brown text-cream">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">How I Can Help</h2>
            <p className="mb-10 text-lg">I work with people who are curious about AI but don't know where to start, or who are already using it but feel like they're only scratching the surface. Here's how we can work together:</p>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Package 1 */}
              <div className="border border-cream p-6 rounded-lg bg-brown">
                <h3 className="text-2xl font-semibold mb-2">Foundation Package</h3>
                <p className="italic mb-4">3 x 90-Minute Sessions Over 3 Weeks</p>
                <ul className="list-disc list-inside space-y-2 mb-4 text-sm">
                  <li>Personalized AI setup tailored to your goals (career, business, creativity, life)</li>
                  <li>The Task to Transformation Framework—5 levels of AI use</li>
                  <li>Live demos and hands-on practice with Claude, ChatGPT, voice mode</li>
                  <li>Custom prompts and workflows for your specific situation</li>
                  <li>WhatsApp/email support between sessions</li>
                </ul>
                <p className="mb-4 font-medium">Outcome: You'll go from AI beginner to confident daily user with a system that works for you.</p>
                <p className="font-bold mb-4">£1,200</p>
                <a href="#" className="inline-block bg-green text-cream px-4 py-2 rounded-md">Book Foundation Package</a>
              </div>

              {/* Package 2 */}
              <div className="border border-cream p-6 rounded-lg bg-brown">
                <h3 className="text-2xl font-semibold mb-2">Transformation Package</h3>
                <p className="italic mb-4">6 x 90-Minute Sessions Over 6-8 Weeks</p>
                <ul className="list-disc list-inside space-y-2 mb-4 text-sm">
                  <li>Everything in Foundation, plus:</li>
                  <li>Deep work on values and identity-level AI use</li>
                  <li>Your full "AI tech stack"—research, design, automation tools</li>
                  <li>Industry-specific deep dives (sales, content, career strategy)</li>
                  <li>Ongoing accountability and check-ins</li>
                  <li>6-8 weeks of async support via WhatsApp/email</li>
                </ul>
                <p className="mb-4 font-medium">Outcome: AI becomes integrated into every area of your life and work. You'll have systems, clarity, and measurable results.</p>
                <p className="font-bold mb-4">£2,500</p>
                <a href="#" className="inline-block bg-green text-cream px-4 py-2 rounded-md">Book Transformation Package</a>
              </div>

              {/* Package 3 */}
              <div className="border border-cream p-6 rounded-lg bg-brown">
                <h3 className="text-2xl font-semibold mb-2">VIP Intensive</h3>
                <p className="italic mb-4">1 Full Day (6-8 Hours) or 2 Half-Days</p>
                <ul className="list-disc list-inside space-y-2 mb-4 text-sm">
                  <li>Deep audit of your current work/life—where AI adds most leverage</li>
                  <li>Live build-out of your entire AI system (projects, prompts, tech stack)</li>
                  <li>Custom workflows for your specific goals</li>
                  <li>30-day follow-up support</li>
                </ul>
                <p className="mb-4 font-medium">Outcome: Rapid transformation. You leave with a fully personalized AI setup and clear roadmap.</p>
                <p className="font-bold mb-4">£4,000</p>
                <a href="#" className="inline-block bg-green text-cream px-4 py-2 rounded-md">Book VIP Intensive</a>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 px-4 bg-cream text-brown">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">What People Say</h2>
            <p className="mb-4">"Working with Charlie was eye-opening. In just one session, I went from using AI for basic tasks to having a complete strategy for my career. I can't believe how much clarity I gained." — Client Name</p>
            {/* add more testimonials later */}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 px-4 bg-brown text-cream">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Let's Talk</h2>
            <p className="text-lg">Not sure which package is right for you? Book a free 20-minute discovery call and we'll figure it out together.</p>
            <a href="#" className="inline-block bg-green text-cream px-6 py-3 rounded-md">Book a Free Call</a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-cream text-brown py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <nav className="space-x-4">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#services" className="hover:underline">Services</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
          <p>© 2025 Charlie Bolton. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
