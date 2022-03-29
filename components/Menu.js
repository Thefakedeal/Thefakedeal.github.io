import Backdrop from "./Backdrop";
import styles from "../styles/Menu.module.css";
import Link from "next/link";
import { GoX } from "react-icons/go";
import { motion } from "framer-motion";

const listVariant = {
  hidden: {
    opacity: 0,
   
  },
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  leave: {
    opacity:0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.2,
    },
  },
};

const listItemVariant = {
  hidden: { x: "-100vw" },

  show: { x: "0vw" },

  leave: {
    x: "-100vw",
  },
};

const hoverStyle={
  color: ["#a228f5", "#ee1aca", "#ee1a1a"],
  scale: 1.2,
  transition: {
      color:{
        repeat: Infinity,
        repeatType:"mirror",
        duration: 2,
        ease: "easeInOut",
      }
  },
}

export default function Menu({ links = [], handleClose }) {
  return (
    <Backdrop>
      <GoX
        className={`${styles.close} text-white fs-1`}
        onClick={handleClose}
      />
      <div className={styles.container}>
        <motion.ul
          variants={listVariant}
          initial="hidden"
          animate="show"
          exit="leave"
          className={styles.links}
        >
          {links.map((link) => (
            <motion.li
              variants={listItemVariant}
              animate={{ color:"#FFFFFF" }}
              whileHover={hoverStyle}
              whileFocus={hoverStyle}
              whileTap={hoverStyle}
              key={link.title}
            >
              <Link href={link.url}>
                <h1 onClick={handleClose} className={styles.head} >{link.title}</h1>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </Backdrop>
  );
}
