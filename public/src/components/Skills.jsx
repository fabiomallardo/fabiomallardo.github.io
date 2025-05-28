import './Skills.css'

const skills = [
  { name: 'HTML', img: 'src/assets/html.svg' },
  { name: 'CSS', img: 'src/assets/css-3.svg' },
  { name: 'JavaScript', img: 'src/assets/js.png' },
  { name: 'React', img: 'src/assets/react.png' },
  { name: 'Node', img: 'src/assets/nodejs-icon.svg' },
  { name: 'Git', img: 'src/assets/git.svg' },
  { name: 'MongoDB', img: 'src/assets/mongodb.svg' },
  { name: 'Bootstrap', img: 'src/assets/bootstrap.png' }
]

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>SKILLS</h2>
      <div className="skills-grid">
        {skills.map(skill => (
          <div className="skill-card" key={skill.name}>
            <img src={skill.img} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
