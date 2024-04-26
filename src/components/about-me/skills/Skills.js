"use client";
import React from "react";
import { MainTitle } from "@/components/common/typography.component";
import { useTranslation } from "react-i18next";

const skills = [
  {
    img: "/assets/images/tools/html-logo.png",
    title: "HTML",
    url: "https://www.w3schools.com/html/",
  },
  {
    img: "/assets/images/tools/css-logo.png",
    title: "CSS",
    url: "https://www.w3schools.com/css/",
  },
  {
    img: "/assets/images/tools/sass-logo.png",
    title: "sass",
    url: "https://sass-lang.com/",
  },

  {
    img: "/assets/images/tools/bootstrap-logo-svg.png",
    title: "bootstrap",
    url: "https://getbootstrap.com/docs/5.0/getting-started/introduction/",
  },
  {
    img: "/assets/images/tools/tailwind-logo.png",
    title: "Tailwind",
    url: "https://tailwindcss.com/",
  },
  {
    img: "/assets/images/tools/shad-cn.png",
    title: "Shadcn/ui",
    url: "https://ui.shadcn.com/",
  },
  {
    img: "/assets/images/tools/mui-logo.png",
    title: "material ui",
    url: "https://mui.com/",
  },
  {
    img: "/assets/images/tools/js-logo.png",
    title: "JAVASCRIPT",
    url: "https://www.w3schools.com/js/",
  },
  {
    img: "/assets/images/tools/es6-logo.png",
    title: "ES 6",
    url: "https://sass-lang.com/",
  },
  {
    img: "/assets/images/tools/react-logo.png",
    title: "react js",
    url: "https://react.dev/",
  },
  {
    img: "/assets/images/tools/nextjs-logo.png",
    title: "next js",
    url: "https://nextjs.org/",
  },

  {
    img: "/assets/images/tools/trello-logo.png",
    title: "trello",
    url: "https://trello.com/guide",
  },
  {
    img: "/assets/images/tools/git.png",
    title: "git",
    url: "https://git-scm.com/",
  },
  {
    img: "/assets/images/tools/git-logo.png",
    title: "github",
    url: "https://github.com/",
  },

  {
    img: "/assets/images/tools/bitbucket-logo.png",
    title: "bitbucket",
    url: "https://bitbucket.org/product",
  },

  // {
  //   img: "/assets/images/tools/slack-logo.png",
  //   title: "slack",
  //   url: "https://slack.com/intl/en-in",
  // },
];

function Skills() {
  const { t } = useTranslation();
  return (
    <div>
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>Skills || Himanshu Sharma</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta
          name="description"
          content="front-end Development, React Developer, Next Js Developer"
        ></meta>
      </Helmet> */}
      <div className="flex flex-col gap-5 text-center">
        <MainTitle
          text={t("Skills")}
          className="dark:text-secondary font-semibold"
        />
        <div className="flex gap-5 flex-wrap items-center justify-center">
          {skills &&
            skills.map((skill, key) => (
              <a href={skill?.url} alt="tools" key={key} target="_blank">
                <div className="flex flex-col gap-3 card p-2 rounded-md bg-white hover:shadow-2xl">
                  <img
                    src={skill?.img}
                    alt="skills"
                    style={{ height: 70, width: 100 }}
                  />
                  <p className="font-[600] uppercase tools-title">
                    {skill?.title}
                  </p>
                </div>
              </a>
            ))}
        </div>
      </div>
      <hr className="bg-black  dark:bg-white dark:h-0.5 h-1 w-full rounded-xl my-5" />
    </div>
  );
}

export default Skills;
