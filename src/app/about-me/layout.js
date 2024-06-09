"use client";
import { PageTitle } from "@/components/common/typography.component";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function Layout({ children }) {
  const { t } = useTranslation();
  const pathname = usePathname();

  const style = {
    backgroundImage: `linear-gradient(to right,
              rgba(0,0,0, 0.6),
              rgba(0,0,0, 0.6)), url(/assets/images/about-me-bg.png)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: 300,
    width: "100%",
    height: "90vh",
    objectFit: "cover",
  };
  return (
    <div className="">
      <div className="about-me">
        <div
          className="about-me-hero w-full flex flex-col justify-center relative z-0"
          style={style}
        >
          <div className="container">
            <PageTitle
              text={t("About Me")}
              className="text-white dark:text-secondary font-semibold"
            />
            <p className="text-secondary dark:text-white">
              {t(
                "Stronger than I've been before, confident in who I am, fueled by my passions, and unapologetically me."
              )}
            </p>
          </div>
          {/* <div className="profile-pic md:hidden block">
            <div className="about-me-img absolute top-[60%] left-[50%]">
              <Image
                width={200}
                height={200}
                alt="profile"
                // src="/assets/images/about-me.jpeg"
                src="/assets/images/himanshu.jpg"
                className="h-full w-full rounded-full h-[200px] w-[200px] object-cover"
              />
            </div>
          </div> */}
        </div>
        <div className="md:pt-10 pt-20 pb-10 px-5">
          <div className="grid md:grid-cols-8 grid-cols-1 lg:gap-5 md:gap-2 gap-5 text-center">
            <div className="md:col-span-2 text-center w-full">
              <ul className="flex md::flex-col flex-row flex-wrap md::gap-2 justify-between border md::border-1 border-gray-500 rounded-md p-2 items-center text-left">
                <div className="m-auto">
                  <Image
                    width={150}
                    height={150}
                    src="/assets/images/himanshu.jpg"
                    className=" h-[150px] w-[150px] object-cover rounded-full"
                  />
                </div>
                <hr className="w-full h-0.5 bg-gray-200 my-2" />
                <Link
                  href="/about-me/"
                  className={`about-link py-2 w-full text-black dark:text-secondary text-center border-b-2 px-2 ${
                    pathname === "/about-me" ? "about-nav-link" : ""
                  } flex gap-2 items-center justify-center`}
                >
                  <Icon icon="mdi:about" fontSize={25} />
                  <span className="font-semibold">{t("About Me")}</span>
                </Link>
                <Link
                  href="/about-me/qualification"
                  className={`about-link py-2 w-full text-black dark:text-secondary  border-b-2 px-2 ${
                    pathname === "/about-me/qualification"
                      ? "about-nav-link"
                      : ""
                  } flex gap-2 items-center justify-center`}
                >
                  <Icon icon="fluent-mdl2:education" fontSize={25} />
                  <span className="font-semibold">{t("Qualification")}</span>
                </Link>
                <Link
                  href="/about-me/skills"
                  className={`about-link py-2 w-full text-black dark:text-secondary text-left border-b-2 px-2 ${
                    pathname === "/about-me/skills" ? "about-nav-link" : ""
                  } flex gap-2 items-center justify-center`}
                >
                  <Icon icon="game-icons:skills" fontSize={25} />
                  <span className="font-semibold">{t("Skills")}</span>
                </Link>
                <Link
                  href="/about-me/experience"
                  className={`about-link py-2 w-full text-black dark:text-secondary text-left border-b-2 px-2 ${
                    pathname === "/about-me/experience" ? "about-nav-link" : ""
                  } flex gap-2 items-center justify-center`}
                >
                  <Icon icon="game-icons:gift-of-knowledge" fontSize={25} />
                  <span className="font-semibold">{t("Experience")}</span>
                </Link>
                <Link
                  href="/about-me/why-me"
                  className={`about-link py-2 w-full text-black dark:text-secondary text-center border-b-2 px-2 ${
                    pathname === "/about-me/why-me" ? "about-nav-link" : ""
                  } flex gap-2 items-center justify-center`}
                >
                  <Icon icon="pepicons-pencil:question" fontSize={25} />
                  <span className="font-semibold">{t("Why Me")}</span>
                </Link>
              </ul>
            </div>
            <div className="md:col-span-6 text-center w-full">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
