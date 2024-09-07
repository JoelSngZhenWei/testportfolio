"use client";
import Link from "next/link";
import { ProjectsPage } from "@/components/projects-page";


export default function Projects() {
  const projects = [
    {
      imageSrc: "/project1.jpg",
      date: "March 1, 2024",
      title: "Project One",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id lacus a sapien blandit viverra. Integer faucibusLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id lacus a sapien blandit viverra. Integer faucibusLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id lacus a sapien blandit viverra. Integer faucibusLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id lacus a sapien blandit viverra. Integer faucibusLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id lacus a sapien blandit viverra. Integer faucibus",
      link: "/projects/project1",
    },
    {
      imageSrc: "/project2.png",
      date: "April 15, 2024",
      title: "Project Two",
      description:
        "Nulla facilisi. Sed accumsan libero quis sagittis luctus. Etiam sit amet nunc et urna accumsan tempusNulla facilisi. Sed accumsan libero quis sagittis luctus. Etiam sit amet nunc et urna accumsan tempusNulla facilisi. Sed accumsan libero quis sagittis luctus. Etiam sit amet nunc et urna accumsan tempusNulla facilisi. Sed accumsan libero quis sagittis luctus. Etiam sit amet nunc et urna accumsan tempusNulla facilisi. Sed accumsan libero quis sagittis luctus. Etiam sit amet nunc et urna accumsan tempus",
      link: "/projects/project2",
    },
    {
      imageSrc: "/project3.jpg",
      date: "May 30, 2024",
      title: "Project Three",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ",
      link: "/projects/project3",
    },
  ];

  return (
    <div className="min-h-screen py-12 bg-white dark:bg-black transition-colors duration-500">
      <ProjectsPage/>
    </div>
  );
}
