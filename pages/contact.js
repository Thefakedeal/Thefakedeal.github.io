import Meta from "../components/Meta";
import styles from "../styles/Contact.module.css";
import { motion } from "framer-motion";
import DisplayPicture from "../components/DisplayPicture";
import {GoMailRead, GoMarkGithub} from 'react-icons/go'
import { AiFillLinkedin , AiFillInstagram} from "react-icons/ai";
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

const hoverStyle={
    color: ["#a228f5", "#ee1aca", "#ee1a1a"],
    transition: {
        yoyo: Infinity,
        duration: 2,
        ease: "easeInOut",
    },
}

export default function contact() {
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
          <div className="row px-4 py-4 h-100">
          <div
            className="col-md-5
                        "
          >
            <DisplayPicture />
          </div>
          <section title="Contact Details" className="col-md-7 py-auto d-flex flex-column p-4 text-white justify-content-center">
                <h1 className="">Samir Shrestha</h1>
                <i >Software Developer</i>
                <div className="mt-4">
                <div title="Email"  className="py-2">
                    <motion.a 
                      animate={{
                        color: "#FFFFFF"
                      }}
                     whileHover={hoverStyle}
                     whileFocus={hoverStyle}
                     whileTap={hoverStyle}
                    href="mailto:theonlysamir@gmail.com" title="Email" className={`fs-5 ${styles.link}`}>
                        <GoMailRead /> theonlysamir@gmail.com
                    </motion.a>
                    
                </div>

                <div title="Github Profile"  className="py-2">
                    
                    <motion.a
                      animate={{
                        color: "#FFFFFF"
                      }}
                      whileHover={hoverStyle}
                     whileFocus={hoverStyle}
                     whileTap={hoverStyle}
                    href="https://www.github.com/thefakedeal" target="_blank" title="Github" className={`fs-5 ${styles.link}`}>
                        <GoMarkGithub /> thefakedeal
                    </motion.a>
                </div>
                
                <div title="LinkedIn Profile"   className="py-2">
                    
                    <motion.a
                      animate={{
                        color: "#FFFFFF"
                      }}
                      whileHover={hoverStyle}
                      whileFocus={hoverStyle}
                      whileTap={hoverStyle}
                    href="https://www.linkedin.com/in/samir-shrestha-16050a210/" target="_blank" title="LinkedIn" className={`fs-5 ${styles.link}`}>
                        <AiFillLinkedin /> Samir Shrestha
                    </motion.a>
                </div>

                <div title="LinkedIn Profile"  className="py-2">
                    
                    <motion.a 
                      animate={{
                        color: "#FFFFFF"
                      }}
                      whileHover={hoverStyle}
                     whileFocus={hoverStyle}
                     whileTap={hoverStyle}
                    href="https://www.instagram.com/thefakedeal" title="LinkedIn" target="_blank" className={`fs-5 ${styles.link}`}>
                        <AiFillInstagram /> thefakedeal
                    </motion.a>
                </div>
                </div>
          </section>
          </div>
        </motion.div>
      </section>
    </>
  );
}
