import SocialIcon from "@/app/ui/common/SocialIcon/SocialIcon";
import Divider from "@/app/ui/common/Divider/Divider";
import Map from "@/public/icons/map.svg";
import Linkedin from "@/public/icons/linkedin.svg";
import Telegram from "@/public/icons/telegram.svg";
import PDFicon from "@/public/icons/PDF.svg";
import { memo } from "react";
import "./FormSidebar.scss";

const dummyText =
  "Itext ever since the 1500s, when an unknown printer took a galley of type and scram";

const FormSidebar = memo(() => {
  return (
    <div className="Form-sidebar">
      <div className="Form-sidebar__text">
        <span className="Form-sidebar__text--gradient4 gradient-text">
          ADSA
        </span>
        {dummyText.slice(8)}
        <span className="Form-sidebar__text--gradient1 gradient-text">
          bestGrad
        </span>
        {dummyText.slice(14)}
        <picture>
          <img src={"/icons/Fireworks.webp"} alt="" className="emoji" />
        </picture>
        {dummyText.slice(50)}
        <picture>
          <img src={"/icons/AlienMonster.webp"} alt="" className="emoji" />
        </picture>
        {dummyText.slice(40)}
        <picture>
          <img src={"/icons/AlienMonster.webp"} alt="" className="emoji" />
        </picture>
        {dummyText.slice(18)}
        <span className="Form-sidebar__text--gradient2 gradient-text">
          ONEne
        </span>
        {dummyText.slice(8)}
        <picture>
          <img src={"/icons/Fireworks.webp"} alt="" className="emoji" />
        </picture>
        {dummyText.slice(35)}
        <span className="Form-sidebar__text--gradient3 gradient-text">
          fdskjljksjlkad
        </span>
        {dummyText}
        <span className="Form-sidebar__text--gradient4 gradient-text">
          TESTING
        </span>
        {Array(3)
          .fill({})
          .map(() => dummyText)}
      </div>
      <div className="Form-profile">
        <div className="Form-profile__head">
          <div className="Form-profile__name">
            <b>Danylo Riabchuk</b>
            <span className="Form-profile__name--work">Looking for work</span>
          </div>
          <div
            className="Form-profile__picture"
            style={{
              backgroundImage: "url(images/profilepic.webp)",
            }}
          ></div>
        </div>
        <p className="Form-profile__description">
          Front-end developer based in{" "}
          <a
            className={"Form-profile__description--link"}
            href={
              "https://www.google.com/maps/place/Ternopil,+Ternopil+Oblast,+46003/@46.9651469,19.2062124,3.98z"
            }
            target={"_blank"}
            rel="noopener noreferrer"
            title={'Show on the map'}
          >
            Ternopil, Ukraine 
            <Map className="Form-profile__description--link-icon" />
          </a>
        </p>
        <address className="Form-profile__quick-call">
          <a href="mailto:wecreus@gmail.com">wecreus@gmail.com</a>
          <a href="tel:+380953811523">+380953811523</a>
        </address>
        <Divider />
        <div className="Form-profile__links">
          <SocialIcon
            name="LinkedIn"
            gradient={
              "linear-gradient(135deg, #6095ca -20%, #0a66c2 30%, #0a66c2 120%)"
            }
            Icon={Linkedin}
            url={"https://www.linkedin.com/in/danylo-riabchuk-7a6277304/"}
          />
          <SocialIcon
            name="Telegram"
            gradient={
              "linear-gradient(135deg, #24A1DE -20%, #24A1DE 30%, #6dbbe2 120%)"
            }
            Icon={Telegram}
            url={"https://www.t.me/wecreus/"}
          />
          <SocialIcon
            name="Resume"
            gradient={
              "linear-gradient(135deg, #fcaf45 -20%, #e16030 30%, #f50101 120%)"
            }
            Icon={PDFicon}
            url={
              "https://drive.google.com/file/d/1dcL0Dg9i_EbDwJxGY92e9R3bQtsdWOFa/view"
            }
          />
        </div>
      </div>
    </div>
  );
});

FormSidebar.displayName = "FormSidebar";

export default FormSidebar;
