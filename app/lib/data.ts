"use server";
import db from "@/app/lib/firestore";
import { collection, getDocs } from "firebase/firestore";
import linkMarkdownParser from "@/app/lib/utils/linkMarkdownParser";
import { type GalleryType, ReviewType } from "./data.types";

// TODO: add revalidate
export async function getGallery(): Promise<GalleryType[]> {
  return [
    {
      title: "Best",
      url: "https://live.staticflickr.com/65535/53702745672_829a55ffef_b.jpg",
    },
    {
      title: "Cold",
      url: " https://live.staticflickr.com/65535/53704075105_7d4002f024_b.jpg",
    },
    {
      title: "Fragile",
      url: "https://live.staticflickr.com/65535/53703642421_1f0fbd96e1_b.jpg",
    },
    {
      title: "Stare",
      url: "https://live.staticflickr.com/65535/53704189880_85317dc5b3_b.jpg",
    },
    {
      title: "AT-AT",
      url: "https://live.staticflickr.com/65535/53703858408_ddbbfea3a3_b.jpg",
    },
  ];
}

export async function getReviews(): Promise<ReviewType[]> {
  try {
    const reviewsCollectionRef = collection(db, "reviews");

    const data = await getDocs(reviewsCollectionRef);

    return data.docs.map((doc) => {
      const data = doc.data();

      return {
        ...data,
        id: doc.id,
        funFact: linkMarkdownParser(data.funFact),
        description: linkMarkdownParser(data.description),
      } as ReviewType;
    });
  } catch (error) {
    console.error("Database Error:", error);
    return [];
    // throw new Error("Failed to fetch revenue data.");
  }
}
