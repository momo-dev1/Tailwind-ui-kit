import Head from "next/head";
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
      </div>
    </>
  );
}
