import { Layout } from "antd";
import Navbar from "../Navbar";
import Footer from "../Footer";
import styles from '../../styles/HomeLayout.module.css'
export default function HomeLayout({ children }) {
  return (
    <Layout className={styles.layout}>
      <Navbar />
      <Layout.Content className={styles.content}>{children}</Layout.Content>
      <Footer />
    </Layout>
  );
}
