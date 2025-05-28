import { animateScroll as scroll } from 'react-scroll'
import './Footer.css'
import githubIcon from '../assets/github-svgrepo-com.svg'

export default function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer-title" onClick={() => scroll.scrollToTop()}>
        Made by Fabio Mallardo ↑
      </h2>
      <a
        href="https://github.com/fabiomallardo"
        target="_blank"
        rel="noreferrer"
        className="github-link"
      >
        <img src={githubIcon} alt="GitHub" />
      </a>
    </footer>
  )
}
