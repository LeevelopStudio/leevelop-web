import Link from "next/link";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className="container">
        <div className={styles.content}>
          <h1 id="hero-title" className={styles.title}>
            <span className={styles.blue}>Crescer</span> muda a
            <br />
            forma de <span className={styles.cyan}>tomar</span>
            <br />
            melhores <span className={styles.indigo}>decisões</span>
          </h1>
          <p className={styles.description}>
            Seu negócio cresceu. Agora, algumas decisões já não são tão simples quanto antes.
          </p>
          <Link className={styles.cta} href="mailto:contato@leevelop.com.br?subject=Vamos%20conversar">
            Vamos conversar <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
