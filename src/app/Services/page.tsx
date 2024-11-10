import React from "react";
import SectionHeading from "../Helper/SectionHeading";
import { servicesData } from "@/app/Data/page";
import ServiceCard from "./ServiceCard";
import styles from "../Styles/Services.module.css";

const Services = () => {
  return (
    <div className={styles.servicesSection}>
      <SectionHeading>Services</SectionHeading>
      <div className={styles.servicesGrid}>
        {servicesData.map((service) => (
          <div key={service.id}>
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
