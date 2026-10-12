import styles from "./DecisionProcess.module.css";

const steps = [
  { title: "Compreender", detail: "Entendemos o negócio, as pessoas e o contexto." },
  { title: "Analisar", detail: "Exploramos problemas, necessidades e oportunidades." },
  { title: "Decidir", detail: "Definimos o que faz sentido priorizar agora." },
  { title: "Construir", detail: "Transformamos a decisão em uma solução real." },
  { title: "Evoluir", detail: "Aprendemos, ajustamos e seguimos evoluindo juntos." },
];

export function DecisionProcess() {
  return (
    <section id="como-trabalhamos" className={styles.section} aria-labelledby="process-title">
      <div className="container">
        <p className={styles.script}>(olá, mundo!)</p>
        <h2 id="process-title" className={styles.title}>
          Antes de construir, existe uma decisão a tomar. <span>O que realmente</span><br className={styles.desktopOnly} /> <span>faz sentido</span> para o seu negócio agora?
        </h2>
        <div className={styles.timeline}>
          <svg className={styles.curve} viewBox="0 0 1000 130" preserveAspectRatio="none" aria-hidden="true">
            <path d="M 20 75 C 100 5 155 140 245 75 S 385 5 450 40 S 590 140 670 85 S 840 85 980 45" fill="none" stroke="#65cbd0" strokeWidth="1.5"/>
            <circle cx="20" cy="75" r="6" fill="#123653"/><circle cx="245" cy="75" r="6" fill="#123653"/>
            <circle cx="450" cy="40" r="6" fill="#123653"/><circle cx="670" cy="85" r="8" fill="#35a2ff"/>
            <circle cx="980" cy="45" r="6" fill="#28bfd2"/>
          </svg>
          <ol className={styles.steps}>{steps.map((step,index) => (
            <li key={step.title} className={styles.step}>
              <h3 className={index===3?styles.accent:undefined}>{step.title}</h3>
              <p>{step.detail}</p>
            </li>
          ))}</ol>
        </div>
      </div>
    </section>
  );
}
