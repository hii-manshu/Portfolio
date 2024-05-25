"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function LanguageSelect() {
  const { i18n, t } = useTranslation();
  const [currentLang, setCurrentLang] = useState("");

  useEffect(() => {}, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="relative cursor-pointer language-div animate__animated animate__backInRight">
      {i18n.language === "hi" ? (
        <Image
          src="/assets/images/indian.webp"
          width={30}
          height={30}
          alt="lng"
        />
      ) : (
        <Image
          src="/assets/images/english.gif"
          width={30}
          height={30}
          alt="lng"
        />
      )}

      <div className="absolute top-4 left-[-20px] language-dropdown">
        <div className="bg-transparent h-5 w-full" />
        <div
          className="flex items-center gap-1 bg-white shadow-lg min-w-[100px] py-2 px-2 rounded-t "
          onClick={() => changeLanguage("hi")}
        >
          <Image
            src="/assets/images/indian.webp"
            width={30}
            height={30}
            alt="lng"
          />
          <small className="text-xs text-black">{t("Hindi")}</small>
        </div>
        <div
          className="flex items-center gap-1 bg-white shadow-lg min-w-[100px] pb-2 px-2 rounded-b"
          onClick={() => changeLanguage("en")}
        >
          <Image
            src="/assets/images/english.gif"
            width={30}
            height={30}
            alt="lng"
          />
          <small className="text-xs text-black">{t("English")}</small>
        </div>
      </div>
    </div>
  );
}

export default LanguageSelect;
