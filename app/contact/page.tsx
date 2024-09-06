import React from 'react'
import { EmailForm } from "@/components/email-form"

export default function Contact() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white px-4 sm:px-8 py-12 dark:bg-black transition-colors duration-500 ease-in-out">
      {/* Contact Me Title */}
      <EmailForm />
    </div>
  )
}
