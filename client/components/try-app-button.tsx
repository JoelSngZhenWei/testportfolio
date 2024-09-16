'use client'

import { ExternalLink } from "lucide-react"

export function TryAppButton({ href = "/projects" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white transition-all duration-200 ease-in-out rounded-full bg-[rgb(220,38,38)] hover:bg-[rgb(185,28,28)] focus:outline-none focus:ring-2 focus:ring-[rgb(220,38,38)] focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
    >
      Try the App
      <ExternalLink className="ml-2 h-5 w-5" />
    </a>
  )
}
