'use client'

import { MessageCircle, Heart } from 'lucide-react';
import { useState } from 'react';

interface TimelineMessage {
  id: string;
  author: string;
  role: string;
  content: string;
  likes: number;
  timestamp: string;
  avatar: string;
}

interface CommunityTimelineProps {
  messages: TimelineMessage[];
}

export function CommunityTimeline({ messages }: CommunityTimelineProps) {
  const [likedMessages, setLikedMessages] = useState<Set<string>>(new Set());
  const [comment, setComment] = useState('');

  const toggleLike = (messageId: string) => {
    const newLiked = new Set(likedMessages);
    if (newLiked.has(messageId)) {
      newLiked.delete(messageId);
    } else {
      newLiked.add(messageId);
    }
    setLikedMessages(newLiked);
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Community Conversations</h3>

        {/* Comments Timeline */}
        <div className="space-y-6">
          {messages.map((message, idx) => (
            <div key={message.id} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-white font-bold">
                  {message.avatar}
                </div>
                {idx < messages.length - 1 && <div className="w-0.5 h-12 bg-border mt-4" />}
              </div>

              <div className="flex-1 pt-1">
                <div className="bg-card border border-border p-4 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-semibold text-foreground">{message.author}</p>
                      <p className="text-xs text-muted-foreground">{message.role}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{message.timestamp}</span>
                  </div>
                  <p className="text-foreground text-sm leading-relaxed">{message.content}</p>
                  <div className="flex items-center gap-4 mt-3 pt-3 border-t border-border">
                    <button
                      onClick={() => toggleLike(message.id)}
                      className="flex items-center gap-1.5 text-muted-foreground hover:text-accent transition-colors"
                    >
                      <Heart
                        className={`w-4 h-4 ${likedMessages.has(message.id) ? 'fill-accent text-accent' : ''}`}
                      />
                      <span className="text-xs font-medium">
                        {message.likes + (likedMessages.has(message.id) ? 1 : 0)}
                      </span>
                    </button>
                    <button className="flex items-center gap-1.5 text-muted-foreground hover:text-accent transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-xs font-medium">Reply</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comment Input */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
              Y
            </div>
            <div className="flex-1">
              <input
                type="text"
                placeholder="Share your perspective on this community..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full bg-input border border-border px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="mt-2 px-4 py-2 bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors ml-auto block">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
