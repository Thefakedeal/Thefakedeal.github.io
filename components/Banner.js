import styles from "../styles/Banner.module.css";
import { Typography, Button } from "antd";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
const { Title, Paragraph } = Typography;

export default function Banner() {
  return (
    <div className={styles.banner}> 
      <div className={styles.container}>
        <Title className="text-white text-center fs-2 ">
          Hello I'm Samir Shrestha. <br />
          I'm A <span className="text-danger"> Full Stack Web Developer! </span>
        </Title>
        <div className="d-flex flex-wrap align-items-center justify-content-center">
          <a
            href="https://github.com/Thefakedeal"
            style={{ textDecoration: "none" }}
            target="__blank"
          >
            <Button ghost className={styles.center + " " + "m-1"}>
              <GithubOutlined /> Checkout My Github!
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/samir-shrestha-16050a210"
            style={{ textDecoration: "none" }}
            target="__blank"
          >
            <Button ghost className={styles.center + " " + "m-1"}>
              <LinkedinOutlined /> Connect With Linkedin!
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
