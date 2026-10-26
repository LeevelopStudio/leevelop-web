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
          <svg className={styles.curve} viewBox="0 0 1200 175" preserveAspectRatio="none" aria-hidden="true">
            <path d="M60 100 C145 38 240 142 330 112 C435 76 500 15 600 45 C700 52 785 148 870 114 C960 78 1050 98 1140 78" fill="none" stroke="#8FD7D3" strokeWidth="2"/>
            <circle cx="60" cy="100" r="8" fill="#339DFF"/><circle cx="330" cy="112" r="8" fill="#112F4B"/><circle cx="600" cy="45" r="8" fill="#112F4B"/><circle cx="870" cy="114" r="8" fill="#112F4B"/><circle cx="1140" cy="78" r="8" fill="#29B9CD"/>
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
