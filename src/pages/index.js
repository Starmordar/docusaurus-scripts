import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import SearchBar from "@easyops-cn/docusaurus-search-local/dist/client/client/theme/SearchBar/SearchBar";

import HomepageFeatures from "../components/HomepageFeatures";

import styles from "./index.module.css";

const popularArticles = [
  {
    name: "HTTP Squid Proxy",
    link: "proxy-section/squid-proxy",
  },
  {
    name: "SOCKS Dante Proxy",
    link: "proxy-section/dante-proxy",
  },
];

function HomepageHeader() {
  const getPopularArticlesJSX = () =>
    popularArticles.map((article, index) =>
      index === popularArticles.length - 1 ? (
        <>
          <Link to={article.link}>{article.name}</Link>
          ...
        </>
      ) : (
        <>
          <Link to={article.link}>{article.name}</Link>,{" "}
        </>
      )
    );

  return (
    <header
      className={clsx(styles.heroBanner, styles.hero, styles["hero--primary"])}
    >
      <div className="container">
        <h1 className={styles["hero__title"]}>How can we help?</h1>
        <div className="search-main-page">
          <SearchBar handleSearchBarToggle={() => {}} />
        </div>
        <div className={styles["hero__links"]}>
          Popular articles: {getPopularArticlesJSX()}
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
