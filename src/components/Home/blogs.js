import React from "react";
import { MainTitle, SubTitle } from "../common/typography.component";
import SecondaryButton from "../common/SecondaryButton";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";

function HomeBlogs() {
  const { t } = useTranslation();
  return (
    <div className="md:py-20 py-10">
      <div className="container m-auto">
        <div className="flex  items-start justify-between">
          <div className="flex gap-3 items-center mb-10">
            <MainTitle
              text={t("Blogs")}
              className="font-semibold text-black dark:text-secondary"
            />
            <hr className="h-1 w-20 bg-black mt-2 dark:bg-secondary" />
          </div>
          <SecondaryButton
            text={t("View All")}
            url="/blogs"
            className=" py-2 px-3 mt-1 our-team-know-more-btn capitalize"
          />
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 justify-between">
          <div className="md:col-span-2 col-span-1  ">
            <div className="flex flex-col gap-1">
              <Link href="/blogs/technologies-which-i-used-in-this-Project">
                <Image
                  src="/assets/images/blog/technology.jpg"
                  height={300}
                  width={500}
                  alt="blog"
                  className="w-full h-full rounded-md object-cover"
                />
              </Link>
              <Link
                href="/blogs/technologies-which-i-used-in-this-Project"
                className="font-semibold text-black dark:text-secondary mt-3 hover:underline"
              >
                <h6>{t("Technologies which I used in this Project")}</h6>
              </Link>
              <p className="text-black dark:text-white">
                {t(
                  "Every project tells a story of the technologies embraced, each line of code a chapter in its narrative."
                )}
              </p>
              <small>
                5 {t("min read")} . {t("April")} 21, 2024
              </small>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <Image
                  src="/assets/images/blog/reactjs.jpg"
                  height={80}
                  width={80}
                  alt="blog"
                  className="object-cover rounded-md"
                />
                <Link
                  href="/blogs/react-versus-next-which-one-is-better-and-why"
                  className="text-black dark:text-secondary hover:underline"
                >
                  {t("React JS V/S Next JS which one is better and why ?")}
                </Link>
              </div>
              <div className="flex gap-4">
                <Image
                  src="/assets/images/blog/journey.png"
                  height={80}
                  width={80}
                  className="object-cover rounded-md"
                />
                <Link
                  href="/blogs/my-journey-as-a-front-end-developer"
                  className="text-black dark:text-secondary hover:underline"
                >
                  {t("My Journey as a Front-End Developer!")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBlogs;
