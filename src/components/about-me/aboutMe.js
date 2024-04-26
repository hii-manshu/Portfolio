"use client";
import React from "react";
import { PageTitle } from "../common/typography.component";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
function Aboutme() {
  const { t } = useTranslation();
  const location = null;
  const style = {
    backgroundImage: `linear-gradient(to right,
              rgba(0,0,0, 0.6),
              rgba(0,0,0, 0.6)), url(/assets/images/about-me-bg.png)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: 300,
    width: "100%",
    height: "90vh",
    objectFit: "cover",
  };
  return (
    <div className="about-me">
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>About || Himanshu Sharma</title>
        <link rel="canonical" href="/about-me/http://mysite.com/example" />
        <meta
          name="description"
          content="A well experienced web developer"
        ></meta>
      </Helmet> */}
      <div
        className="about-me-hero w-full flex flex-col justify-center relative z-0"
        style={style}
      >
        <div className="container">
          <PageTitle text={t("About Me")} className="text-white" />
          <p className="text-white">Lorem Ipsum</p>
        </div>
        <div className="profile-pic md:hidden block">
          <div className="about-me-img absolute top-[50%] left-[50%]">
            <img
              src="/assets/images/about-me.jpeg"
              className="h-full w-full rounded-full max-h-[200px] max-w-[200px] "
            />
          </div>
        </div>
      </div>
      <div className="md:pt-10 pt-28 pb-10 px-5">
        <div className="grid md:grid-cols-8 grid-cols-1 lg:gap-5 md:gap-2 gap-5 text-center">
          <div className="md:col-span-2 text-center w-full">
            <ul className="flex md::flex-col flex-row flex-wrap md::gap-2 justify-between border md::border-1 border-gray-500 rounded-md p-2 items-center text-left">
              <div className="m-auto md:block hidden">
                <img
                  src="/assets/images/about-me.jpeg"
                  className="h-full w-full rounded-full max-h-[150px] max-w-[150px] "
                />
              </div>
              <hr className="w-full h-0.5 bg-gray-200 my-2" />
              <Link
                href="/about-me/"
                // className="about-link py-2 w-full text-center sm:border-b-2 px-2"
                className={`about-link py-2 w-full text-center border-b-2 px-2 ${
                  location?.pathname === "/about" ? "about-nav-link" : ""
                } flex gap-2 items-center justify-center`}
              >
                <Icon icon="mdi:about" fontSize={25} />
                <span className="font-semibold">{t("About")}</span>
              </Link>
              <Link
                href="/about-me/qualification"
                className={`about-link py-2 w-full  border-b-2 px-2 ${
                  location?.pathname === "/about/qualification"
                    ? "about-nav-link"
                    : ""
                } flex gap-2 items-center justify-center`}
              >
                <Icon icon="fluent-mdl2:education" fontSize={25} />
                <span className="font-semibold">{t("Qualification")}</span>
              </Link>
              <Link
                href="/about-me/skills"
                className={`about-link py-2 w-full text-left border-b-2 px-2 ${
                  location?.pathname === "/about/skills" ? "about-nav-link" : ""
                } flex gap-2 items-center justify-center`}
              >
                <Icon icon="game-icons:skills" fontSize={25} />
                <span className="font-semibold">{t("Skills")}</span>
              </Link>
              <Link
                href="/about-me/experience"
                className={`about-link py-2 w-full text-left border-b-2 px-2 ${
                  location?.pathname === "/about/experience"
                    ? "about-nav-link"
                    : ""
                } flex gap-2 items-center justify-center`}
              >
                <Icon icon="game-icons:gift-of-knowledge" fontSize={25} />
                <span className="font-semibold">{t("Experience")}</span>
              </Link>
              <Link
                href="/about-me/why-me"
                className={`about-link py-2 w-full text-center border-b-2 px-2 ${
                  location?.pathname === "/about/why-me" ? "about-nav-link" : ""
                } flex gap-2 items-center justify-center`}
              >
                <Icon icon="pepicons-pencil:question" fontSize={25} />
                <span className="font-semibold">{t("Why Me")}</span>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
