import React from "react";
import SectionHeading from "../Helper/SectionHeading";
import { projectData } from "@/app/Data/page";
import Link from "next/link";
import Image from "next/image";
import styles from "../Styles/Project.module.css";

const Project = () => {
  return (
    <div className={styles.projectSection}>
      <SectionHeading>My Projects</SectionHeading>
      <div className={styles.projectGrid}>
        {projectData.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <Link href={project.url} target="_blank">
              <Image
                src={project.image}
                width={300}
                height={200}
                alt="project"
                className={styles.projectImage}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
