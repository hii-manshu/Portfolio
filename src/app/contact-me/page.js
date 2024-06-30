"use client";
import React from "react";
import { PageTitle } from "@/components/common/typography.component";
import { useTranslation } from "react-i18next";
import SocialMedia from "@/components/contact-me/SocialMedia";
import ContactUsForm from "@/components/contact-me/contactMeForm";
import LocationMap from "@/components/contact-me/LocationMap";

function ContactMe() {
  const { t } = useTranslation();
  const style = {
    backgroundImage: `linear-gradient(to right,
              rgba(0,0,0, 0.8),
              rgba(0,0,0, 0.8)), url(/assets/images/about-bg.png)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "90vh",
    objectFit: "cover",
  };
  return (
    <div className="about-me">
      <div className="w-full flex flex-col justify-center" style={style}>
        <div className=" container flex flex-col gap-1">
          <PageTitle
            text={t("Contact Me")}
            className="text-white dark:text-secondary font-semibold"
          />
          <p className="dark:text-white text-secondary">
            {t(
              "Want to contact with me ? I'd love to hear from you. Here's how you can reach me..."
            )}
          </p>
        </div>
      </div>
      <div className="container ">
        <div className=" pt-10 grid md:grid-cols-2 grid-cols-1 items-start justify-between md:gap-10 gap-5">
          <div className="w-full">
            <SocialMedia />
          </div>
          <div className="w-full">
            <ContactUsForm />
          </div>
        </div>
      </div>
      <div>{/* <LocationMap /> */}</div>
    </div>
  );
}

export default ContactMe;
