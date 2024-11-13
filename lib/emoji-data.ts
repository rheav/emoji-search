interface EmojiData {
  emoji: string;
  name: string;
  keywords: string[];
  category: string;
}

export const emojiData: EmojiData[] = [
  // Smileys & Emotion
  {
    emoji: "😀",
    name: "Grinning Face",
    keywords: ["smile", "happy", "joy", "grin", "cheerful"],
    category: "Smileys & Emotion"
  },
  {
    emoji: "😃",
    name: "Grinning Face with Big Eyes",
    keywords: ["happy", "joy", "smile", "funny", "laugh"],
    category: "Smileys & Emotion"
  },
  {
    emoji: "😄",
    name: "Grinning Face with Smiling Eyes",
    keywords: ["happy", "joy", "laugh", "pleased", "smile"],
    category: "Smileys & Emotion"
  },
  {
    emoji: "😁",
    name: "Beaming Face with Smiling Eyes",
    keywords: ["happy", "smile", "joy", "proud", "grin"],
    category: "Smileys & Emotion"
  },
  {
    emoji: "😅",
    name: "Grinning Face with Sweat",
    keywords: ["hot", "happy", "laugh", "sweat", "relief"],
    category: "Smileys & Emotion"
  },
  {
    emoji: "😂",
    name: "Face with Tears of Joy",
    keywords: ["laugh", "joy", "crying", "tears", "lol", "haha"],
    category: "Smileys & Emotion"
  },
  {
    emoji: "🤣",
    name: "Rolling on the Floor Laughing",
    keywords: ["laugh", "lol", "rofl", "haha", "rolling"],
    category: "Smileys & Emotion"
  },
  // Love & Hearts
  {
    emoji: "❤️",
    name: "Red Heart",
    keywords: ["love", "heart", "romance", "valentine"],
    category: "Love & Hearts"
  },
  {
    emoji: "🧡",
    name: "Orange Heart",
    keywords: ["love", "like", "affection", "orange"],
    category: "Love & Hearts"
  },
  {
    emoji: "💛",
    name: "Yellow Heart",
    keywords: ["love", "like", "affection", "yellow"],
    category: "Love & Hearts"
  },
  {
    emoji: "💚",
    name: "Green Heart",
    keywords: ["love", "like", "affection", "green"],
    category: "Love & Hearts"
  },
  {
    emoji: "💙",
    name: "Blue Heart",
    keywords: ["love", "like", "affection", "blue"],
    category: "Love & Hearts"
  },
  // Nature & Animals
  {
    emoji: "🌸",
    name: "Cherry Blossom",
    keywords: ["flower", "spring", "nature", "plant"],
    category: "Nature"
  },
  {
    emoji: "🌺",
    name: "Hibiscus",
    keywords: ["flower", "plant", "tropical"],
    category: "Nature"
  },
  {
    emoji: "🐶",
    name: "Dog Face",
    keywords: ["dog", "pet", "animal", "friend", "faithful"],
    category: "Animals"
  },
  {
    emoji: "🐱",
    name: "Cat Face",
    keywords: ["cat", "pet", "animal", "meow"],
    category: "Animals"
  },
  // Food & Drink
  {
    emoji: "🍕",
    name: "Pizza",
    keywords: ["food", "italian", "cheese", "slice"],
    category: "Food & Drink"
  },
  {
    emoji: "🍔",
    name: "Hamburger",
    keywords: ["food", "burger", "fast food", "beef"],
    category: "Food & Drink"
  },
  {
    emoji: "🍟",
    name: "French Fries",
    keywords: ["food", "fries", "potato", "fast food"],
    category: "Food & Drink"
  },
  {
    emoji: "🍺",
    name: "Beer Mug",
    keywords: ["drink", "beer", "alcohol", "celebration"],
    category: "Food & Drink"
  },
  // Activities
  {
    emoji: "⚽",
    name: "Soccer Ball",
    keywords: ["sports", "football", "soccer", "game"],
    category: "Activities"
  },
  {
    emoji: "🏀",
    name: "Basketball",
    keywords: ["sports", "basketball", "game", "ball"],
    category: "Activities"
  },
  // Travel & Places
  {
    emoji: "✈️",
    name: "Airplane",
    keywords: ["flight", "travel", "trip", "vacation"],
    category: "Travel & Places"
  },
  {
    emoji: "🚗",
    name: "Car",
    keywords: ["vehicle", "transportation", "drive"],
    category: "Travel & Places"
  },
  // Objects
  {
    emoji: "💻",
    name: "Laptop",
    keywords: ["computer", "technology", "work", "device"],
    category: "Objects"
  },
  {
    emoji: "📱",
    name: "Mobile Phone",
    keywords: ["phone", "technology", "communication"],
    category: "Objects"
  },
  {
    emoji: "⌚",
    name: "Watch",
    keywords: ["time", "accessory", "clock"],
    category: "Objects"
  },
  // Symbols
  {
    emoji: "✨",
    name: "Sparkles",
    keywords: ["stars", "shiny", "clean", "special"],
    category: "Symbols"
  },
  {
    emoji: "🔥",
    name: "Fire",
    keywords: ["hot", "flame", "trending", "lit", "burn"],
    category: "Symbols"
  },
  {
    emoji: "⭐",
    name: "Star",
    keywords: ["star", "favorite", "rating"],
    category: "Symbols"
  },
  {
    emoji: "💯",
    name: "Hundred Points",
    keywords: ["score", "perfect", "hundred", "100"],
    category: "Symbols"
  },
  // Flags
  {
    emoji: "🏳️",
    name: "White Flag",
    keywords: ["flag", "surrender", "peace"],
    category: "Flags"
  },
  {
    emoji: "🏳️‍🌈",
    name: "Rainbow Flag",
    keywords: ["pride", "rainbow", "lgbtq", "love"],
    category: "Flags"
  },
  // Hands & People
  {
    emoji: "👍",
    name: "Thumbs Up",
    keywords: ["approve", "ok", "good", "like"],
    category: "People"
  },
  {
    emoji: "👋",
    name: "Waving Hand",
    keywords: ["hello", "goodbye", "wave", "greet"],
    category: "People"
  },
  {
    emoji: "🤝",
    name: "Handshake",
    keywords: ["agreement", "deal", "meeting", "shake"],
    category: "People"
  },
  // Weather
  {
    emoji: "☀️",
    name: "Sun",
    keywords: ["sunny", "weather", "bright", "hot"],
    category: "Weather"
  },
  {
    emoji: "🌙",
    name: "Crescent Moon",
    keywords: ["night", "sleep", "evening", "dark"],
    category: "Weather"
  },
  {
    emoji: "⛈️",
    name: "Cloud with Lightning and Rain",
    keywords: ["thunder", "storm", "weather", "rain"],
    category: "Weather"
  },
  // More Smileys
  {
    emoji: "🥺",
    name: "Pleading Face",
    keywords: ["puppy eyes", "cute", "please", "beg"],
    category: "Smileys & Emotion"
  },
  {
    emoji: "😎",
    name: "Smiling Face with Sunglasses",
    keywords: ["cool", "sun", "swagger", "confident"],
    category: "Smileys & Emotion"
  },
  {
    emoji: "🤔",
    name: "Thinking Face",
    keywords: ["think", "wonder", "ponder", "hmm"],
    category: "Smileys & Emotion"
  }
];

export function searchEmojis(query: string): EmojiData[] {
  const lowercaseQuery = query.toLowerCase();
  return emojiData.filter((emoji) => {
    return (
      emoji.name.toLowerCase().includes(lowercaseQuery) ||
      emoji.keywords.some((keyword) => keyword.toLowerCase().includes(lowercaseQuery)) ||
      emoji.category.toLowerCase().includes(lowercaseQuery)
    );
  });
}