// app/projects/project1/page.tsx
"use client";

export default function Project1() {
  return (
    <div className="min-h-screen py-12 bg-white px-6">
      <h1 className="text-3xl font-bold mb-4">Project Three</h1>
      <p className="text-gray-500 text-sm mb-8">March 1, 2024</p>
      
      <div className="relative w-full h-64 mb-6">
        <img src="/project3.jpg" alt="Project Three" className="w-full h-full object-cover rounded-lg" />
      </div>

      <p className="text-lg text-gray-700">
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum 
      </p>
    </div>
  );
}
