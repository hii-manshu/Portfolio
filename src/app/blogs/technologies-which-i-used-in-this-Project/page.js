"use client";
import { useTranslation } from "react-i18next";
import { MainTitle } from "@/components/common/typography.component";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

const techData = [
  {
    title: "React JS",
    description:
      "At the heart of the project lies React JS, a powerful JavaScript library for building user interfaces. React's component-based architecture provided the foundation for creating modular, reusable UI elements, streamlining development and maintenance processes. Leveraging React's virtual DOM also resulted in enhanced performance and a smoother user experience.",
    url: "https://react.dev/",
  },
  {
    title: "Next JS",
    description:
      "Next JS, a React framework, played a crucial role in this project by offering server-side rendering (SSR) capabilities out of the box. SSR not only improved initial load times but also optimized search engine indexing, ultimately boosting the project's visibility and accessibility. Additionally, Next JS provided features like automatic code splitting and route prefetching, further enhancing performance and scalability.",
    url: "https://nextjs.org/",
  },
  {
    title: "Tailwind CSS",
    description:
      "For styling and design consistency, I turned to Tailwind CSS, a utility-first CSS framework. Tailwind's approach of using utility classes allowed for rapid prototyping and streamlined customization, empowering me to create visually appealing interfaces with minimal effort. Its responsive design utilities also ensured seamless compatibility across various devices and screen sizes.",
    url: "https://tailwindcss.com/",
  },
  {
    title: "Shadcn",
    description:
      "Shadcn, a lightweight JavaScript library for creating dynamic shadows, added a layer of visual depth and sophistication to the project. By incorporating dynamic shadows into UI elements, I was able to enhance the overall aesthetics and improve user engagement. Shadcn's ease of integration and customizable options made it an invaluable asset in elevating the project's visual appeal.",
    url: "https://ui.shadcn.com/",
  },
  {
    title: "Aceternity UI",
    description:
      "In the realm of user interface (UI) design, achieving clarity, efficiency, and elegance is paramount. Accertinity UI emerges as a promising framework, offering a holistic approach to crafting seamless user experiences across various digital platforms. In this blog post, we'll delve into the essence of Accertinity UI, exploring its principles, components, and the transformative impact it can have on user interaction.",
    url: "https://ui.aceternity.com/",
  },
  {
    title: "Animate.css",
    description:
      "To inject life and interactivity into the user interface, I integrated Animate.css, a library of CSS animations. From subtle transitions to eye-catching effects, Animate.css enabled me to add flair and personality to various elements, making the user experience more engaging and memorable. Its extensive collection of pre-built animations simplified implementation and saved development time.",
    url: "https://animate.style/",
  },
  {
    title: "Tawk.to",
    description:
      "For real-time customer support and engagement, I integrated Tawk.to, a free live chat application. Tawk.to facilitated seamless communication between users and support representatives, allowing for quick resolution of queries and issues. Its user-friendly interface and robust feature set made it an ideal solution for enhancing customer satisfaction and retention.",
    url: "https://help.tawk.to/article/react-js",
  },
  {
    title: "PWA (Progressive Web App)",
    description:
      "Last but not least, I implemented Progressive Web App (PWA) features to ensure a seamless user experience, regardless of the device or network conditions. By leveraging service workers and caching strategies, the project gained offline functionality, faster loading times, and enhanced performance. The ability to install the project to the home screen also improved user engagement and retention.",
    url: "https://web.dev/explore/progressive-web-apps",
  },
];

function Page() {
  const { t } = useTranslation();
  const style = {
    background: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(/assets/images/blog/technology.jpg)`,
    backgroundSize: "cover",
    // backgroundPosition: "bottom right",
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
            className="text-white dark:text-secondary font-semibold"
            text={t("Technologies which I used in this Project!")}
          />
          <p className="text-secondary dark:text-white mt-2">
            {t(
              "Every project tells a story of the technologies embraced, each line of code a chapter in its narrative."
            )}
          </p>
        </div>
      </div>
      <div className="container relative">
        <div className="md:py-20 py-10">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-10 justify-between">
            <div className="md:col-span-2 col-span-1">
              <small>
                5 {t("min read")}&nbsp;&nbsp; . &nbsp;&nbsp;{t("April")}{" "}
                21,&nbsp; 2024
              </small>
              <div className="mt-10 flex flex-col gap-0">
                <p className="text-black dark:text-white">
                  {t(
                    "In the ever-evolving landscape of web development, selecting the right technologies can significantly impact the outcome of a project. Recently, I had the opportunity to work on a fascinating project where I employed a diverse range of technologies to achieve the desired results. In this blog post, I'm excited to delve into the technologies that powered this project and how each one contributed to its success."
                  )}
                </p>
                <Image
                  src="/assets/images/blog/tech-i-used.png"
                  height={400}
                  width={600}
                />
                <div className="flex flex-col gap-10">
                  {techData.length > 0 &&
                    techData.map((tech, key) => (
                      <div key={key} className="flex flex-col gap-2">
                        <a
                          target="_blank"
                          href={tech.url}
                          className="text-black dark:text-secondary font-semibold hover:underline"
                        >
                          <h6>{t(tech.title)}</h6>
                        </a>
                        <p className="text-black dark:text-white">
                          {t(tech.description)}
                        </p>
                      </div>
                    ))}
                </div>
                <p className="text-black dark:text-white mt-10">
                  {t(
                    "In conclusion, the successful execution of this project was made possible by the strategic integration of various technologies, each contributing its unique strengths to the overall solution. From building responsive UI components with React JS to optimizing performance with Next JS and Tailwind CSS, every technology played a vital role in achieving the project's objectives. Moving forward, I'm excited to continue exploring and harnessing the power of innovative technologies to create even more impactful projects in the future."
                  )}
                </p>
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
                      href="/blogs/react-versus-next-which-one-is-better-and-why"
                      className="text-black small dark:text-secondary hover:underline"
                    >
                      {t("React JS V/S Next JS which one is better and why ?")}
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
