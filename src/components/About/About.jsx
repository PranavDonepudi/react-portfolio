import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Earning my Master's degree from Rice University, I honed advanced software engineering skills, delving into machine learning and artificial intelligence. 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Software Developer Intern</h3>
              <p>
                Presently at SBS CORP, my focus lies in leveraging my expertise in JavaScript frameworks and Information and Communications Technology (ICT) to innovate and optimize application deployment. 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Software Engineer</h3>
              <p>
               With a passion for creating impactful user-centric software, I am eager to contribute to projects that challenge and expand my technical progress. Our team at DXC Technology thrived as I immersed myself in web application development, mastering JavaScript, HTML, CSS, and Node.js to deliver robust solutions to a diverse clientele.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
