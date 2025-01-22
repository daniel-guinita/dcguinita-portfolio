import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Projects } from "./components/Projects/Projects";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className={styles.App}>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
