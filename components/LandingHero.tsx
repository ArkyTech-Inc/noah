'use client'

interface LandingHeroProps {
  onViewLeasing: () => void;
}

export function LandingHero({ onViewLeasing }: LandingHeroProps) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-32 bg-background relative">
      <div className="max-w-5xl text-center space-y-10">
        <div className="space-y-6">
          <h1 className="font-serif text-7xl md:text-8xl font-bold text-foreground leading-tight tracking-tight">
            Noah.
          </h1>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground font-normal leading-tight">
            The Architect of Trust
          </h2>
        </div>

        <p className="font-sans text-xl md:text-2xl text-foreground leading-relaxed max-w-3xl mx-auto font-light">
          A unified proptech ecosystem aligning capital, construction, and community through transparent data and Google AI.
        </p>

        <div className="pt-6 flex flex-col sm:flex-row gap-5 justify-center">
          <button
            onClick={onViewLeasing}
            className="px-10 py-4 bg-primary text-primary-foreground font-sans font-semibold hover:bg-primary/90 transition-colors text-lg"
          >
            Explore Smart Leasing
          </button>
          <button className="px-10 py-4 border-2 border-primary text-primary font-sans font-semibold hover:bg-primary/5 transition-colors text-lg">
            Coming Features
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-pulse">
        <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
