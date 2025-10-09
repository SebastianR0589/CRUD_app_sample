import type { JSX } from "react"

export default function Header(): JSX.Element {
  return (
    <header>
      <h1 className="text-4xl font-bold text-center mb-8 text-white-800">My Contacts</h1>
    </header>
  )
}