import 'bootstrap/dist/css/bootstrap.css'
import Navbar from '../components/Navbar'
import '../styles/globals.scss'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter  >
          <Component {...pageProps} key={router.pathname}/>
      </AnimatePresence>
    </>
  )
}

export default MyApp
