"use client";

import "./Header.scss";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";

import ThemeSwitcher from "@/app/ui/ThemeSwitcher";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);
  const router = useRouter();

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
        <Link href="/contact" className="Header-sections__section">
          <li >contact</li>
        </Link>
      </ul>
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
