import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import SearchBar from "@easyops-cn/docusaurus-search-local/dist/client/client/theme/SearchBar/SearchBar";

import HomePageContent from "../components/HomePageContent";

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

const PopularTopics = () => (
  <span>
    {popularArticles.map((article, index) => {
      const endOfLink = popularArticles.length - 1 == index ? "" : ", ";
      return (
        <React.Fragment>
          <Link to={article.link}>{article.name}</Link>
          {endOfLink}
        </React.Fragment>
      );
    })}
  </span>
);

const HomePageHeader = () => {
  return (
    <header
      className={clsx(styles.heroBanner, styles.hero, styles["hero--primary"])}
    >
      <div className="container">
        <h1 className={styles["hero__title"]}>How can we help?</h1>

        <div className="search-main-page">
          <SearchBar />
        </div>

        <div className={styles["hero__links"]}>
          Popular topics: <PopularTopics />
        </div>
      </div>
    </header>
  );
};

const HomePage = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomePageHeader />

      <HomePageContent />
    </Layout>
  );
};

export default HomePage;
