import { useState, useEffect, memo } from "react";
import { Animate } from "react-move";

const easeCubicOut = (t: number) => {
  return --t * t * t + 1;
};

type ProgressProviderProps = {
  valueStart: number;
  valueEnd: number;
  children: (value: number) => React.ReactElement;
  duration: number;
  delay: number;
};

const ProgressProvider = memo(
  ({ valueStart, valueEnd, children, duration, delay }: ProgressProviderProps) => {
    const [isAnimated, setIsAnimated] = useState(false);
    
    useEffect(() => {
      setIsAnimated((prev) => !prev);
    }, []);

    return (
      <Animate
        show
        start={() => ({
          value: valueStart,
        })}
        update={() => ({
          value: [isAnimated ? valueEnd : valueStart],
          timing: {
            duration: duration,
            ease: easeCubicOut,
            delay: delay
          },
        })}
      >
        {({ value }) => children(value)}
      </Animate>
    );
  }
);

ProgressProvider.displayName = "ProgressProvider";

export default ProgressProvider;
