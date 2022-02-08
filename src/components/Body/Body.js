import React from "react";
import emailImage from "../images/MessageIcon.png";
import linkImage from "../images/linkedin.png";
import styles from "../../styles/body.module.css"

function Body() {
  return (
    <div>
      <div className={styles.first}>
        <h1>Laura Smith</h1>
        <p className={styles.p1}>Frontend Developer</p>
        <p className={styles.p2}> laurasmith.website</p>
      </div>
      <div className={styles.buttons}>
        <button className={styles.button1}>
          <i>
            <img src={emailImage} alt="" />
          </i>
          Email
        </button>
        <button style = {{backgroundColor: " #5093E2", color:"#fff"}}>
          <i>
            <img  src={linkImage} alt="" />
          </i>
          Linkedin
        </button>
      </div>
      <div>
        <div className={styles.about}>
          <h2>About</h2>
          <p>
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
        </div>
        <div className={styles.interest}>
          <h2>Interests</h2>
          <p>
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Body;
