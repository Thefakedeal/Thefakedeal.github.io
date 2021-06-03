import FlipCard from "./FlipCard";
import { Typography, Button } from "antd";
import styles from "../styles/Project.module.css";
import {EyeFilled} from '@ant-design/icons'

export default function Projects({ projects = [] }) {
  return (
    <div className="container-fluid align-items-center row gy-2 py-4">
        <Typography.Title level={2} className="text-center fs-3 py-2">
            Some Projects I'm Involved in
        </Typography.Title>
      {projects.map((project) => (
        <div className="col-md-4">
          <FlipCard key={project.id}>
            <FlipCard.Front>
              <img src={project.image} className={styles.frontImage} />
            </FlipCard.Front>
            <FlipCard.Back>
              <div
                className={styles.back}
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 128, 128, 0.9),rgba(0, 128, 128, 0.9)), url(${project.image})`,
                }}
              >
                <Typography.Text className="fs-5 pt-2 text-white">
                  {project.title}
                </Typography.Text>
                <Typography.Paragraph className="fs-6 text-light">
                  {project.description}
                </Typography.Paragraph>
                <Button
                  type="primary"
                  onClick={() => {
                    window.open(project.link);
                  }}
                  className={styles.button}
                  icon={<EyeFilled />}
                >
                  Visit
                </Button>
              </div>
            </FlipCard.Back>
          </FlipCard>
        </div>
      ))}
    </div>
  );
}
