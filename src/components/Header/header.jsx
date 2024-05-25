"use client";
import { useState } from "react";
import styles from "../../styles/Navbar.module.css";
import Link from "next/link";
// import LanguageSelect from "../common/LanguageSelect";
import { useTranslation } from "react-i18next";
import LanguageSelect from "../common/LanguageSelect";
function Navbar() {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState(false);

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
            <img
              src="/assets/images/logo.png"
              alt="logo"
              width={170}
              height={50}
              className="animate__animated animate__backInRight"
            />
          </Link>
          <ul
            className={`${styles.navMenu} ${
              isActive ? styles.active : ""
            } unorder-list`}
          >
            <li onClick={removeActive}>
              <Link
                href="/about-me"
                className={`${styles.navLink} nav-link text-black dark:text-white animate__animated animate__backInRight `}
              >
                {t("About Me")}
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link
                href="/projects"
                className={`${styles.navLink} nav-link text-black dark:text-white animate__animated animate__backInRight`}
              >
                {t("Projects")}
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link
                href="/blogs"
                className={`${styles.navLink} nav-link text-black dark:text-white animate__animated animate__backInRight`}
              >
                {t("Blogs")}
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link
                href="/our-team"
                className={`${styles.navLink} nav-link text-black dark:text-white animate__animated animate__backInRight`}
              >
                {t("Team")}
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link
                href="/buy-coffee"
                className={`${styles.navLink} nav-link text-black dark:text-white animate__animated animate__backInRight`}
              >
                {t("Buy me a Coffee")}
              </Link>
            </li>

            <li onClick={removeActive}>
              <Link
                href="/contact-me"
                className={`${styles.navLink} nav-link text-black dark:text-white animate__animated animate__backInRight`}
              >
                {t("Contact Me")}
              </Link>
            </li>
            <li>
              <LanguageSelect />
            </li>
          </ul>

          <div
            className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
            onClick={toggleActiveClass}
          >
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
