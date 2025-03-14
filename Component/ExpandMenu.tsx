"use client";
import { motion } from "framer-motion";
import { useState } from "react";

type Props = {}
export default function ExpandMenu({}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden relative px-2 flex items-center justify-center">
      <motion.span
        initial={{ y: 10, rotate: 0 }}
        animate={isOpen ? { y: 0, rotate: 45 } : { y: 10, rotate: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute w-8 h-0.5 bg-primary"
      />
      <motion.span
        initial={{ opacity: 1 }}
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="absolute w-8 h-0.5 bg-primary"
      />
      <motion.span
        initial={{ y: -10, rotate: 0 }}
        animate={isOpen ? { y: 0, rotate: -45 } : { y: -10, rotate: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute w-8 h-0.5 bg-primary"
      />
    </button>
  );
}
