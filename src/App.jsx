import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import BlogList from './components/BlogList.jsx'
import BlogPost from './components/BlogPost.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

// Tiny hash router: '#/blog', '#/blog/slug', '#/tags/tag' are routes;
// plain '#section' hashes scroll the home page as usual.
function useRoute() {
  const [hash, setHash] = useState(window.location.hash)
  useEffect(() => {
    const onChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  if (!hash.startsWith('#/')) return { page: 'home' }
  const parts = hash.slice(2).split('/').filter(Boolean)
  if (parts[0] === 'blog' && parts[1]) return { page: 'post', slug: decodeURIComponent(parts[1]) }
  if (parts[0] === 'blog') return { page: 'blog' }
  if (parts[0] === 'tags' && parts[1]) return { page: 'blog', tag: decodeURIComponent(parts[1]) }
  return { page: 'home' }
}

export default function App() {
  const route = useRoute()

  useEffect(() => {
    if (route.page !== 'home') {
      window.scrollTo(0, 0)
    } else {
      const h = window.location.hash
      if (h && !h.startsWith('#/')) {
        requestAnimationFrame(() => {
          const el = document.querySelector(h)
          if (el) el.scrollIntoView()
        })
      }
    }
  }, [route.page, route.slug, route.tag])

  return (
    <>
      <Navbar />
      {route.page === 'home' && (
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
      )}
      {route.page === 'blog' && <BlogList activeTag={route.tag} />}
      {route.page === 'post' && <BlogPost slug={route.slug} />}
      <Footer />
    </>
  )
}
