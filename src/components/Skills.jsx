import './Skills.css'

import htmlIcon from '/src/assets/html.svg'
import cssIcon from '/src/assets/css-3.svg'
import jsIcon from '/src/assets/js.png'
import reactIcon from '/src/assets/react.png'
import nodeIcon from '/src/assets/nodejs-icon.svg'
import gitIcon from '/src/assets/git.svg'
import mongoIcon from '/src/assets/mongodb.svg'
import bootstrapIcon from '/src/assets/bootstrap.png'

const skills = [
  { name: 'HTML', img: htmlIcon },
  { name: 'CSS', img: cssIcon },
  { name: 'JavaScript', img: jsIcon },
  { name: 'React', img: reactIcon },
  { name: 'Node', img: nodeIcon },
  { name: 'Git', img: gitIcon },
  { name: 'MongoDB', img: mongoIcon },
  { name: 'Bootstrap', img: bootstrapIcon }
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
