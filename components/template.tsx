'use client'

import { Mail, Linkedin, Code, Database, Globe } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";

export function FooterComponent() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Footer Brand and Copyright */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-semibold">Your Brand</h2>
            <p className="text-gray-400 mt-2">&copy; 2024 Your Brand. All rights reserved.</p>
          </div>

          {/* Footer Links */}
          <div className="flex space-x-6 justify-center md:justify-start">
            <a href="/contact" aria-label="Contact" className="hover:text-gray-400">
              <Mail />
            </a>
            <a href="https://www.linkedin.com/in/joelsngzw/" aria-label="LinkedIn" className="hover:text-gray-400">
              <Linkedin />
            </a>
            <a href="https://github.com/" aria-label="GitHub" className="hover:text-gray-400">
              <Code />
            </a>
            <a href="https://your-database-url.com" aria-label="Database" className="hover:text-gray-400">
              <Database />
            </a>
            <a href="https://your-website-url.com" aria-label="Website" className="hover:text-gray-400">
              <Globe />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
