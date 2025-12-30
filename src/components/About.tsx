import { motion } from "framer-motion";
import { sectionReveal, itemReveal } from "../animations";
import styles from "./About.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function About({ id }: { id: string }) {
  const myself = {
    name: "Liran Tulchinski",
    age: 19,
    major: "Full Stack & DevOps integrator",
    description:
      "Full Stack Developer with strong foundations in\n                computer science, backend & distributed systems,\n                and hands-on experience in 3D and spatial pipelines.",
  };

  return (
    <section id={id} className={styles.section}>
      <motion.section
        className={styles.sectionInner}
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className={styles.title}>About Me</h2>

        <motion.pre
          className={styles.codeBlock}
          variants={itemReveal}
          transition={{ delay: 0.2 }}
        >
          <code>
            <span className={styles.keyword}>const</span>{" "}
            <span className={styles.variable}>liran</span>:{" "}
            <span className={styles.type}>Developer</span> = {"{"}<br />
            &nbsp;&nbsp;<span className={styles.prop}>name</span>:{" "}
            <span className={styles.string}>"{myself.name}"</span>,<br />
            &nbsp;&nbsp;<span className={styles.prop}>age</span>:{" "}
            <span className={styles.variable}>{myself.age}</span>,<br />
            &nbsp;&nbsp;<span className={styles.prop}>major</span>:{" "}
            <span className={styles.string}>"{myself.major}"</span>,<br />
            &nbsp;&nbsp;<span className={styles.prop}>description</span>:{" "}
            <span className={styles.string}>"{myself.description}"</span><br />
            {"};"}
          </code>
        </motion.pre>

        {/* Social links */}
        <div className={styles.socialLinks}>
          <a
            href="https://github.com/lirantul123"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/lirantul"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <FaLinkedin />
          </a>
        </div>
      </motion.section>
    </section>
  );
}
