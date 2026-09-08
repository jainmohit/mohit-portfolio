import { projects } from '../data/profile.js'

export default function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <p className="section-eyebrow">Founding &amp; independent work</p>
        <h2 className="section-title">Projects</h2>
        <div className="card-grid">
          {projects.map((p) => (
            <div className="card project-card" key={p.title}>
              <h3>{p.title}</h3>
              <p className="project-tag">{p.tag}</p>
              <p>{p.desc}</p>
              <div className="chips">
                {p.stack.map((s) => (
                  <span className="chip chip-sm" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
