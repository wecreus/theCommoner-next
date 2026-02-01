import {
  useRive,
  useStateMachineInput,
} from "@rive-app/react-canvas";

interface ILogoProps {
  onClick: () => void;
}

const STATE_MACHINE_NAME = "State Machine 1";
const INPUT_NAME = "hover";

// TODO: fix blinking when component loads
const Logo = ({ onClick }: ILogoProps) => {
  const { rive, RiveComponent } = useRive({
    src: "/icons/thecommoner.riv",
    autoplay: true,
    stateMachines: STATE_MACHINE_NAME,
    animations: ["idle"]
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
    <div className="Header-logo" onTouchStart={onClick} onMouseDown={onClick}>
      {!rive && (
        <picture>
          <img src={"/icons/logoTransparent.png"} title="Home" alt="Home" />
        </picture>
      )}
      <RiveComponent
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchEnd={handleMouseLeave}
        onTouchStart={handleMouseEnter}
      />
    </div>
  );
};

export default Logo;
