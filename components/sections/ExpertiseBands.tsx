import styles from "./ExpertiseBands.module.css";

const topWords = ["PRODUTO", "TECNOLOGIA", "ESTRATÉGIA", "INOVAÇÃO"];
const bottomWords = ["CRESCIMENTO", "NEGÓCIO", "EXPERIÊNCIA", "EVOLUÇÃO"];

function Band({ words, variant }: { words: string[]; variant: "navy" | "blue" }) {
  return (
    <div className={`${styles.band} ${styles[variant]}`} aria-hidden="true">
      <div className={styles.track}>
        {[...words, ...words].map((word, index) => (
          <span className={styles.word} key={`${word}-${index}`}>
            {word} <span className={styles.star}>✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function ExpertiseBands() {
  return (
    <section className={styles.section} aria-label="Nossa experiência em produto, tecnologia e estratégia">
      <p className="srOnly">
        Produto, tecnologia, estratégia, inovação, crescimento, negócio, experiência e evolução.
      </p>
      <div className={styles.stage}>
        <div className={styles.upper}><Band words={topWords} variant="navy" /></div>
        <div className={styles.lower}><Band words={bottomWords} variant="blue" /></div>
      </div>
    </section>
  );
}
