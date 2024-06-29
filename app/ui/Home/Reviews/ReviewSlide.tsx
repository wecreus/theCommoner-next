import { memo } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import ProgressProvider from "@/ui/common/ProgressbarProvider";
import { type ReviewType } from "@/lib/definitions";
import Divider from "@/ui/common/Divider/Divider";

type ReviewSlideProps = Omit<ReviewType, "id"> & { selected: boolean, focused: boolean };

const ReviewSlide = memo(
  ({
    name,
    score,
    coverUrl,
    description,
    funFact,
    selected,
    focused
  }: ReviewSlideProps) => {
    return (
      <div className="review-slide">
        <div
          className="review-slide__cover"
          style={{
            backgroundImage: "url(" + coverUrl + ")",
          }}
          title={name}
          aria-label={name}
        />

        <div className="review-slide__head">
          <span className="review-slide__title">{name}</span>
          <div className="review-slide__score-container" title="Rating">
            <span className="review-slide__score--title">Rating:</span>
            <ProgressProvider
              valueStart={1}
              valueEnd={Number(focused && selected ? score : 0)}
              duration={1500}
              delay={150}
            >
              {(CircleValue) => (
                <CircularProgressbar
                  value={Math.round(CircleValue)}
                  minValue={0}
                  maxValue={100}
                  text={String(Math.round(CircleValue))}
                  className={"review-slide__score"}
                  background={true}
                  backgroundPadding={10}
                  styles={buildStyles({
                    rotation: 0.26,
                    trailColor: "transparent",
                    backgroundColor: "transparent",
                    pathTransition: "none",
                  })}
                />
              )}
            </ProgressProvider>
          </div>
        </div>
        <div className="review-slide__content">
          <Divider className={"review-slide__divider"}>
            <div className="review-slide__divider--content">REVIEW</div>
          </Divider>
          <p
            className="review-slide__description"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
          {!!funFact && (
            <>
              <Divider className={"review-slide__divider"}>
                <div className="review-slide__divider--content">
                  FUN FACT
                  <i
                    style={{
                      backgroundImage: `url(icons/penoriginal.svg)`,
                    }}
                    className="review-slide__divider--icon"
                  />
                </div>
              </Divider>
              <div
                className="review-slide__fun"
                dangerouslySetInnerHTML={{ __html: funFact }}
              ></div>
            </>
          )}
        </div>
      </div>
    );
  }
);

ReviewSlide.displayName = "ReviewSlide";

export default ReviewSlide;
