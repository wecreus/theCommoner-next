import Welcome from "@/app/ui/Welcome/Welcome";
// import Gallery from "@/app/ui/Gallery/Gallery";
// import Reviews from "@/app/ui/Reviews/Reviews";
import Loading from "./loading";
import { getReviews } from "@/app/lib/data";
import { GalleryPictures } from "@/app/lib/data";
import dynamic from "next/dynamic";
import "./Home.scss";

const Gallery = dynamic(() => import("@/app/ui/Gallery/Gallery"), {
  loading: () => <Loading />,
});

const Reviews = dynamic(() => import("@/app/ui/Reviews/Reviews"), {
  loading: () => <Loading />,
});

const Map = dynamic(() => import("@/app/ui/Map/Map"), {
  loading: () => <Loading />,
});

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
        <Map />
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
