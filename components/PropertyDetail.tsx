'use client'

import { MapPin, Wifi, Zap, Droplet, Wind, Home, ArrowLeft } from 'lucide-react';
import { SentimentWidget } from './SentimentWidget';
import { CommunityTimeline } from './CommunityTimeline';

interface PropertyDetailProps {
  listingId: string;
  onBack: () => void;
}

const listingData: Record<string, any> = {
  '1': {
    address: 'House 4, Abdulhaqq Estate',
    neighborhood: 'Maitama',
    price: 8000000,
    bedrooms: 2,
    bathrooms: 3,
    sqft: 2200,
    sentiment: 94,
    description: 'Exceptional architecture reimagined for modern living. This Maitama masterpiece features soaring ceilings, original crown molding, and museum-quality craftsmanship.',
    amenities: ['Fitness Center', 'Concierge', 'Rooftop Terrace', 'Smart Home System', 'Wine Cellar', 'Private Entrance'],
    utilities: ['High-speed fiber internet', 'Smart thermostat', 'Water filtration', 'Air purification'],
    highlights: [
      'Landmark view of the Aso Rock',
      'Located in the heart of Abuja with world-class architecture nearby',
      '5 mins drive to the House of Assembly and fine dining establishments',
      'Building designed by renowned architect Mr Somoye',
      'Original hardwood floors and period-appropriate finishes throughout',
    ],
    concerns: [
      'Limited parking availability in the neighborhood',
      'Higher noise levels due to proximity to major thoroughfares',
    ],
    messages: [
      {
        id: '1',
        author: 'Sophie Martinez',
        role: 'Architect, AIA',
        content: 'The architectural integrity of this building is impeccable. The restoration work honors the original design while incorporating modern systems seamlessly. Highly recommended for design-conscious renters.',
        likes: 24,
        timestamp: '2 days ago',
        avatar: 'S',
      },
      {
        id: '2',
        author: 'James Adozie',
        role: 'Urban Planner',
        content: 'Exceptional location. The building contributes significantly to the architectural character of the neighborhood. Living here puts you at the center of Abuja.',
        likes: 18,
        timestamp: '1 day ago',
        avatar: 'J',
      },
      {
        id: '3',
        author: 'Emmanuella Olubode',
        role: 'Fashion Designer',
        content: 'The ceiling heights and natural light are unmatched. Working and living here improves your view of the city.',
        likes: 31,
        timestamp: '12 hours ago',
        avatar: 'E',
      },
    ],
  },
  '2': {
    address: '1847 Architectural Row',
    neighborhood: 'Gimbiya Street',
    price: 5200000,
    bedrooms: 3,
    bathrooms: 4,
    sqft: 1400,
    sentiment: 89,
    description: 'Modern loft, Exposed brick, high ceilings, and authentic character defines this contemporary space.',
    amenities: ['Shared Courtyard', 'Bike Storage', 'Co-working Space', 'Rooftop Access'],
    utilities: ['Fiber internet', 'Modern HVAC', 'Water purification'],
    highlights: [
      'Part of historic Architectural Heritage Conservation District',
      'Original 1920s brickwork and timber beams visible throughout',
      'Growing tech community with workspaces nearby',
      'Easy Access to Mall of Dubai and H-Medix City Centre, and Monaliza park',
    ],
    concerns: [
      'Steep stairs and limited elevator access to upper floors',
      'Street level can experience congestion during peak hours like Friday Jumat Prayer',
      'Sewage smell alongside city centre mall',
    ],
    messages: [
      {
        id: '1',
        author: 'Marcus Johnson',
        role: 'UN Delegate',
        content: 'Outstanding example of responsible neighbourhood. The developers respected the need for ample space and created livable contemporary spaces.',
        likes: 22,
        timestamp: '3 days ago',
        avatar: 'M',
      },
      {
        id: '2',
        author: 'Lisa Park',
        role: 'Artist',
        content: 'The energy in this community is electric. Being surrounded by other creatives and the raw architectural elements is inspirational.',
        likes: 19,
        timestamp: '2 days ago',
        avatar: 'L',
      },
    ],
  },
  '3': {
    address: '420, high District',
    neighborhood: 'Apo Zone E',
    price: 5000000,
    bedrooms: 3,
    bathrooms: 3,
    sqft: 1650,
    sentiment: 91,
    description: 'Contemporary loft in the heart of Apo Legislative Quarters. Floor-to-ceiling windows, polished concrete, and minimalist architecture.',
    amenities: ['Rooftop Garden', 'Fine Dining Access', 'Car Wash Services', 'General Study'],
    utilities: ['Google Fiber', 'EV charging stations', 'Smart home integration'],
    highlights: [
      'Cutting-edge contemporary architecture by award-winning firm',
      'Adjacent to Fine Dining, galleries, and the National Assembly Quarters',
      'Walkable neighborhood with diverse culinary scene',
      'Beautiful buildings with well planned exit and entrance road network',
    ],
    concerns: [
      'Rapid neighborhood development may affect character',
      'Limited neighborhood parking, transit-dependent living recommended',
      'Higher cost of living in the surrounding area',
    ],
    messages: [
      {
        id: '1',
        author: 'Danjuma Isa',
        role: 'Tech Founder',
        content: 'The intersection of modern yet simple architectural design in this neighborhood is unmatched. The building&apos;s smart systems are state-of-the-art.',
        likes: 28,
        timestamp: '1 day ago',
        avatar: 'D',
      },
      {
        id: '2',
        author: 'Amina Patel',
        role: 'Senior Advocate of Nigeria',
        content: 'Exceptional Neighbourhood, i personally enjoy the general study and fine dining as it provides a  suitable work environment.',
        likes: 25,
        timestamp: '18 hours ago',
        avatar: 'A',
      },
      {
        id: '3',
        author: 'Abdulbasit Omoniyi',
        role: 'Supreme Court Justice',
        content: 'Living in minimalist architecture clarifies your thinking. The space demands intentionality and the environment provides access to essentials.',
        likes: 20,
        timestamp: '6 hours ago',
        avatar: 'A',
      },
    ],
  },
};

