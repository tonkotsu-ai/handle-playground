import type { Writing } from "../content"
import WritingCard from "./WritingCard"

type WritingListProps = {
  writings: Writing[]
}

export default function WritingList({ writings }: WritingListProps) {
  return (
    <section id="writing">
      <h2 className="text-xs font-mono uppercase tracking-widest text-ink-muted">Writing</h2>
      <div className="mt-8 space-y-8">
        {writings.map((writing) => (
          <WritingCard key={writing.title} {...writing} />
        ))}
      </div>
    </section>
  )
}
