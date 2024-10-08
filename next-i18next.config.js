"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
const availableLanguages = ["en", , "hi"];

i18n
  .use(HttpBackend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    lng: "en",
    fallbackLng: "en", // fallback language
    debug: true, // enable debug mode
    whitelist: availableLanguages,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
