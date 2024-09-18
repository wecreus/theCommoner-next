import {
  useRive,
  Layout,
  Fit,
  Alignment,
  useStateMachineInput,
} from "@rive-app/react-canvas";

interface ILogoProps {
  onClick: () => void;
}

const STATE_MACHINE_NAME = "State Machine 1";
const INPUT_NAME = "hover";

const Logo = ({ onClick }: ILogoProps) => {
  const { rive, RiveComponent } = useRive({
    src: "/icons/pen animation.riv",
    autoplay: true,
    stateMachines: STATE_MACHINE_NAME,
  });

  const onHoverInput = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    INPUT_NAME
  );

  const handleMouseEnter = () => {
    if (rive && onHoverInput) {
      onHoverInput.value = true;
    }
  };

  const handleMouseLeave = () => {
    if (rive && onHoverInput) {
      onHoverInput.value = false;
    }
  };

  return (
    <div className="Header-logo" onClick={onClick}>
      {!rive && (
        <picture>
          <img src={"/icons/logoTransparent.png"} title="Home" alt="Home" />
        </picture>
      )}
      <RiveComponent
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

export default Logo;
