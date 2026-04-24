import type { Project } from "../content"

export default function ProjectCard({ name, description, role, year, gradient, href }: Project) {
  return (
    <a href={href} className="block group">
      <div
        className="aspect-[4/3] rounded-lg"
        style={{ backgroundImage: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})` }}
      />
      <div className="mt-4">
        <h3 className="text-lg font-medium group-hover:underline">
          {name} <span className="text-ink-muted font-normal">— {description}</span>
        </h3>
        <p className="mt-2 text-sm text-ink-muted">{role} · {year}</p>
      </div>
    </a>
  )
}
