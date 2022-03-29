import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styles from "../styles/ImgCard.module.scss";

const textVariant = {
  hidden: {
    y: "102%",
  },
  visible: {
    y: "0%",

    transition: {
      duration: 0.3,
      type: "tween",
    },
  },
  leave: {
    y: "102%",
    duration: 0.2,
    type: "tween",
  },
};

export default function ImgCard({ img, title = "", ...props }) {
  const [hover, setHover] = useState();

  const open = () => setHover(true);
  const close = () => setHover(false);

  return (
    <motion.div
      onMouseEnter={open}
      onMouseLeave={close}
      {...props}
      className={`${props.className} ${styles.container}`}
    >
      <motion.div className={styles.content}>
        <motion.div
          style={{
            backgroundImage: `url(${img})`,
          }}
          className={styles.image}
        ></motion.div>
        <AnimatePresence>
          {hover && (
            <motion.div
              variants={textVariant}
              initial="hidden"
              animate="visible"
              exit="leave"
              className={styles.text}
            >
              <h2>{title}</h2>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
