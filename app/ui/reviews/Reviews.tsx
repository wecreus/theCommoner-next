"use client";
import { useState } from "react";

import { Carousel } from "react-responsive-carousel";
// import { AlienMonster } from "@/common/utils";
// import ReviewSlide from "./ReviewSlide";
// import classNames from "classnames";
// import { GalleryMock } from "@/common/mocks";
// import markdownParser from "@/common/markdownParser/markdownParser";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-circular-progressbar/dist/styles.css";
import { type ReviewType } from "@/app/lib/data.types";
import ReviewSlide from "./ReviewSlide";
import "./Reviews.scss";

// TODO:
// 1. markdown parser
// 2. render reviews in a good way
// 3. mock data for development
const markdownParser = (value: any) => value;

export default function Reviews({ reviews }: { reviews: ReviewType[] }) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  if (!reviews || reviews.length === 0) return <div>No reviews found</div>;

  // const [reviews, setReviews] = useState();
  // const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   const parseReviews = async() => {
  //     const reviews = await getReviews();
  //     console.log(reviews);
  //     return [
  //     ...reviews.map((review) => {
  //       return {
  //         ...review,
  //         description: markdownParser(review.description),
  //         funFact: markdownParser(review.funFact),
  //       };
  //     }),
  //   ]};

  //   // if (import.meta.env.MODE === "development") {
  //   //   setReviews(parseReviews(GalleryMock));
  //   //   return;
  //   // }
  //   parseReviews();
  // }, []);

  return (
    <div className="reviews animate-render">
      <p className="card__content card-reviews__content">
        My <b>100% correct</b> and totally unbiased game reviews{" "}
        <picture>
          <img src={"/icons/AlienMonster.webp"} alt="" className="emoji" />
        </picture>
      </p>
      <Carousel
        showThumbs={false}
        showStatus={false}
        className="carousel-reviews"
        swipeable={false}
        autoPlay
        interval={8000}
        transitionTime={400}
        useKeyboardArrows
        stopOnHover
        selectedItem={currentSlide}
        onChange={(i) => {
          // why doesnt react do it on its own???
          if (i !== currentSlide) {
            setCurrentSlide(i);
          }
        }}
        renderArrowNext={(onClickHandler) => (
          <CustomArrow
            clickHandler={() =>
              currentSlide + 1 === reviews.length
                ? setCurrentSlide(0)
                : onClickHandler()
            }
            direction={"next"}
          />
        )}
        renderArrowPrev={(onClickHandler) => (
          <CustomArrow
            clickHandler={() =>
              currentSlide === 0
                ? setCurrentSlide(reviews.length - 1)
                : onClickHandler()
            }
            direction={"prev"}
          />
        )}
      >
        {reviews?.map((review, i) => (
          <ReviewSlide
            coverUrl={review.coverUrl}
            name={review.name}
            score={review.score}
            description={review.description}
            funFact={review.funFact}
            selected={i === currentSlide}
            key={review.name + i}
          />
        ))}
      </Carousel>
    </div>
  );
}

interface CustomArrowProps {
  clickHandler: () => void;
  direction: "next" | "prev";
}

const CustomArrow = ({ clickHandler, direction }: CustomArrowProps) => {
  return (
    <div
      className={`
        carousel-reviews__arrow
        carousel-reviews__arrow--${direction}`}
      onClick={clickHandler}
    ></div>
  );
};

// export default Reviews;
