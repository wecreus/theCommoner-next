"use client";

import "./header.scss";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";

// import ThemeList from "./ThemeList/ThemeList";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);
  const router = useRouter();
  console.log("update");
  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  const handleHeaderClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === headerRef.current) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={clsx("Header", { "Header-collapse": isScrolled })}
      onClick={handleHeaderClick}
    >
      <picture className="Header-logo" onClick={handleLogoClick}>
        <img src={"/icons/logoTransparent.png"} title="Home" alt="Home" />
      </picture>

      <ul className="Header-sections">
        <li className="Header-sections__section">
          <Link href="/contact">contact</Link>
        </li>
      </ul>
      {/* <ThemeList /> */}
    </header>
  );
};

export default Header;
