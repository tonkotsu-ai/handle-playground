import type { Social } from "../content"

type ElsewhereProps = {
  socials: Social[]
}

export default function Elsewhere({ socials }: ElsewhereProps) {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto max-w-2xl px-6 py-24">
        <h2 className="text-xs font-mono uppercase tracking-widest text-ink-muted">Elsewhere</h2>
        <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {socials.map(({ label, handle, href }) => (
            <li key={label}>
              <a href={href} className="group flex items-baseline gap-3">
                <span className="text-sm text-ink-muted">{label}</span>
                <span className="text-base group-hover:underline">{handle}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
