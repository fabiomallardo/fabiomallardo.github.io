import './Projects.css'
import ProjectCard from './ProjectCard'

// Import immagini/video da src/assets
import ss54 from '/src/assets/Screenshot (54).png'
import ss55 from '/src/assets/Screenshot (55).png'
import ss56 from '/src/assets/Screenshot (56).png'
import ss57 from '/src/assets/Screenshot (57).png'
import ss60 from '/src/assets/Screenshot (60).png'
import ss153 from '/src/assets/Screenshot (153).png'
import ss156 from '/src/assets/Screenshot (156).png'
import ss157 from '/src/assets/Screenshot (157).png'
import ss158 from '/src/assets/Screenshot (158).png'

import video1 from '/src/assets/Registrazione dello schermo 2025-02-18 122635.mp4'
import video2 from '/src/assets/Registrazione dello schermo 2025-02-18 144028.mp4'
import video3 from '/src/assets/Registrazione dello schermo 2025-05-28 171642.mp4'

const projects = [
  {
    title: 'Netflix Clone',
    desc: 'Web application mimicking Netflix’s homepage UI.',
    img1: ss54,
    img2: ss55,
    url: 'https://github.com/fabiomallardo/COMPITO-FINE-MODULO/tree/main',
    tech: ['HTML', 'CSS', 'JS', 'Bootstrap']
  },
  {
    title: 'Epicode Exam Clone',
    desc: 'Simulates an interactive Epicode exam with questions and results.',
    img1: ss56,
    img2: ss57,
    video: video1,
    url: 'https://github.com/fabiomallardo/BUILD-WEEK',
    tech: ['HTML', 'CSS', 'JS', 'Bootstrap']
  },
  {
    title: 'EpicBook',
    desc: 'A project for viewing books dynamically with React.',
    img1: ss60,
    video: video2,
    url: 'https://github.com/fabiomallardo/Esercizio-M4-N4',
    tech: ['React', 'Bootstrap']
  },
  {
    title: 'Dribbble Clone',
    desc: 'Clone di una pagina Dribbble realizzato in React, per pratica front-end e componentizzazione UI.',
    img1: ss153,
    img2: ss156,
    img3: ss157,
    url: 'https://github.com/fabiomallardo/dribbble-clone',
    tech: ['React', 'CSS', 'Component Design']
  },
  {
    title: 'RoomBooker',
    desc: 'Piattaforma full-stack per prenotazioni, gestione strutture e recensioni. UI moderna e funzionalità avanzate come mappe, upload in cloud e login Google.',
    img1: ss158,
    video: video3,
    url: 'https://room-booker.vercel.app',
    tech: [
      'React',
      'Framer Motion',
      'Leaflet',
      'Node.js',
      'MongoDB',
      'Cloudinary',
      'Google OAuth',
      'JWT Auth'
    ]
  }
]

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>PROJECTS</h2>
      <div className="projects-container">
        {projects.map((proj, i) => (
          <ProjectCard key={i} project={proj} />
        ))}
      </div>
    </section>
  )
}
