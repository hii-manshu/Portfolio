"use client";
import { useTranslation } from "react-i18next";
import { PageTitle } from "@/components/common/typography.component";
import SecondaryButton from "../common/SecondaryButton";

const blogData = [
  {
    image: "/assets/images/projects-bg.png",
    title: "React JS V/S Next JS which one is better and why ?",
    createdAt: "Sunday, Apr 21 2024",
    description:
      " lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum....",
    buttonUrl: "/",
  },
  {
    image: "/assets/images/about-bg.png",
    title: "My Journey as a Front-End Developer",
    createdAt: "Sunday, Apr 21 2024",
    description:
      " lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum....",
    buttonUrl: "/",
  },
];

function Blogs() {
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
          <PageTitle
            className="text-white dark:text-secondary"
            text={t("Blogs")}
          />
          <p className="text-secondary ">
            {t("These blogs help you to become a successfull developer !")}
          </p>
        </div>
      </div>
      <div className="container">
        <div className="md:py-20 py-10 bg-white dark:bg-[#121212]">
          <div className="flex flex-col gap-10  md:gap-20">
            <div className="flex md:flex-row flex-col gap-10">
              <div className="w-full">
                <img
                  src="/assets/images/projects-bg.png"
                  className="rounded-lg"
                />
              </div>
              <div className="w-full">
                <h4 className="font-semibold ">
                  Technologies which I used in this Project
                </h4>
                <p className="text-black dark:text-white text-[12px]">
                  Sunday, Apr 21 2024
                </p>
                <p className="text-black dark:text-white mt-5">
                  lorem ipsum....
                </p>
                <SecondaryButton
                  text="Read More"
                  className="inline-block max-w-[160px] md:mt-10 mt-5"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10 ">
              {blogData.length > 0 &&
                blogData.map((blog, key) => (
                  <div
                    className="w-full flex flex-col gap-3 md:h-full"
                    key={key}
                  >
                    <img src={blog?.image} className="rounded-lg" />
                    <div className="flex flex-col justify-between w-full md:h-full">
                      <h4 className="font-semibold">{blog?.title}</h4>
                      <p className="text-black dark:text-white text-[12px]">
                        {" "}
                        {blog?.createdAt}
                      </p>
                      <p className="text-black dark:text-white mt-5">
                        lorem ipsum....
                      </p>
                      <SecondaryButton
                        text="Read More"
                        url={blog?.buttonUrl}
                        className="inline-block max-w-[160px] mt-5"
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
