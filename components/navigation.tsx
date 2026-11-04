import Link from "next/link"

export default function Navigation() {
  return (
    <div className="navBar">
      <div className="navBarContent">
        <Link href="/">Home</Link>
        <Link href="/configuration">Configuration</Link>
        <Link href="/services/all">Supported services list</Link>
        <br>
        </br>
        <h2>Services</h2>
        <div className="navBarServices">
          <Link href="/services/github/releases">Github</Link>
          <Link href="/services/jellyfin">Jellyfin</Link>
          <Link href="/services/pihole">Pi-Hole</Link>
          <Link href="/services/radarr">Radarr</Link>
          <Link href="/services/seerr">Seerr</Link>
          <Link href="/services/sonarr">Sonarr</Link>
        </div>
      </div>
    </div>
  )
}