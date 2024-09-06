'use client'

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface ProjectProps {
  title: string
  shortDescription: string
  imageSrc: string
}

export function ProjectInfoHeader({ title, shortDescription, imageSrc }: ProjectProps = {
  title: "Project One",
  shortDescription: "A revolutionary web application for modern businesses.",
  imageSrc: "/project1.jpg"
}) {
  return (
    <Card className="w-full max-w-4xl mx-auto overflow-hidden">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 flex flex-col justify-center">
            <h1 className="text-3xl font-bold tracking-tight mb-4">{title}</h1>
            <p className="text-muted-foreground">{shortDescription}</p>
          </div>
          <div className="relative aspect-video md:aspect-square">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}