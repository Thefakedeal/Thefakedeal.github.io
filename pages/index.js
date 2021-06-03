import Head from "next/head";
import Banner from "../components/Banner";
import technologies from "../json/technologies.json";
import projects from '../json/projects.json'
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";

export default function Home({ technologies,projects }) {
  return (
    <>
      <Head>
        <title>Samir Shrestha | The Fake Deal</title>
        <meta name="description" content="Web Developer"></meta>
        <meta name="keywords" content="react, node js, laravel, web development, javascript, php"></meta>
      </Head>
      <Banner />
      <Projects projects={projects}/>
      <Technologies technologies={technologies} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      technologies,
      projects
    },
  };
}
