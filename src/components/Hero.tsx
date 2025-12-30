import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import { reveal } from "../animations/reveal";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <motion.div
        variants={reveal}
        initial="hidden"
        animate="visible"
      >
        <h1 className={styles.name}>Liran Tulchinski</h1>
        <p className={styles.role}>Full Stack & 3D Systems Developer</p>

        <p className={styles.description}>
          Building spatial, data-driven and mission-critical systems.
        </p>

        <div className={styles.links}>
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#contact">Contact</a>
        </div>
      </motion.div>
    </section>
  );
}
