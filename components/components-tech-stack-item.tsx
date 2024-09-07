'use client'

import React from 'react'
import Image from 'next/image'
import * as Tooltip from '@radix-ui/react-tooltip'

interface TechStackItemProps {
  src: string
  alt: string
  reason: string
}

export function TechStackItem({ src, alt, reason }: TechStackItemProps) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="relative w-20 h-20 mb-2 transition-transform duration-300 ease-in-out transform group-hover:scale-110">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm font-medium">{alt}</p>
          </div>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
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