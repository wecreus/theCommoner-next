import db from "@/app/lib/firestore";
import { collection, getDocs } from "firebase/firestore";
import { unstable_cache as cache } from "next/cache";
import { linkMarkdownParser } from "@/app/lib/helpers";

import { type GalleryType, ReviewType } from "./data.types";

export const GalleryPictures: GalleryType[] = [
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

async function getReviewsImpl(): Promise<ReviewType[]> {
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

export const getReviews = cache(
  /* fetch function */ getReviewsImpl,
  /* unique key     */ ["getReviews"],
  /* options        */ {
    tags: ["getReviews"],
    revalidate: 60 * 60 * 24 /* same as fetch.revalidate */,
  }
);
