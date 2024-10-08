'use client';

import "./Gallery.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { memo } from "react";
import { Carousel } from "react-responsive-carousel";
import type { GalleryType } from "@/lib/definitions";
import SocialIcon from "@/ui/common/SocialIcon/SocialIcon";
import Flickr from "@/public/icons/flickr.svg";
import Instagram from "@/public/icons/instagram.svg";
import Xcom from "@/public/icons/Xcom.svg";

const Gallery = memo(({ gallery }: { gallery: GalleryType[] }) => {

  if (!gallery) return <></>;

  return (
    <div className="card__content card__gallery animate-render">
      <Carousel
        emulateTouch
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        className="carousel-gallery"
        onSwipeMove={(e) => {
          e.stopPropagation();
          return true;
        }}
        autoPlay={true}
        infiniteLoop={true}
      >
        {gallery.map((picture, i) => (
          <div
            style={{
              backgroundImage: `url(${picture.url})`,
            }}
            title={picture.title}
            aria-label={picture.title}
            className="carousel-gallery__image"
            key={`${picture.title}${i}`}
          >
            <span style={{ userSelect: "none" }}>{picture.title}</span>
          </div>
        ))}
      </Carousel>
      <p className="card__gallery--text">
        Here are a couple of my photos way back from <b>2016</b>. While Im not
        making money from taking pictures anymore, I still enjoy it very much.
      </p>
      <div className="card__gallery--links">
        <span className="card__gallery--text">
          Find more of my photos on socials:
        </span>
        <SocialIcon
          name="Instagram"
          gradient={
            "linear-gradient(135deg, #405DE6 -20%, #E1306C 30%, #FCAF45 120%)"
          }
          Icon={Instagram}
          url={"https://www.instagram.com/wecreus/"}
        />
        <SocialIcon
          name="Flickr"
          gradient={"linear-gradient(135deg, #0066DD 0%, #FF0084 100%)"}
          Icon={Flickr}
          url={"https://www.flickr.com/photos/166330239@N03/"}
        />
        <SocialIcon
          name="X"
          gradient={"linear-gradient(35deg, #000 0%, #313131 150%)"}
          Icon={Xcom}
          url={"https://www.x.com/wecreus"}
        />
      </div>
    </div>
  );
});

Gallery.displayName = "Gallery";

export default Gallery;
