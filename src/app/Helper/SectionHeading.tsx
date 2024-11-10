import React, { ReactNode } from "react";
import styles from "../Styles/SectionHeading.module.css";

type Props = {
  children: ReactNode;
};

const SectionHeading = ({ children }: Props) => {
  return <h1 className={styles.sectionHeading}>{children}</h1>;
};

export default SectionHeading;
