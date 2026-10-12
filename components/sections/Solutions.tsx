import styles from "./Solutions.module.css";

const solutions = [
  {
    number: "01",
    title: "Clareza para decidir",
    description: "Entendemos o cenário, identificamos oportunidades e ajudamos você a escolher os próximos passos com confiança.",
    tone: "blue",
  },
  {
    number: "02",
    title: "Produtos que fazem sentido",
    description: "Conectamos necessidades reais, experiência e tecnologia para criar soluções digitais relevantes.",
    tone: "mint",
  },
  {
    number: "03",
    title: "Tecnologia para evoluir",
    description: "Transformamos boas decisões em experiências, sistemas e produtos preparados para crescer.",
    tone: "lavender",
  },
] as const;

export function Solutions() {
  return (
    <section id="solucoes" className={styles.section} aria-labelledby="solutions-title">
      <div className="container">
        <div className={styles.intro}>
          <p className="eyebrow">O que fazemos</p>
          <h2 id="solutions-title" className={styles.heading}>
            Soluções que <span>fazem sentido</span>
          </h2>
          <p className={styles.lead}>
            Cada negócio vive um momento diferente. Nosso trabalho é encontrar o caminho certo para o seu.
          </p>
        </div>
        <div className={styles.grid}>
          {solutions.map((solution) => (
            <article key={solution.number} className={`${styles.card} ${styles[solution.tone]}`}>
              <span className={styles.number}>{solution.number}</span>
              <div>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
              </div>
              <span className={styles.arrow} aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
