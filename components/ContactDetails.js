import {
  InstagramOutlined,
  MailOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import styles from '../styles/ContactDetails.module.css'


const contactLinks = [
  {
    href: "mailto:theonlysamir@gmail.com",
    title: "theonlysamir@gmail.com",
    icon: MailOutlined,
  },
  {
    href: "https://www.instagram.com/thefakedeal",
    title: "thefakedeal",
    icon: InstagramOutlined,
  },
  {
    href: "https://www.github.com/thefakedeal",
    title: "thefakedeal",
    icon: GithubOutlined,
  },
  {
    href: "https://www.linkedin.com/in/samir-shrestha-16050a210",
    title: "Samir Shrestha",
    icon: LinkedinOutlined,
  },
];

function ContactLink({ href, title, Icon }) {
  return (
    <a className="text-decoration-none text-dark fw-bold" href={href} target="__blank">
      <div className="d-flex justify-content-center">
        <Icon className="p-1" /> {title}
      </div>
    </a>
  );
}

export default function ContactDetails() {
  return (
    <section className={styles.container}> 
      {contactLinks.map((link, index) => (
        <ContactLink
          href={link.href}
          Icon={link.icon}
          title={link.title}
          key={index}
        />
      ))}
    </section>
  );
}
