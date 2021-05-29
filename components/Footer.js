import { Layout, Typography,BackTop, Avatar } from "antd";
import {ArrowUpOutlined} from '@ant-design/icons'
import styles from '../styles/Footer.module.css'
export default function Footer() {
  return (
    <Layout.Footer
      className={`d-flex align-items-center justify-content-center ${styles.footer} `}
    >
      <Typography.Paragraph className="text-white">
        This site was built with <a href="https://nextjs.org" className="text-decoration-none">Next JS</a>
      </Typography.Paragraph>
      <BackTop>
        <Avatar size="large" className={styles.backToTop} icon={<ArrowUpOutlined  className={styles.icon} /> } />
      </BackTop>
    </Layout.Footer>
  );
}
