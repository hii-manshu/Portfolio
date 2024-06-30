"use client";
import { useTranslation } from "react-i18next";
import { PageTitle } from "@/components/common/typography.component";
import SecondaryButton from "../common/SecondaryButton";
import Image from "next/image";

const blogData = [
  {
    image: "/assets/images/blog/reactjs.jpg",
    title: "React JS V/S Next JS which one is better and why ?",
    createdAt: "Sunday, May 26 2024",
    description:
      "In the world of web development, choosing the right JavaScript framework can be crucial to the success of your project....",
    buttonUrl: "/blogs/react-versus-next-which-one-is-better-and-why",
  },

  {
    image: "/assets/images/blog/technology.jpg",
    title: "Technologies which I used in this Project",
    createdAt: "Sunday, April 21 2024",
    description:
      "In the ever-evolving landscape of web development, selecting the right technologies can significantly impact the outcome of a project. Recently, I had the opportunity",
    buttonUrl: "/blogs/technologies-which-i-used-in-this-Project",
  },
];

function Blogs() {
  const { t } = useTranslation();
  const style = {
    background: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(/assets/images/projects-bg.png)`,
    backgroundSize: "cover",
    backgroundPosition: "bottom right",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "90vh",
    objectFit: "cover",
  };
  return (
    <div>
      <div className=" flex flex-col justify-center" style={style}>
        <div className="container m-auto">
          <PageTitle
            className="text-white dark:text-secondary font-semibold"
            text={t("Blogs")}
          />
          <p className="text-secondary dark:text-white">
            {t("These blogs help you to become a successfull developer !")}
          </p>
        </div>
      </div>
      <div className="container">
        <div className="md:py-20 py-10 bg-white dark:bg-[#121212]">
          <div className="flex flex-col gap-10  md:gap-20">
            <div className="flex md:flex-row flex-col gap-10">
              <div className="w-full">
                <Image
                  width={500}
                  height={300}
                  alt=""
                  src="/assets/images/blog/journey.png"
                  className="rounded-lg w-full "
                />
              </div>
              <div className="w-full">
                <h4 className="font-semibold text-black text-secondary">
                  {t("My Journey as a Front-End Developer!")}
                </h4>
                <p className="text-black dark:text-white text-xs">
                  {t("Sunday")}, {t("May")} 02 2024
                </p>
                <p className="text-black dark:text-white mt-3">
                  {t(
                    "As a front-end developer, I've embarked on a journey filled with challenges, learning opportunities, and moments of inspiration...."
                  )}
                  ...
                </p>
                <SecondaryButton
                  url="/blogs/my-journey-as-a-front-end-developer"
                  text={t("Read More")}
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
                    <Image
                      width={500}
                      height={381}
                      src={blog?.image}
                      alt=""
                      className="rounded-lg w-full h-full object-cover"
                    />
                    <div className="flex flex-col justify-between w-full md:h-full">
                      <h5 className="font-semibold text-black text-secondary">
                        {t(blog?.title)}
                      </h5>
                      <p className="text-black dark:text-white text-[12px]">
                        {" "}
                        {t(blog?.createdAt)}
                      </p>
                      <p className="text-black dark:text-white mt-2">
                        {t(blog?.description)}
                      </p>
                      <SecondaryButton
                        text={t("Read More")}
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
