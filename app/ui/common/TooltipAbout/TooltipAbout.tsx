import "./TooltipAbout.scss";
import { memo } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

const TooltipAbout = memo(({
  text,
  classname,
}: {
  text: string;
  classname?: string;
}) => {
  return (
    <>
      <ReactTooltip
        id="tooltip-about"
        place="bottom"
        content={text}
        style={{
          zIndex: 3,
          maxWidth: "200px",
          fontSize: "60%",
          fontWeight: "normal",
          fontStyle: "normal",
          borderRadius: "10px",
        }}
      />
      <span className={`TooltipAbout ${classname}`} data-tooltip-id="tooltip-about">
        ?
      </span>
    </>
  );
});

TooltipAbout.displayName = "TooltipAbout";

export default TooltipAbout;
