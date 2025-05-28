import { motion } from 'framer-motion'
import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          A LITTLE ABOUT ME
        </motion.h2>

        <motion.p
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I'm <strong>FABIO MALLARDO</strong>, and you can find me in a small town called Avellino,
          coding away at my computer most hours of the day while my two monitors surround me.
        </motion.p>

        <motion.p
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I'm currently taking two courses, one called <strong>Epicode</strong> and the other <strong>Codecademy</strong>,
          while also studying independently.
        </motion.p>

        <motion.p
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          I've been studying programming since <strong>September 2024</strong>. I started with <strong>HTML, CSS, and JavaScript</strong>,
          then moved on to <strong>React, Node, and MongoDB</strong>.
        </motion.p>

        <motion.p
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Outside of programming, I'm a huge fan of <strong>movies, TV series, and music</strong> (well, who isn't?).
        </motion.p>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <strong>What can I actually do?</strong> Check out the skills I'm comfortable with below!
        </motion.p>
      </div>
    </section>
  )
}
