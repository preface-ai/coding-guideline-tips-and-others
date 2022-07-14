import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { Hero } from "@site/src/components/Hero";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="There isn't a thing that cannot be learnt."
    >
      <main>
        <Hero
          title={siteConfig.title}
          subTitle={siteConfig.tagline}
          label={"Coding Guideline"}
          link={"/guidelines/coding"}
        />
      </main>
    </Layout>
  );
}
