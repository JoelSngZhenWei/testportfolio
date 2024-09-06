'use client'

import Image from "next/image"

interface ProjectHeaderProps {
  title: string
  shortDescription: string
  imageSrc: string
}

export function ComponentsProjectHeader({ title, shortDescription, imageSrc }: ProjectHeaderProps) {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              {shortDescription}
            </p>
          </div>
          <div className="aspect-w-16 aspect-h-9 lg:aspect-w-3 lg:aspect-h-2">
            <Image
              src={imageSrc}
              alt={title}
              width={800}
              height={600}
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}