// components/Specialisations.tsx
"use client";
import SpecialisationCard from "@/components/SpecialisationCard";

export default function Specialisations() {
  const specialisations = [
    {
      imageSrc: "/datavisualisation.svg", // Updated to SVG
      title: "Data Visualisation",
    },
    {
      imageSrc: "/machinelearning.svg", // Updated to SVG
      title: "Machine Learning",
    },
    {
      imageSrc: "/softwareengineering.svg", // Updated to SVG
      title: "Software Engineering",
    },
  ];

  return (
    <section className="w-full py-12 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {specialisations.map((specialisation, index) => (
          <SpecialisationCard
            key={index}
            imageSrc={specialisation.imageSrc}
            title={specialisation.title}
          />
        ))}
      </div>
    </section>
  );
}
