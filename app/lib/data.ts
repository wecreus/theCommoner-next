import db from "@/app/lib/firestore";
import { collection, getDocs } from "firebase/firestore";
import linkMarkdownParser from "@/app/lib/utils/linkMarkdownParser";
import { type GalleryType, ReviewType } from "./definitions";
import { mockGallery, mockReviews } from "./mocks";

export async function fetchGallery(): Promise<GalleryType[]> {
  if(process.env.NODE_ENV == "development"){
    return mockGallery;
  }

  try {
    const galleryCollectionRef = collection(db, "gallery");

    const data = await getDocs(galleryCollectionRef);

    return data.docs.map((doc) => {
      const data = doc.data();

      return {
        ...data,
        id: doc.id,
      } as GalleryType;
    });
  } catch (error) {
    console.error("Database Error: ", error);
    return [];
    // throw new Error("");
  }
}

export async function fetchReviews(): Promise<ReviewType[]> {
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
    console.error("Database Error: ", error);
    return [];
    // throw new Error("");
  }
}