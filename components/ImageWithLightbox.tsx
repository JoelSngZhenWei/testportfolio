'use client'

import React from 'react'
import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

interface ImageWithLightboxProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  caption?: string
}

export function ImageWithLightbox({
  src,
  alt,
  width,
  height,
  fill = false,
  className = '',
  caption,
}: ImageWithLightboxProps) {
  return (
    <div className="relative">
      <Zoom>
        <div className={`${fill ? 'relative w-full h-full' : ''}`}>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            fill={fill}
            className={`${className} ${fill ? 'object-cover' : ''}`}
          />
        </div>
      </Zoom>
      {caption && (
        <p className="absolute inset-x-0 bottom-0 text-white bg-black bg-opacity-50 py-2 text-sm rounded-b-lg">
          {caption}
        </p>
      )}
    </div>
  )
}