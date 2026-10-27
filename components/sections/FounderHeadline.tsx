"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./FounderHeadline.module.css";

const TEXT = "Estratégia e tecnologia, trabalhando como um só time.";

export function FounderHeadline() {
  const ref = useRef<HTMLHeadingElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.3) setActive(true);
      else if (!entry.isIntersecting) setActive(false);
    }, { threshold: [0, 0.3] });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const separator = TEXT.indexOf(",") + 1;
  const characters = Array.from(TEXT);
  return (
    <h3 ref={ref} className={styles.headline} aria-label={TEXT}>
      {characters.map((character, index) => {
        const shouldColor = index > separator && character.trim().length > 0;
        return <span key={index} aria-hidden="true" className={shouldColor ? styles.animated : undefined}
          style={shouldColor ? { color: active ? "#339DFF" : "#112F4B", transitionDelay: active ? `${(index - separator - 1) * .03}s` : "0s" } : undefined}>
          {character}
        </span>;
      })}
    </h3>
  );
}
