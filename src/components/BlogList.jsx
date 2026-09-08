import { posts, allTags, formatDate } from '../lib/posts.js'

export default function BlogList({ activeTag }) {
  const list = activeTag ? posts.filter((p) => p.tags.includes(activeTag)) : posts

  return (
    <main className="section page">
      <div className="container container-narrow">
        <p className="section-eyebrow">Blog</p>
        <h1 className="section-title">
          {activeTag ? `Posts tagged “${activeTag}”` : 'Writing'}
        </h1>
        <p className="section-lede">
          Platform engineering, cloud migration, DevSecOps and the occasional side project.
        </p>

        <div className="chips tag-filter">
          <a className={`chip ${!activeTag ? 'chip-active' : ''}`} href="#/blog">All</a>
          {allTags.map((t) => (
            <a key={t} className={`chip ${activeTag === t ? 'chip-active' : ''}`} href={`#/tags/${encodeURIComponent(t)}`}>
              {t}
            </a>
          ))}
        </div>

        {list.length === 0 && <p>No posts here yet — check back soon.</p>}

        <div className="blog-list">
          {list.map((post) => (
            <article className="card blog-card" key={post.slug}>
              <p className="blog-meta">
                {formatDate(post.date)} · {post.minutes} min read
              </p>
              <h2>
                <a href={`#/blog/${encodeURIComponent(post.slug)}`}>{post.title}</a>
              </h2>
              {post.description && <p>{post.description}</p>}
              <div className="chips">
                {post.tags.map((t) => (
                  <a key={t} className="chip chip-sm" href={`#/tags/${encodeURIComponent(t)}`}>{t}</a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
