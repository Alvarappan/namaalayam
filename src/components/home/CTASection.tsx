import Link from "next/link";
import GopuramIcon from "@/components/ui/GopuramIcon";

export default function CTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-orange-500 via-amber-500 to-orange-400 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-yellow-200/30 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <GopuramIcon size={64} className="text-white mx-auto mb-6 drop-shadow-md" />
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight drop-shadow-sm">
          Begin Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 to-amber-50">
            Sacred Journey
          </span>
        </h2>
        <p className="text-white/95 text-lg mb-10 max-w-xl mx-auto">
          Discover 1000+ temples, plan your pilgrimage, book poojas, and immerse yourself
          in the divine heritage of South India.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/temples"
            className="px-8 py-4 bg-white text-orange-700 hover:bg-amber-50 font-bold text-lg rounded-xl transition-all duration-200 shadow-xl shadow-orange-700/30"
          >
            Explore Temples
          </Link>
          <Link
            href="/puja"
            className="px-8 py-4 bg-orange-700/20 hover:bg-orange-700/30 text-white font-bold text-lg rounded-xl border-2 border-white/60 transition-all duration-200"
          >
            Book a Pooja
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-white/85">
          <span>✓ Free to use</span>
          <span>✓ Verified temple information</span>
          <span>✓ Official sources only</span>
          <span>✓ Available in 5 languages</span>
        </div>
      </div>
    </section>
  );
}
