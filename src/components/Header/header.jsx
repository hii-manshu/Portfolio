"use client";
import { useState } from "react";
import styles from "../../styles/Navbar.module.css";
import Link from "next/link";
// import LanguageSelect from "../common/LanguageSelect";
import { useTranslation } from "react-i18next";
import LanguageSelect from "../common/LanguageSelect";
import Image from "next/image";
import { ModeToggle } from "../mode-toggler";
function Navbar() {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState(false);
  const [acitveLink, setAcitveLink] = useState("");

  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <div className="sticky top-0 z-10 shadow-lg">
      <header className="App-header">
        <nav className={`${styles.navbar} items-center bg-white dark:bg-black`}>
          <Link href="/">
            <Image
              src="/assets/images/newlogo.png"
              alt="logo"
              width={130}
              height={50}
              className="animate__animated animate__backInRight"
            />
          </Link>
          <ul
            className={`${styles.navMenu} ${
              isActive ? styles.active : ""
            } unorder-list bg-white dark:bg-black lg:h-auto h-screen`}
          >
            <li onClick={removeActive}>
              <Link
                href="/about-me"
                className={`text-md nav-link text-black dark:text-white animate__animated animate__backInRight ${
                  acitveLink === "/about-me" ? "text-secondary" : ""
                } `}
                onClick={() => setAcitveLink("/about-me")}
              >
                {t("About Me")}
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link
                href="/projects"
                className={`text-md nav-link text-black dark:text-white animate__animated animate__backInRight ${
                  acitveLink === "/about-me" ? "text-secondary" : ""
                }`}
                onClick={() => setAcitveLink("/projects")}
              >
                {t("Projects")}
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link
                href="/blogs"
                className={`text-md nav-link text-black dark:text-white animate__animated animate__backInRight ${
                  acitveLink === "/about-me" ? "text-secondary" : ""
                }`}
                onClick={() => setAcitveLink("/blogs")}
              >
                {t("Blogs")}
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link
                href="/our-team"
                className={`text-md nav-link text-black dark:text-white animate__animated animate__backInRight ${
                  acitveLink === "/about-me" ? "text-secondary" : ""
                }`}
                onClick={() => setAcitveLink("/our-team")}
              >
                {t("Team")}
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link
                href="/buy-coffee"
                className={`text-md nav-link text-black dark:text-white animate__animated animate__backInRight ${
                  acitveLink === "/about-me" ? "text-secondary" : ""
                }`}
                onClick={() => setAcitveLink("/buy-coffee")}
              >
                {t("Buy Coffee")}
              </Link>
            </li>

            <li onClick={removeActive}>
              <Link
                href="/contact-me"
                className={`text-md nav-link text-black dark:text-white animate__animated animate__backInRight  ${
                  acitveLink === "/about-me" ? "text-secondary" : ""
                }`}
                onClick={() => setAcitveLink("/contact-me")}
              >
                {t("Contact Me")}
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-5">
            <LanguageSelect />
            <ModeToggle />
            <div
              className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
              onClick={toggleActiveClass}
            >
              <span className={`${styles.bar} bg-black dark:bg-white`}></span>
              <span className={`${styles.bar} bg-black dark:bg-white`}></span>
              <span className={`${styles.bar} bg-black dark:bg-white`}></span>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
