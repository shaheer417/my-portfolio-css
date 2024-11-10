"use client";

import Image from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";
import styles from "../Styles/ServiceCard.module.css"; // Import the styles

type Props = {
  service: {
    id: number;
    title: string;
    description: string;
    icon: string;
  };
};

const ServiceCard = ({ service }: Props) => {
  return (
    <Tilt className={styles.serviceCard}>
      <Image src={service.icon} alt={service.title} width={50} height={50} />
      <h1 className={styles.serviceTitle}>{service.title}</h1>
      <p className={styles.serviceDescription}>{service.description}</p>
    </Tilt>
  );
};

export default ServiceCard;
