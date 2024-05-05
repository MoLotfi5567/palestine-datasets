import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import Translate from "@docusaurus/Translate";
import { Button, KilledHeaderMarquee } from "../components";
import { HomeDailyChart } from "../components/HomeDailyChart";
import { KilledName } from "../components/KilledName";

const headerTextShadow = { textShadow: "2px 2px 1px rgba(10,10,10,0.3)" };

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <KilledHeaderMarquee />
      <div className="container" style={{ zIndex: 2 }}>
        <Heading
          as="h1"
          className={`hero__title ${styles.heroTitle}`}
          style={{ ...headerTextShadow, lineHeight: "1em" }}
        >
          <Translate>{siteConfig.title}</Translate>
        </Heading>
        <p
          className={`hero__subtitle ${styles.heroSubtitle}`}
          style={{ ...headerTextShadow, lineHeight: "1.3em" }}
        >
          {
            <Translate>
              Telling their stories through names and numbers
            </Translate>
          }
        </p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="" description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomeDailyChart />
        <KilledName />
        <div style={{ height: 40 }} />
        <div className={styles.contactBlock}>
          <div>Need help or want to collaborate?</div>
          <Button type="primary" to="/docs/contact" inline>
            Get in touch
          </Button>
        </div>
      </main>
    </Layout>
  );
}
