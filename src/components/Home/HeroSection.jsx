import React from "react";
import { PageTitle } from "../common/typography.component";
import PrimaryButton from "../common/PrimaryButton";
import SecondaryButton from "../common/SecondaryButton";
import { useTranslation } from "react-i18next";
function HeroSection() {
  const { t } = useTranslation();
  return (
    <div className="hero-section">
      <div className="flex lg:gap-5 gap-0  justify-between items-center">
        <div className="w-full container">
          <div className="flex flex-col gap-1">
            <h6 className="text-secondary uppercase">
              UI/UX {t("Designer")} & {t("Developer")}
            </h6>
            <PageTitle text={t("I'm Himanshu Sharma")} />
            <div className="flex sm:gap-3 gap-1 mt-5 btn">
              <PrimaryButton text={t("About Me")} url="/about" />
              <SecondaryButton url="/contact-me" text={t("Contact Me")} />
            </div>
          </div>
        </div>
        <div className="w-full text-right bg-secondary text-center lg:block hidden">
          <div className="container  items-center justify-center">
            <img
              src="/public/assets/images/hero-img-banner.png"
              alt="avatar"
              className="h-full m-auto"
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
