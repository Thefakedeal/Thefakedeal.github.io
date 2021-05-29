import Head from "next/head";
import Banner from "../components/Banner";
import technologies from "../json/technologies.json";
import Technologies from "../components/Technologies";

export default function Home({ technologies }) {
  return (
    <>
      <Head>
        <title>Introduction</title>
        <meta name="description" content="Web Developer"></meta>
      </Head>
      <Banner />
      <Technologies technologies={technologies} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      technologies,
    },
  };
}
