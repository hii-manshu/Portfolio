import React from "react";
import { MainTitle, PageTitle } from "../common/typography.component";
import PrimaryButton from "../common/PrimaryButton";
import SecondaryButton from "../common/SecondaryButton";
import { useTranslation } from "react-i18next";
import { Lamp } from "./lamp";
import { TypewriterEffectSmoot } from "./type-writer";
function HeroSection() {
  const { t } = useTranslation();
  return (
    <div className="hero-section">
      <div className="flex  gap-0  justify-between items-center">
        {/* <Lamp> */}
        <div className="w-full container">
          <div className="flex flex-col gap-3">
            <h6 className="text-secondary dark:text-white uppercase animate__animated animate__backInDown">
              UI/UX {t("Designer")} & {t("Developer")}
            </h6>
            {/* <MainTitle
              text={t("I'm Himanshu Sharma")}
              className="font-bold animate__animated animate__backInLeft"
            /> */}
            <TypewriterEffectSmoot />
            <div className="flex sm:gap-3 gap-3 mt-5 btn animate__animated animate__backInUp">
              <PrimaryButton text={t("About Me")} url="/about-me" />
              <SecondaryButton url="/contact-me" text={t("Contact Me")} />
            </div>
          </div>
        </div>
        {/* </Lamp> */}
        <div className="w-full h-full text-right bg-secondary text-center lg:block hidden animate__animated animate__fadeInTopLeft">
          <div className="container  items-center justify-center">
            <img
              src="/assets/images/hero-img-banner.png"
              alt="avatar"
              className="h-full m-auto animate__animated animate__fadeInBottomRight"
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
