import { AboutMe } from "@/components/about-me";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "About Joel Sng"
}

export default function About() {
  return (
    <div>
      <AboutMe />

    </div>
  );
}
