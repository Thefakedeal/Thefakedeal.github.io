import 'bootstrap/dist/css/bootstrap.css'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Navbar />
      <AnimatePresence  initial={false}>
          <Component {...pageProps} key={router.pathname}/>

      </AnimatePresence>
    </>
  )
}

export default MyApp
