"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { navLink } from "../../../constant/constant";
import { HiBars3BottomRight } from "react-icons/hi2";
import styles from "../Styles/Navbar.module.css";

// Define Props Type
type Props = {
  openNav: () => void;
};

const Navbar = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div className={`${styles.navbar} ${navBg ? styles.bgActive : ""}`}>
      <div className={styles.navContainer}>
        {/* Navigation Links */}
        <div className={styles.navLinks}>
          {navLink.map((navlink) => (
            <Link key={navlink.id} href={navlink.url}>
              <p className={styles.navLink}>{navlink.label}</p>
            </Link>
          ))}
        </div>
        {/* Buttons */}
        <div className={styles.buttonContainer}>
          <button className={styles.hireMeButton}>Hire Me</button>
          <span className={styles.burgerMenu} onClick={openNav}>
            <HiBars3BottomRight size={32} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
