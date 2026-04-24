import type { Hero } from "../content"

export default function Hero({ name, tagline, availability }: Hero) {
  return (
    <section>
      <h1 className="text-7xl font-display leading-none tracking-tight">{name}</h1>
      <p className="mt-8 text-base leading-relaxed max-w-xl">{tagline}</p>
      <div className="mt-8 inline-flex items-center rounded-full bg-ink px-3 py-1 text-xs font-mono text-paper">
        <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-paper"></span>
        {availability}
      </div>
    </section>
  )
}
