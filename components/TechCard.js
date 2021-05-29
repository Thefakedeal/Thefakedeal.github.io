import { Card } from "antd";
import Image from "next/image";
import styles from '../styles/TechCard.module.css'
export default function TechCard({ title, image, url }) {
  const onClick = ()=>{
    window.open(url)
  }
  return (
    <Card className="shadow-sm" onClick= {url && onClick} cover={<Image src={image} layout='responsive' width={500} height={300} className={styles.image} />}>
      <Card.Meta title={title} />
    </Card>
  );
}
