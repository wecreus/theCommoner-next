import Home from "@/app/ui/Home/Home";
import { fetchGallery, fetchReviews } from "./lib/data";

const Page = async () => {
  const gallery = await fetchGallery();
  const reviews = await fetchReviews();
  return (
    <Home gallery={gallery} reviews={reviews}/>
  )
};

export default Page;