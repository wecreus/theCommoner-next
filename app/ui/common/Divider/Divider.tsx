import clsx from "clsx";
import "./Divider.scss";

type DividerProps = {
  className?: string;
  children?: React.ReactNode;
};

const Divider = ({ className, children }: DividerProps) => {
  if (!children) {
    return <div className={clsx("divider", className)}></div>;
  }

  return (
    <div className={clsx("divider-group", className)}>
      <div
        className={clsx(
          "divider-group__border",
          "divider-group__border--left"
        )}
      ></div>
      {children}
      <div
        className={clsx(
          "divider-group__border",
          "divider-group__border--right"
        )}
      ></div>
    </div>
  );
};

export default Divider;
