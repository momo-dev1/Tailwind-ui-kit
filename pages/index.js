import Head from "next/head";
import Feature1 from "../components/feature/Feature1";
import Footer1 from "../components/footer/Footer1";
import Hero1 from "../components/hero/hero1";
import SideBar from "../components/SideBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Discord clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {/* <Hero1 />
        <Feature1 />
        <Footer1 /> */}
        <SideBar />
      </div>
    </>
  );
}
