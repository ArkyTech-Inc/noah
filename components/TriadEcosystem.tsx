'use client'

interface PillarProps {
  title: string;
  valueProp: string;
  description: string;
  features: string[];
}

function Pillar({ title, valueProp, description, features }: PillarProps) {
  return (
    <div className="py-12 px-8 border-b border-border lg:border-b-0 lg:border-r lg:border-border last:border-r-0">
      <div className="max-w-2xl">
        <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
          {title}
        </h3>
        
        <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">
          {valueProp}
        </p>
        
        <p className="font-sans text-base text-foreground leading-relaxed mb-8">
          {description}
        </p>
        
        <div className="space-y-3">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
            Core Features
          </p>
          <ul className="space-y-2">
            {features.map((feature, idx) => (
              <li key={idx} className="flex gap-3 text-sm text-foreground">
                <span className="text-accent font-bold">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function TriadEcosystem() {
  const pillars = [
    {
      title: 'Noah Capital',
      valueProp: 'The Investment Platform',
      description: 'Democratizing institutional real estate investment through transparent, fractional project funding. Allows vetted developers to list ongoing or upcoming projects to solicit crowd-investments. By lowering the barrier to entry, retail investors gain access to premium yield-generating assets while developers secure decentralized, high-trust capital.',
      features: [
        'Fractional ownership tokens',
        'Real-time construction progress tracking',
        'Automated yield distributions',
      ],
    },
    {
      title: 'Noah Supply',
      valueProp: 'The B2B Construction Marketplace',
      description: 'Streamlining procurement with a verified, transparent marketplace for building materials. Connects developers directly with certified manufacturers and vendors for critical raw materials like cement, iron rods, and aggregates. Eliminates middlemen, stabilizes pricing, and ensures supply-chain integrity directly through the platform.',
      features: [
        'Bulk ordering tools',
        'Verified vendor ratings',
        'Smart procurement automated carts',
      ],
    },
    {
      title: 'Noah Living',
      valueProp: 'The Retail Leasing & Community Sentiment Engine',
      description: 'Humanizing property leasing with real-time, community-driven accountability. A marketplace for apartment listings where tenant experiences are transformed into quantitative insights. Using Google AI, Noah translates community discussions, reviews, and localized feedback into a living \'Trust Score\', ensuring what you see online matches the reality on the ground.',
      features: [
        'Verified individual listings',
        'Live community chat boards',
        'Google AI-driven real-time sentiment scoring',
      ],
    },
  ];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            The Triad Ecosystem
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Three integrated systems aligning capital, construction, and community through transparent data and Google AI.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-0 border border-border">
          {pillars.map((pillar, idx) => (
            <Pillar key={idx} {...pillar} />
          ))}
        </div>
      </div>
    </section>
  );
}