export function PropertyDetail({ listingId, onBack }: PropertyDetailProps) {
  const property = listingData[listingId];

  if (!property) {
    return <div className="py-12 px-4">Property not found</div>;
  }

  return (
    <section className="min-h-screen py-12 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Header with Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Listings
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Property Hero */}
            <div className="bg-gradient-to-br from-muted to-secondary h-80 rounded-lg overflow-hidden relative">
              <div className="absolute top-6 right-6 bg-accent text-accent-foreground px-4 py-2 font-bold text-lg">
                {property.sentiment}%
              </div>
            </div>

            {/* Property Info */}
            <div>
              <h1 className="font-serif text-5xl font-bold text-foreground mb-2">{property.address}</h1>
              <div className="flex items-center gap-2 text-muted-foreground mb-6">
                <MapPin className="w-5 h-5" />
                <span>{property.neighborhood}</span>
              </div>

              <p className="text-lg text-foreground leading-relaxed mb-8">{property.description}</p>

              <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-border">
                <div>
                  <p className="text-muted-foreground text-sm mb-1">Bedrooms</p>
                  <p className="font-serif text-3xl font-bold text-foreground">{property.bedrooms}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm mb-1">Bathrooms</p>
                  <p className="font-serif text-3xl font-bold text-foreground">{property.bathrooms}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm mb-1">Square Feet</p>
                  <p className="font-serif text-3xl font-bold text-foreground">{property.sqft.toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Amenities</h3>
              <div className="grid grid-cols-2 gap-3">
                {property.amenities.map((amenity: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-2 text-foreground">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    {amenity}
                  </div>
                ))}
              </div>
            </div>

            {/* Utilities */}
            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Utilities & Systems</h3>
              <div className="space-y-3">
                {property.utilities.map((utility: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-3 text-foreground bg-card border border-border p-3">
                    <Wifi className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>{utility}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Timeline */}
            <div className="border-t border-border pt-8">
              <CommunityTimeline messages={property.messages} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-8">
            {/* Price Card */}
            <div className="bg-primary text-primary-foreground p-8 space-y-4 sticky top-4">
              <div>
                <p className="text-sm opacity-90 mb-1">Monthly Rent</p>
                <p className="font-serif text-4xl font-bold">₦{property.price.toLocaleString()}</p>
              </div>
              <button className="w-full bg-primary-foreground text-primary font-bold py-3 hover:opacity-90 transition-opacity">
                Schedule Tour
              </button>
              <button className="w-full border-2 border-primary-foreground text-primary-foreground py-3 font-medium hover:bg-white/10 transition-colors">
                Save Listing
              </button>
            </div>

            {/* Sentiment Widget */}
            <SentimentWidget
              sentiment={property.sentiment}
              highlights={property.highlights}
              concerns={property.concerns}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
