import { FiMail, FiMapPin } from 'react-icons/fi'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { profile } from '../data/profile.js'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container container-narrow contact-inner">
        <p className="section-eyebrow">Contact</p>
        <h2 className="section-title">Let&apos;s build something that lasts</h2>
        <p className="section-lede">
          Freelance and contract engagements — short assessments, delivery sprints, or longer
          platform builds. If you&apos;re moving to cloud, untangling a legacy system, or need
          senior hands that speak both business and infrastructure, I&apos;d like to hear about it.
        </p>
        <div className="contact-actions">
          <a className="btn btn-primary" href={`mailto:${profile.email}?subject=Project%20enquiry`}>
            <FiMail /> {profile.email}
          </a>
          <a className="btn btn-ghost" href={profile.linkedin}>
            <FaLinkedinIn /> LinkedIn
          </a>
          <a className="btn btn-ghost" href={profile.github}>
            <FaGithub /> GitHub
          </a>
        </div>
        <p className="contact-fineprint">
          <FiMapPin /> Melbourne (AEST) — working with teams across Australia, India and beyond.
        </p>
      </div>
    </section>
  )
}
