import styles from "./Services.module.css";

const services = [
  { icon: "◈", title: "Consultoria & Discovery", detail: "Clareza sobre problemas, oportunidades e próximos passos." },
  { icon: "▧", title: "Landing pages", detail: "Presença digital que comunica valor e gera conexões." },
  { icon: "◉", title: "Apps", detail: "Experiências digitais úteis, intuitivas e escaláveis." },
  { icon: "⌘", title: "Sistemas", detail: "Soluções sob medida para processos e operações." },
  { icon: "↗", title: "Automação", detail: "Menos tarefas repetitivas, mais espaço para crescer." },
  { icon: "✳", title: "Produtos digitais", detail: "Da ideia à evolução contínua de produtos." },
];

export function Services() {
  return (
    <section id="projetos" className={styles.section} aria-labelledby="services-title">
      <div className="container">
        <div className={styles.intro}>
          <p className="eyebrow">Nossos serviços</p>
          <h2 id="services-title" className={styles.title}>Por onde podemos <span>começar?</span></h2>
          <p>Escolha o desafio. Nós ajudamos a construir o caminho.</p>
        </div>
        <div className={styles.grid}>
          {services.map((service) => (
            <article key={service.title} className={styles.card}>
              <span className={styles.icon} aria-hidden="true">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
