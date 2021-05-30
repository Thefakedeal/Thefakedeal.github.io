import { Menu, Layout, Typography } from "antd";
import {useRouter} from 'next/router'
import { BulbFilled } from "@ant-design/icons";
import styles from '../styles/Navbar.module.css'
import Link from "next/link";
const { Text } = Typography;

export default function Navbar() {
  const router = useRouter();

  const routes = [
    {
      title: "Home",
      href: "/",
      key: "1"
    },
    {
      title: "About Me",
      href: "/about",
      key: "2"
    },
    {
      title: "Contact",
      href: "/contact",
      key: "3"
    }
  ]
  return (
    <Layout.Header className="d-flex align-items-center">
      <div className={styles.logo} onClick={()=>router.push('/')}>
        <BulbFilled className="text-white fs-5 px-1" />
        <Text className="text-white">SamirShrestha</Text>
      </div>
      <Menu mode="horizontal" selectable={false} className="d-flex flex-wrap justify-content-end " theme="dark">
        {
          routes.map(({href,title,key})=>(
            <Menu.Item  >
            <Link href={href} key={key}>
              <a className="text-decoration-none ">
                {title}
              </a>
            </Link>
          </Menu.Item>
          ))
        }
      </Menu>
    </Layout.Header>
  );
}
