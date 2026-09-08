export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Mohit Jain — Full Stack &amp; Platform Engineer, Melbourne.</p>
        <p className="footer-built">Built with React + Vite · Deployed on GitHub Pages</p>
      </div>
    </footer>
  )
}
