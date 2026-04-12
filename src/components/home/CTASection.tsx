import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-amber-950 via-orange-950 to-red-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="text-5xl mb-6">🛕</div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Begin Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
            Sacred Journey
          </span>
        </h2>
        <p className="text-amber-100/70 text-lg mb-10 max-w-xl mx-auto">
          Discover 1000+ temples, plan your pilgrimage, book poojas, and immerse yourself
          in the divine heritage of South India.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/temples"
            className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-lg rounded-xl transition-all duration-200 shadow-xl shadow-amber-900/40"
          >
            Explore Temples
          </Link>
          <Link
            href="/puja"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-lg rounded-xl border border-white/20 transition-all duration-200"
          >
            Book a Pooja
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-amber-200/60">
          <span>✓ Free to use</span>
          <span>✓ Verified temple information</span>
          <span>✓ Official sources only</span>
          <span>✓ Available in 5 languages</span>
        </div>
      </div>
    </section>
  );
}
