import React from "react";
import Meta from "../components/Meta";
import { motion } from "framer-motion";
import styles from "../styles/About.module.css";
import DisplayPicture from "../components/DisplayPicture";
import {AiFillEye} from 'react-icons/ai'
const containerVariant = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
  leave: {
    x: "-100vw",
    transition: {
      duration: 0.3,
      type: "spring",
      dampness: 10,
    },
  },
};

const buttonVariant = {
    hover:{
        scaleX:1.1,
        backgroundColor: "#a228f5",
        transition:{
            duration:1.1,
            yoyo: Infinity
        }
    },
  
}

export default function about() {
  return (
    <>
      <Meta />
      <section title="Contact Page" className={`${styles.main} px-4 py-3`}>
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          exit="leave"
          className={` container  card  shadow bg-dark d-flex   justify-content-center ${styles.container}`}
        >
          <div className="row p-4 h-100">
            <div className="col-md-5">
              <DisplayPicture />
            </div>
            <div
              title="About Me"
              className="col-md-7 py-auto d-flex flex-column p-4 text-white justify-content-center"
            >
              <h1 className="">Samir Shrestha</h1>
              <i>Software Developer</i>

              <p className="py-4">
                Enthusiastic developer eager to contribute to team success
                through hard work, attention to detail and excellent
                organizational skills. Motivated to learn, grow and excel in
                Software Development.
              </p>

              <div >
                <motion.a
                target="_blank"
                href="/pdf/resume.pdf"
                variants={buttonVariant}
                  whileHover="hover"
                  title="Resume"
                className={`btn btn-sm fs-6 ${styles.btn}`}>
                    <AiFillEye className="mx-2 fs-5"/>
                    <span className="fw-bold">Check Out My Resume</span></motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
