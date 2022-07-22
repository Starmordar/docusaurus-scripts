import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

const helpBrowseList = [
  {
    label: "Setup Proxy",
    items: [
      {
        label: "Overview",
        link: "docs/proxy-section/intro",
      },
      {
        label: "HTTP Squid Proxy",
        link: "docs/proxy-section/squid-proxy",
      },
      {
        label: "SOCKS Dante Proxy",
        link: "docs/proxy-section/dante-proxy",
      },
      {
        label: "Proxy Chaining Setup",
        link: "docs/proxy-section/proxy-chaining",
      },
    ],
  },
  {
    label: "Setup Proxy",
    items: [
      {
        label: "Overview",
        link: "docs/proxy-section/intro",
      },
      {
        label: "HTTP Squid Proxy",
        link: "docs/proxy-section/squid-proxy",
      },
      {
        label: "SOCKS Dante Proxy",
        link: "docs/proxy-section/dante-proxy",
      },
      {
        label: "Proxy Chaining Setup",
        link: "docs/proxy-section/proxy-chaining",
      },
    ],
  },
  {
    label: "Setup Proxy",
    items: [
      {
        label: "Overview",
        link: "docs/proxy-section/intro",
      },
      {
        label: "HTTP Squid Proxy",
        link: "docs/proxy-section/squid-proxy",
      },
      {
        label: "SOCKS Dante Proxy",
        link: "docs/proxy-section/dante-proxy",
      },
      {
        label: "Proxy Chaining Setup",
        link: "docs/proxy-section/proxy-chaining",
      },
    ],
  },
];

const BrowseItem = ({ label, items }) => {
  return (
    <div className={styles.browseItem}>
      <div className={styles.browseItemBlock}>
        <div className={styles.browseItemTitle}>{label}</div>

        <div className={styles.browseItemLinkBlock}>
          {items.slice(0, 3).map((item) => (
            <Link className={styles.browseItemLink} to={item.link}>
              {item.label}
            </Link>
          ))}
          {items.length > 3 && (
            <Link className={styles.browseViewAll} to={items[0].link}>
              View all {items.length} articles {"→"}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const HelpBrowse = () => {
  return (
    <div className={styles.helpBrowse}>
      {helpBrowseList.map((item) => (
        <BrowseItem {...item} />
      ))}
    </div>
  );
};

export default HelpBrowse;
