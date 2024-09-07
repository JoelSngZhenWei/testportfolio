'use client';

import { Card, CardContent } from '@/components/ui/card';
import TechStackItem from '@/components/tech-stack-item';
import { Lightbox } from '@/components/lightbox';

export default function Project3() {
  const techStack = [
    {
      src: '/techstack/nextjs.svg',
      alt: 'Next.js',
      reason: 'Used for server-side rendering and optimized performance.',
      longReason:
        'A step up from React.js. \nAn advanced application development framework that allows for advanced features such as static site rendering, incremental static regeneration, and Vercel integration for easy deployment. \nMade development extremely streamlined.',
    },
    {
      src: '/techstack/reactjs.png',
      alt: 'React.js',
      reason: 'Chosen for its component-based architecture and efficient UI updates.',
      longReason:
        'At this point I have had preliminary experience with the React.js framework. \nHelps greatly for component based architecture and efficiency in application development.',
    },
    {
      src: '/techstack/tailwindcss.png',
      alt: 'Tailwind CSS',
      reason: 'Utilized for rapid UI development and consistent styling.',
      longReason: 'Very advanced capabilities for responsive component design. \nGreatly streamlined my frontend development.',
    },
    {
      src: '/techstack/vercel.svg',
      alt: 'Vercel',
      reason: 'Selected for seamless deployment and excellent Next.js integration.',
      longReason: 'My first time using Vercel. Convenient and unparalleled deployment and Next.js integration. \nIt made deploying my application a breeze.',
    },
    {
      src: '/techstack/html5.png',
      alt: 'HTML5',
      reason: 'Used as the foundation for structuring web content.',
      longReason:
        'At the time of this project, I have had extensive experience in responsive web application development using HTML from school projects and hackathons. \nThe foundational bread and butter of app development in my eyes.',
    },
  ];

  return (
    <Card className="w-full max-w-5xl mx-auto overflow-hidden border-none shadow-none">
      <CardContent className="p-0 mt-4">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 flex flex-col justify-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Project Title</h1>
            <p className="text-xl text-muted-foreground mb-4">
              Responsive web design. Backend API calls for emails and PDF rendering.
            </p>
            <p className="text-reg text-muted-foreground mb-4">March 1 2024</p>
          </div>
          {/* Main Image */}
          <div className="relative aspect-square rounded-lg">
            <Lightbox src="/loki.jpg" alt="Main Image" width={800} height={600} />
          </div>
        </div>

        {/* Long Description */}
        <div className="py-16 px-8">
          <h2 className="text-3xl font-semibold mb-6">Long Description</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id lacus a sapien blandit viverra. Integer faucibus
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Proin id lacus a sapien blandit viverra. Integer faucibus Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id lacus a sapien blandit viverra. Integer faucibus
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          {/* Tech Stack */}
          <h3 className="text-2xl font-semibold mb-2 text-center">Tech Stack</h3>
          <p className="text-sm text-center text-muted-foreground mb-8">
            Click an icon to learn more about the technologies used.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center mb-16">
            {techStack.map((tech, index) => (
              <TechStackItem key={index} {...tech} />
            ))}
          </div>

          {/* Long Description with Photo */}
          <div className="flex flex-col md:flex-row gap-12 mb-16">
            <div className="flex-1 flex flex-col justify-between">
              <h3 className="text-2xl font-semibold mb-4">Long Description with Photo</h3>
              <p className="text-lg text-muted-foreground">
                Donec nec justo sed arcu lacinia facilisis. Phasellus imperdiet, libero nec interdum cursus, justo sem facilisis
                magna, eu varius dolor arcu in erat. Mauris ut massa felis. Curabitur sit amet nisi vitae nisi cursus hendrerit.
                Donec nec justo sed arcu lacinia facilisis. Phasellus imperdiet, libero nec interdum cursus, justo sem facilisis
                magna, eu varius dolor arcu in erat. Mauris ut massa felis. Curabitur sit amet nisi vitae nisi cursus hendrerit.
                Donec nec justo sed arcu lacinia facilisis. Phasellus imperdiet, libero nec interdum cursus, justo sem facilisis
                magna, eu varius dolor arcu in erat. Mauris ut massa felis. Curabitur sit amet nisi vitae nisi cursus hendrerit.
              </p>
            </div>
            {/* Description Photo */}
            <div className="relative w-full md:w-1/2 ">
                <Lightbox src="/loki.jpg" alt="Description photo" width={800} height={600} />
            </div>
          </div>

          {/* Photo with Caption */}
          <div className="text-center mb-16">
            <div className="relative inline-block w-full max-w-2xl">
              <Lightbox src="/me.jpg" alt="Centered photo" width={800} height={600} />
              <p className="absolute inset-x-0 bottom-0 text-white bg-black bg-opacity-50 py-2 text-sm rounded-b-lg">
                This is a caption of my photo. Loki is here.
              </p>
            </div>
            <p className="text-lg text-muted-foreground mt-6 max-w-5xl mx-auto text-left">
              Aliquam erat volutpat. Suspendisse potenti. Donec aliquet sapien vel tellus suscipit, eu dapibus ipsum bibendum.
              Phasellus vulputate, arcu ac vehicula pharetra, arcu orci aliquet lectus. Aliquam erat volutpat. Suspendisse
              potenti. Donec aliquet sapien vel tellus suscipit, eu dapibus ipsum bibendum. Phasellus vulputate, arcu ac
              vehicula pharetra, arcu orci aliquet lectus. Aliquam erat volutpat. Suspendisse potenti. Donec aliquet sapien vel
              tellus suscipit, eu dapibus ipsum bibendum. Phasellus vulputate, arcu ac vehicula pharetra, arcu orci aliquet
              lectus.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
