
type Props = {}

export default function Landing({}: Props) {
  return (
    <div
        className="glass w-full md:w-3/4 p-4 mb-5 flex flex-col gap-2 min-h-[80vh]"
    >
        <h1>About Me</h1>
        <h2>
            Hey, I'm Samir Shrestha!
        </h2>
        <p>
            I'm a software developer with around 5 years of experience in Laravel, React, Next.js, Vue.js, and AWS. I love building scalable web applications that balance performance, usability, and clean design.
        </p>
        <p>
            I'm also passionate about fitness coaching, specializing in strength training and fat loss. With over 6 years of experience and 30-40 clients coached, I help people get stronger, fitter, and healthier with practical, science-backed training methods.
        </p>
        <p>
            🚀 Looking to collaborate? Let’s connect!
        </p>
    </div>
  )
}