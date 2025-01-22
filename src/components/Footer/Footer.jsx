import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          <a href="mailto:edu.dcguinita@gmail.com" className={styles.link}>
            Email
          </a>{" "}
          |{" "}
          <a
            href="https://www.linkedin.com/in/dcguinita/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/daniel-guinita"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
};
