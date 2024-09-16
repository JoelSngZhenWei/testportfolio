'use client'

import { Github } from "lucide-react"

export function GithubButton({ href = "https://github.com/JoelSngZhenWei/portfolio" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white transition-all duration-200 ease-in-out rounded-full bg-[#24292e] hover:bg-[#3a4149] focus:outline-none focus:ring-2 focus:ring-[#24292e] focus:ring-offset-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
    >
      GitHub
      <Github className="ml-2 h-5 w-5" />
    </a>
  )
}