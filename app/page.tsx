'use client'

import { useState } from 'react';
import { LandingHero } from '@/components/LandingHero';
import { TriadEcosystem } from '@/components/TriadEcosystem';
import { MVPDashboardCTA } from '@/components/MVPDashboardCTA';
import { LeasingFeed } from '@/components/LeasingFeed';
import { PropertyDetail } from '@/components/PropertyDetail';

type ViewType = 'landing' | 'leasing' | 'detail';

export default function Page() {
  const [currentView, setCurrentView] = useState<ViewType>('landing');
  const [selectedListingId, setSelectedListingId] = useState<string>('');

  const handleViewLeasing = () => {
    setCurrentView('leasing');
  };

  const handleSelectListing = (id: string) => {
    setSelectedListingId(id);
    setCurrentView('detail');
  };

  const handleBackToLeasing = () => {
    setCurrentView('leasing');
  };

  const handleBackToLanding = () => {
    setCurrentView('landing');
  };

  return (
    <main className="bg-background text-foreground">
      {currentView === 'landing' && (
        <>
          <LandingHero onViewLeasing={handleViewLeasing} />
          <TriadEcosystem />
          <MVPDashboardCTA onExplore={handleViewLeasing} />
        </>
      )}
      {currentView === 'leasing' && (
        <LeasingFeed onSelectListing={handleSelectListing} onBack={handleBackToLanding} />
      )}
      {currentView === 'detail' && (
        <PropertyDetail listingId={selectedListingId} onBack={handleBackToLeasing} />
      )}
    </main>
  );
}
