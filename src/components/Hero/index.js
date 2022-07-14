import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

export function Hero({ title, subTitle, label, link }) {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__subtitle">{subTitle}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to={link}>
            {label}
          </Link>
        </div>
      </div>
    </header>
  );
}
