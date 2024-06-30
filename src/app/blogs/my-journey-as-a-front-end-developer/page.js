"use client";
import { useTranslation } from "react-i18next";
import { MainTitle } from "@/components/common/typography.component";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

function Page() {
  const { t } = useTranslation();
  const style = {
    background: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(/assets/images/blog/journey.png)`,
    backgroundSize: "cover",
    backgroundPosition: "center top",
    // backgroundPosition: "bottom right",
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
            className="text-white dark:text-secondary font-semibold"
            text={t("My Journey as a Front-End Developer!")}
          />
          <p className="text-secondary dark:text-white">
            {t(
              "My journey as a front-end developer: Each line of code is a step forward, each challenge a chance to grow."
            )}
          </p>
        </div>
      </div>
      <div className="container relative">
        <div className="md:py-20 py-10">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-10 justify-between">
            <div className="md:col-span-2 col-span-1">
              <small>
                7 {t("min read")}&nbsp;&nbsp; . &nbsp;&nbsp;{t("May")} 02,&nbsp;
                2024
              </small>
              <div className="mt-10 flex flex-col gap-0">
                <p className="text-black dark:text-white">
                  {t(
                    "As a front-end developer, I've embarked on a journey filled with challenges, learning opportunities, and moments of inspiration. From mastering HTML and CSS to diving deep into JavaScript frameworks, my path has been a dynamic exploration of the ever-evolving landscape of web development. In this blog post, I'll share my personal journey, highlighting key milestones, lessons learned, and reflections along the way. "
                  )}
                </p>
                <Image
                  src="/assets/images/blog/programmer.png"
                  height={400}
                  width={600}
                  className="my-10 w-full h-full rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-5">
                  <h6 className="text-black dark:text-secondary font-semibold">
                    {t("The Beginning: Embracing the Basics")}
                  </h6>
                  <p className="text-black dark:text-white">
                    {t(
                      "My journey as a front-end developer began with a curiosity about how websites were built. I started by learning the fundamental building blocks of the web: HTML and CSS. Understanding the structure and styling of web pages was like unlocking a new language, enabling me to bring my creative visions to life on the screen. With each project, I honed my skills, experimenting with different layouts, styles, and design principles."
                    )}
                  </p>
                </div>
                <div className="flex flex-col gap-5">
                  <h6 className="text-black dark:text-secondary font-semibold">
                    {t(
                      "Embracing JavaScript: From Interactivity to Dynamic Web Applications"
                    )}
                  </h6>
                  <p className="text-black dark:text-white">
                    {t(
                      "As I delved deeper into front-end development, I realized the power of JavaScript in adding interactivity and dynamism to web pages. Learning JavaScript was both exhilarating and challenging, as I grappled with concepts like variables, functions, and DOM manipulation. Yet, with perseverance and practice, I began to see the possibilities unfold before me."
                    )}
                  </p>
                  <p className="text-black dark:text-white">
                    {t(
                      "With JavaScript frameworks like React, Angular, and Vue.js gaining popularity, I embarked on a journey to master these tools. React, in particular, captivated me with its simplicity and flexibility. Building single-page applications (SPAs) became second nature, as I leveraged React's component-based architecture to create seamless user experiences."
                    )}
                  </p>
                </div>
                <div className="flex flex-col gap-5">
                  <h6 className="text-black dark:text-secondary font-semibold">
                    {t(
                      "Navigating the Evolving Landscape: Adaptability and Continuous Learning"
                    )}
                  </h6>
                  <p className="text-black dark:text-white">
                    {t(
                      "One of the most rewarding aspects of being a front-end developer is the constant evolution of technology. New frameworks, libraries, and tools emerge at a rapid pace, challenging us to stay abreast of the latest trends and best practices. Embracing this culture of continuous learning has been essential to my growth as a developer."
                    )}
                  </p>
                  <p className="text-black dark:text-white">
                    {t(
                      "From mastering CSS preprocessors like Sass to exploring state management with Redux, each new skill deepened my understanding of front-end development. I sought out online tutorials, attended workshops, and participated in community meetups to expand my knowledge and connect with fellow developers."
                    )}
                  </p>
                </div>
                <div className="flex flex-col gap-5">
                  <h6 className="text-black dark:text-secondary font-semibold">
                    {t(
                      "Overcoming Challenges: Resilience in the Face of Adversity"
                    )}
                  </h6>
                  <p className="text-black dark:text-white">
                    {t(
                      "Along my journey, I encountered my fair share of challenges and setbacks. Bugs, browser compatibility issues, and tight deadlines tested my patience and problem-solving skills. Yet, with each obstacle, I emerged stronger and more resilient. Collaborating with teammates, seeking mentorship, and leveraging online resources were instrumental in overcoming these challenges."
                    )}
                  </p>
                </div>
                <div className="flex flex-col gap-5">
                  <h6 className="text-black dark:text-secondary font-semibold">
                    {t("Reflections and Looking Ahead: The Journey Continues")}
                  </h6>
                  <p className="text-black dark:text-white">
                    {t(
                      "As I reflect on my journey as a front-end developer, I'm filled with gratitude for the experiences that have shaped me into the developer I am today. From humble beginnings tinkering with HTML and CSS to building dynamic web applications with React, the path has been one of growth, discovery, and self-discovery."
                    )}
                  </p>
                  <p className="text-black dark:text-white">
                    {t(
                      "Looking ahead, I'm excited to embrace the future of front-end development, with advancements in technologies like WebAssembly, Progressive Web Apps (PWAs), and the rise of headless CMS platforms. With each new challenge and opportunity, I'm committed to staying curious, adaptable, and passionate about crafting exceptional user experiences on the web."
                    )}
                  </p>
                </div>
                <div className="flex flex-col gap-5">
                  <h6 className="text-black dark:text-secondary font-semibold">
                    {t("Conclusion")}
                  </h6>
                  <p className="text-black dark:text-white">
                    {t(
                      "In conclusion, my journey as a front-end developer has been a testament to the power of curiosity, resilience, and continuous learning. As I navigate the ever-changing landscape of web development, I'm reminded that the journey is not merely about reaching a destination but about embracing the process of growth and transformation along the way."
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
