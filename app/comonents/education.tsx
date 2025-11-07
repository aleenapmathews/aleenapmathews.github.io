"use client";
import { motion } from "framer-motion";
import style from "./education.module.css";

export default function Education() {
  return (
    <section className={style["education"]} id="education">
      <h2 className={style["heading"]}>
        My{" "}
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0 }}
        >
          Journey
        </motion.span>
      </h2>
      <div className={style["education-row"]}>
        <div className={style["education-column"]}>
          <h3 className={style["title"]}>Education</h3>
          <div className={style["education-box"]}>
            <div className={style["education-content"]}>
              <div className={style["content"]}>
                <div className={style["year"]}>
                  <i className={"bx bxs-calendar"}></i>2022-2026
                </div>
                <h3>Bachelor Degree-college</h3>
                <p>
                  I&apos;m a final year Computer Science student at Saintgits
                  College of Engineering.
                </p>
              </div>
            </div>

            <div className={style["education-content"]}>
              <div className={style["content"]}>
                <div className={style["year"]}>
                  <i className="bx bxs-calendar"></i>2020 - 2022
                </div>
                <h3>Senior Secondary Education</h3>
                <p>
                  I completed my senior secondary education from C.M.S.C.H.S.S
                  Kottayam.
                </p>
              </div>
            </div>

            <div className={style["education-content"]}>
              <div className={style["content"]}>
                <div className={style["year"]}>
                  <i className="bx bxs-calendar"></i>2017 - 2018
                </div>
                <h3>Secondary Education</h3>
                <p>
                  I completed my secondary education from C.M.S.C.H.S.S Kottayam
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* work Experience */}
        <div className={style["education-column"]}>
          <h3 className={style["title"]}>Projects</h3>
          <div className={style["education-box"]}>
            <div className={style["education-content"]}>
              <div className={style["content"]}>
                <div className={style["year"]}>
                  <i className={"bx bxs-calendar"}></i>2024
                </div>
                <h3>Pratitya 25</h3>
                <p>
                  Developed a dynamic and engaging website for Pratitya, the
                  official college fest, aimed at showcasing events, schedules,
                  and registration details.{" "}
                </p>
                <a href="https://pratitya.in/" target="_blank">
                  pratitya.in
                </a>
              </div>
            </div>

            <div className={style["education-content"]}>
              <div className={style["content"]}>
                <div className={style["year"]}>
                  <i className={"bx bxs-calendar"}></i>2023
                </div>

                <h3>Portfolio</h3>
                <p>
                  This website is a space where I blend my technical skills with
                  my creative interests, showcasing a collection of my work
                </p>
              </div>
            </div>

            <div className={style["education-content"]}>
              <div className={style["content"]}>
                <div className={style["year"]}>
                  <i className={"bx bxs-calendar"}></i>2023
                </div>
                <h3>BMI Calculator</h3>
                <p>
                  A BMI (Body Mass Index) calculator is a tool that helps
                  determine if an individual&apos;s weight is within a healthy
                  range for their height.<br></br>
                  <a
                    style={{ color: "var(--main-color)" }}
                    href="https://bmi-tau-one.vercel.app/"
                  >
                    https://bmi-tau-one.vercel.app/
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
