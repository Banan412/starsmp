import { CreditsPage } from "./src/pages/CreditsPage"
import { HomePage } from "./src/pages/HomePage"
import { ServerInfoPage } from "./src/pages/ServerInfoPage"

export default function Website() {
  const path = window.location.pathname.replace(/\/$/, "") || "/"
  if (path === "/server-info") return <ServerInfoPage />
  if (path === "/credits") return <CreditsPage />
  return <HomePage />
}
