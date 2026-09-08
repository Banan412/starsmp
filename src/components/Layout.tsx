import { useEffect, type ReactNode } from "react"
import { DiscordIcon, StarIcon } from "./icons"

const DISCORD_URL = "https://discord.gg/c9rw5AMknB"
const navItems = [
  { href: "/", label: "Home" },
  { href: "/server-info", label: "Server Info" },
  { href: "/credits", label: "Credits" },
]

type LayoutProps = { children: ReactNode; title: string; description: string }

export function Layout({ children, title, description }: LayoutProps) {
  const currentPath = window.location.pathname.replace(/\/$/, "") || "/"

  useEffect(() => {
    document.title = title
    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute("content", description)
  }, [description, title])

  return (
    <div className="site-shell">
      <header className="site-nav">
        <a className="brand" href="/" aria-label="Star SMP home">
          <StarIcon className="brand-icon" />
          <span>STAR SMP</span>
        </a>
        <nav className="page-links" aria-label="Main navigation">
          {navItems.map((item) => <a className={currentPath === item.href ? "active" : ""} href={item.href} key={item.href}>{item.label}</a>)}
        </nav>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <span>STAR SMP — PLAY UNDER THE STARS</span>
        <a className="footer-discord" href={DISCORD_URL} target="_blank" rel="noreferrer"><DiscordIcon /><span>Join Discord</span></a>
      </footer>
    </div>
  )
}

export { DISCORD_URL }
