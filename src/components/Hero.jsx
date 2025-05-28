import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="stars">
        {Array.from({ length: 40 }).map((_, i) => {
          const delay = `${Math.random() * 2}s`
          const duration = `${1.5 + Math.random() * 2}s`
          const top = `${Math.random() * 100}%`
          const left = `${Math.random() * 100}%`

          return (
            <img
              key={i}
              src="/src/assets/foto.png"
              className="stella"
              alt="star"
              style={{ top, left, animationDelay: delay, animationDuration: duration }}
            />
          )
        })}

      </div>

      <img
        src="/src/assets/un-moderno-computer-portatile-su-sfondo-nero_180633-6022.png"
        alt="hero"
        className="hero-image"
      />
      <div className="overlay-text">
        <h1>I'M FABIO</h1>
        <p>a full-stack developer.</p>
      </div>
    </section>
  )
}
