import { DiscordIcon } from "../components/icons"
import { DISCORD_URL, Layout } from "../components/Layout"

export function ServerInfoPage() {
  return (
    <Layout title="Server Info — Star SMP" description="Learn about the Star SMP survival world.">
      <section className="content-page section-narrow">
        <p className="eyebrow">SERVER GUIDE</p>
        <h1>Welcome to Star SMP.</h1>
        <p className="lead">Star SMP is a community-first Minecraft survival server where every build, expedition, and shared project becomes part of the world’s history. Settle into your own corner, team up with friends, or head beyond the familiar to find your next adventure.</p>
        <article className="info-panel"><h2>HOW WE PLAY</h2><p>Explore freely, respect other players, and leave the world better than you found it. Great stories are always more fun with good people around.</p></article>
        <a className="discord-button" href={DISCORD_URL} target="_blank" rel="noreferrer"><DiscordIcon /><span>MEET THE COMMUNITY</span></a>
      </section>
    </Layout>
  )
}
