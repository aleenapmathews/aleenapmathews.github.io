"use client";
import styles from "./hero.module.css";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className={styles["home"]} id="home">
      <div className={styles["home-content"]}>
        <h1>
          Hi,I&apos;m{" "}
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0 }}
          >
            Aleena P Mathews
          </motion.span>
        </h1>
        <div className={styles["text-animate"]}>
          <h3>Frontend Developer</h3>
        </div>
        <p>
          Welcome to my portfolio website!. This website is a space where I
          blend my technical skills with my creative interests, showcasing a
          collection of my work.I invite you to explore, learn more about what I
          do, and hopefully, get inspired along the way.
        </p>
        <div className={styles["btn-box"]}>
          <a
            href="https://www.canva.com/design/DAGOW1h4u8E/uQT12zsSlJ5YMdoOxfE7BQ/view?utm_content=DAGOW1h4u8E&utm_campaign=designshare&utm_medium=link&utm_source=editor"
            className={styles["btn"]}
          >
            My Resume
          </a>
          <a href="#contact" className={styles["btn"]}>
            Let&apos;s Talk
          </a> 
        </div>
      </div> 
      <div className={styles["home-img"]}></div>
    </section>
  );
}
