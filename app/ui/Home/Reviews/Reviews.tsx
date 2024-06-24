"use client";
import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import { type ReviewType } from "@/app/lib/definitions";
import ReviewSlide from "./ReviewSlide";
import Loading from "@/app/loading";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-circular-progressbar/dist/styles.css";
import "./Reviews.scss";

export default function Reviews({ focused, reviews }: { focused: boolean, reviews: ReviewType[] }) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  if(!reviews) return <>emmm</>;

  return (
    <div className="reviews animate-render">
      <p className="card__content card-reviews__content">
        My <b>100% correct</b> and totally unbiased game reviews{" "}
        <picture>
          <img src={"/icons/AlienMonster.webp"} alt="" className="emoji" />
        </picture>
      </p>
      {reviews && (
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
              focused={focused}
            />
          ))}
        </Carousel>
      )}
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
