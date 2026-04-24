type NavProps = {
  name: string
}

export default function Nav({ name }: NavProps) {
  return (
    <nav aria-label="Site navigation" className="sticky top-0 z-10 backdrop-blur-sm border-b border-rule bg-paper/80">
      <div className="mx-auto max-w-2xl flex items-center justify-between px-6 py-4">
        <span className="font-display text-lg">{name}</span>
        <div className="flex items-center gap-6 text-sm">
          <a href="#work" className="hover:underline">Work</a>
          <a href="#writing" className="hover:underline">Writing</a>
        </div>
      </div>
    </nav>
  )
}
