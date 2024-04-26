"use client";
import React from "react";
import { MainTitle } from "../common/typography.component";
import { useTranslation } from "react-i18next";

const techColor = [
  "#C70039",
  "#FFCC70",
  "#A6F6FF",
  "#E9B824",
  "#AE445A",
  "#D2DE32",
  "#C70039",
  "#2E4374",
  "#FFCC70",
  "#FFCC70",
  "#374259",
  "#A6F6FF",
  "#E9B824",
  "#AE445A",
  "#D2DE32",
];

function TeamUSPCard({ name, img, detail, technologies }) {
  const { t } = useTranslation();
  return (
    <div className="our-team-item flex justify-between  md:gap-10 gap-5">
      <div className="w-full">
        <img
          src={img}
          className="max-h-[500px] object-cover w-full rounded-xl"
        />
      </div>
      <div className="w-full flex flex-col gap-1 md:gap-3">
        <MainTitle text={t(name)} className="text-secondary font-semibold" />
        <p className="dark:text-white">{t(detail)}</p>
        <div className="flex flex-col gap-2">
          <h6 className="mt-5 mb-3 dark:text-secondary">{t("Expertise -")}</h6>
          <div className="flex flex-wrap gap-2">
            {technologies &&
              technologies.map((tech, key) => (
                <div
                  key={key}
                  className={`py-2 px-3 rounded`}
                  style={{ backgroundColor: techColor[key] }}
                >
                  {tech}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamUSPCard;
