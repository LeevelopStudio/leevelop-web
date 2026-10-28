import styles from "./Services.module.css";
import { ServiceIcon, type ServiceIconName } from "../brand/ServiceIcon";

const services = [
  { icon: "compass" as ServiceIconName, title: "Consultoria & Discovery", detail: "Para entender o problema e definir por onde começar." },
  { icon: "browser" as ServiceIconName, title: "Landing pages", detail: "Para apresentar, validar ou converter uma proposta." },
  { icon: "mobile" as ServiceIconName, title: "Apps", detail: "Experiências digitais pensadas para estar onde seus clientes estão." },
  { icon: "system" as ServiceIconName, title: "Sistemas", detail: "Ferramentas sob medida para organizar e sustentar sua operação." },
  { icon: "automation" as ServiceIconName, title: "Automação", detail: "Processos mais eficientes, integrados e com menos trabalho manual." },
  { icon: "product" as ServiceIconName, title: "Produtos digitais", detail: "Da ideia à construção de soluções que podem crescer com o negócio." },
];

export function Services() {
  return (
    <section id="servicos" className={styles.section} aria-labelledby="services-title">
      <div className={styles.container}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>COMO PODEMOS AJUDAR</p>
          <h2 id="services-title" className={styles.title}>Por onde podemos começar?</h2>
        </div>
        <div className={styles.grid}>
          {services.map((service) => (
            <article key={service.title} className={styles.card}>
              <span className={styles.icon} aria-hidden="true"><ServiceIcon name={service.icon}/></span>
              <h3>{service.title}</h3>
              <p>{service.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
