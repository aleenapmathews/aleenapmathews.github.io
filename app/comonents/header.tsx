"use client";
import { useState } from "react";
import styles from "./header.module.css";

export default function Header() {
  const [isClicked, setIsClicked] = useState(false);

  function clickHandler() {
    if (isClicked == true) {
      setIsClicked(false);
    } else {
      setIsClicked(true);
    }
  }
  return (
    <div>
      <header className={styles["header"]}>
        <a href="#" className={styles["logo"]}>
          Aleena
        </a>
        <div className={`bx bx-menu ${styles["menu-icon"]}`}></div>
        <nav className={styles["navbar"]}>
          <a href="#home" className={styles["active"]}>
            Home
          </a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <button onClick={clickHandler} className={styles["mobile-icon"]}>
          <i className="bx bx-menu"></i>
        </button>
        {isClicked && (
          <nav className={styles["mobile-navbar"]}>
            <a href="#home" className={styles["font"]}>
              Home 
            </a>
            <a className={styles["font"]} href="#about">
              About
            </a>
            <a className={styles["font"]} href="#education">
              Education
            </a>
            <a className={styles["font"]} href="#skills">
              Skills
            </a>
            <a className={styles["font"]} href="#contact">
              Contact
            </a>
          </nav>
        )}
      </header>
    </div>
  );
}
