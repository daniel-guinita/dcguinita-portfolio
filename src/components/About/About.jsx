import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About me</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/computerIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <p>
                I've been interested in Cybersecurity, Networking and IT Operations.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/magnifyingglassIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <p>
                I have interest and minor experience in QA Testing, using tools like Testrail and Jira.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/keyboardIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <p>
                I'm currently a full-stack developer utilizing React, Nest.js, and MySQL to bring our application to life.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
