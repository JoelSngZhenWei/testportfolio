'use client'

import { useState } from 'react'
import { ClipboardIcon, CheckIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { SpaceBetweenHorizontallyIcon } from '@radix-ui/react-icons'

export function EmailCopyButton() {
  const [copied, setCopied] = useState(false)
  const email = 'joelsngzw@gmail.com'

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000) // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <span>
        <span>{email}</span>
        <Button
          variant="ghost"
          size="icon"
          onClick={copyToClipboard}
          className="h-8 w-8 rounded-full"
          aria-label="Copy email to clipboard"
        >
          {copied ? (
            <CheckIcon className="h-4 w-4 text-green-500" />
          ) : (
            <ClipboardIcon className="h-4 w-4" />
          )}
        </Button>
    </span>

  )
}