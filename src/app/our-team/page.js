"use client";

import React from "react";
import "../../styles/ourTeam.css";
import { PageTitle } from "@/components/common/typography.component";
import { useTranslation } from "react-i18next";
import TeamUSPCard from "@/components/ourTeam/teamUSPCard";

const ourTeam = [
  {
    img: "/assets/images/our-team/himanshusharma.jpg",
    name: "Himanshu Sharma",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    technologies: [
      "React JS",
      "Next JS",
      "Tailwind CSS",
      "Material UI",
      "BootStrap",
      "JavaScript",
      "ES6",
    ],
  },
  {
    img: "/assets/images/our-team/rakesh-kumar.jpg",
    name: "Rakesh Kumar",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    technologies: [
      "React JS",
      "Next JS",
      "Tailwind CSS",
      "Material UI",
      "BootStrap",
      "TypeScript",
      "JavaScript",
      "ES6",
    ],
  },
  {
    img: "/assets/images/our-team/sandeep-kushwaha.jpg",
    name: "Sandeep Kushwaha",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    technologies: [
      "Node JS",
      "Express JS",
      "MongoDB",
      "PHP",
      "Laravel",
      "React JS",
      "JavaScript",
      "ES6",
    ],
  },
  {
    img: "/assets/images/our-team/krishna-tiwari.jpg",
    name: "Krishna Tiwari",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    technologies: [
      "React JS",
      "Next JS",
      "Material UI",
      "JavaScript",
      "ES6",
      "CSS",
      "HTML",
    ],
  },
  {
    img: "/assets/images/our-team/tirth-raj.png",
    name: "Tirth Raj",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    technologies: [
      "WordPress",
      "HTML",
      "CSS",
      "Magneto",
      "Tailwind CSS",
      "Shopify",
    ],
  },
  {
    img: "/assets/images/our-team/jk-tyagi.png",
    name: "JiyaLal Tyagi",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    technologies: ["Node JS", "Express JS", "MongoDB", "DSA", "Python"],
  },
];

function OurTeam() {
  const style = {
    background: `linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.9)), url(/assets/images/our-team/team-bg.png)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
  };
  const { t } = useTranslation();
  return (
    <div className="our-team">
      <div
        className="our-team-hero md:min-h-[90vh] min-h-[70vh] flex flex-col justify-center"
        style={style}
      >
        <div className="container m-auto">
          <PageTitle
            className="text-white dark:text-secondary font-semibold"
            text={t("Our Team")}
          />
          <p className="text-secondary dark:text-white">
            {t(
              "United by code, driven by innovation. Meet the team behind the pixels, where passion and proficiency converge to create exceptional user experiences."
            )}
          </p>
        </div>
      </div>
      <div className="md:py-20 py-10">
        <div className="container m-auto">
          <div className=" flex flex-col md:gap-20 gap-10">
            {ourTeam &&
              ourTeam.map((team, key) => (
                <TeamUSPCard
                  img={team?.img}
                  name={team?.name}
                  detail={team?.detail}
                  technologies={team?.technologies}
                  key={key}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
