import "./Footer.scss";
import Github from "@/public/icons/github.svg";
import CommonerWhite from "@/public/icons/commonerwhite.svg";

import GradientSVG from "@/ui/common/GradientSVG";

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
        href="https://github.com/wecreus/theCommoner-next"
      >
        <CommonerWhite className="Footer__item--logo"  />
        theCommoner
      </a>
      <a
        className="Footer__item"
        target={"_blank"}
        rel="noopener noreferrer"
        href="https://github.com/wecreus"
      >
        <Github className="Footer__item--logo" />
        Danylo Riabchuk
      </a>
    </footer>
  );
};

export default Footer;
