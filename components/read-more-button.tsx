'use client'

import { useState } from 'react'

export function ReadMoreButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      className={`
        relative overflow-hidden px-6 py-3 rounded-full font-semibold text-white
        transition-all duration-300 ease-in-out
        ${isHovered ? 'bg-[#D10000]' : 'bg-transparent'}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span 
        className={`
          relative z-10 transition-colors duration-300
          ${isHovered ? 'text-white' : 'text-[#D10000]'}
        `}
      >
        Read More
      </span>
      <span 
        className={`
          absolute inset-0 bg-[#D10000] 
          transition-all duration-300 ease-in-out
          ${isHovered ? 'scale-x-100' : 'scale-x-0'}
        `}
        style={{ transformOrigin: 'left' }}
      />
    </button>
  )
}
