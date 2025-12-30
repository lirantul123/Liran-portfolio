import { motion } from "framer-motion";
import { sectionReveal, itemReveal } from "../animations";
import styles from "./Experience.module.css";

export default function Experience({ id }: { id: string }) {
  return (
    <section id={id} className={styles.section}>
      <motion.section
        className={styles.section}
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className={styles.title}>Experience</h2>

        <motion.div
          className={styles.card}
          variants={itemReveal}
          transition={{ delay: 0.2 }}
        >
          <div className={styles.header}>
            <span className={styles.unit}>IDF · Unit 9900</span>
            <span className={styles.period}>2023 — Present</span>
          </div>

          <p className={styles.role}>Full Stack Developer</p>

          <ul className={styles.list}>
            <li>Designed and developed operational systems</li>
            <li>Backend services in Python & C#</li>
            <li>3D & spatial data pipelines</li>
            <li>High-scale, mission-critical environments</li>
          </ul>
        </motion.div>
      </motion.section>
    </section>
  );
}
