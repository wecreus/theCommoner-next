"use server";
import db from "@/app/lib/firestore";
import { collection, getDocs } from "firebase/firestore";
import linkMarkdownParser from "@/app/lib/utils/linkMarkdownParser";
import { type GalleryType, ReviewType } from "./definitions";
import { mockGallery, mockReviews } from "./mocks";

// TODO: add revalidate
// currently after serving a component to the client, component THEN sends a request for the data. 
// so basically make the component already filled with data
export async function getGallery(): Promise<GalleryType[]> {
  return mockGallery;
}

export async function getReviews(): Promise<ReviewType[]> {
  if(process.env.NODE_ENV == "development"){
    return mockReviews;
  }
  
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
