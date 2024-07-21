"use client";
import React from "react";
import PrimaryButton from "../common/PrimaryButton";
import { motion } from "framer-motion";
import Image from "next/image";
import SecondaryButton from "../common/SecondaryButton";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

function NewHeroSection() {
  const { t } = useTranslation();
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col md:flex-row items-center justify-between md:pt-10 pt-5 md:gap-10 gap-0">
          {/* TEXT  */}
          <div className="text-center md:text-left order-2 md:order-none">
            <span className="text-xl">{t("Front End Developer")}</span>
            <div className="flex flex-col ">
              <h1 className="font-semibold ">{t("Hello I'm")}</h1>
              <h1 className="font-semibold text-secondary  leading-none">
                {t("Himanshu Sharma")}
              </h1>
            </div>
            <p className="max-w-[500px] mb-9 mt-2 text-black dark:text-white/80 ">
              {t(
                "I combine design aesthetics with technical proficiency to deliver high-quality web experiences. Explore my portfolio and let’s start building!"
              )}
            </p>
            {/* BUTTON  */}
            <div className="flex items-center gap-2 md:justify-start justify-center">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1aXIOmbDi4lFsIgrKBuF_PiECVt1Twl9x/view?usp=drivesdk"
                className="bg-transparent py-[3px] px-[15px] hover:bg-secondary hover:text-white text-secondary flex items-center gap-2 justify-center whitespace-nowrap border border-secondary rounded-full transition duration-500"
              >
                <span>{t("Resume")}</span>
                <Icon
                  icon="material-symbols-light:download-for-offline-outline"
                  fontSize={25}
                />
              </a>
              {/* <SecondaryButton text="Resume">
                <Icon icon="material-symbols-light:download-for-offline-outline" />
              </SecondaryButton> */}
              <PrimaryButton text={t("Contact Me")} url="/contact-me" />
            </div>
          </div>
          {/* PHOTO  */}
          <div className="order-1 md:order-none mb-8 md:mb-0">
            <div className="w-full h-full relative ">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 2, duration: 0.4, ease: "easeIn" },
                }}
                className="flex items-center justify-center"
              >
                {/* IMAGE  */}
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{
                    opacity: 2.4,
                    transition: { delay: 2, duration: 0.4, ease: "easeInOut" },
                  }}
                  className="w-[298px] h-[298px] xl:w-[400px] h-[400px] mix-blend-lighten absolute"
                >
                  <Image
                    src="/assets/images/animie.png"
                    alt=""
                    priority
                    fill
                    quality={100}
                    className="object-contain h-full  xl:w-full w-[280px] xl:mt-0 mt-[70px] xl:max-h-[350px] max-h-[250px]"
                  />
                </motion.div>

                {/* CIRCLE  */}
                <motion.svg
                  className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
                  fill="transparent"
                  viewBox="0 0 506 506"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.circle
                    cx="253"
                    cy="253"
                    r="250"
                    stroke="#F8C401"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ strokeDasharray: "24 10 0 0" }}
                    animate={{
                      strokeDasharray: [
                        "15 120 25 25",
                        "16 25 92 72",
                        "4 250 22 22",
                      ],
                      rotate: [120, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                </motion.svg>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewHeroSection;
