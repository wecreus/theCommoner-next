import clsx from "clsx";
import GradientSVG from "@/ui/common/GradientSVG";
import "./SocialIcon.scss";

interface SocialIconProps {
  /** extra ClassName */
  className?: string;
  /** URL to the social link */
  url: string;
  /** Name of the social network */
  name: string;
  /** SVG icon that will later be tinted **/
  Icon: React.FC<React.SVGProps<React.SVGElementType>>;
  /** Gradient as you would write it in css e.g.: linear-gradient(135deg, #0066DD 0%, #FF0084 80%) **/
  gradient: string;
}

const SocialIcon = ({
  className,
  url,
  name,
  Icon,
  gradient,
}: SocialIconProps) => {
  return (
    <a
      className={clsx("SocialIcon-container", className)}
      title={name}
      href={url}
      target={"_blank"}
      rel="noopener noreferrer"
    >
      <div
        className={"SocialIcon"}
        style={{
          background: gradient,
        }}
      >
        <svg className="SocialIcon__border" viewBox="0 0 80 80" id="borderIcon">
          <rect rx="23" x="0.5" y="0.5" />
        </svg>
        <Icon className="SocialIcon__icon" />
      </div>
      <div className="SocialIcon-title">{name}</div>
    </a>
  );
};

export default SocialIcon;
