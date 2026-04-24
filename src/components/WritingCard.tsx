import type { Writing } from "../content"

export default function WritingCard({ title, date, excerpt, href }: Writing) {
  return (
    <a href={href} className="block group">
      <h3 className="text-lg font-medium group-hover:underline">{title}</h3>
      <p className="mt-1 text-sm text-ink-muted">{date}</p>
      <p className="mt-2 text-base text-ink-muted leading-relaxed">{excerpt}</p>
    </a>
  )
}
