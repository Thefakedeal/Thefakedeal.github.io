import styles from '../styles/Backdrop.module.css'
import {motion} from 'framer-motion'
export default function Backdrop({children}) {
  return (
    <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
      
    className={styles.container}>
        {children}
    </motion.div>
  )
}
