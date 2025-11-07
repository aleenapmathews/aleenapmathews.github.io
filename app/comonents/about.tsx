"use client";

import styles from "./about.module.css";
import { motion } from "framer-motion";
export default function About() {
  return (
    <section className={styles["about"]} id="about">
      <motion.h2
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.0 }}
        className={styles["heading"]}
      >
        About <span>Me</span>
      </motion.h2>

      <div className={styles["about-content"]}>
        <h3>Frontend Developer!</h3>
        <p>
          Hello! I&apos;m Aleena P Mathews, a final year Computer Science
          Engineering student at Saintgits College of Engineering. My passions
          lie in the world of creativity and technology. When I&apos;m not
          diving deep into code, you&apos;ll find me expressing myself through
          drawing and painting, or relaxing with some good music. I&apos;ve also
          taken my love for creativity online by designing my own portfolio
          website. It&apos;s a space where I showcase my work and projects,
          blending my technical skills with my artistic side.
        </p>

        <div className={`${styles["btn-box"]} ${styles["btns"]}`}>
          <a href="#" className={styles["btn"]}>
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}
