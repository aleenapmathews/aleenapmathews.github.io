"use client";
import style from "./skills.module.css";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section className={style["skills"]} id="skills">
      <h2 className={style["heading"]}>
        My{" "}
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0 }}
        >
          Skills
        </motion.span>
      </h2>
      <div className={style["skills-row"]}>
        <div className={style["skills-column"]}>
          <h3 className={style["title"]}> Skills</h3>
          <div className={style["skills-box"]}>
            <div className={style["skills-content"]}>
              <div className={style["progress"]}>
                <h3>
                  React.js <span>60%</span>
                </h3>
                <div className={style["bar"]}>
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: "60%" }}
                    transition={{ duration: 0.5 }}
                  ></motion.span>
                </div>
              </div>

              <div className={style["progress"]}>
                <h3>
                  CSS <span>30%</span>
                </h3>
                <div className={style["bar"]}>
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: "30%" }}
                    transition={{ duration: 0.5 }}
                  ></motion.span>
                </div>
              </div>

              <div className={style["progress"]}>
                <h3>
                  C <span>50%</span>
                </h3>
                <div className={style["bar"]}>
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: "50%" }}
                    transition={{ duration: 0.5 }}
                  ></motion.span>
                </div>
              </div>

              <div className={style["progress"]}>
                <h3>
                  Python <span>50%</span>
                </h3>
                <div className={style["bar"]}>
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: "50%" }}
                    transition={{ duration: 0.5 }}
                  ></motion.span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Other Skills */}
        <div className={style["skills-column"]}>
          <h3 className={style["title"]}>Other Skills</h3>
          <div className={style["skills-box"]}>
            <div className={style["skills-content"]}>
              <div className={style["progress"]}>
                <h3>
                  Drawing <span>90%</span>
                </h3>
                <div className={style["bar"]}>
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: "90%" }}
                    transition={{ duration: 0.5 }}
                  ></motion.span>
                </div>
              </div>

              <div className={style["progress"]}>
                <h3>
                  Painting <span>89%</span>
                </h3>
                <div className={style["bar"]}>
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: "89%" }}
                    transition={{ duration: 0.5 }}
                  ></motion.span>
                </div>
              </div>

              <div className={style["progress"]}>
                <h3>
                  Fabric Painting <span>89%</span>
                </h3>
                <div className={style["bar"]}>
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: "89%" }}
                    transition={{ duration: 0.5 }}
                  ></motion.span>
                </div>
              </div>

              <div className={style["progress"]}>
                <h3>
                  Photography <span>70%</span>
                </h3>
                <div className={style["bar"]}>
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: "70%" }}
                    transition={{ duration: 0.5 }}
                  ></motion.span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
