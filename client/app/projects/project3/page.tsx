'use client';

import { Card, CardContent } from '@/components/ui/card';
import TechStackItem from '@/components/tech-stack-item';
import { Lightbox } from '@/components/lightbox';

export default function Project3() {
  // Separate tech stack items into categories
  const programmingLanguages = [
    { src: '/techstack/html5.png', alt: 'HTML5', reason: 'Used for structuring web content.', longReason: 'LD5' },
    { src: '/techstack/javascript.png', alt: 'JavaScript', reason: 'Main language for web development.', longReason: 'LD6' },
    // Add more languages as needed
  ];

  const frameworks = [
    { src: '/techstack/nextjs.svg', alt: 'Next.js', reason: 'Server-side rendering and optimized performance.', longReason: 'LD1' },
    { src: '/techstack/reactjs.png', alt: 'React.js', reason: 'Component-based architecture and efficient UI updates.', longReason: 'LD2' },
    { src: '/techstack/tailwindcss.png', alt: 'Tailwind CSS', reason: 'Rapid UI development and consistent styling.', longReason: 'LD3' },
    // Add more frameworks as needed
  ];

  const databases = [
    { src: '/techstack/mongodb.png', alt: 'MongoDB', reason: 'NoSQL database for scalable applications.', longReason: 'LD7' },
    { src: '/techstack/postgresql.png', alt: 'PostgreSQL', reason: 'Relational database with robust SQL support.', longReason: 'LD8' },
    // Add more databases as needed
  ];

  const tools = [
    { src: '/techstack/vercel.svg', alt: 'Vercel', reason: 'Seamless deployment and Next.js integration.', longReason: 'LD4' },
    { src: '/techstack/docker.png', alt: 'Docker', reason: 'Containerization platform for consistent environments.', longReason: 'LD9' },
    // Add more tools as needed
  ];

  const apis = [
    { src: '/techstack/graphql.png', alt: 'GraphQL', reason: 'Query language for APIs with efficient data fetching.', longReason: 'LD11' },
    // Add more APIs as needed
  ];

  return (
    <Card className="w-full max-w-5xl mx-auto overflow-hidden border-none shadow-none">
      <CardContent className="p-0 mt-4">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 flex flex-col justify-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Template</h1>
            <p className="text-xl text-muted-foreground mb-4">
              Expanded Tech Stack
            </p>
            <p className="text-reg text-muted-foreground mb-4">March 1, 2024</p>
          </div>
          {/* Main Image */}
          <div className="relative aspect-square rounded-lg">
            <Lightbox src="/loki.jpg" alt="Main Image" width={800} height={600} />
          </div>
        </div>

        {/* Long Description */}
        <div className="py-16 px-8">
          {/* Main Tech Stack Title */}
          <h2 className="text-3xl font-bold mb-6 text-center">Tech Stack</h2>

          {/* Programming Languages */}
          <h3 className="text-2xl font-semibold mb-4 text-center">Programming Languages</h3>
          <div className="flex flex-wrap justify-center gap-24 mb-16">
            {programmingLanguages.map((tech, index) => (
              <TechStackItem key={index} {...tech} />
            ))}
          </div>

          {/* Frameworks */}
          <h3 className="text-2xl font-semibold mb-4 text-center">Frameworks</h3>
          <div className="flex flex-wrap justify-center gap-24 mb-16">
            {frameworks.map((tech, index) => (
              <TechStackItem key={index} {...tech} />
            ))}
          </div>

          {/* Databases */}
          <h3 className="text-2xl font-semibold mb-4 text-center">Databases</h3>
          <div className="flex flex-wrap justify-center gap-24 mb-16">
            {databases.map((tech, index) => (
              <TechStackItem key={index} {...tech} />
            ))}
          </div>

          {/* Front-end and Back-end Tools */}
          <h3 className="text-2xl font-semibold mb-4 text-center">Additional Tools</h3>
          <div className="flex flex-wrap justify-center gap-24 mb-16">
            {tools.map((tech, index) => (
              <TechStackItem key={index} {...tech} />
            ))}
          </div>

          {/* APIs */}
          <h3 className="text-2xl font-semibold mb-4 text-center">APIs</h3>
          <div className="flex flex-wrap justify-center gap-24 mb-16">
            {apis.map((tech, index) => (
              <TechStackItem key={index} {...tech} />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}