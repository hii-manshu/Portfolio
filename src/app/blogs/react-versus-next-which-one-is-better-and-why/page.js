"use client";
import { useTranslation } from "react-i18next";
import { MainTitle } from "@/components/common/typography.component";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

const keyFeaturesofNext = [
  {
    title: "Server-Side Rendering (SSR)",
    description:
      "Next JS allows developers to render React components on the server-side, improving performance and SEO.",
  },
  {
    title: "Static Site Generation (SSG)",
    description:
      "Next JS supports static site generation, enabling developers to pre-render pages at build time for faster loading.",
  },
  {
    title: "File-Based Routing",
    description:
      "Next JS offers a simple and intuitive file-based routing system, eliminating the need for complex routing configurations.",
  },
];

const keyFeaturesofReact = [
  {
    title: "Virtual DOM",
    description:
      "React uses a virtual DOM to improve performance by minimizing the number of updates to the actual DOM.",
  },
  {
    title: "Component Reusability",
    description:
      "React promotes component-based architecture, enabling developers to create reusable UI components.",
  },
  {
    title: "Unidirectional Data Flow",
    description:
      "React follows a unidirectional data flow, making it easier to debug and understand the state of the application.",
  },
];

function Page() {
  const { t } = useTranslation();
  const style = {
    background: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(/assets/images/blog/reactjs.jpg)`,
    backgroundSize: "cover",
    // backgroundPosition: "center top",
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
          <MainTitle
            className="text-white dark:text-secondary tracking-tight font-semibold"
            text={t("React JS V/S Next JS which one is better and why ?")}
          />
          <p className="text-secondary dark:text-white mt-2">
            {t(
              "React JS: The canvas for your web masterpiece. Next JS: Adding brushes to paint a fuller picture."
            )}
          </p>
        </div>
      </div>
      <div className="container relative">
        <div className="md:py-20 py-10">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-10 justify-between">
            <div className="md:col-span-2 col-span-1">
              <small>
                5 {t("min read")}&nbsp;&nbsp; . &nbsp;&nbsp;{t("May")} 26,&nbsp;
                2024
              </small>
              <div className="mt-10 flex flex-col gap-0">
                <p className="text-black dark:text-white">
                  {t(
                    "In the world of web development, choosing the right JavaScript framework can be crucial to the success of your project. React JS and Next JS are two popular options that offer powerful features and functionalities, each with its own strengths and use cases. In this blog post, we'll explore the differences between React JS and Next JS to help you make an informed decision about which one is better suited for your needs."
                  )}
                </p>
                <Image
                  src="/assets/images/blog/next-js.jpg"
                  height={400}
                  width={600}
                  className="my-10 w-full h-full rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-5">
                  <h6 className="text-black dark:text-secondary font-semibold">
                    {t("Understanding React JS")}
                  </h6>
                  <p className="text-black dark:text-white">
                    {t(
                      "React JS, developed by Facebook, is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage their state efficiently. React follows a component-based architecture, making it easier to maintain and scale large applications."
                    )}
                  </p>
                  <div>
                    <p className="mb-3 text-black dark:text-white font-semibold">
                      {t("Key Features of React JS:")}
                    </p>
                    <div className="flex flex-col gap-3">
                      {keyFeaturesofReact.map((feat, key) => (
                        <div className="flex flex-col gap-1 " key={key}>
                          <p className="text-black dark:text-secondary font-semibold">
                            {key + 1}. {t(feat.title)}:
                          </p>
                          <p className="text-black dark:text-white">
                            {t(feat.description)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <h6 className="text-black dark:text-secondary font-semibold">
                    {t("Exploring Next JS")}
                  </h6>
                  <p className="text-black dark:text-white">
                    {t(
                      "Next JS, on the other hand, is a framework built on top of React JS. It provides additional features and tools to simplify the development of React applications, especially for server-side rendering and static site generation."
                    )}
                  </p>
                  <div>
                    <p className="mb-3 text-black dark:text-white font-semibold">
                      {t("Key Features of Next JS:")}
                    </p>
                    <div className="flex flex-col gap-3">
                      {keyFeaturesofNext.map((feat, key) => (
                        <div className="flex flex-col gap-1 " key={key}>
                          <p className="text-black dark:text-secondary font-semibold">
                            {key + 1}. {t(feat.title)}:
                          </p>
                          <p className="text-black dark:text-white">
                            {t(feat.description)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <h6 className="text-black dark:text-secondary font-semibold">
                    {t("Choosing the Right Framework")}
                  </h6>
                  <p className="text-black dark:text-white">
                    {t(
                      "When it comes to choosing between React JS and Next JS, the decision largely depends on the specific requirements of your project."
                    )}
                  </p>
                  <div>
                    <p className="mb-3 text-black dark:text-white font-semibold">
                      {t("Choose React JS if:")}
                    </p>
                    <ul className="flex flex-col gap-2 list-disc">
                      <li className="text-black dark:text-white ml-5">
                        {t(
                          "You need a lightweight library for building user interfaces."
                        )}
                      </li>
                      <li className="text-black dark:text-white ml-5">
                        {t(
                          "Your project primarily focuses on client-side rendering."
                        )}
                      </li>
                      <li className="text-black dark:text-white ml-5">
                        {t(
                          "You prefer flexibility and customization in terms of routing and server-side rendering."
                        )}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-3 text-black dark:text-white font-semibold">
                      {t("Choose Next JS if:")}
                    </p>
                    <ul className="flex flex-col gap-2 list-disc">
                      <li className="text-black dark:text-white ml-5">
                        {t(
                          "You require server-side rendering or static site generation for improved performance and SEO."
                        )}
                      </li>
                      <li className="text-black dark:text-white ml-5">
                        {t(
                          "Your project involves complex routing requirements."
                        )}
                      </li>
                      <li className="text-black dark:text-white ml-5">
                        {t(
                          "You want built-in support for features like TypeScript, CSS Modules, and API routes."
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <h6 className="text-black dark:text-secondary font-semibold">
                    {t("Conclusion")}
                  </h6>
                  <p className="text-black dark:text-white">
                    {t(
                      "Both React JS and Next JS are powerful tools for building modern web applications. While React JS provides a solid foundation for building user interfaces, Next JS extends its capabilities with server-side rendering and static site generation. Ultimately, the choice between React JS and Next JS depends on the specific needs and goals of your project. Whether you prioritize simplicity, performance, or advanced features, both frameworks offer a robust solution for building high-quality web applications."
                    )}
                  </p>
                </div>
              </div>
              <div className="share mt-5">
                <small className="font-semibold text-black dark:text-secondary">
                  {t("Share on-")}
                </small>
                <div className="flex gap-3 items-center mt-2">
                  <a href="https://www.facebook.com" target="_blank">
                    <Icon icon="logos:facebook" fontSize={25} />
                  </a>
                  <a href="https://www.x  .com" target="_blank">
                    <Icon
                      icon="bi:twitter-x"
                      fontSize={20}
                      style={{ color: "#f4d04e" }}
                    />{" "}
                  </a>
                  <a href="https://www.instagram.com" target="_blank">
                    <Icon icon="skill-icons:instagram" fontSize={25} />{" "}
                  </a>
                </div>
                <div className=""></div>
              </div>
            </div>
            <div className="col-span-1">
              <div className=" sticky top-20 left-0">
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
                      href="/blogs/my-journey-as-a-front-end-developer"
                      className="text-black small dark:text-secondary hover:underline"
                    >
                      {t("My Journey as a Front-End Developer!")}
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
