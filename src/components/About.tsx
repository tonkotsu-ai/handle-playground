type AboutProps = {
  paragraphs: string[]
}

export default function About({ paragraphs }: AboutProps) {
  return (
    <section id="about">
      <h2 className="text-xs font-mono uppercase tracking-widest text-ink-muted">About</h2>
      <div className="mt-6 space-y-6">
        {paragraphs.map((p) => (
          <p key={p} className="text-base leading-relaxed">{p}</p>
        ))}
      </div>
    </section>
  )
}
