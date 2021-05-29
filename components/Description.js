import { Typography, Button } from "antd";
import {EyeFilled} from '@ant-design/icons'
import styles from '../styles/Description.module.css'
export default function Description() {
    return (
        <section className={styles.section}>
        <div className="mb-4">
          <Typography.Title className={styles.title} type={2}>
            Samir Shrestha
          </Typography.Title>
          <Typography.Text className={styles.subTitle}>Software Developer</Typography.Text>
        </div>
        <Typography.Paragraph>
          Enthusiastic developer eager to contribute to team success through
          hard work, attention to detail and excellent organizational skills.
          Motivated to learn, grow and excel in Software Development.
        </Typography.Paragraph>
        <a href="/pdf/resume.pdf"  className="text-decoration-none" target="__blank">
          <Button icon={<EyeFilled />} className={styles.btn} type="primary" shape="round">
            Checkout My Resume
          </Button> 
        </a>
      </section> 
    )
}
