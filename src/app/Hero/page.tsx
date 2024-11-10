import { BaseInfo } from "@/app/Data/page";
import Image from "next/image";
import React from "react";
import { FaDownload } from "react-icons/fa6";
import styles from "../Styles/Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <div className={styles.gridContainer}>
          {/* Text Content */}
          <div>
            {/* Sub Heading */}
            <h1 className={styles.subHeading}>{BaseInfo.name}</h1>
            {/* Title */}
            <h1 className={styles.title}>{BaseInfo.position}</h1>
            {/* Description */}
            <p className={styles.description}>{BaseInfo.description}</p>
            {/* Button */}
            <button className={styles.downloadButton}>
              <span>
                <a href="/Shaheer Niazi CV 03062021.pdf" download>
                  Download CV
                </a>
              </span>
              <FaDownload />
            </button>
          </div>
          {/* Image Content */}
          <div className={styles.imageContainer}>
            <Image
              src={BaseInfo.profilePic}
              alt={BaseInfo.name}
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
