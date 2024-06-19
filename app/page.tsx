"use client";

import { useState, lazy, Suspense, useEffect, useMemo } from "react";
import Welcome from "@/app/ui/welcome/Welcome";
// import Gallery from "@/app/ui/gallery/Gallery";
// import MainPageSelector from "./HomeComponents/MainPageSelector";
// import useIntersectionObserver from "@/common/hooks/useIntersectionObserver";
// import LoadingSpinner from "@/common/LoadingSpinner/LoadingSpinner";
import dynamic from "next/dynamic";
import Loading from "./loading";
import "./Home.scss";

// const Reviews = lazy(() => import("./HomeComponents/Reviews/Reviews"));
// const Gallery = lazy(() => import("@/app/ui/gallery/Gallery"));
const Gallery = dynamic(() => import("@/app/ui/gallery/Gallery"), {
  loading: () => <Loading />,
});

const Reviews = dynamic(() => import("@/app/ui/reviews/Reviews"), {
  loading: () => <Loading />,
});
// const Map = lazy(() => import("./HomeComponents/Map/Map"));

const Home = () => {
  const [pageNumber, setPageNumber] = useState(0);

  // const [galleryRef, isGalleryVisible, wasGalleryVisible] =
  //   useIntersectionObserver();
  // const [reviewsRef, isReviewsVisible, wasReviewsVisible] =
  //   useIntersectionObserver();
  // const [mapRef, isMapVisible, wasMapVisible] = useIntersectionObserver();
  // const [welcomeRef, isWelcomeVisible] = useIntersectionObserver();

  // // order of items in isVisibleList and in refList is important for scrolling
  // const isVisibleList = useMemo(
  //   () => [isWelcomeVisible, isReviewsVisible, isGalleryVisible, isMapVisible],
  //   [isWelcomeVisible, isReviewsVisible, isGalleryVisible, isMapVisible]
  // );

  // const refList = [welcomeRef, reviewsRef, galleryRef, mapRef];

  const handlePageChange = (page: number) => {
    // refList[page].current.scrollIntoView({
    //   behavior: "smooth",
    //   block: "center",
    // });
  };

  // // should update page number on scroll
  // useEffect(() => {
  //   for (let i = isVisibleList.length - 1; i >= 0; i--) {
  //     if (isVisibleList[i]) {
  //       setPageNumber(i);
  //       return;
  //     }
  //   }
  // }, [isVisibleList]);

  return (
    <>
      {/* <MainPageSelector
        totalPages={refList.length}
        currentPage={pageNumber}
        handlePageChange={handlePageChange}
      /> */}
      <section className="card card-welcome">
        <Welcome onScrollClick={() => handlePageChange(1)} />
      </section>

      <section className="card card-reviews">
        <Reviews focused={true} />
        {/* Reviews needs to know when user scrolls to it */}
        {/*
        {wasReviewsVisible && (
          <Suspense fallback={<LoadingSpinner />}>
            
            
          </Suspense>
        )} 
        */}
      </section>
      <section className="card card-gallery">
        <Gallery />

        {/* {wasGalleryVisible && (
          <Suspense fallback={<LoadingSpinner />}>
            <Gallery />
          </Suspense>
        )} */}
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
