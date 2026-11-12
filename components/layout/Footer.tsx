import Link from "next/link";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer id="contato" className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div>
            <h2>Vamos construir algo que<br/> realmente <span>faça sentido?</span></h2>
            <p>Conte um pouco sobre o seu desafio.<br/>A gente começa entendendo antes de construir.</p>
          </div>
          <a className={styles.cta} href="mailto:contato@leevelop.com.br?subject=Vamos%20conversar">Vamos conversar <span aria-hidden="true">→</span></a>
        </div>
        <div className={styles.links}>
          <div><h3>Leevelop</h3><Link href="#solucoes">O que fazemos</Link><Link href="#como-trabalhamos">Como trabalhamos</Link><Link href="#sobre">Sobre a Leevelop</Link></div>
          <div><h3>Contato</h3><a href="mailto:contato@leevelop.com.br">contato@leevelop.com.br</a></div>
          <div><h3>Legal</h3><span>Privacidade</span><span>Termos de uso</span></div>
        </div>
        <div className={styles.bottom}><small>© {new Date().getFullYear()} Leevelop. Todos os direitos reservados.</small><Link href="#">Back to top ↑</Link></div>
        <div className={styles.wordmark} aria-hidden="true">Leevelop</div>
      </div>
    </footer>
  );
}
