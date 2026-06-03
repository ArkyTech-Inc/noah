'use client'

import { TrendingUp, AlertCircle, CheckCircle2 } from 'lucide-react';

interface SentimentMetric {
  label: string;
  value: number;
  icon: React.ReactNode;
  color: string;
}

interface SentimentWidgetProps {
  sentiment: number;
  highlights: string[];
  concerns: string[];
}

export function SentimentWidget({ sentiment, highlights, concerns }: SentimentWidgetProps) {
  const metrics: SentimentMetric[] = [
    {
      label: 'Community',
      value: 92,
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'from-accent to-secondary',
    },
    {
      label: 'Design',
      value: 96,
      icon: <CheckCircle2 className="w-5 h-5" />,
      color: 'from-accent to-accent',
    },
    {
      label: 'Accessibility',
      value: 88,
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'from-secondary to-secondary',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Main Sentiment Score */}
      <div className="bg-card border border-border p-8 space-y-6">
        <div className="flex items-end gap-4">
          <div>
            <p className="text-muted-foreground text-sm font-medium mb-2">Overall Sentiment</p>
            <p className="font-serif text-5xl font-bold text-foreground">{sentiment}%</p>
          </div>
          <div className="flex-1">
            <div className="w-full bg-border rounded-full h-2 overflow-hidden">
              <div
                className="bg-accent h-full transition-all duration-500"
                style={{ width: `${sentiment}%` }}
              />
            </div>
          </div>
        </div>
        <p className="text-foreground font-serif text-lg">Community approval in this architectural neighborhood</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-3 gap-4">
        {metrics.map((metric, idx) => (
          <div key={idx} className="bg-card border border-border p-6 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">{metric.label}</span>
              <div className="text-accent">{metric.icon}</div>
            </div>
            <p className="font-serif text-3xl font-bold text-foreground">{metric.value}%</p>
          </div>
        ))}
      </div>

      {/* Highlights */}
      <div className="bg-card border border-border p-6">
        <h4 className="font-serif text-lg font-bold text-foreground mb-4 flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-accent" />
          Highlights
        </h4>
        <ul className="space-y-3">
          {highlights.map((highlight, idx) => (
            <li key={idx} className="flex items-start gap-3 text-foreground">
              <span className="text-accent mt-1.5">•</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Concerns */}
      <div className="bg-card border border-border p-6">
        <h4 className="font-serif text-lg font-bold text-foreground mb-4 flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-secondary" />
          Community Concerns
        </h4>
        <ul className="space-y-3">
          {concerns.map((concern, idx) => (
            <li key={idx} className="flex items-start gap-3 text-foreground">
              <span className="text-secondary mt-1.5">•</span>
              <span>{concern}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
