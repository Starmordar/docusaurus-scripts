import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";
import HelpBrowse from "../HelpBrowse";

import { getSectionId } from "../../utils/section";

const HomePageContent = () => {
  return (
    <section className={styles.features}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h3 style={{ margin: 0 }}>User Guides</h3>

          <p style={{ fontSize: "12px" }}>
            Browse articles about every module or{" "}
            <Link to={`docs/${getSectionId()}`}>view all articles</Link>
          </p>
          <div style={{ marginTop: "2.5rem" }}>
            <HelpBrowse />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageContent;
