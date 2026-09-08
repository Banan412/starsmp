import type { SVGProps } from "react"

type IconProps = SVGProps<SVGSVGElement>

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z" />
      <path d="m19 16 .7 1.8L21.5 18l-1.8.7L19 20.5l-.7-1.8-1.8-.7 1.8-.7L19 16Z" />
    </svg>
  )
}

export function ServerIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="4" width="18" height="6" rx="1.5" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" />
      <path d="M7 7h.01M7 17h.01M11 7h6M11 17h6" />
    </svg>
  )
}

export function DiscordIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M19.54 5.2A16.2 16.2 0 0 0 15.6 4l-.48.98a14.8 14.8 0 0 0-6.24 0L8.4 4a16.2 16.2 0 0 0-3.94 1.2C1.96 8.67 1.27 12.05 1.62 15.38A16.6 16.6 0 0 0 6.47 18l1.17-1.59c-.64-.23-1.25-.51-1.83-.85l.45-.34c3.53 1.64 7.37 1.64 10.86 0l.46.34c-.58.34-1.2.63-1.84.85L16.9 18a16.6 16.6 0 0 0 4.85-2.62c.41-3.87-.7-7.22-2.21-10.18ZM8.52 14.2c-1.05 0-1.92-.96-1.92-2.14s.85-2.14 1.92-2.14 1.94.96 1.92 2.14c0 1.18-.85 2.14-1.92 2.14Zm6.96 0c-1.05 0-1.92-.96-1.92-2.14s.85-2.14 1.92-2.14 1.94.96 1.92 2.14c0 1.18-.85 2.14-1.92 2.14Z" />
    </svg>
  )
}
