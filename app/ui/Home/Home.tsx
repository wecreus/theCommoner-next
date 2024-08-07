"use client";
import { useEffect, useMemo, useState } from "react";
import useIntersectionObserver from "@/lib/utils/hooks/useIntersectionObserver";
import MainPageSelector from "@/ui/MainPageSelector";
import Welcome from "@/ui/Home/Welcome/Welcome";
import Gallery from "@/ui/Home/Gallery/Gallery";
import Reviews from "@/ui/Home/Reviews/Reviews";
import Loading from "@/app/loading";
import dynamic from "next/dynamic";
import "./Home.scss";
import type { GalleryType, ReviewType } from "@/lib/definitions";

const MapSection = dynamic(() => import("@/ui/Home/Map/MapSection"), {
  loading: () => <Loading />,
  ssr: false,
});

// TODO: refactor this whole contraption into a separate component that doesn't know about the total children count
const Home = ({
  gallery,
  reviews,
}: {
  gallery: GalleryType[];
  reviews: ReviewType[];
}) => {
  const [pageNumber, setPageNumber] = useState(0);

  const [galleryRef, isGalleryVisible] = useIntersectionObserver();
  const [reviewsRef, isReviewsVisible] = useIntersectionObserver();
  const [mapRef, isMapVisible, wasMapVisible] = useIntersectionObserver();
  const [welcomeRef, isWelcomeVisible] = useIntersectionObserver();

  // order of items in isVisibleList and in refList is important for scrolling
  const isVisibleList = useMemo(
    () => [isWelcomeVisible, isReviewsVisible, isGalleryVisible, isMapVisible],
    [isWelcomeVisible, isReviewsVisible, isGalleryVisible, isMapVisible]
  );

  const refList = [welcomeRef, reviewsRef, galleryRef, mapRef];

  const handlePageChange = (page: number) => {
    refList[page].current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  // should update page number on scroll
  useEffect(() => {
    for (let i = isVisibleList.length - 1; i >= 0; i--) {
      if (isVisibleList[i]) {
        setPageNumber(i);
        return;
      }
    }
  }, [isVisibleList]);

  return (
    <>
      <MainPageSelector
        totalPages={refList.length}
        currentPage={pageNumber}
        handlePageChange={handlePageChange}
      />
      <section className="card card-welcome" ref={welcomeRef}>
        <Welcome onScrollClick={() => handlePageChange(1)} />
      </section>
      <section className="card card-reviews" ref={reviewsRef}>
        <Reviews focused={isReviewsVisible} reviews={reviews} />
      </section>
      <section className="card card-gallery" ref={galleryRef}>
        <Gallery gallery={gallery} />
      </section>
      <section className="card card-map" ref={mapRef}>
        {wasMapVisible && <MapSection isVisible={isMapVisible} />}
      </section>
    </>
  );
};

export default Home;
