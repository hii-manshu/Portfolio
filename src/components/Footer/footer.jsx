"use client";
import React, { useTransition } from "react";
// import { Icon } from "@iconify/react";
import PrimaryButton from "../common/PrimaryButton";
import Link from "next/link";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <div className="bg-[#F0F8FF] dark:bg-black">
      <div className="container">
        <div className="md:py-20 py-10 w-full grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-5 items-start justify-between">
          <div className="flex flex-col gap-3">
            <Link href="/">
              <img
                src="/assets/images/logo.png"
                alt="logo"
                width={260}
                className="rotate-logo"
              />
            </Link>
            <p className="text-[14px] dark:text-white">
              {t(
                "Himanshu Sharma is a well experience web developer who currently work as a Front-End Developer in an IT based firm."
              )}{" "}
              <br />
              {t("I've hand on experience in ReactJs, NextJs Technologies.")}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:mt-5 mt-0">
            <p className="text-2xl font-semibold mb-3 dark:text-secondary">
              {t("Get in Touch")}
            </p>
            <div className="flex gap-x-2 items-start mb-2">
              {/* <Icon
                icon="mdi:location-radius-outline"
                className="cursor-pointer"
                style={{ fontSize: "50px" }}
              /> */}
              <p>
                <span className="font-semibold dark:text-white">
                  {t("India")}:{" "}
                </span>
                <span className="text-[14px] dark:text-white">
                  {t(
                    "Behind SDA School, Street no. 07, Krishna Vihar, Meerut Road Hapur"
                  )}
                  , 245101
                </span>
              </p>
            </div>
            {/* <div className="flex gap-x-2">
              <Icon
                icon="logos:facebook"
                className="cursor-pointer spin-icon"
                style={{ fontSize: "25px" }}
              />

              <Icon
                icon="skill-icons:instagram"
                className="cursor-pointer spin-icon"
                style={{ fontSize: "23px" }}
              />
              <Icon
                icon="skill-icons:linkedin"
                className="cursor-pointer spin-icon"
                style={{ fontSize: "22px" }}
              />
              <Icon
                icon="logos:whatsapp-icon"
                className="cursor-pointer spin-icon"
                style={{ fontSize: "28px" }}
              />
              <Icon
                icon="logos:youtube-icon"
                className="cursor-pointer spin-icon"
                style={{ fontSize: "20px" }}
              />

              <Icon
                icon="logos:google-gmail"
                className="cursor-pointer spin-icon"
                style={{ fontSize: "18px" }}
              />
            </div> */}
          </div>
          <div className="flex flex-col gap-3 sm:mt-5 mt-0">
            <p className="text-2xl font-semibold mb-3 dark:text-secondary">
              {t("Quick Links")}
            </p>
            <Link
              href="/"
              className="hover:text-yellow-600 text-[14px] hover:underline dark:text-white "
            >
              {t("Home")}
            </Link>
            <Link
              href="/blog"
              className="hover:text-yellow-600 text-[14px] hover:underline dark:text-white"
            >
              {t("Blog")}
            </Link>
            <Link
              href="/about"
              className="hover:text-yellow-600 text-[14px] hover:underline dark:text-white"
            >
              {t("About")}
            </Link>
            <Link
              href="/contact-me"
              className="hover:text-yellow-600 text-[14px] hover:underline dark:text-white"
            >
              {t("Contact Me")}
            </Link>
          </div>
          <div className="flex flex-col gap-3 sm:mt-5 mt-0">
            <p className="text-2xl font-semibold mb-3 dark:text-secondary">
              {t("Request a Quote")}
            </p>
            <div className="flex flex-col gap-5">
              <form className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder={t("Your Name")}
                  className="w-full border border-gray-400 p-2 text-sm rounded-md"
                  required
                />
                <input
                  type="email"
                  placeholder={t("Your Email")}
                  className="w-full border border-gray-400 p-2 text-sm rounded-md"
                  required
                />
                <textarea
                  rows={2}
                  cols={38}
                  placeholder={t("Write Your Message Here....")}
                  className="w-full border border-gray-400 p-2 text-sm rounded-md"
                ></textarea>

                <PrimaryButton text={t("Send")} />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-footer bg-[#F0F8FF] dark:bg-black">
        <hr class="h-0.5 border-t-0 bg-gray-300 dark:bg-white/50" />
        <div className="py-5">
          <div className="flex md:flex-row flex-col gap-5 items-center justify-center">
            <div className="text-[14px]">
              &copy; {currentYear} {t("All Rights Reserved")} ||{" "}
              <Link href="/" className="font-[14px] dark:text-secondary">
                himanshusharma.com
              </Link>
            </div>
            {/* <div className="flex flex-wrap gap-3 items-center justify-center">
              <Link href="/" className="text-[14px]">
                {t("Terms and Conditions")} |
              </Link>
              <Link href="/" className="text-[14px]">
                {t("Privacy Policy")} |
              </Link>
              <Link href="/" className="text-[14px]">
                {t("Cookies Policy")}
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
