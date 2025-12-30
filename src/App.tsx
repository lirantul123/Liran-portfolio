import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import About from "./components/About";
import Experience from "./components/Experience";
import Stack from "./components/Stack";
import Resume from "./components/Resume";
import styles from "./App.module.css";

export default function App() {
  const sections = useMemo(
    () => ["about", "experience", "stack", "resume"],
    []
  );
  const [currentSection, setCurrentSection] = useState(0);
  const scrollTimeout = useRef<number | undefined>(undefined);

  // Stable function to center a section
  const centerSection = useCallback(
    (index: number) => {
      const sectionEl = document.getElementById(sections[index]);
      if (!sectionEl) return;

      const sectionTop = sectionEl.offsetTop;
      const sectionHeight = sectionEl.offsetHeight;
      const viewportHeight = window.innerHeight;

      let scrollY = sectionTop - (viewportHeight - sectionHeight) / 2;
      const maxScroll = document.body.scrollHeight - viewportHeight;
      scrollY = Math.max(0, Math.min(scrollY, maxScroll));

      window.scrollTo({ top: scrollY, behavior: "smooth" });
    },
    [sections]
  );

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

      scrollTimeout.current = window.setTimeout(() => {
        const scrollPos = window.scrollY + window.innerHeight / 2;

        const sectionOffsets = sections.map(
          (id) => document.getElementById(id)?.offsetTop || 0
        );

        let current = sectionOffsets.findIndex(
          (offset, i) =>
            scrollPos >= offset &&
            scrollPos < (sectionOffsets[i + 1] || Infinity)
        );

        if (current === -1) current = sectionOffsets.length - 1;
        setCurrentSection(current);

        centerSection(current);
      }, 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections, centerSection]);

  useEffect(() => {
    // Center the first section on load
    centerSection(0);
  }, [centerSection]);

  return (
    <div className={styles.app}>
      {/* Top Nav */}
      <div className={styles.topNav}>
        <div className={styles.nameLogo}>&lt; Liran Tulchinski /&gt;</div>
        <div className={styles.navButtons}>
          {sections.map((id, i) => (
            <button
              key={id}
              className={`${styles.navBtn} ${
                i === currentSection ? styles.activeNavBtn : ""
              }`}
              onClick={() => centerSection(i)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Side Bubbles */}
      <div className={styles.sideNav}>
        {sections.map((id, i) => (
          <div
            key={id}
            className={`${styles.bubble} ${
              i === currentSection ? styles.activeBubble : ""
            }`}
            onClick={() => centerSection(i)}
          />
        ))}
      </div>

      <main className={styles.main}>
        <About id="about" />
        <Experience id="experience" />
        <Stack id="stack" />
        <Resume id="resume" />
      </main>
    </div>
  );
}
