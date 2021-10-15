import Image from "next/image";

import styles from "./styles.module.scss";

type feedbackProps = {
  value: string;
  error: string;
};

export function Feedback({ value, error }: feedbackProps) {
  return (
    <div className={styles.containerFeedback}>
      <div className={styles.container}>
        <Image src="/warning.svg" alt="Insoms" width={32} height={32} />
        <div className={styles.content}>
          <span className={styles.value}>{value}</span>
          <p className={styles.error}>{error}</p>
        </div>
      </div>
    </div>
  );
}
