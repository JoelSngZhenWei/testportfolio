'use client';

import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    imageSrc: '/project1.jpg',
    date: 'March 1, 2024',
    title: 'Project One',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id lacus a sapien blandit viverra. Integer faucibusLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id lacus a sapien blandit viverra. Integer faucibusLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id lacus a sapien blandit viverra. Integer faucibusLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id lacus a sapien blandit viverra. Integer faucibusLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id lacus a sapien blandit viverra. Integer faucibus',
    link: '/projects/project1',
  },
  {
    imageSrc: '/project2.png',
    date: 'April 15, 2024',
    title: 'Project Two',
    description:
      'Nulla facilisi. Sed accumsan libero quis sagittis luctus. Etiam sit amet nunc et urna accumsan tempusNulla facilisi. Sed accumsan libero quis sagittis luctus. Etiam sit amet nunc et urna accumsan tempusNulla facilisi. Sed accumsan libero quis sagittis luctus. Etiam sit amet nunc et urna accumsan tempusNulla facilisi. Sed accumsan libero quis sagittis luctus. Etiam sit amet nunc et urna accumsan tempusNulla facilisi. Sed accumsan libero quis sagittis luctus. Etiam sit amet nunc et urna accumsan tempus',
    link: '/projects/project2',
  },
  {
    imageSrc: '/project3.jpg',
    date: 'May 30, 2024',
    title: 'Project Three',
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ',
    link: '/projects/project3',
  },
];

export function ProjectsPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Projects</h2>
        </div>
        <div className="mt-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex-shrink-0">
                <Image
                  className="h-48 w-full object-cover"
                  src={project.imageSrc}
                  alt={project.title}
                  width={400}
                  height={200}
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-card p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-primary">
                    {project.date}
                  </p>
                  <Link href={project.link} className="mt-2 block">
                    <p className="text-xl font-semibold text-primary">{project.title}</p>
                    <p className="mt-3 text-base text-card-foreground line-clamp-3">{project.description}</p>
                  </Link>
                </div>
                <div className="mt-6">
                  <Link
                    href={project.link}
                    className="text-base font-semibold text-primary hover:text-primary/80"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
