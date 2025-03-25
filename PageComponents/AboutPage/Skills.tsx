
export default function Skills() {

  const skills = [
      "Laravel", "Vue", "React", "Next JS", "PHP", "MySQL", "Tailwind", "Bootstrap", "Git", "Figma", "Express JS", "Python", "Node JS"
  ]

  const colorSchemes = [
      "primary", "secondary", "accent"
  ];

  return (
    <section
    className="my-5 flex flex-col gap-2"
    >
        <h1>
            My Skills
        </h1>
        <div className="flex gap-4 flex-wrap">
            {
                skills.map((skill, index) => (
                    <span key={index} className={`inline-flex items-center rounded-md  px-2 py-1 text-xs font-medium text-text ring-1 ring-accent/30 ring-inset`}>{skill}</span>   
                ))
            }
        </div>
        
    </section>
  )
}