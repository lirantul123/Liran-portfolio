import styles from "./Resume.module.css";

interface ResumeProps {
  id: string;
}

export default function Resume({ id }: ResumeProps) {
  const resumePath = "../../public/Liran_Tulchinski_Resume.pdf";

  return (
    <section id={id} className={styles.section}>
      <div className={styles.box}>
        <h2 className={styles.title}>Resume</h2>

        <p className={styles.description}>
          Explore my life ;) — click around and see what happens!
        </p>

        <div className={styles.buttons}>
          <button
            className={`${styles.navBtn} ${styles.viewBtn}`}
            onClick={() => window.open(resumePath, "_blank")}
            title="See my secrets!"
          >
            👀 View PDF
          </button>

          <a
            href={resumePath}
            download="Liran_Tulchinski_Resume.pdf"
            className={`${styles.navBtn} ${styles.downloadBtn}`}
            title="Take me with you!"
          >
            💾 Download PDF
          </a>
        </div>
      </div>

      <div className={styles.surpriseContainer}>
        <button
          className={`${styles.navBtn} ${styles.funnyBtn}`}
          onClick={() =>
            alert("Surprise!\nRocky4 is the best movie in the series☕")
          }
          title="Click me for a surprise!"
        >
          🎉 Surprise!
        </button>
      </div>
    </section>
  );
}
