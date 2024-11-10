import React from "react";
import { navLink } from "../../../constant/constant";
import Link from "next/link";
import { CgClose } from "react-icons/cg";
import styles from "../Styles/MobileNav.module.css";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? styles.navOpen : styles.navClosed;

  return (
    <div>
      {/* Overlay */}
      <div className={`${styles.overlay} ${navOpen}`} onClick={closeNav}></div>

      {/* Nav Links */}
      <div className={`${styles.navContainer} ${navOpen}`}>
        {/* Close Button */}
        <span className={styles.closeButton}>
          <CgClose onClick={closeNav} />
        </span>

        {navLink.map((navlink) => (
          <Link key={navlink.id} href={navlink.url}>
            <p className={styles.navLink}>{navlink.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
