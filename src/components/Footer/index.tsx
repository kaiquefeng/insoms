import Image from "next/image";

import styles from "./styles.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{"  "}
        <span className={styles.logo}>
          <Image src="/logo.svg" alt="Insoms" width={72} height={16} />
        </span>
      </a>
    </footer>
  );
}
