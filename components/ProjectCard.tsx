// components/ProjectCard.tsx
"use client";
import Image from "next/image";

interface ProjectCardProps {
  imageSrc: string;
  date: string;
  title: string;
  description: string;
}

export default function ProjectCard({
  imageSrc,
  date,
  title,
  description,
}: ProjectCardProps) {
  return (
    <div className="w-full p-4 hover:shadow-glowHighlight transition-shadow duration-300 rounded-xl">
      {/* Project Image */}
      <div className="w-full h-56 relative">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      {/* Project Date */}
      <p className="text-gray-500 text-sm mt-2">{date}</p>

      {/* Project Title */}
      <h3 className="text-black font-bold text-xl mt-1">{title}</h3>

      {/* Project Description */}
      <p className="text-gray-700 text-sm mt-1">
        {description.length > 150 ? `${description.substring(0, 200)}...` : description}
      </p>
    </div>
  );
}
