import Welcome from "@/app/ui/welcome/Welcome";
import Gallery from "@/app/ui/gallery/Gallery";
import Reviews from "@/app/ui/reviews/Reviews";
import Loading from "./loading";
import { getReviews } from "@/app/lib/data";
import { GalleryPictures } from "@/app/lib/data";
import "./Home.scss";

// const Gallery = dynamic(() => import("@/app/ui/gallery/Gallery"), {
//   loading: () => <Loading />,
// });

// const Reviews = dynamic(() => import("@/app/ui/reviews/Reviews"), {
//   loading: () => <Loading />,
// });

const Home = async () => {
  const reviews = await getReviews();

  return (
    <>
      <section className="card card-welcome">
        <Welcome />
      </section>

      <section className="card card-reviews">
        <Reviews reviews={reviews} />
      </section>
      <section className="card card-gallery">
        <Gallery gallery={GalleryPictures} />
      </section>
      <section className="card card-map">
        {/* {wasMapVisible && (
          <Suspense fallback={<LoadingSpinner />}>
            <Map />
          </Suspense>
        )} */}
      </section>
    </>
  );
};

export default Home;
