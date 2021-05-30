import ContactDetails from "../components/ContactDetails";
// import ContactBanner from "../components/ContactBanner";
import ContactCard from "../components/ContactCard";
import Head from "next/head";
export default function contact() {
  return (
    <>
      <Head>
        <title>Samir Shrestha | Contact</title>
        <meta
          name="description"
          content=" Enthusiastic developer eager to contribute to team success through
          hard work, attention to detail and excellent organizational skills.
          Motivated to learn, grow and excel in Software Development."
        ></meta>
        <meta
          name="keywords"
          content="react, node js, laravel, web development, javascript, php"
        ></meta>
      </Head>
      {/* <ContactBanner /> */}
      <ContactCard />
    </>
  );
}
