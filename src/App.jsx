import React, { useEffect, useRef } from 'react';
import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { About } from './components/About/About';
import RainEffect from './components/RainEffect/RainEffect';
import { Experience } from './components/Experience/Experience';
import { Hero } from './components/Hero/Hero';
import { Projects } from './components/Projects/Projects';
import { Footer } from './components/Footer/Footer';

function App() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const options = {
      threshold: 0.5, // Trigger animation when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.appear);
          entry.target.classList.remove(styles.hidden);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    sectionsRef.current.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className={styles.App}>
      <RainEffect />
      <Navbar />
      <div ref={el => sectionsRef.current.push(el)} className={`${styles.section} ${styles.hidden}`}>
        <Hero />
      </div>
      <div ref={el => sectionsRef.current.push(el)} className={`${styles.section} ${styles.hidden}`}>
        <About />
      </div>
      <div ref={el => sectionsRef.current.push(el)} className={`${styles.section} ${styles.hidden}`}>
        <Experience />
      </div>
      <div ref={el => sectionsRef.current.push(el)} className={`${styles.section} ${styles.hidden}`}>
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
