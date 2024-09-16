import { ProjectsPage } from "@/components/projects-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects by Joel Sng"
}

export default function Projects() {
  return (
    <div className="min-h-screen py-2 bg-white">
      <ProjectsPage/>
    </div>
  );
}
