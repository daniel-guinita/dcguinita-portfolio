import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi!</h1>
        <p className={styles.description}>
          I'm Daniel Guinita, a 4th year Information Technology student, passionate about various fields in the tech industry.<br />
          (Cybersecurity, IT Ops, Networking, QA Testing, Web Development)
        </p>
        <div className={styles.buttonGroup}>
          <a href="mailto:edu.dcguinita@gmail.com" className={styles.emailnBtn} target="_blank" rel="noopener noreferrer">
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          </a>
          <a href="https://www.linkedin.com/dcguinita" className={styles.linkedinBtn} target="_blank" rel="noopener noreferrer">
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
          </a>
          <a href="https://www.github.com/daniel-guinita" className={styles.githubBtn} target="_blank" rel="noopener noreferrer">
            <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub icon" />
          </a>
          <a href="/GuinitaResume.pdf" className={styles.resumeBtn} download target="_blank" rel="noopener noreferrer">
            Download Resume
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
