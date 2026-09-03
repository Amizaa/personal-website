export type BookCategory =
  | "computer science"
  | "psychology"
  | "history"
  | "novel"
  | "poetry"
;

export const bookCategoryConfig: Record<
  BookCategory,
  {
    color: string;
    textcolor: string;
    ring: string;
    gradient: string;
  }
> = {
  "computer science": {
    color: "bg-blue-500",
    textcolor: "text-blue-500",
    ring: "hover:ring-blue-500",
    gradient: "from-blue-500"
  },

  psychology: {
    color: "bg-teal-500",
    textcolor: "text-teal-500",
    ring: "hover:ring-teal-500",
    gradient: "from-teal-500"
  },

  history: {
    color: "bg-amber-800",
    textcolor: "text-amber-800",
    ring: "hover:ring-amber-800",
    gradient: "from-amber-800"
  },

  novel: {
    color: "bg-green-500",
    textcolor: "text-green-500",
    ring: "hover:ring-green-500",
    gradient: "from-green-500"
  },

  poetry: {
    color: "bg-orange-500",
    textcolor: "text-orange-500",
    ring: "hover:ring-orange-500",
    gradient: "from-orange-500"
  },
};

export type Rating = 1|2|3|4|5

export const bookRatingConfig : Record<
  Rating,
  {
    icon: string;
    color: string;
  }
> = {
  1 :{
    icon: "bxs:tired",
    color: "bg-red-600"
  },

  2:{
    icon: "bxs:meh",
    color: "bg-gray-500"

  },

  3:{
    icon: "bxs:happy-alt",
    color: "bg-yellow-400"
  },

  4:{
      icon: "bxs:happy-beaming",
      color: "bg-green-500"
  },

  5:{
      icon: "bxs:happy-heart-eyes",
      color: "bg-purple-500"
  }

}

export type Book = {
    title: string,
    author: string,
    cover: string,
    rating: Rating,
    category: BookCategory,
    description: string,
    review?: string
}
