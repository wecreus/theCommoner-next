"use client";

import CoolArrow from "@/public/icons/arrow.svg";
import { memo } from "react";
import { ReactTyped, type Typed } from "react-typed";

import { Inter } from 'next/font/google'
import clsx from "clsx";
 
const inter = Inter({ subsets: ['latin'] });

const Welcome = memo(({ onScrollClick }: { onScrollClick: () => void }) => {
  return (
    <>
      <p className="card__content welcome">
        <span className={clsx("commoner", inter.className)}>
          <ReactTyped
            strings={["THE", "theCommoner"]}
            typeSpeed={100}
            backSpeed={20}
            className="react-typed gradient-text"
            onComplete={(instance: Typed) => {
              instance.cursor.className = "hidden";
            }}
          />
          <span className="commoner__background">theCOMMoner</span>
        </span>
        is my humble library of thoughts{" "}
        <picture>
          <img src={"/icons/Thoughts.gif"} alt="" className="emoji" />
        </picture>
        , game reviews{" "}
        <picture>
          <img src={"/icons/AlienMonster.webp"} alt="" className="emoji" />
        </picture>
        , and photos{" "}
        <picture>
          <img src={"/icons/Fireworks.webp"} alt="" className="emoji" />
        </picture>
        . This project provides me with an opportunity to sharpen my skills as a web
        developer{" "}
        <picture>
          <img src={"/icons/Technologist.webp"} alt="" className="emoji" />
        </picture>
      </p>
      <div className="card__arrow" onClick={onScrollClick}>
        <CoolArrow className="card__arrow-img" />
      </div>
    </>
  );
});

Welcome.displayName = "Welcome";

export default Welcome;
