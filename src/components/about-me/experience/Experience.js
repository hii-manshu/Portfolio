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

  if (!years) {
    return (
      <div className="flex flex-col gap-2 justify-center items-center">
        <div role="status">
          <svg
            aria-hidden="true"
            className="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-[#F8C401]"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
        <p className="text-black dark:text-white">{t("Loading...")}</p>
      </div>
    );
  }

  return (
    <div className="experience text-center">
      <div className="flex w-full">
        <div className="w-full flex flex-col">
          <div className="w-full flex flex-col gap-5 justify-center items-center ml-auto">
            <MainTitle
              className="w-full dark:text-secondary font-semibold"
              text={t("Experience")}
            />
            <div className="flex flex sm:gap-5 gap-0 px-2">
              <div className="work-experience flex flex-col items-center justify-center gap-10">
                <p className="sm:text-[80px] text-[60px] font-bold sm:-mb-[30px] -mb-[35px] dark:text-white">
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
