"use client";
import React from "react";
import { MainTitle } from "@/components/common/typography.component";
import { useTranslation } from "react-i18next";

function Qualification() {
  const { t } = useTranslation();
  return (
    <div className="text-center">
      <div className="flex w-full">
        <div className="w-full flex flex-col">
          <div className="w-full flex flex-col gap-5 justify-center items-center ml-auto">
            <MainTitle
              className="w-full dark:text-secondary font-semibold"
              text={t("Education")}
            />
            <div className="w-full grid sm:grid-cols-2 grid-cols-1  gap-x-5 sm:gap-y-10 gap-y-5 justify-between">
              <div className="flex flex-col justify-between gap-2">
                <h5>{t("Master of Computer Application")}</h5>
                <p className="text-black dark:text-white">
                  {t("Sir Chhotu Ram Institute Of Engineering and Technology")}
                </p>
                <p className="text-black dark:text-secondary">(2020-22)</p>
              </div>
              <div className="flex flex-col  gap-2">
                <h5>{t("Bachelor of Science")}</h5>
                <p className="text-black dark:text-white">
                  {t("Meerut College")}
                </p>
                <p className="text-black dark:text-secondary">(2017-20)</p>
              </div>
              <div className="flex flex-col justify-between gap-2">
                <h5>{t("Higher Secondary Certificate")}</h5>
                <p className="text-black dark:text-white">
                  {t("B.R International Senior Secondary School")}
                </p>
                <p className="text-black dark:text-secondary">(2016-17)</p>
              </div>
              <div className="flex flex-col justify-between gap-2">
                <h5>{t("Secondary School Certificate")}</h5>
                <p className="text-black dark:text-white">
                  {t("B.R International Senior Secondary School")}
                </p>
                <p className="text-black dark:text-secondary">(2014-15)</p>
              </div>
            </div>
          </div>
          <hr className="bg-black dark:bg-white h-1 dark:h-0.5 w-full rounded-xl my-5" />
        </div>
      </div>
    </div>
  );
}

export default Qualification;
