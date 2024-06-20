import Welcome from "@/app/ui/Welcome/Welcome";
import Loading from "./loading";

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

const Page = async () => {
  

  return (
    <>
      <section className="card card-welcome">
        <Welcome />
      </section>
      <section className="card card-reviews">
        <Reviews  />
      </section>
      <section className="card card-gallery">
        <Gallery />
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

export default Page;

export const revalidate = false;