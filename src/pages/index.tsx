import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import BaseLayout from "@/layouts/BaseLayout";
import StarryNight from "@/components/background/StarryNight";

const inter = Inter({ subsets: ["latin"] });

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Rest In Memories</title>
        <meta name="description" content="Rest In Memories" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseLayout>
        <main className={`${styles.container}`}>
          <div style={{ height: "100vh", width: "100%", background: "salmon" }}>
          </div>
          <div style={{ height: "100vh", width: "100%", background: "green" }}>
          </div>
        </main>
      </BaseLayout>
    </>
  );
};
export default HomePage;
