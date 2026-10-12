import Link from "next/link";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer id="contato" className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div>
            <p className={styles.eyebrow}>Vamos conversar?</p>
            <h2>Vamos construir algo que realmente <span>faça sentido?</span></h2>
          </div>
          <a className={styles.cta} href="mailto:contato@leevelop.com.br?subject=Vamos%20conversar">
            Começar uma conversa <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className={styles.bottom}>
          <Link href="/" className={styles.brand}>Leevelop<span>✳</span></Link>
          <nav aria-label="Links do rodapé">
            <Link href="#solucoes">Soluções</Link>
            <Link href="#como-trabalhamos">Como trabalhamos</Link>
            <Link href="#sobre">Sobre nós</Link>
            <a href="mailto:contato@leevelop.com.br">Contato</a>
          </nav>
          <small>© {new Date().getFullYear()} Leevelop. Todos os direitos reservados.</small>
        </div>
      </div>
    </footer>
  );
}
