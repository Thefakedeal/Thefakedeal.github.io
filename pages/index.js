import DisplayPicture from "../components/DisplayPicture";
import Meta from "../components/Meta";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      duration: 1,
      type: "spring",
      dampness: 10,
    },
  },
  leave: {
    x: "-100vw",
    transition: {
      duration: 0.3,
      type: "spring",
    },
  },
};

export default function Home() {
  return (
    <div>
      <Meta />
      <section title="hero" className={`${styles.main} py-4 px-4`}>
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          exit="leave"
          className=" container row w-100 px-4"
        >
          <section
            title="Introduction"
            className="col-md-8 d-flex align-items-md-center"
          >
            <div>
              <h1 className="text-white">
                Hello I'm Samir Shrestha. <br />
                I'm A Full Stack Web Developer!
              </h1>
              <div className={styles.links}>
                <a
                  title="Github Profile"
                  href="https://github.com/Thefakedeal"
                  target="_blank"
                >
                  <img
                    src="/img/ghub.png"
                    alt="Github"
                    className={styles.link_img}
                  />
                </a>

                <a
                  title="LinkedIn Profile"
                  href="https://www.linkedin.com/in/samir-shrestha-16050a210/"
                  target="_blank"
                >
                  <img
                    src="/img/linkedin.png"
                    alt="Linkedin"
                    className={styles.link_img}
                  />
                </a>
              </div>
            </div>
          </section>
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <div className="col-9 py-4 col-md-12">
              <DisplayPicture />
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
