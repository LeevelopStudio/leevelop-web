"use client";

import { useState } from "react";
import styles from "./DecisionProcess.module.css";

const steps = [
  { title: "Compreender", detail: "Entendemos o negócio, as pessoas e o contexto." },
  { title: "Analisar", detail: "Exploramos problemas, necessidades e oportunidades." },
  { title: "Decidir", detail: "Definimos o que faz sentido priorizar agora." },
  { title: "Construir", detail: "Transformamos a decisão em uma solução real." },
  { title: "Evoluir", detail: "Aprendemos, ajustamos e seguimos evoluindo juntos." },
] as const;

const points = [
  { x: 60, y: 100 },
  { x: 330, y: 112 },
  { x: 600, y: 45 },
  { x: 870, y: 114 },
  { x: 1140, y: 78 },
] as const;

export function DecisionProcess() {
  const [active, setActive] = useState(0);
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
            {points.map((point, index) => (
              <circle key={index} cx={point.x} cy={point.y} r={active === index ? 10 : 8}
                fill={active === index ? "#339DFF" : index === 4 ? "#29B9CD" : "#112F4B"}
                className={styles.point}/>
            ))}
            <circle cx={points[active].x} cy={points[active].y} r="6" fill="#339DFF" className={styles.movingPoint}/>
          </svg>
          <ol className={styles.steps}>{steps.map((step, index) => (
            <li key={step.title} className={styles.step}>
              <button type="button" className={`${styles.stepButton} ${active === index ? styles.selected : ""}`}
                aria-pressed={active === index} onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)} onClick={() => setActive(index)}>
                <span className={styles.mobileDot} aria-hidden="true"/>
                <span className={styles.stepCopy}>
                  <span className={styles.stepHeading}>{step.title}</span>
                  <span className={styles.stepDetail}>{step.detail}</span>
                </span>
              </button>
            </li>
          ))}</ol>
        </div>
      </div>
    </section>
  );
}
