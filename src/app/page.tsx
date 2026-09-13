import Navigation from "@/components/Navigation";
import SpiritualHero from "@/components/SpiritualHero";
import ThePractice from "@/components/ThePractice";
import CalendarView from "@/components/CalendarView";
import LuxuryCursor from "@/components/LuxuryCursor";

export default function Home() {
  return (
    <main className="min-h-screen">
      <LuxuryCursor />
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.035] mix-blend-multiply bg-[url('data:image/svg+xml,%3Csvg_xmlns=%22http://www.w3.org/2000/svg%22_width=%22120%22_height=%22120%22%3E%3Cfilter_id=%22n%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%220.9%22_numOctaves=%222%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23n)%22/%3E%3C/svg%3E')]"></div>

      <Navigation />

      {/* ── Hero ── */}
      <SpiritualHero />

      {/* ── The Practice: dark section with scroll-animated cards ── */}
      <ThePractice />

      {/* ── Smooth bridge from dark to light ── */}
      <div
        style={{
          height: 120,
          background: "linear-gradient(to bottom, #0d0b08 0%, #F6F3EC 100%)",
        }}
      />

      {/* ── Calendar Section ── */}
      <section
        id="calendar"
        className="relative bg-[#F6F3EC] py-[110px] pb-[130px]"
      >
        <div className="max-w-[1040px] mx-auto px-7">
          <div className="mb-14">
            <div className="text-[0.82rem] tracking-[0.1em] text-gold mb-3.5 uppercase font-medium">
              The calendar
            </div>
            <h2 className="font-serif text-[clamp(2rem,4vw,2.9rem)] max-w-[480px] leading-[1.15] text-ink">
              Where the practice stands today.
            </h2>
            <p className="mt-4 text-[0.98rem] leading-[1.7] text-ink-soft max-w-[440px]">
              Each week follows the pull of the moon — what's ongoing, what's
              ending, and what the next Purnima or Amavasya is asking of us.
            </p>
          </div>
          <CalendarView initialEvents={[]} />
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="testimonials" className="relative py-[130px] bg-white">
        <div className="max-w-[1040px] mx-auto px-7 text-center">
          <h2 className="font-serif text-[clamp(1.8rem,3vw,2.5rem)] mb-16 max-w-2xl mx-auto text-ink">
            &ldquo;A rare space that doesn&rsquo;t ask you to be anything other than what
            you are.&rdquo;
          </h2>
          <div className="text-ink-soft italic text-[0.9rem]">
            — S.M., Retreat Participant
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section
        id="newsletter"
        className="relative py-[100px] bg-[#F6F3EC] text-center"
      >
        <div className="max-w-[600px] mx-auto px-7">
          <h2 className="font-serif text-3xl mb-4 text-ink">Join the circle</h2>
          <p className="text-ink-soft mb-8">
            Receive quiet notes on practice and upcoming dates.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
            action={async (formData) => {
              "use server";
              const email = formData.get("email");
              console.log("Subscribed:", email);
            }}
          >
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3 rounded-full border border-ink/20 bg-white focus:outline-none focus:border-gold"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-full bg-ink text-ivory hover:bg-gold transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer id="footer" className="py-[90px] pb-[50px] text-center bg-white">
        <div className="max-w-[1040px] mx-auto px-7">
          <div className="font-serif text-[1.6rem] mb-1.5 text-ink">innerlight</div>
          <p className="text-ink-soft text-[0.9rem]">A practice by Vishal Gautam</p>
          <div className="w-[44px] h-[1px] bg-ink/10 mx-auto my-[26px]"></div>
          <p className="text-ink-soft text-[0.9rem]">hello@innerlight.studio</p>
        </div>
      </footer>
    </main>
  );
}
