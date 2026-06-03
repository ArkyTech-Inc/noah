'use client'

import { MapPin, Home, DollarSign, Users } from 'lucide-react';

interface ListingCardProps {
  id: string;
  address: string;
  neighborhood: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  sentiment: number;
  onSelect: (id: string) => void;
}

const ListingCard = ({ id, address, neighborhood, price, bedrooms, bathrooms, sqft, sentiment, onSelect }: ListingCardProps) => {
  return (
    <button
      onClick={() => onSelect(id)}
      className="w-full bg-card border border-border hover:border-accent transition-colors duration-300 overflow-hidden group"
    >
      <div className="relative h-56 bg-gradient-to-br from-muted to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-secondary/30 group-hover:bg-accent/10 transition-colors" />
        <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 text-sm font-medium">
          {sentiment}% Positive
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="font-serif text-2xl font-bold text-foreground mb-1">{address}</h3>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{neighborhood}</span>
          </div>
        </div>

        <div className="border-t border-border pt-4">
          <p className="text-3xl font-bold text-foreground mb-4">₦{price.toLocaleString()}/Yr</p>

          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center gap-2">
              <Home className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-foreground">{bedrooms} bd</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Home className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-foreground">{bathrooms} ba</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Home className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-foreground">{sqft.toLocaleString()} sqft</span>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

interface LeasingFeedProps {
  onSelectListing: (id: string) => void;
  onBack: () => void;
}

export function LeasingFeed({ onSelectListing, onBack }: LeasingFeedProps) {
  const listings: ListingCardProps[] = [
    {
      id: '1',
      address: 'House 4, Abdulhaqq Estate',
      neighborhood: 'Maitama',
      price: 8000000,
      bedrooms: 2,
      bathrooms: 3,
      sqft: 2200,
      sentiment: 94,
      onSelect: onSelectListing,
    },
    {
      id: '2',
      address: '1847 Architectural Row',
      neighborhood: 'Gimbiya Street',
      price: 5200000,
      bedrooms: 3,
      bathrooms: 4,
      sqft: 1400,
      sentiment: 95,
      onSelect: onSelectListing,
    },
    {
      id: '3',
      address: '420, high District',
      neighborhood: 'Apo Zone E',
      price: 5000000,
      bedrooms: 3,
      bathrooms: 3,
      sqft: 1650,
      sentiment: 91,
      onSelect: onSelectListing,
    },
  ];

  return (
    <section className="min-h-screen py-12 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h2 className="font-serif text-4xl font-bold text-foreground mb-2">Available Listings</h2>
            <p className="text-muted-foreground">Curated homes in architectural communities</p>
          </div>
          <button
            onClick={onBack}
            className="px-4 py-2 border border-primary text-primary hover:bg-primary/5 transition-colors text-sm font-medium"
          >
            ← Back
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {listings.map((listing) => (
            <ListingCard key={listing.id} {...listing} />
          ))}
        </div>
      </div>
    </section>
  );
}
