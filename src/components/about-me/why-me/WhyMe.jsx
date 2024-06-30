"use client";
import { Icon } from "@iconify/react";
import React from "react";
import {
  MainTitle,
  SecondaryTitle,
} from "@/components/common/typography.component";
import { useTranslation } from "react-i18next";

function WhyMe() {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col gap-3 items-center ">
        <MainTitle
          text={t("Why Work With Me ?")}
          className="dark:text-secondary font-semibold"
        />
        <div className=" flex sm:flex-row flex-col gap-2 sm:items-center">
          <div className="flex flex-col gap-2 sm:text-right text-left">
            <p className="sm:text-[18px] text-[16px] text-black dark:text-white">
              {t("Analytical")}
            </p>
            <p className="sm:text-[18px] text-[16px] text-black dark:text-white">
              {t("Clear Communicator")}
            </p>

            <p className="sm:text-[18px] text-[16px] text-black dark:text-white">
              {t("Strong interpersonal skills")}
            </p>
          </div>
          <div className="flex flex-col items-center  gap-2 sm:block hidden">
            <Icon icon="charm:tick" fontSize={30} className="text-secondary" />
            <Icon icon="charm:tick" fontSize={30} className="text-secondary" />
            <Icon icon="charm:tick" fontSize={30} className="text-secondary" />
          </div>
          <div className="flex flex-col text-left gap-2">
            <p className="sm:text-[18px] text-[16px] text-black dark:text-white">
              {t("Results driven")}
            </p>
            <p className="sm:text-[18px] text-[16px] text-black dark:text-white">
              {t("Deadline conscious")}
            </p>

            <p className="sm:text-[18px] text-[16px] text-black dark:text-white">
              {t("Big-picture problem solver")}
            </p>
          </div>
        </div>
        <hr className="bg-black dark:bg-white dark:h-0.5 h-1 w-full rounded-xl my-5" />
      </div>
    </>
  );
}

export default WhyMe;
