import React from "react";
import styles from "../../styles/footer.module.css"

import facebook from "../images/Facebook.png";
import twitter from "../images/Twitter.png";
import github from "../images/Github.png";
import instagram from "../images/Instagram.png";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerIcon}>
          <a className={styles.footerIcon1} href="#"><img src={twitter} alt="twitter" /></a>
          <a className={styles.footerIcon2} href="#"><img src={facebook} alt="facebook" /></a>
          <a className={styles.footerIcon3} href="#"><img src={instagram} alt="github" /></a>
          <a href="#"><img src={github} alt="github" /></a>
      </div>
    </div>
  );
}

export default Footer;
