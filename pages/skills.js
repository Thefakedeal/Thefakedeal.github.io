import Meta from "../components/Meta";
import { AnimatePresence, motion } from "framer-motion";

const containerVariant = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      when: "beforeChildren",
      staggerChildren: 0.05,
      
    },
  },
  leave: {
    x: "-100vw",
    transition: {
      duration: 0.3,
      type: "spring",
      dampness: 10,
      when: "afterChildren",
      staggerChildren: 0.01,
      staggerDirection:-1
    },
  },
};

const headerVariant={
    hidden:{
        scale:0.1,
    },
    visible:{
        scale: 1,
        color: ["#a228f5", "#ee1aca", "#ee1a1a"],
        transition:{
            color:{
                yoyo: Infinity,
                duration: 2,
                ease: "easeOut",
            }
        }
    },
    leave:{
        scale:0.1
    }
}


const cardsVariant={
    hidden:{
        scale:0.1,
    },
    visible:{
        scale: 1,
    },
    leave:{
        scale:0.1
    }
}
export default function skills() {
  return (
    <>
      <Meta />
      <motion.section
        title="My Skills"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        exit="leave"
        className="container d-flex flex-column align-items-center"
      >
         
          <AnimatePresence initial={true}>
                <motion.h1
                variants={headerVariant}
                >
                My Skills
                </motion.h1>
          
          <div className="container p-4">
            <div className="row g-4">
                {Array.apply(null, Array(12)).map(item=>(
                    <motion.div 
                        variants={cardsVariant}
                    className="col-md-4 card bg-dark d-flex text-white
                    ">
                        <h1>Reaact</h1>
                    </motion.div>
                ))}
            </div>
          </div>
          </AnimatePresence >
         
      </motion.section>
    </>
  );
}
