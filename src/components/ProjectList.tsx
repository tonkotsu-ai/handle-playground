import type { Project } from "../content"
import ProjectCard from "./ProjectCard"

type ProjectListProps = {
  projects: Project[]
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <section id="work">
      <h2 className="text-xs font-mono uppercase tracking-widest text-ink-muted">Selected Work</h2>
      <div className="mt-8 space-y-12">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  )
}
