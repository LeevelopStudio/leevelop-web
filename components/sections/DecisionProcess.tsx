import styles from "./DecisionProcess.module.css";

const steps = [
  { title: "Compreender", detail: "Escutamos o contexto e os desafios reais." },
  { title: "Analisar", detail: "Conectamos dados, necessidades e oportunidades." },
  { title: "Decidir", detail: "Definimos prioridades e caminhos possíveis." },
  { title: "Construir", detail: "Transformamos decisões em soluções." },
  { title: "Evoluir", detail: "Aprendemos, medimos e melhoramos continuamente." },
];

export function DecisionProcess() {
  return (
    <section id="como-trabalhamos" className={styles.section} aria-labelledby="process-title">
      <div className="container">
        <p className="eyebrow">Como trabalhamos</p>
        <h2 id="process-title" className={styles.title}>
          Antes de construir, existe uma <span>decisão a tomar.</span>
        </h2>
        <p className={styles.subtitle}>
          O que realmente faz sentido para o seu negócio agora?
        </p>
        <ol className={styles.steps}>
          {steps.map((step, index) => (
            <li key={step.title} className={styles.step}>
              <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
