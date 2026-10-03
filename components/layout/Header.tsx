import Link from "next/link";
import styles from "./Header.module.css";

const navigation = [
  { label: "Projetos", href: "#projetos" },
  { label: "O que fazemos", href: "#solucoes" },
  { label: "Como trabalhamos", href: "#como-trabalhamos" },
  { label: "Sobre a Leevelop", href: "#sobre" },
];

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link className={styles.brand} href="/" aria-label="Leevelop — início">
          <span className={styles.brandMark} aria-hidden="true">
            <span />
            <span />
          </span>
          <span className={styles.brandName}>Leevelop</span>
        </Link>

        <nav className={styles.navigation} aria-label="Navegação principal">
          {navigation.map((item) => (
            <Link key={item.href} className={styles.navLink} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className={styles.cta} href="#contato">
          Vamos conversar
          <span aria-hidden="true">→</span>
        </Link>

        <details className={styles.mobileMenu}>
          <summary aria-label="Abrir menu">
            <span />
            <span />
            <span />
          </summary>
          <nav className={styles.mobileNavigation} aria-label="Navegação móvel">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link className={styles.mobileCta} href="#contato">
              Vamos conversar <span aria-hidden="true">→</span>
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
