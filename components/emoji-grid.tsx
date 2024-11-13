"use client";

import { useState, useEffect } from "react";
import { EmojiCard } from "./emoji-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { searchEmojis } from "@/lib/emoji-data";

export function EmojiGrid() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState(searchEmojis(""));
  const { toast } = useToast();

  useEffect(() => {
    // Automatically search as user types
    const searchResults = searchEmojis(searchQuery);
    setResults(searchResults);
  }, [searchQuery]);

  const handleCopy = (emoji: string) => {
    navigator.clipboard.writeText(emoji);
    toast({
      title: "Copied!",
      description: `${emoji} has been copied to your clipboard`,
      duration: 2000,
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex gap-2 mb-8">
        <Input
          placeholder="Search emojis..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="text-lg"
        />
        <Button variant="secondary">
          <Search className="w-5 h-5" />
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {results.length > 0 ? (
          results.map((emoji, index) => (
            <EmojiCard
              key={index}
              emoji={emoji.emoji}
              name={emoji.name}
              category={emoji.category}
              onCopy={() => handleCopy(emoji.emoji)}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-8 text-muted-foreground">
            No emojis found for "{searchQuery}" 😢
          </div>
        )}
      </div>
    </div>
  );
}