"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface SpecialisationCardProps {
  imageSrc: string
  title: string
}

export default function SpecialisationCard({
  imageSrc,
  title
}: SpecialisationCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="flex flex-col items-center justify-center w-full max-w-xs mx-auto p-6 bg-gradient-to-br transition-all duration-300 ease-in-out"
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative w-32 h-32 mb-6">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="contain"
          className="relative z-10"
        />
      </div>

      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{title}</h3>
    </motion.div>
  )
}
