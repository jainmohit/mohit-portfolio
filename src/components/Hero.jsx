import { useEffect, useState } from 'react'
import { FiArrowRight, FiMapPin } from 'react-icons/fi'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { profile } from '../data/profile.js'

function useTypewriter(words) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    const speed = deleting ? 40 : 80
    const timer = setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, text.length + 1)
        setText(next)
        if (next === word) setTimeout(() => setDeleting(true), 1800)
      } else {
        const next = word.slice(0, text.length - 1)
        setText(next)
        if (next === '') {
          setDeleting(false)
          setIndex((i) => (i + 1) % words.length)
        }
      }
    }, speed)
    return () => clearTimeout(timer)
  }, [text, deleting, index, words])

  return text
}

export default function Hero() {
  const typed = useTypewriter(profile.roles)

  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-badge">
            <span className="pulse-dot" /> Available for freelance &amp; contract work
          </p>
          <h1>
            Hi, I&apos;m <span className="accent">{profile.name}</span>
          </h1>
          <p className="hero-typed">
            {typed}
            <span className="caret" aria-hidden="true" />
          </p>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#contact">
              Work with me <FiArrowRight />
            </a>
            <a className="btn btn-ghost" href="#projects">
              View projects
            </a>
          </div>
          <div className="hero-meta">
            <span>
              <FiMapPin /> {profile.location}
            </span>
            <a href={profile.linkedin} aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href={profile.github} aria-label="GitHub">
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="terminal">
            <div className="terminal-bar">
              <span /><span /><span />
              <p>mohit@platform ~ %</p>
            </div>
            <pre className="terminal-body">
{`$ whoami
mohit-jain — platform engineer

$ experience --summary
17+ years · banking · health · telecom

$ clouds
aws ✓   azure ✓   gcp ✓

$ kubectl get passion -o wide
NAME        STATUS    UPTIME
shipping    Running   17y
mentoring   Running   10y+

$ ./deploy.sh --strategy blue-green
release: zero-downtime ✓`}
            </pre>
          </div>
        </div>
      </div>

      <div className="container hero-stats">
        {profile.stats.map((s) => (
          <div className="stat" key={s.label}>
            <p className="stat-value">{s.value}</p>
            <p className="stat-label">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
