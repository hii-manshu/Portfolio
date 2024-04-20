"use client";

import { ModeToggle } from "@/components/mode-toggler";
import React from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../../next-i18next.config";
import LanguageSwitcher from "@/components/language-switcher";
import HomePage from "@/view/home-page/HomePage";

function Index() {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <div className="bg-red-600 text-white dark:text-black dark:bg-cyan-600">
          {" "}
          Himanshu sharma
        </div>
        <ModeToggle />
        <LanguageSwitcher />
        <HomePage />
      </I18nextProvider>
    </>
  );
}

export default Index;
