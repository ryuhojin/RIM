import Head from "next/head";
import { Inter } from "next/font/google";
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
        <StarryNight />
        <div
          style={{ height: "100vh", width: "100%", background: "green" }}
        ></div>
      </BaseLayout>
    </>
  );
};
export default HomePage;
