// app/projects/project1/page.tsx
"use client";

export default function Project1() {
  return (
    <div className="min-h-screen py-12 bg-white px-6">
      <h1 className="text-3xl font-bold mb-4">Project One</h1>
      <p className="text-gray-500 text-sm mb-8">March 1, 2024</p>
      
      <div className="relative w-full h-64 mb-6">
        <img src="/project1.jpg" alt="Project One" className="w-full h-full object-cover rounded-lg" />
      </div>

      <p className="text-lg text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id lacus a sapien blandit viverra. Integer faucibus libero vitae nulla venenatis, non viverra massa suscipit. Suspendisse potenti. 
      </p>
    </div>
  );
}
