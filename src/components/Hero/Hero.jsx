import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import Typewriter from "typewriter-effect";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}>Hi!</h3>
        <p className={styles.description}>
          <Typewriter
            onInit={(typewriter) => {
              setTimeout(() => {
                typewriter
                  .typeString(
                    "I'm Daniel Guinita, a 4th year Information Technology student, passionate about various fields in the tech industry.<br/>(Cybersecurity, IT Ops, Networking, QA Testing, Web Development)"
                  )
                  .callFunction(() => {
                    const buttonGroup = document.querySelector(
                      `.${styles.buttonGroup}`
                    );
                    buttonGroup.style.opacity = 1;
                    buttonGroup.classList.add(`${styles.visible}`);
                  })
                  .start();
              }, 1000); // 1-second delay
            }}
            options={{
              autoStart: true,
              loop: false, // Prevents looping
              delay: 25, // Adjust typing speed
            }}
          />
        </p>
        <div className={styles.buttonGroup}>
          <a
            href="mailto:edu.dcguinita@gmail.com"
            className={styles.emailBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={getImageUrl("contact/emailIcon.png")}
              alt="Email icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/dcguinita"
            className={styles.linkedinBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
          </a>
          <a
            href="https://www.github.com/daniel-guinita"
            className={styles.githubBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="GitHub icon"
            />
          </a>
          <a
            href="/GuinitaResume.pdf"
            className={styles.resumeBtn}
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        className={styles.heroImg}
        alt="Hero"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
