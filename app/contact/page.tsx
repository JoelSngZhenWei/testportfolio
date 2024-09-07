import React from 'react'
import { EmailForm } from "@/components/email-form"
import ParticlesBackground from "@/components/ParticlesBackground"

export default function Contact() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black transition-colors duration-500 ease-in-out overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0">
        <ParticlesBackground />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-xl px-4 sm:px-8 py-12">
        <EmailForm />
      </div>
    </div>
  )
}