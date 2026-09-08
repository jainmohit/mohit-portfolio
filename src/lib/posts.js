// Loads every markdown file in src/posts at build time.
// Publishing a post = adding a .md file and pushing — only repo writers (you) can.

const files = import.meta.glob('../posts/*.md', { query: '?raw', import: 'default', eager: true })

function parseFrontMatter(raw) {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/)
  if (!match) return { meta: {}, body: raw }
  const meta = {}
  for (const line of match[1].split('\n')) {
    const idx = line.indexOf(':')
    if (idx === -1) continue
    const key = line.slice(0, idx).trim()
    let value = line.slice(idx + 1).trim()
    if (value.startsWith('[') && value.endsWith(']')) {
      meta[key] = value
        .slice(1, -1)
        .split(',')
        .map((s) => s.trim().replace(/^['"]|['"]$/g, ''))
        .filter(Boolean)
    } else {
      meta[key] = value.replace(/^['"]|['"]$/g, '')
    }
  }
  return { meta, body: match[2] }
}

export const posts = Object.entries(files)
  .map(([path, raw]) => {
    const file = path.split('/').pop().replace(/\.md$/, '')
    const dateMatch = file.match(/^(\d{4}-\d{2}-\d{2})-(.*)$/)
    const { meta, body } = parseFrontMatter(raw)
    const date = meta.date || (dateMatch ? dateMatch[1] : '1970-01-01')
    const slug = dateMatch ? dateMatch[2] : file
    const words = body.split(/\s+/).filter(Boolean).length
    return {
      slug,
      date,
      title: meta.title || slug,
      description: meta.description || '',
      tags: Array.isArray(meta.tags) ? meta.tags : meta.tags ? [meta.tags] : [],
      minutes: Math.max(2, Math.round(words / 180)),
      body,
    }
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1))

export const allTags = [...new Set(posts.flatMap((p) => p.tags))].sort()

export const findPost = (slug) => posts.find((p) => p.slug === slug)

export const formatDate = (iso) =>
  new Date(iso + 'T00:00:00').toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
