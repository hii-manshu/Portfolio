"use client";
import { Icon } from "@iconify/react";
import React from "react";
import { MainTitle } from "../common/typography.component";
import { useTranslation } from "react-i18next";

function SocialMedia() {
  const { t } = useTranslation();
  return (
    <div className="contact-social">
      <div className="flex gap-2 sm:mb-4 mb-2">
        <MainTitle text={t("Get In")} />
        <MainTitle text={t("Touch")} className="text-secondary font-bold" />
      </div>
      <p className="dark:text-white">
        Get in touch with the right people, I&rsquo;m here to help.
      </p>
      <ul className="flex flex-col gap-8 sm:my-10 my-5">
        <li className="get-in-touch-li">
          <div className="flex gap-5 items-center">
            <a
              href="http://maps.google.com/maps?saddr=Your+Location&daddr=SpireHub+Softwares+Pvt+Ltd.+H-89+H+Block,+Sector+63+Noida,+Uttar+Pradesh+201301"
              target="_blank"
            >
              <div className="h-14 w-14 bg-black rounded-lg text-white pl-3 pt-3 get-in-touch-icon">
                <Icon icon="mdi:location" fontSize={30} />
              </div>
            </a>
            <div className="flex flex-col gap-3 ">
              <p className="text-lg get-in-touch-text dark:text-white">
                Hapur:
              </p>
              <p className="dark:text-white text-[14px]">
                Behind SDA School, Street no. 07, Krishna Vihar, Meerut Road
                Hapur, 245101
              </p>
            </div>
          </div>
        </li>
        <li className="get-in-touch-li">
          <div className="flex gap-5 items-center">
            <a href="mailto:himnshubhardwaj0809@gmail.com" target="_blank">
              <div className="h-14 w-14 bg-black get-in-touch-icon rounded-lg text-white pl-3 pt-3">
                <Icon icon="ic:baseline-mail" fontSize={30} />
              </div>
            </a>
            <div className="flex flex-col gap-3">
              <p className="dark:text-white get-in-touch-text text-lg">Mail:</p>
              <p
                className="dark:text-white text-[14px]"
                style={{ wordBreak: "break-word" }}
              >
                himnshubhardwaj0809@gmail.com
              </p>
            </div>
          </div>
        </li>
        <li className="get-in-touch-li">
          <div className="flex gap-5 items-center">
            <a href="tel:+917310630809" target="_blank">
              <div className="h-14 w-14 bg-black get-in-touch-icon rounded-lg text-white pl-3 pt-3">
                <Icon icon="solar:phone-calling-rounded-bold" fontSize={30} />
              </div>
            </a>
            <div className="flex flex-col gap-3">
              <p className="dark:text-white get-in-touch-text text-lg">Call:</p>
              <p className="dark:text-white text-[14px]">+91 7310630809</p>
            </div>
          </div>
        </li>
        <li className="get-in-touch-li">
          <div className="flex gap-5 items-center">
            <a href="skype:live:.cid.bf7608776920b7bb?chat" target="_blank">
              <div className="h-14 w-14 bg-black get-in-touch-icon rounded-lg text-white pl-3 pt-3">
                <Icon icon="foundation:social-skype" fontSize={30} />
              </div>
            </a>
            <div className="flex flex-col gap-3">
              <p className=" dark:text-white get-in-touch-text text-lg">
                Skype:
              </p>
              <p className="dark:text-white text-[14px]">himanshu.2</p>
            </div>
          </div>
        </li>
        <li className="get-in-touch-li">
          <div className="flex gap-5 items-center">
            <a target="_blank" href="http://wa.me/7310630809">
              <div className="h-14 w-14 bg-black get-in-touch-icon rounded-lg text-white pl-3 pt-3">
                <Icon icon="ic:twotone-whatsapp" fontSize={30} />
              </div>
            </a>
            <div className="flex flex-col gap-3">
              <p className=" dark:text-white get-in-touch-text text-lg">
                Whatsapp:
              </p>
              <p className="dark:text-white text-[14px]">+91 7310630809</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default SocialMedia;
