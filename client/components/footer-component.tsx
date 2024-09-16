'use client'

import { Mail, Linkedin, Code, Database, Globe } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"

// Rename footerComponent to FooterComponent
export function FooterComponent() {
  return (
    <footer className="bg-white border-t text-black py-8">
      <div className="container mx-auto px-6">
        <div className="flex justify-center space-x-20">
          <a href="/contact" className="hover:text-highlightRed"><Mail /></a>
          <a href="https://www.linkedin.com/in/joelsngzw/" target="_blank" className="hover:text-highlightRed"><Linkedin /></a>
        </div>
      </div>
    </footer>
  );
}
