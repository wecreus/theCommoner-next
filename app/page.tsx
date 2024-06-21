"use client";
import { useEffect, useMemo, useState } from "react";
import useIntersectionObserver from "@/app/lib/utils/hooks/useIntersectionObserver";
import MainPageSelector from "@/app/ui/MainPageSelector";
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
  ssr: false,
});

// TODO: bug in build with how Reviews and Gallery uses server actions
const Page = () => {
  const [pageNumber, setPageNumber] = useState(0);

  const [galleryRef, isGalleryVisible, wasGalleryVisible] =
    useIntersectionObserver();
  const [reviewsRef, isReviewsVisible, wasReviewsVisible] =
    useIntersectionObserver();
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
        {wasReviewsVisible && <Reviews focused={isReviewsVisible}/>}
      </section>
      <section className="card card-gallery" ref={galleryRef}>
        {wasGalleryVisible && <Gallery />}
      </section>
      <section className="card card-map" ref={mapRef}>
        {wasMapVisible && <Map />}
      </section>
    </>
  );
};

export default Page;
