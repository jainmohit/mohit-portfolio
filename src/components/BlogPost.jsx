import { useMemo } from 'react'
import { marked } from 'marked'
import { findPost, formatDate } from '../lib/posts.js'

export default function BlogPost({ slug }) {
  const post = findPost(slug)
  const html = useMemo(() => (post ? marked.parse(post.body) : ''), [post])

  if (!post) {
    return (
      <main className="section page">
        <div className="container container-narrow">
          <h1 className="section-title">Post not found</h1>
          <p><a href="#/blog">← Back to the blog</a></p>
        </div>
      </main>
    )
  }

  return (
    <main className="section page">
      <article className="container container-narrow">
        <p className="blog-meta">
          {formatDate(post.date)} · {post.minutes} min read
        </p>
        <h1 className="section-title post-title">{post.title}</h1>
        <div className="chips">
          {post.tags.map((t) => (
            <a key={t} className="chip chip-sm" href={`#/tags/${encodeURIComponent(t)}`}>{t}</a>
          ))}
        </div>
        <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
        <footer className="post-footer">
          <p>
            Written by Mohit Jain. Have a question, or a project this speaks to?{' '}
            <a href="mailto:jain.moheet@gmail.com">Get in touch</a>.
          </p>
          <p><a href="#/blog">← All posts</a></p>
        </footer>
      </article>
    </main>
  )
}
