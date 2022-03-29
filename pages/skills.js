import Meta from "../components/Meta";
import { AnimatePresence, motion } from "framer-motion";
import ImgCard from "../components/ImgCard";

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
      staggerChildren: 0.2,
      
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
        // color: ["#a228f5", "#ee1aca", "#ee1a1a"],
        transition:{
            color:{
                repeat: Infinity,
                repeatType:"reverse",
                duration: 2,
                ease: "easeOut",
            }
        }
    },
    leave:{
        scale:0.1
    }
}


const technologies = [
  {
    name: "Laravel",
    image: "/img/tech/laravel.png"
  },
  {
    name: "React",
    image: "/img/tech/react.png"
  },
  {
    name: "Vue JS",
    image: "/img/tech/vue.webp"
  },
  {
    name: "Express",
    image: "/img/tech/express.png"
  },
  {
    name: "React Native",
    image: "/img/tech/react-native.png"
  },
  {
    name: "Next JS",
    image: "/img/tech/next.png"
  },
  {
    name: "PHP",
    image: "/img/tech/php.jpg"
  },
  {
    name: "JavaScript",
    image: "/img/tech/java-script.jpg"
  },
  {
    name: "Python",
    image: "/img/tech/python.png"
  },
  {
    name: "Postgres",
    image: "/img/tech/postgres.png"
  },
  {
    name: "My SQL",
    image: "/img/tech/mysql.png"
  },
  {
    name: "MongoDB",
    image: "/img/tech/mongodb.png"
  },
];

const cardsVariant={
    hidden:{
        scale:0.1,
        rotateZ: -180,
    
    },
    visible:{
        scale: 1,
        rotateZ: 0,
     
        transition:{
          rotateZ:{
            duration: 0.5,
            type: "tween",
          }
        }
    },
    leave:{
        scale:0.1,
        rotateZ: 360
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
                <motion.h1 className="text-white"
                variants={headerVariant}
                key={"Header"}
                >
                My Skills
                </motion.h1>
          
          <div className="container p-4">
            <div className="row g-4">
                {technologies.map((tech,index)=>(

                    <ImgCard 
                      variants={cardsVariant}
                      key={tech.name}
                      img={tech.image}
                      title={tech.name}
                      className="col-md-4 text-white img-fluid"
                    />
                ))}
            </div>
          </div>
          </AnimatePresence >
         
      </motion.section>
    </>
  );
}
