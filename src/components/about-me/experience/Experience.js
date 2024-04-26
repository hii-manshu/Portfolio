"use client";
import React, { useEffect, useState } from "react";
import {
  MainTitle,
  SubTitle,
  SecondaryTitle,
} from "@/components/common/typography.component";
import { useTranslation } from "react-i18next";
import moment from "moment";

function Experience() {
  const { t } = useTranslation();
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const updateStates = () => {
    const startDate = moment("14-02-2023 10:00:00", "DD-MM-YYYY hh:mm:ss");
    const formatDate = moment(new Date(), "DD-MM-YYYY hh:mm:ss");
    setYears(formatDate.diff(startDate, "years"));
    setMonths(formatDate.diff(startDate, "months"));
    setDays(formatDate.diff(startDate, "days"));
    setHours(formatDate.diff(startDate, "hours"));
    setMinutes(formatDate.diff(startDate, "minutes"));
    setSeconds(formatDate.diff(startDate, "seconds"));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateStates();
    }, 1000);
    return () => clearInterval(interval);
  }, [1000]);

  return (
    <div className="experience text-center">
      <div className="flex w-full">
        <div className="w-full flex flex-col">
          <div className="w-full flex flex-col gap-5 justify-center items-center ml-auto">
            <MainTitle
              className="w-full dark:text-secondary font-semibold"
              text={t("Experience")}
            />
            <div className="flex flex gap-5">
              <div className="work-experience flex flex-col items-center">
                <p className="text-[80px] font-bold -mb-[30px] dark:text-white">
                  {years}
                </p>
                <MainTitle text={t("year")} className="font-medium" />
              </div>
              <div className="flex flex-col items-center">
                <div className="flex gap-2 items-center">
                  <SecondaryTitle text={months} />
                  <h6 className="dark:text-secondary">{t("Month")}</h6>
                </div>
                <div className="flex gap-2 items-center">
                  <SubTitle text={days} />
                  <h6 className="dark:text-secondary">{t("days")}</h6>
                </div>
                <div className="flex gap-2 items-center">
                  <h6>{hours}</h6>
                  <p className="dark:text-secondary">{t("hours")}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <h6>{minutes}</h6>
                  <p className="dark:text-secondary">{t("minutes")}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <h6>{seconds}</h6>
                  <p className="dark:text-secondary">{t("seconds")}</p>
                </div>
              </div>
            </div>
            <div>{t("Spent making websites")}</div>
          </div>
          <hr className="bg-black  dark:bg-white dark:h-0.5 h-1 w-full rounded-xl my-5" />
        </div>
      </div>
    </div>
  );
}

export default Experience;
