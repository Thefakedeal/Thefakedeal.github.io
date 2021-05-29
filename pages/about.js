import Head from 'next/head'
import Description from "../components/Description";
import CircleImage from '../components/CircleImage'
export default function about() {
  return ( 
    <>
      <Head>
      <title>Samir Shrestha|Web Developer</title>
        <meta name="description" content=" Enthusiastic developer eager to contribute to team success through
          hard work, attention to detail and excellent organizational skills.
          Motivated to learn, grow and excel in Software Development."></meta>
        <meta name="keywords" content="react, node js, laravel, web development, javascript, php"></meta>
      </Head>
      <section className="row justify-content-center container mx-auto py-4 my-4">
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <Description />
        </div>
        <div className="col-lg-6 p-4 ">
          <CircleImage />
        </div>
      </section>
    </>
  );
}
