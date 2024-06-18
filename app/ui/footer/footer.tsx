import "./footer.scss";
import Github from "@/public/icons/github.svg";
import CommonerWhite from "@/public/icons/commonerwhite.svg";

import GradientSVG from "@/app/ui/GradientSVG";

const Footer = () => {
  return (
    <footer className="Footer">
      <GradientSVG
        idCSS={"footerIconGradient"}
        startColor={"#ffffff"}
        endColor={"#ffffff88"}
        rotation={"120"}
      />
      <a
        className="Footer__item"
        target={"_blank"}
        rel="noopener noreferrer"
        href="https://github.com/wecreus/theCommoner"
      >
        {/* Have to explicitly specify the viewBox since Turbopack doesn't support options passed to SVGO loader */}
        <CommonerWhite className="Footer__item--logo" viewBox="0 0 87 77" />
        theCommoner
      </a>
      <a
        className="Footer__item"
        target={"_blank"}
        rel="noopener noreferrer"
        href="https://github.com/wecreus"
      >
        <Github className="Footer__item--logo" viewBox="0 0 95 95" />
        Danylo Riabchuk
      </a>
    </footer>
  );
};

export default Footer;
