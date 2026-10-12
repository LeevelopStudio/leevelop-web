import styles from "./Solutions.module.css";

const cards = [
  { title: "Organize sua operação", detail: "Produtos, sistemas, clientes e processos em um só lugar.", tone: "blue", area: "operation", icon: "⌘" },
  { title: "Sistemas", detail: "Soluções sob medida para organizar e conectar o que importa.", tone: "mint", area: "systems", icon: "▤" },
  { title: "Experiência", detail: "Jornadas mais simples para seus clientes e sua equipe.", tone: "lavender", area: "experience", icon: "♧" },
  { title: "Automação", detail: "Menos trabalho manual, mais eficiência e menos tempo no dia a dia.", tone: "mint", area: "automation", icon: "↗" },
  { title: "Decisões", detail: "A evolução certa começa pela decisão certa.", tone: "lavender", area: "decisions", icon: "♧" },
  { title: "Discovery", detail: "Entendemos o problema antes de definir o caminho.", tone: "blue", area: "discovery", icon: "⌕" },
  { title: "Tenha mais controle", detail: "Transforme informações dispersas em uma visão mais clara do negócio.", tone: "mint", area: "control", icon: "▣" },
  { title: "Arquitetura & Tecnologia", detail: "Estrutura sólida e preparada para acompanhar a evolução do negócio.", tone: "blue", area: "architecture", icon: "➤" },
  { title: "Integrações & IA", detail: "Conectamos sistemas e aplicamos IA quando ela realmente gera valor.", tone: "lavender", area: "integrations", icon: "◇" },
] as const;

export function Solutions() {
  return (
    <section id="solucoes" className={styles.section} aria-labelledby="solutions-title">
      <div className="container">
        <div className={styles.intro}>
          <p className="eyebrow">O QUE PODEMOS CONSTRUIR JUNTOS</p>
          <h2 id="solutions-title" className={styles.heading}>Soluções que fazem sentido</h2>
        </div>
        <div className={styles.grid}>
          {cards.map(card => (
            <article key={card.area} className={`${styles.card} ${styles[card.tone]} ${styles[card.area]}`}>
              <span className={styles.icon} aria-hidden="true">{card.icon}</span>
              <div className={styles.cardContent}>
                <h3>{card.title}</h3><p>{card.detail}</p>
                {["operation","architecture","integrations"].includes(card.area) && <span className={styles.arrow} aria-hidden="true">→</span>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
