import { Link } from 'react-scroll'
import './Navbar.css'

export default function Navbar() {
  const sections = ['about', 'projects', 'contact']

  return (
    <nav className="navbar">
      <Link
        to="hero"
        className="brand"
        smooth={true}
        duration={500}
        offset={-70}
      >
        Fabio Mallardo
      </Link>

      <ul>
        {sections.map(section => (
          <li key={section}>
            <Link
              activeClass="active"
              to={section}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
