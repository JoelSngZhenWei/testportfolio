'use client'

import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  date: string;
  shortDescription: string;
  fullDescription: string;
  imageSrc: string;
  languages: string[];
  frameworks: string[];
}

export function AppProjectsIdPage({ project }: { project: Project }) {
  if (!project) {
    return <p>Project not found</p>
  }

  return (
    <div className="bg-background min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-4">{project.title}</h1>
        <p className="text-xl text-muted-foreground mb-6">{project.date}</p>
        <div className="mb-8">
          <Image
            src={project.imageSrc}
            alt={project.title}
            width={800}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Description</h2>
          <p className="text-lg text-card-foreground mb-4">{project.shortDescription}</p>
          <div className="prose prose-lg text-card-foreground max-w-none">
            <p>{project.fullDescription}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">Languages Used</h2>
            <ul className="list-disc list-inside text-card-foreground">
              {project.languages.map((lang, index) => (
                <li key={index}>{lang}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">Frameworks Used</h2>
            <ul className="list-disc list-inside text-card-foreground">
              {project.frameworks.map((framework, index) => (
                <li key={index}>{framework}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-center">
          <a
            href="#"
            className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors"
          >
            View Live Project
          </a>
        </div>
      </div>
    </div>
  );
}
