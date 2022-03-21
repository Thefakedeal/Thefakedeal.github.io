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
    url: "/",
  },
  {
    title: "Contact",
    url: "/",
  },
  {
    title: "About Me",
    url: "/",
  },
];

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
              whileHover={{
                scale: 1.3,
                color: "purple",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              key={link.title}
            >
              <Link href={link.url}>{link.title}</Link>
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
