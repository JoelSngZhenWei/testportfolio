'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ReadMoreButton } from './read-more-button'

const projects = [
  {
    imageSrc: '/ocbc.png',
    date: 'August 26, 2024',
    title: 'AI Financial Chatbot',
    description: 'AI Assistant to recommend different accounts, products, and investments to reach specific financial goals. Developed with OCBC Singapore.',
    link: '/projects/ocbc',
    categories: ['AI' , 'Software Engineering']
  }
  ,{
    imageSrc: '/optionpricing.png',
    date: 'Aug 19, 2024',
    title: 'Options Pricing using Machine Learning',
    description: 'Predicting option prices using historical market data and visualisation of ML models.',
    link: '/projects/spm',
    categories: ['Machine Learning', 'Data Visualisation']
  },
  {
    imageSrc: '/project1.jpg',
    date: 'May 11, 2024',
    title: 'Neuron Activity Mapping using Machine Learning',
    description: 'Analysing neruon data while performing simple actions. Managing high dimensionality with ICA and ML algos.',
    link: '/projects/ocbc',
    categories: ['Machine Learning' , 'Data Visualisation']
  },
  {
    imageSrc: '/project1.jpg',
    date: 'March 1, 2024',
    title: 'Project One',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id lacus a sapien blandit viverra. Integer faucibus...',
    link: '/projects/project1',
    categories: ['Machine Learning', 'Data Visualisation']
  },
  {
    imageSrc: '/project2.png',
    date: 'April 15, 2024',
    title: 'Project Two',
    description: 'Nulla facilisi. Sed accumsan libero quis sagittis luctus. Etiam sit amet nunc et urna accumsan tempus...',
    link: '/projects/project2',
    categories: ['Software Engineering']
  },
  {
    imageSrc: '/project3.jpg',
    date: 'May 30, 2024',
    title: 'Project Three',
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum...',
    link: '/projects/project3',
    categories: ['Software Engineering']
  },
]

const categories = ['All', ...new Set(projects.flatMap(project => project.categories))]

export function ProjectsPage() {
  const [filter, setFilter] = useState('All')

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.categories.includes(filter))

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="text-center mb-3">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Projects</h2>
        </div>

        {/* Mobile dropdown filter */}
        <div className="md:hidden mb-6">
          <Select onValueChange={setFilter} defaultValue={filter}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Desktop filter buttons */}
        <div className="hidden md:flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setFilter(category)}
              variant={filter === category ? "default" : "outline"}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="mt-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-card/90"
            >
              <div className="flex-shrink-0">
                <Image
                  className="h-48 w-full object-contain"
                  src={project.imageSrc}
                  alt={project.title}
                  width={400}
                  height={200}
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-card p-6">
                <div className="flex-1">
                  <p className="text-xs font-medium text-muted-foreground">
                    {project.date}
                  </p>
                  <Link href={project.link} className="mt-2 block">
                    <p className="text-xl font-semibold text-primary">{project.title}</p>
                    <p className="mt-2 text-base text-card-foreground line-clamp-4">{project.description}</p>
                  </Link>
                </div>

                <div className='mt-2 justify-between items-center'>
                  <span className="text-sm text-muted-foreground">{project.categories.join(', ')}</span>
                </div>

                <div className="mt-2 flex justify-center items-center">
                  <Link
                    href={project.link}
                  >
                    <ReadMoreButton />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}