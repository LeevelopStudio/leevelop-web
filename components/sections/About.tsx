import styles from "./About.module.css";

export function About() {
  return (
    <section id="sobre" className={styles.section} aria-labelledby="about-title">
      <div className="container">
        <p className="eyebrow">Quem somos</p>
        <h2 id="about-title" className={styles.title}>Meet <span>Leevelop</span></h2>
        <div className={styles.content}>
          <h3>Estratégia e tecnologia, trabalhando como um só time.</h3>
          <div className={styles.copy}>
            <p>Somos um estúdio que conecta visão de negócio, design de produtos e engenharia de software para transformar desafios em soluções relevantes.</p>
            <p>Acreditamos em entender antes de construir — e em criar experiências digitais que possam evoluir com cada negócio.</p>
            <p className={styles.names}>Billy Lee Wong &amp; Stephanie Wong</p>
          </div>
        </div>
      </div>
    </section>
  );
}
