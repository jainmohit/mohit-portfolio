import { skillGroups } from '../data/profile.js'

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <p className="section-eyebrow">Toolbox</p>
        <h2 className="section-title">Skills &amp; technologies</h2>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="card skills-card" key={group.name}>
              <h3>{group.name}</h3>
              <div className="chips">
                {group.skills.map(({ label, icon: Icon }) => (
                  <span className="chip" key={label}>
                    {Icon && <Icon aria-hidden="true" />} {label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
