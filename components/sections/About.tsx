import styles from "./About.module.css";
import { FounderHeadline } from "./FounderHeadline";
import { LeevelopIsotype } from "../brand/LeevelopIsotype";

export function About() {
  return (
    <section id="sobre" className={styles.section} aria-labelledby="about-title">
      <div className="container">
        <h2 id="about-title" className={styles.title}>Meet <span>Leevelop</span></h2>
        <div className={styles.people}>
          <article className={styles.person}>
            <div className={styles.portraitPlaceholder} role="img" aria-label="Espaço reservado para a foto de Billy Lee Wong">BL</div>
            <h3>Billy Lee Wong</h3>
            <p className={styles.role}>Software Architecture &amp; Technology</p>
            <p>Transformo complexidade técnica em soluções escaláveis, seguras e alinhadas aos objetivos do negócio.</p>
          </article>
          <div className={styles.center}>
            <FounderHeadline />
            <div className={styles.connector} aria-hidden="true"><span><LeevelopIsotype size={32} aria-hidden="true"/></span><i/><span><LeevelopIsotype size={32} aria-hidden="true"/></span></div>
            <p>Unimos visão de negócio, experiência do usuário e tecnologia para tomar decisões melhores e construir apenas o que realmente importa.</p>
          </div>
          <article className={styles.person}>
            <div className={styles.portraitPlaceholder} role="img" aria-label="Espaço reservado para a foto de Stephanie Wong">SW</div>
            <h3>Stephanie Wong</h3>
            <p className={styles.role}>Product Designer &amp; Business Strategist</p>
            <p>Entendo pessoas, comportamentos e oportunidades para criar experiências que geram valor real.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
