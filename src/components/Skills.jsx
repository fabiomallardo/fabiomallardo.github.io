import './Skills.css'

import htmlIcon from '../assets/html.svg'
import cssIcon from '../assets/css-3.svg'
import jsIcon from '../assets/js.png'
import reactIcon from '../assets/react.png'
import nodeIcon from '../assets/nodejs-icon.svg'
import gitIcon from '../assets/git.svg'
import mongoIcon from '../assets/mongodb.svg'
import bootstrapIcon from '../assets/bootstrap.png'

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
