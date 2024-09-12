"use client";
import Link from "next/link";
import { ProjectsPage } from "@/components/projects-page";


export default function Projects() {
  return (
    <div className="min-h-screen py-2 bg-white dark:bg-black transition-colors duration-500">
      <ProjectsPage/>
    </div>
  );
}
