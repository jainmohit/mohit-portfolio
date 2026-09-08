import { experience } from '../data/profile.js'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <p className="section-eyebrow">Track record</p>
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experience.map((job) => (
            <article className="timeline-item" key={job.company}>
              <div className="timeline-marker" aria-hidden="true" />
              <p className="timeline-period">{job.period}</p>
              <h3>{job.company}</h3>
              <p className="timeline-role">{job.role}</p>
              <ul>
                {job.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
