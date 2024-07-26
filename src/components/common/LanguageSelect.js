"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

function LanguageSelect() {
  const dropdownRef = useRef(null);
  const { i18n, t } = useTranslation();
  const [openDropDown, setOpenDropDown] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setOpenDropDown(false);
  };

  useEffect(() => {
    // Function to handle click outside dropdown
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropDown(false); // Clicked outside dropdown, close it
      }
    };

    // Add event listener to document
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div
      ref={dropdownRef}
      className="relative cursor-pointer language-div animate__animated animate__backInRight"
      onClick={() => setOpenDropDown(!openDropDown)}
    >
      {i18n.language === "hi" ? (
        <Image
          src="/assets/images/hindi.gif"
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

      {openDropDown && (
        <div className="absolute top-4 left-[-20px] ">
          <div className="bg-transparent h-5 w-full" />
          <div
            className="flex items-center gap-1 bg-white shadow-lg min-w-[100px] py-2 px-2 rounded-t "
            onClick={() => changeLanguage("hi")}
          >
            <Image
              src="/assets/images/hindi.gif"
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
      )}
    </div>
  );
}

export default LanguageSelect;
