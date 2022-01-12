import Head from "next/head";
import Feature1 from "../components/feature/feature1";
import Hero1 from "../components/hero/hero1";

export default function Home() {
  return (
    <>
      <Head>
        <title>Discord clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero1 />
        <Feature1 />
      </div>
    </>
  );
}
