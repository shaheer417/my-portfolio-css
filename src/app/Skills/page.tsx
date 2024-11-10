import React from "react";
import SectionHeading from "../Helper/SectionHeading";
import { skillsData } from "@/app/Data/page";
import SkillsCars from "./SkillsCars";
import styles from "../Styles/Skills.module.css";

const Skills = () => {
  return (
    <div className={styles.skillsSection}>
      <SectionHeading>Skills</SectionHeading>
      <div className={styles.skillsGrid}>
        {skillsData.map((skill) => (
          <div key={skill.id}>
            <SkillsCars skill={skill} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
