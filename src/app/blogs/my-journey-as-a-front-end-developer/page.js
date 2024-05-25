"use client";
import { useTranslation } from "react-i18next";
import { MainTitle } from "@/components/common/typography.component";
import Link from "next/link";
import Image from "next/image";

function Page() {
  const { t } = useTranslation();
  const style = {
    background: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(/assets/images/projects-bg.png)`,
    backgroundSize: "cover",
    // backgroundPosition: "center top",
    backgroundPosition: "bottom right",
    backgroundRepeat: "no-repeat",
    width: "100%",
  };
  return (
    <div>
      <div
        className="md:min-h-[90vh] min-h-[70vh] flex flex-col justify-center"
        style={style}
      >
        <div className="container m-auto">
          <MainTitle
            className="text-white dark:text-secondary"
            text={t("My Journey as a Front-End Developer!")}
          />
          <p className="text-secondary dark:text-white">
            {t("I am glad to writing this blog...")}
          </p>
        </div>
      </div>
      <div className="container relative">
        <div className="md:py-20 py-10">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-10 justify-between">
            <div className="md:col-span-2 col-span-1">
              <small>21 {t("April")} 2024</small>
              <p className="text-black dark:text-white">
                Lorem IPSUmsssssssssssssssssssssssssssssssss
              </p>

              <div className="share mt-10">
                <small className="font-semibold ">{t("Share-")}</small>
                <div className="">FB</div>
                <div className="">Twiter</div>
              </div>
            </div>
            <div className="col-span-1">
              <div className=" sticky top-0 left-0">
                <div className="flex flex-col gap-4">
                  <h6 className="text-secondary dark:text-white font-semibold mb-2">
                    {t("LATEST BLOG")}
                  </h6>
                  <div className="flex gap-4">
                    <Image
                      src="/assets/images/project-bg.png"
                      height={80}
                      width={80}
                      className="object-cover rounded-md"
                    />
                    <Link
                      href="/blogs/react-versus-next-which-one-is-better-and-why"
                      className="text-black small dark:text-secondary hover:underline"
                    >
                      {t("React JS V/S Next JS which one is better and why ?")}
                    </Link>
                  </div>
                  <div className="flex gap-4">
                    <Image
                      src="/assets/images/project-bg.png"
                      height={80}
                      width={80}
                      className="object-cover rounded-md"
                    />
                    <Link
                      href="/blogs/technologies-which-i-used-in-this-Project"
                      className="text-black small dark:text-secondary hover:underline"
                    >
                      {t("Technologies which I used in this Project!")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
