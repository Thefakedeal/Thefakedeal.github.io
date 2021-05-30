import { Card } from "antd";
import styles from '../styles/TechCard.module.css'
export default function TechCard({ title, image, url }) {
  const onClick = ()=>{
    window.open(url)
  }
  return (
    <Card className="shadow-sm" onClick= {url && onClick} cover={<div  style={{ backgroundImage: `url(${image})` }}  className={styles.image} > </div>}>
      <Card.Meta title={title} />
    </Card>
  );
}
