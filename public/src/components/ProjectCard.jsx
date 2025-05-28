import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Captions from 'yet-another-react-lightbox/plugins/captions'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import Tilt from 'react-parallax-tilt'

import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import 'yet-another-react-lightbox/plugins/captions.css'

export default function ProjectCard({ project }) {
  const { title, desc, url, img1, img2, img3, video, tech } = project
  const images = [img1, img2, img3].filter(Boolean)
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const slides = images.map((src, i) => ({
    src,
    description: `${title} – Screenshot ${i + 1}`
  }))

  return (
    <Tilt glareEnable glareMaxOpacity={0.2} scale={1.02} transitionSpeed={1000}>
    <div className="project-card">
      <div className="project-info">
        <h3>
          <a href={url} target="_blank" rel="noreferrer">
            {title}
          </a>
        </h3>
        <p>{desc}</p>
        <div className="tech-stack">
          {tech.map(t => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
      </div>

      <div className="project-media">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${title} screenshot ${i + 1}`}
            onClick={() => {
              setIndex(i)
              setOpen(true)
            }}
            style={{ cursor: 'pointer' }}
          />
        ))}
        {video && <video src={video} controls loop />}
      </div>

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={slides}
          plugins={[Thumbnails, Captions, Zoom]}
          controller={{
            closeOnPullDown: true,
            keyboardShortcuts: true
          }}
          animation={{ fade: 300, swipe: 500 }}
        />
      )}
    </div>
    </Tilt>
  )
}
