import { Html } from "@react-three/drei";
import { useRouter } from "next/navigation";
import { updateIsInRange } from "@/lib/store/globe/globeSlice";
import { useAppSelector, useAppDispatch } from "@/lib/store/hooks";
import { HTML_POPUP } from "@/lib/utils/enums/globe";
import { useRef } from "react";

const PopupHTML = ({ handleClick }: { handleClick: () => void }) => {
  const router = useRouter();
  const outsideRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const isInRange = useAppSelector((store) => store.globe.isInRange);

  const redirectHandler = () => {
    router.push("/contact", { scroll: false });
    dispatch(
      updateIsInRange({
        isInRange: false,
      })
    );
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === outsideRef.current) {
      handleClick();
    }
  };

  return (
    <Html
      position={[
        HTML_POPUP.POSITION_X,
        HTML_POPUP.POSITION_Y,
        HTML_POPUP.POSITION_Z,
      ]}
      zIndexRange={[0, 1]}
      style={{
        opacity: isInRange ? 1 : 0,
        transform: "translate(0%, -50%)",
      }}
      className="three-embedded"
    >
      <div
        className="three-embedded__content"
        onClick={handleOutsideClick}
        ref={outsideRef}
      >
        <span style={{ pointerEvents: "none" }}>
          {HTML_POPUP.LABEL}
          <b>{HTML_POPUP.CITY}</b>
        </span>
        <span
          className="three-embedded__content--link"
          onClick={redirectHandler}
        >
          contact me
        </span>
      </div>
    </Html>
  );
};

export default PopupHTML;
