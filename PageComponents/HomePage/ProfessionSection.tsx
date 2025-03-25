"use client";
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';


type Props = {}

export default function ProfessionSection({}: Props) {
  const professions = ["Sofware Developer", "Web Developer", "Freelancer","Software Development Consultant" ];
  const [professionIndex, setProfessionIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProfessionIndex((prevIndex) => (prevIndex + 1) % professions.length);
    }, 5000);
    return () => clearInterval(interval);
  })
  return (
    <AnimatePresence mode='wait'>
        <motion.span
        key={professionIndex}
        initial={{ y: 20, opacity: 0}}
        animate={{ y: 0, opacity: 1}}
        exit={{  y: -20, opacity: 0}}
        transition={{ duration: 1,  }}
        className='text-primary border-1 border-accent block w-fit px-1'
        >
        {professions[professionIndex]}
        </motion.span>
    </AnimatePresence>
  )
}