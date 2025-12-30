import { motion } from "framer-motion";
import { sectionReveal, itemReveal } from "../animations";
import {
  FaPython,
  FaReact,
  FaJs,
  FaLinux,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";
import { SiTypescript, SiPostgresql, SiKubernetes, SiDocker, SiSharp, SiCplusplus } from "react-icons/si";

import styles from "./Stack.module.css";

const stack = [
  { name: "Python", icon: <FaPython /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Java" },
  { name: "C#", icon: <SiSharp /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "Kubernetes", icon: <SiKubernetes /> },
  { name: "Linux", icon: <FaLinux /> },
  { name: "Azure" },
  { name: "Git", icon: <FaGitAlt /> },
];

export default function Stack({ id }: { id: string }) {
  return (
    <section id={id} className={styles.section}>
      <motion.section
        className={styles.section}
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className={styles.title}>Tech Stack</h2>

        <motion.div
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {stack.map((tech) => (
            <motion.div
              key={tech.name}
              className={styles.card}
              variants={itemReveal}
              whileHover={{ y: -6, scale: 1.05 }}
            >
              <div className={styles.icon}>{tech.icon}</div>
              <span>{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </section>
  );
}
  