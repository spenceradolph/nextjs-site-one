import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Scanning Site</title>
        <meta name="description" content="Make sure your company is secure" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a>Scanning Site!</a>
        </h1>

        <p className={styles.description}>Get started now!</p>

        <div className={styles.grid}>
          <Link href="/contact">
            <a className={styles.card}>
              <h2>Contact Us</h2>
              <p>Simple form and your company is on your way!</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
