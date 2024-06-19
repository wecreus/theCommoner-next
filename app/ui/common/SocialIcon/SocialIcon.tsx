import clsx from "clsx"
import GradientSVG from "@/app/ui/common/GradientSVG";
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

const SocialIcon = ({ className, url, name, Icon, gradient }: SocialIconProps) => {
  return (
    <a
      className={clsx("SocialIcon-container", className)}
      title={name}
      href={url}
      target={"_blank"}
      rel="noopener noreferrer"
    >
      <div className={"SocialIcon"}>
        <div className="SocialIcon-front">
          <svg className="SocialIcon-front__border" viewBox="0 0 80 80">
            <rect rx="25" stroke="url(#borderGradient)"></rect>
          </svg>
          <Icon className="SocialIcon-front__icon" />
        </div>
        <div
          className="SocialIcon-back"
          style={{
            background: gradient,
          }}
        ></div>
        <GradientSVG
          idCSS={"borderGradient"}
          startColor={"#ffffff"}
          endColor={"#ffffff00"}
          rotation={"40"}
        />
      </div>
      <div className="SocialIcon-title">{name}</div>
    </a>
  );
};

export default SocialIcon;
