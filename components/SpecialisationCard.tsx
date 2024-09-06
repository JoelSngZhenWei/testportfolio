// components/SpecialisationCard.tsx
"use client";
import Image from "next/image";

interface SpecialisationCardProps {
  imageSrc: string; // SVG image path
  title: string;
}

export default function SpecialisationCard({
  imageSrc,
  title,
}: SpecialisationCardProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-xs mx-auto p-4">
      {/* Icon Image with Glowing Effect */}
      <div className="relative w-40 h-40 mb-4">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="contain"
          className="glow-effect text-gray-800 dark:text-white" // Apply the glow effect class and color adjustments
        />
      </div>

      {/* Specialisation Title */}
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
    </div>
  );
}
