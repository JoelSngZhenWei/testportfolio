'use client'

import { Mail, Linkedin, Code, Database, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold text-gray-800">Jane Doe</h1>
          <p className="text-gray-600">Full Stack Developer</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
          </p>
        </section>

        {/* Featured Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={`/placeholder.svg?height=200&width=400`} alt={`Project ${project}`} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">Project {project}</h3>
                  <p className="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
                  <Button variant="outline" size="sm">View Project</Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { icon: <Code className="mr-2" />, name: "Frontend Development" },
              { icon: <Database className="mr-2" />, name: "Backend Development" },
              { icon: <Globe className="mr-2" />, name: "Web Design" },
              { icon: <Code className="mr-2" />, name: "Mobile Development" },
            ].map((skill, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 flex items-center">
                {skill.icon}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
          <form className="bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <Input id="name" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <Textarea id="message" placeholder="Your message here..." className="h-32" />
            </div>
            <div className="mt-6">
              <Button className="w-full">Send Message</Button>
            </div>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-gray-400"><Mail /></a>
            <a href="#" className="hover:text-gray-400"><Linkedin /></a>
          </div>
          <p className="text-center mt-4 text-gray-400">&copy; 2023 Jane Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}