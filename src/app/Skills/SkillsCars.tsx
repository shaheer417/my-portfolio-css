import Image from "next/image";
import React from "react";
import styles from "../Styles/SkillsCars.module.css";

type Props = {
  skill: {
    id: number;
    title: string;
    image: string;
    percent: string;
  };
};

const SkillsCars = ({ skill }: Props) => {
  const { image, percent, title } = skill;
  return (
    <div className={styles.skillCard}>
      <Image
        src={image}
        alt={title}
        width={80}
        height={80}
        className={styles.skillImage}
      />
      <h1 className={styles.skillTitle}>{title}</h1>
      <div className={styles.skillPercent}>{percent}</div>
    </div>
  );
};

export default SkillsCars;
