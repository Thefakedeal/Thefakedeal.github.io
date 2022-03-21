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
              whileHover={{
                scale: 1.3,
                color: "purple",
              }}
              transition={{
                type: "spring",
                stiffness: 150,
              }}
              key={link.title}
            >
              <Link href={link.url}>
                <h1>{link.title}</h1>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </Backdrop>
  );
}
