"use client";

import React from "react";
import { MainTitle } from "@/components/common/typography.component";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  return (
    <div className="about text-center">
      <div className="flex gap-5">
        <div className="flex flex-col">
          <div className="flex flex-col gap-5">
            <MainTitle
              className="font-normal dark:text-secondary font-semibold"
              text={t("Hey, I'm Himanshu Sharma")}
            />
            <div className="flex flex-col gap-2 ">
              <p className="sm:text-[18px] text-[16px] text-black dark:text-white">
                {t("I'm")}&nbsp;
                <span className="text-secondary font-bold">
                  {t("Front-end developer")}
                </span>{" "}
                {t("from Uttar Pradesh,")} {t("India,")}{" "}
                {t("who loves design and the internet sphere.")}
              </p>
              <p className="sm:text-[18px] text-[16px] text-black dark:text-white">
                {t(
                  "Coding has become a perfect union of my two favourite passions and I love seeing the results of my efforts helping the user's experience."
                )}
              </p>
              <p className="sm:text-[18px] text-[16px] text-black dark:text-white">
                {" "}
                {t(
                  "I'm finding unique solutions to complex problems and I'm going it all while making"
                )}
                &nbsp;
                <span className="text-secondary font-bold">
                  {t("the worst puns")}
                </span>{" "}
                {t("you've never heard before.")}
              </p>
            </div>
          </div>
          <hr className="bg-black dark:bg-white h-1 dark:h-0.5 w-full rounded-xl my-5" />
        </div>
      </div>
    </div>
  );
}

export default About;
