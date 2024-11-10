import React from "react";
import SectionHeading from "../Helper/SectionHeading";
import { aboutInfo } from "@/app/Data/page";
import { FaCheck } from "react-icons/fa6";
import Image from "next/image";
import styles from "../Styles/About.module.css";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <SectionHeading>About Me</SectionHeading>
      <div className={styles.aboutContent}>
        {/* Text Content */}
        <div>
          <h1 className={styles.aboutTitle}>{aboutInfo.title}</h1>
          <p className={styles.aboutDescription}>{aboutInfo.description}</p>
          <div className={styles.iconTextWrapper}>
            <div className={styles.iconText}>
              <div className={`${styles.icon} ${styles.blueIcon}`}>
                <span className={styles.iconCheck}>
                  <FaCheck />
                </span>
              </div>
              <p className={styles.iconDescription}>
                Tax & Annual Financial Audit Consultant
              </p>
            </div>
            <div className={styles.iconText}>
              <div className={`${styles.icon} ${styles.greenIcon}`}>
                <span className={styles.iconCheck}>
                  <FaCheck />
                </span>
              </div>
              <p className={styles.iconDescription}>Front-End Web Developer</p>
            </div>
            <div className={styles.iconText}>
              <div className={`${styles.icon} ${styles.orangeIcon}`}>
                <span className={styles.iconCheck}>
                  <FaCheck />
                </span>
              </div>
              <p className={styles.iconDescription}>Full-Stack Web Developer</p>
            </div>
          </div>
        </div>
        {/* Stats Content */}
        <div className={styles.statsContent}>
          <div className={styles.stat}>
            <Image
              src="/images/customer.png"
              alt="image"
              width={80}
              height={80}
              className={styles.statImage}
            />
            <p className={styles.statLabel}>Satisfied Customers</p>
            <p className={styles.statValue}>{aboutInfo.client}</p>
          </div>
          <div className={styles.stat}>
            <Image
              src="/images/experience.png"
              alt="image"
              width={80}
              height={80}
              className={styles.statImage}
            />
            <p className={styles.statLabel}>Experience</p>
            <p className={styles.statValue}>{aboutInfo.experience}</p>
          </div>
          <div className={styles.stat}>
            <Image
              src="/images/projects.png"
              alt="image"
              width={80}
              height={80}
              className={styles.statImage}
            />
            <p className={styles.statLabel}>Annual Audits</p>
            <p className={styles.statValue}>{aboutInfo.project}</p>
          </div>
          <div className={styles.stat}>
            <Image
              src="/images/rocket.png"
              alt="image"
              width={80}
              height={80}
              className={styles.statImage}
            />
            <p className={styles.statLabel}>Website Launched</p>
            <p className={styles.statValue}>{aboutInfo.website}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
