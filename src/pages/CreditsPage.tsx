import { Layout } from "../components/Layout"

const credits = [["DEVELOPERS", "Envo & Banana"], ["HOST", "CraftServ"], ["STAFF", "Envo, Rexortal, Apple"]]

export function CreditsPage() {
  return (
    <Layout title="Credits — Star SMP" description="Meet the people behind Star SMP.">
      <section className="content-page credits-page section-narrow">
        <p className="eyebrow">THE PEOPLE BEHIND THE WORLD</p>
        <h1>Star SMP Credits</h1>
        <div className="credits-grid">{credits.map(([role, names]) => <article className="credit-card" key={role}><h2>{role}</h2><p>{names}</p></article>)}</div>
      </section>
    </Layout>
  )
}
