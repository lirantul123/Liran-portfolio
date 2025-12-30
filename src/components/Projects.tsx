import { motion } from "framer-motion";
import styles from "./Section.module.css";
import { reveal } from "../animations/reveal";

const projects = [
  {
    name: "DirectionsLeader",
    desc: "Navigation engine based on compass direction and terrain constraints.",
    tech: "C# · Algorithms · Geometry",
  },
  {
    name: "SmartCityApp",
    desc: "Role-based smart city management system.",
    tech: "Java · Backend",
  },
  {
    name: "Yadata",
    desc: "Full-stack real estate valuation platform.",
    tech: "Full Stack · Python",
  },
];

export default function Projects() {
  return (
    <motion.section
      className="section"
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className={styles.title}>Projects</h2>

      <div className={styles.content}>
        {projects.map(p => (
          <div key={p.name} style={{ marginBottom: "32px" }}>
            <strong>{p.name}</strong>
            <p>{p.desc}</p>
            <small>{p.tech}</small>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
