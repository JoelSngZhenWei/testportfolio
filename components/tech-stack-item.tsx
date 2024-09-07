'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import * as Tooltip from '@radix-ui/react-tooltip'
import { X } from 'lucide-react'

interface TechStackItemProps {
  src: string
  alt: string
  reason: string
  longReason: string
}

export default function TechStackItem({ src, alt, reason, longReason }: TechStackItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <div className="flex flex-col items-center group cursor-pointer">
            <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
              <Dialog.Trigger asChild>
                <div className="relative w-20 h-20 mb-2 transition-transform duration-300 ease-in-out transform group-hover:scale-110">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="bg-black/50 data-[state=open]:animate-overlayShow fixed inset-0" />
                <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-6 shadow-lg focus:outline-none">
                  <div className="flex items-center mb-4">
                    <div className="relative w-16 h-16 mr-4">
                      <Image
                        src={src}
                        alt={alt}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <Dialog.Title className="text-2xl font-bold text-gray-900">
                      {alt}
                    </Dialog.Title>
                  </div>
                  <div className="mt-4 text-gray-700 leading-relaxed whitespace-pre-wrap">
                    {longReason}
                  </div>
                  <Dialog.Close asChild>
                    <button
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      aria-label="Close"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
            <p className="text-sm font-medium">{alt}</p>
          </div>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade select-none rounded-md bg-white px-4 py-2 text-sm leading-none shadow-md will-change-[transform,opacity]"
            sideOffset={5}
          >
            {reason}
            <Tooltip.Arrow className="fill-white" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}