"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

interface EmojiCardProps {
  emoji: string;
  name: string;
  category: string;
  onCopy: () => void;
}

export function EmojiCard({ emoji, name, category, onCopy }: EmojiCardProps) {
  return (
    <Card className="group relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Button
        variant="ghost"
        className="w-full h-full p-6 flex flex-col items-center justify-center gap-2 hover:bg-accent/50"
        onClick={onCopy}
      >
        <span className="text-4xl mb-2 transform group-hover:scale-110 transition-transform duration-200">
          {emoji}
        </span>
        <div className="text-center">
          <p className="font-medium text-sm">{name}</p>
          <p className="text-xs text-muted-foreground">{category}</p>
        </div>
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <Copy className="w-4 h-4" />
        </div>
      </Button>
    </Card>
  );
}