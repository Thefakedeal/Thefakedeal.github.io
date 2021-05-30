import "../styles/globals.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeLayout from "../components/Layouts/HomeLayout";
import Head from "next/head";
import OpenGraph from "../components/OpenGraph";
function MyApp({ Component, pageProps }) {
  return (
    <HomeLayout>
      <Head>
        <OpenGraph />
      </Head>
      <Component {...pageProps} />
    </HomeLayout>
  );
}

export default MyApp;
