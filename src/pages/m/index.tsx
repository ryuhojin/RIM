import Head from "next/head";
import styles from "@/styles/m/Home.module.css";
import BaseLayout from "@/layouts/m/BaseLayout";

const HomePage_M = () => {
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
          <div className={`${styles.wrapper}`}>12adsfadsfadsf3</div>
          <div className={`${styles.hill}`}>345</div>
        </main>
      </BaseLayout>
    </>
  );
};
export default HomePage_M;
