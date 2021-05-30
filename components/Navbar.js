import { Menu, Layout, Typography } from "antd";
import { BulbFilled } from "@ant-design/icons";
import Link from "next/link";
const { Text } = Typography;

export default function Navbar() {
  return (
    <Layout.Header className="d-flex align-items-center">
      <div className="logo d-flex  align-items-center">
        <BulbFilled className="text-white fs-5 px-1" />
        <Text className="text-white">thefakedeal</Text>
      </div>
      <Menu mode="horizontal"  className="d-flex flex-wrap justify-content-end flex-grow-1" theme="dark">
      <Menu.Item >
          <Link href="/" key="1">
            <a className="text-decoration-none ">Home</a>
          </Link>
        </Menu.Item>
        <Menu.Item >
          <Link href="/about" key="2">
            <a className="text-decoration-none ">About Me</a>
          </Link>
        </Menu.Item>
        <Menu.Item >
          <Link href="/contact" key="3">
            <a className="text-decoration-none ">Contact</a>
          </Link>
        </Menu.Item>
      </Menu>
    </Layout.Header>
  );
}
