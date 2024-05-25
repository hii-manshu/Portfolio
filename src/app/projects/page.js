"use client";
import { useTranslation } from "react-i18next";
import { PageTitle, SubTitle } from "@/components/common/typography.component";
import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";

const projectsData = [
  {
    img: "/assets/images/projects/samrons.png",
    name: "Visharo",
    url: "https://visharo.com",
    technologies: ["React JS", "Laravel"],
  },
  {
    img: "/assets/images/projects/carton2me.png",
    name: "Carton",
    url: "https://carton.site",
    technologies: ["React JS", "Laravel"],
  },
  {
    img: "/assets/images/projects/lottorama.png",
    name: "Lottorama",
    url: "https://lottorama.net/",
    technologies: ["React JS", "Node JS"],
  },
  {
    img: "/assets/images/projects/orvel.png",
    name: "Orvel",
    url: "http://orvel.devshs.com/",
    technologies: ["React JS", "Node JS"],
  },
  {
    img: "/assets/images/projects/pegasus.png",
    name: "Pegasus",
    url: "https://pegasus.trade",
    technologies: ["React JS", "Laravel"],
  },
  {
    img: "/assets/images/projects/smile-and-go.png",
    name: "Smile and Go",
    url: "http://smileandgo-admin.devshs.com",
    technologies: ["React JS", "Node JS"],
  },
];

function Projects() {
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
    <div className="projects">
      <div
        className="md:min-h-[90vh] min-h-[70vh] flex flex-col justify-center"
        style={style}
      >
        <div className="container m-auto">
          <PageTitle
            className="dark:text-secondary text-white font-semibold"
            text={t("Projects")}
          />
          <p className="text-secondary dark:text-white">
            {t("in which I contributed as a Front-End Developer !")}
          </p>
        </div>
      </div>
      <div className="md:py-20 py-10 bg-slate-200 dark:bg-[#121212]">
        <div className="container m-auto">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center jusitfy-between gap-10">
            {projectsData &&
              projectsData.map((project, key) => (
                <div
                  className="w-full p-4 border border-white rounded-xl"
                  key={key}
                >
                  <a href={project?.url} target="_blank">
                    <div className="flex flex-col gap-4  items-center justify-between">
                      <div className="bg-secondary rounded-xl">
                        <img src={project?.img} className="w-full h-full" />
                      </div>
                      <SubTitle
                        text={project?.name}
                        className="text-black font-semibold "
                      />
                      <div className="flex gap-5 items-center">
                        <PrimaryButton
                          text={project?.technologies[0]}
                          className="py-2 px-4 capitalize"
                        />
                        <SecondaryButton
                          text={project?.technologies[1]}
                          className="py-2 px-4 capitalize"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
