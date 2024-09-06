import React from 'react'
import { EmailForm } from "@/components/email-form"

export default function Contact() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white px-4 sm:px-8 py-12 dark:bg-black transition-colors duration-500 ease-in-out">
      {/* Contact Me Title */}
      <h1 className="text-center text-4xl font-bold mb-4 text-black dark:text-white">
        Contact Me
      </h1>
      {/* Email Address */}
      <p className="text-center text-2xl font-semibold text-highlightRed dark:text-highlightRed mb-8">
        joelsngzw@gmail.com
      </p>

      <EmailForm />
    </div>
  )
}
