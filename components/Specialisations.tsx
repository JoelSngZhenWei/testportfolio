// components/Specialisations.tsx
"use client";
import SpecialisationCard from "@/components/SpecialisationCard";

export default function Specialisations() {
  const specialisations = [
    {
      imageSrc: "/datavisualisation.png", 
      title: "Data Visualisation",
    },
    {
      imageSrc: "/machinelearning.png", 
      title: "Machine Learning",
    },
    {
      imageSrc: "/softwareengineering.png", 
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
