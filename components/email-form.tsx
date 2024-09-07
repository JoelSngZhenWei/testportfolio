'use client'

import { useState, useRef, FormEvent } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle, XCircle } from "lucide-react"

export function EmailForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, message: e.target.value })
    autoResizeTextarea()
  }

  const autoResizeTextarea = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    if (!formData.name) newErrors.name = "Name is required."
    if (!formData.email) newErrors.email = "Email is required."
    if (!formData.message) newErrors.message = "Message is required."

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    setIsLoading(false)

    if (response.ok) {
      setShowSuccessModal(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
    } else {
      setShowErrorModal(true)
    }
  }

  const closeModal = () => {
    setShowSuccessModal(false)
    setShowErrorModal(false)
  }

  return (
    <div className="w-full max-w-lg mx-auto">
      <Card className="bg-white dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Contact Me</CardTitle>
          <CardDescription className="text-center font-bold text-red-600">joelsngzw@gmail.com</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter the subject"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={handleTextareaChange}
                ref={textareaRef}
                placeholder="Enter your message"
                className="min-h-[120px]"
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>
            <CardFooter>
              <Button type="submit" className="w-full">
                {isLoading ? (
                  <span>Loading...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Email
                  </>
                )}
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-sm w-full mx-4 transform transition-all duration-300 ease-in-out scale-100">
            <div className="text-center">
              <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Email Sent Successfully!
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Your message has been sent to Joel Sng. 
              </p>
              <Button
                onClick={closeModal}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 ease-in-out"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {showErrorModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-sm w-full mx-4 transform transition-all duration-300 ease-in-out scale-100">
            <div className="text-center">
              <XCircle className="mx-auto h-16 w-16 text-red-500 mb-4" />
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Failed to Send Email
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Oops! Something went wrong. Please try again later or contact manually via your email client.
              </p>
              <Button
                onClick={closeModal}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 ease-in-out"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}