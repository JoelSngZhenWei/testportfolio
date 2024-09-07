"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Loader2 } from "lucide-react"

export function EnhancedPdfViewer() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500) // Simulate loading
    return () => clearTimeout(timer)
  }, [])

  const handleDownload = () => {
    window.open('/api/download-pdf', '_blank')
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-6xl shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-2xl font-bold">Resume</CardTitle>
          <Button variant="outline" size="icon" onClick={handleDownload}>
            <Download className="h-4 w-4" />
            <span className="sr-only">Download PDF</span>
          </Button>
        </CardHeader>
        <CardContent className="p-3">
          {isLoading ? (
            <div className="flex justify-center items-center h-[80vh]">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
          ) : (
            <iframe
              src="/api/download-pdf"
              className="w-full h-[80vh] border-0"
              title="Resume PDF"
            />
          )}
        </CardContent>
      </Card>
    </div>
  )
}