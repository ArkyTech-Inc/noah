'use client'

interface MVPDashboardCTAProps {
  onExplore: () => void;
}

export function MVPDashboardCTA({ onExplore }: MVPDashboardCTAProps) {
  return (
    <section className="py-24 px-4 bg-card border-y border-border">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest">
            Interactive Demo
          </span>
        </div>

        <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
          Experience the Living Layer
        </h2>

        <p className="font-sans text-lg text-foreground leading-relaxed mb-12 max-w-3xl mx-auto">
          See how Google AI analyzes community sentiment live in our active retail leasing dashboard. Browse verified apartment listings, explore neighborhoods through the eyes of their communities, and discover properties aligned with your values.
        </p>

        <button
          onClick={onExplore}
          className="px-12 py-5 bg-accent text-accent-foreground font-sans font-semibold hover:bg-accent/90 transition-colors text-lg"
        >
          Explore Smart Leasing
        </button>
      </div>
    </section>
  );
}
