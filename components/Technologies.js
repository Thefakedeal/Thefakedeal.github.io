import TechCard from "./TechCard";
import {Typography} from 'antd'

const {Title} = Typography;

export default function Technologies({ technologies = [] }) {
  return (
    <div className="row container my-4 justify-content-center mx-auto">
      <Title level={2} className="text-center fs-3" >Technologies I've Worked With</Title>
      {technologies.map((technology) => (
        <div className="col-lg-3 col-6 col-md-4  p-2">
          <TechCard 
            key={technology.slug}
            title={technology.title}
            image={technology.image}
            url={technology.url}
          />
        </div>
      ))}
    </div>
  );
}
