'use client'

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function Project3() {
  return (
    <Card className="w-full max-w-5xl mx-auto overflow-hidden border-none shadow-none">
      <CardContent className="p-0">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 flex flex-col justify-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Project Title</h1>
            <p className="text-xl text-muted-foreground">Responsive web design. Backend API calls for emails and PDF rendering.</p>
          </div>
          <div className="relative aspect-video md:aspect-square rounded-lg overflow-hidden">
            <Image
              src="/loki.jpg"
              alt="hello"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Long Description */}
        <div className="py-16 px-8">
          <h2 className="text-3xl font-semibold mb-6">Long Description</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id
            lacus a sapien blandit viverra. Integer faucibus Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id
            lacus a sapien blandit viverra. Integer faucibus Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id
            lacus a sapien blandit viverra. Integer faucibus Lorem ipsum dolor
            sit amet, consectetur adipiscing elit.
          </p>

          {/* Tech Stack */}
          <h3 className="text-2xl font-semibold mb-8 text-center">Tech Stack</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center mb-16">
            {[
              { src: "/techstack/nextjs.png", alt: "Next.js" },
              { src: "/techstack/reactjs.png", alt: "React.js" },
              { src: "/techstack/tailwindcss.png", alt: "Tailwind CSS" },
              { src: "/techstack/vercel.png", alt: "Vercel" },
              { src: "/techstack/html5.png", alt: "HTML5" },
            ].map((tech, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="relative w-20 h-20 mb-2 transition-transform duration-300 ease-in-out transform group-hover:scale-110">
                  <Image
                    src={tech.src}
                    alt={tech.alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm font-medium">{tech.alt}</p>
              </div>
            ))}
          </div>

          {/* Long Description with Photo */}
          <div className="flex flex-col md:flex-row gap-12 mb-16">
            <div className="flex-1 flex flex-col justify-between">
              <h3 className="text-2xl font-semibold mb-4">Long Description with Photo</h3>
              <p className="text-lg text-muted-foreground">
                Donec nec justo sed arcu lacinia facilisis. Phasellus imperdiet, 
                libero nec interdum cursus, justo sem facilisis magna, eu varius 
                dolor arcu in erat. Mauris ut massa felis. Curabitur sit amet nisi 
                vitae nisi cursus hendrerit.Donec nec justo sed arcu lacinia facilisis. Phasellus imperdiet, 
                libero nec interdum cursus, justo sem facilisis magna, eu varius 
                dolor arcu in erat. Mauris ut massa felis. Curabitur sit amet nisi 
                vitae nisi cursus hendrerit.Donec nec justo sed arcu lacinia facilisis. Phasellus imperdiet, 
                libero nec interdum cursus, justo sem facilisis magna, eu varius 
                dolor arcu in erat. Mauris ut massa felis. Curabitur sit amet nisi 
                vitae nisi cursus hendrerit.Donec nec justo sed arcu lacinia facilisis. Phasellus imperdiet, 
                libero nec interdum cursus, justo sem facilisis magna, eu varius 
                dolor arcu in erat. Mauris ut massa felis. Curabitur sit amet nisi 
                vitae nisi cursus hendrerit.
              </p>
            </div>
            <div className="relative w-full md:w-1/2 max-w-[50%]">
              <div className="relative w-full h-full max-h-[calc(100vh-6rem)]">
                <Image
                  src="/loki.jpg"
                  alt="Description photo"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Photo with Caption */}
          <div className="text-center mb-16">
            <div className="relative inline-block w-full max-w-2xl">
              <Image
                src="/loki.jpg"
                alt="Centered photo"
                width={800}
                height={600}
                className="object-cover rounded-lg w-full"
              />
              <p className="absolute inset-x-0 bottom-0 text-white bg-black bg-opacity-50 py-2 text-sm rounded-b-lg">
                This is a caption of my photo. Loki is here.
              </p>
            </div>
            <p className="text-lg text-muted-foreground mt-6 max-w-5xl mx-auto text-left">
              Aliquam erat volutpat. Suspendisse potenti. Donec aliquet sapien vel 
              tellus suscipit, eu dapibus ipsum bibendum. Phasellus vulputate, arcu 
              ac vehicula pharetra, arcu orci aliquet lectus. Aliquam erat volutpat. Suspendisse potenti. Donec aliquet sapien vel 
              tellus suscipit, eu dapibus ipsum bibendum. Phasellus vulputate, arcu 
              ac vehicula pharetra, arcu orci aliquet lectus. Aliquam erat volutpat. Suspendisse potenti. Donec aliquet sapien vel 
              tellus suscipit, eu dapibus ipsum bibendum. Phasellus vulputate, arcu 
              ac vehicula pharetra, arcu orci aliquet lectus.
            </p>
          </div>

          
        </div>
      </CardContent>
    </Card>
  )
}
