import { EmojiGrid } from "@/components/emoji-grid";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-accent/20 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Emoji Search
        </h1>
        <p className="text-muted-foreground">
          Find the perfect emoji for any occasion ✨
        </p>
      </div>
      
      <EmojiGrid />
      <Toaster />
    </main>
  );
}