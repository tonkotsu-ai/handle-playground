import Nav from "./components/Nav"
import Hero from "./components/Hero"
import About from "./components/About"
import ProjectList from "./components/ProjectList"
import WritingList from "./components/WritingList"
import Elsewhere from "./components/Elsewhere"
import { hero, aboutParagraphs, projects, writings, socials } from "./content"

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink font-sans">
      <Nav name={hero.name} />
      <main className="mx-auto max-w-2xl px-6 py-24 space-y-24">
        <Hero {...hero} />
        <About paragraphs={aboutParagraphs} />
        <ProjectList projects={projects} />
        <WritingList writings={writings} />
      </main>
      <Elsewhere socials={socials} />
    </div>
  )
}
