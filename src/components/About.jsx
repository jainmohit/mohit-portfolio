import { services } from '../data/profile.js'
import { FiCloud, FiGitBranch, FiLayers, FiCpu } from 'react-icons/fi'

const icons = [FiCloud, FiGitBranch, FiLayers, FiCpu]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="section-eyebrow">What I do</p>
        <h2 className="section-title">Services built on delivery, not decks</h2>
        <p className="section-lede">
          Every engagement runs the same lifecycle I&apos;ve owned inside NAB, Bendigo Bank and
          Australia Post — assess the constraints, build with the business in the room, ship
          through automated pipelines, and run what we shipped.
        </p>
        <div className="card-grid">
          {services.map((s, i) => {
            const Icon = icons[i % icons.length]
            return (
              <div className="card service-card" key={s.title}>
                <div className="card-icon"><Icon /></div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
