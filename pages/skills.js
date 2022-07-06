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
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const headerVariant = {
  hidden: {
    scale: 0.1,
  },
  visible: {
    scale: 1,
    // color: ["#a228f5", "#ee1aca", "#ee1a1a"],
    transition: {
      color: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 2,
        ease: "easeOut",
      },
    },
  },
  // leave: {
  //   scale: 0.1,
  // },
};

const technologies = [
  {
    id: "skill-1",
    name: "Laravel",
    image: "/img/tech/laravel.png",
  },
  {
    id: "skill-2",
    name: "React",
    image: "/img/tech/react.png",
  },
  {
    id: "skill-3",
    name: "Vue JS",
    image: "/img/tech/vue.webp",
  },
  {
    id: "skill-4",

    name: "Express",
    image: "/img/tech/express.png",
  },
  {
    id: "skill-5",

    name: "React Native",
    image: "/img/tech/react-native.png",
  },
  {
    id: "skill-6",

    name: "Next JS",
    image: "/img/tech/next.png",
  },
  {
    id: "skill-7",
    name: "PHP",
    image: "/img/tech/php.jpg",
  },
  {
    id: "skill-8",
    name: "JavaScript",
    image: "/img/tech/java-script.jpg",
  },
  {
    id: "skill-9",
    name: "Python",
    image: "/img/tech/python.png",
  },
  {
    id: "skill-10",
    name: "Postgres",
    image: "/img/tech/postgres.png",
  },
  {
    id: "skill-11",
    name: "My SQL",
    image: "/img/tech/mysql.png",
  },
  {
    id: "skill-12",
    name: "MongoDB",
    image: "/img/tech/mongodb.png",
  },
];

const cardsVariant = {
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
  // leave: {
  //   scale: 0.1,
  //   rotateZ: 720,
  // },
};

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
        
          <motion.h1
            className="text-white"
            variants={headerVariant}
            key={"Header"}
          >
            My Skills
          </motion.h1>
          
          <div className="container p-4">
            <div className="row g-4">
              {technologies.map((tech) => (
                <motion.div
                  variants={cardsVariant}
                  key={tech.id}
                  
                  className="col-md-4 text-white img-fluid"
                >
                  <ImgCard img={tech.image} title={tech.name} />
                </motion.div>
              ))}
            </div>
          </div>
       
      </motion.section>
    </>
  );
}
