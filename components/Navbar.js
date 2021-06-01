import { useState } from "react";
import { Menu, Layout, Typography, Drawer, Button, List } from "antd";
import { useRouter } from "next/router";
import { BulbFilled, MenuFoldOutlined } from "@ant-design/icons";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
const { Text } = Typography;

const routes = [
  {
    title: "Home",
    href: "/",
    key: "1",
  },
  {
    title: "About Me",
    href: "/about",
    key: "2",
  },
  {
    title: "Contact",
    href: "/contact",
    key: "3",
  },
];

export const SideDrawer = ({ visible, onClose }) => {
  return (
    <Drawer
      placement={"right"}
      closable={true}
      onClose={onClose}
      visible={visible}
    >
      <List>
        {routes.map(({ href, title, key }) => (
          <List.Item>
            <Link href={href} key={key}>
              <Button type="text">{title}</Button>
            </Link>
          </List.Item>
        ))}
      </List>
    </Drawer>
  );
};

export default function Navbar() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);

  return (
    <Layout.Header className="d-flex align-items-center px-1 px-lg-4">
      <div className={styles.logo} onClick={() => router.push("/")}>
        <BulbFilled className="text-white fs-5 px-1" />
        <Text className="text-white">Samir Shrestha</Text>
      </div>
      {/* Visible  On Large Screen */}
      <Menu
        mode="horizontal"
        selectable={false}
        className="d-none d-lg-flex flex-wrap "
        theme="dark"
      >
        {routes.map(({ href, title, key }) => (
          <Menu.Item>
            <Link href={href} key={key}>
              <a className="text-decoration-none ">{title}</a>
            </Link>
          </Menu.Item>
        ))}
      </Menu>
      {/* End Visible  On Large Screen */}

      {/* Visible  On Small Screen */}
      <Button
        type="text"
        className="d-flex align-items-center fs-4 d-lg-none text-white py-auto"
        onClick={() => setVisible(true)}
      >
        <MenuFoldOutlined />
      </Button>
      <SideDrawer visible={visible} onClose={() => setVisible(false)} />
      {/* End Visible  On Small Screen */}
    </Layout.Header>
  );
}
