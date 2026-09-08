import { DiscordIcon, ServerIcon } from "../components/icons"
import { DISCORD_URL, Layout } from "../components/Layout"

function DiscordButton({ label }: { label: string }) {
  return <a className="discord-button" href={DISCORD_URL} target="_blank" rel="noreferrer"><DiscordIcon /><span>{label}</span></a>
}

export function HomePage() {
  return (
    <Layout title="Star SMP — Minecraft Survival" description="Join the Star SMP Minecraft survival community.">
      <section className="hero section-narrow">
        <p className="eyebrow centered">✦&nbsp; JAVA SURVIVAL SERVER &nbsp;✦</p>
        <h1>STAR SMP</h1>
        <p className="hero-copy">A friendly survival world for builders, explorers, and every late-night adventure.</p>
        <div className="server-address"><div className="address-label"><ServerIcon /><span>SERVER IP</span></div><strong>151.240.30.24:25506</strong></div>
        <DiscordButton label="JOIN THE DISCORD" />
      </section>
      <section className="overview section-narrow">
        <p className="eyebrow">THE WORLD AWAITS</p>
        <h2>Survive. Build. Become part of the story.</h2>
        <p>Star SMP is a community-led Minecraft survival server built around shared projects, relaxed exploration, and the people you meet along the way.</p>
      </section>
      <section className="ways section-narrow">
        <p className="eyebrow">CHOOSE YOUR PATH</p>
        <h2>There’s room for every kind of player.</h2>
        <div className="path-list">
          <article className="path-card"><p className="card-kicker">01 / BUILD</p><h3>Make your mark.</h3><p>Claim a corner of the world and turn it into something worth visiting.</p></article>
          <article className="path-card"><p className="card-kicker">02 / EXPLORE</p><h3>Chase the horizon.</h3><p>Set out from spawn, discover new places, and find stories waiting off the path.</p></article>
          <article className="path-card"><p className="card-kicker">03 / COMMUNITY</p><h3>Find your crew.</h3><p>Meet people, share projects, and make new memories in a world built together.</p></article>
        </div>
      </section>
      <section className="join section-narrow">
        <p className="eyebrow centered">YOUR NEXT SESSION STARTS HERE</p>
        <h2>Join the Star SMP.</h2>
        <p className="join-ip">151.240.30.24:25506</p>
        <DiscordButton label="JOIN THE DISCORD" />
      </section>
    </Layout>
  )
}
