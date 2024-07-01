import Home from "@/ui/Home/Home";
import { fetchGallery, fetchReviews } from "./lib/data";

export const revalidate = 3600;

const Page = async () => {
  const gallery = await fetchGallery();
  const reviews = await fetchReviews();
  return (
    <Home gallery={gallery} reviews={reviews}/>
  )
};

export default Page;