import styles from '../styles/Navbar.module.scss';
import Link from 'next/link';
const links = [
    {
        title: "Home",
        url: '/',
    },
    {
        title: "Skills",
        url: '/',
    },
    {
        title: "Contact",
        url: '/',
    },
    {
        title: "About Me",
        url: '/',
    }
]

export default function Navbar() {
  return (
    <>
        
        <nav className={styles.links}>
            <ul className='py-2 d-none d-lg-flex'>
               {
                   links.map(link=>(
                       <li key={link.title}>
                           <Link href={link.url}>{link.title}</Link>
                       </li>
                   ))
               }
            </ul>
        </nav>
    </>
  )
}
