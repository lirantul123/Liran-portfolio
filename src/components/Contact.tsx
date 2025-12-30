import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./Contact.module.css";
import { reveal } from "../animations/reveal";

export default function Contact({ id }: { id: string }) {
  return (
    <section id={id} className={styles.section}>
      {/* Background canvas */}
      <div className={styles.bgGrid}></div>

      <motion.div
        className={styles.contentWrapper}
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className={styles.title}>Contact</h2>
        <p className={styles.content}>
          Let’s build something serious.
          <br />
          <br />
          <a href="mailto:lira.tulchin@gmail.com" className={styles.email}>
            lira.tulchin@gmail.com
          </a>
        </p>

        {/* Social links */}
        <div className={styles.socialLinks}>
          <a
            href="https://github.com/lirantul123"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/lirantul/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
