import Link from "next/link";
import CommonerWhite from "@/public/icons/commonerwhite.svg";
import GradientSVG from "@/app/ui/common/GradientSVG";

const NotFound = () => {

  return (
    <div className="NotFound">
      <span className="NotFound-404">404</span>
      <p>Page not found </p>
      <Link href="/" className="NotFound-link">
        <CommonerWhite className="NotFound-logo" />
        Return Home
      </Link>
      <GradientSVG
        idCSS={"notFoundIconGradient"}
        startColor={"#ffffff"}
        endColor={"#ffffff4d"}
        rotation={"120"}
      />
    </div>
  );
};

export default NotFound;
