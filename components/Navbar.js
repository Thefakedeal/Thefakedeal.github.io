import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Menu from "./Menu";
import { useState } from "react";
import { GoThreeBars } from "react-icons/go";


const links = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Skills",
    url: "/skills",
  },
  {
    title: "Contact",
    url: "/contact",
  },
  {
    title: "About Me",
    url: "/about",
  },
];

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

export default function Navbar() {
  const [viewMenu, setViewMenu] = useState(false);
  
  const open = () => setViewMenu(true);
  const close = () => setViewMenu(false);
  return (
    <>
      <nav className={styles.links}>
        <ul className="py-2 d-none d-lg-flex">
          {links.map((link) => (
            <motion.li
              initial={{ color: "#FFFFFF" }}
              animate={{ color: "#FFFFFF" }}
              whileHover={hoverStyle}
              whileFocus={hoverStyle}
              whileTap={hoverStyle}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              key={link.title}
            >
              <Link 
                
              href={link.url}>{link.title}</Link>
            </motion.li>
          ))}
        </ul>
        {viewMenu || (
          <GoThreeBars
            className="d-lg-none ms-auto text-white fs-1 m-2"
            onClick={open}
          />
        )}
      </nav>
      <div className="d-lg-none ms-auto">
        <AnimatePresence>
         {viewMenu && <Menu links={links} handleClose={close} />}
        </AnimatePresence>
      </div>
    </>
  );
}
