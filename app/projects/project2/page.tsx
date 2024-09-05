// app/projects/project1/page.tsx
"use client";

export default function Project1() {
  return (
    <div className="min-h-screen py-12 bg-white px-6">
      <h1 className="text-3xl font-bold mb-4">Project Two</h1>
      <p className="text-gray-500 text-sm mb-8">March 1, 2024</p>
      
      <div className="relative w-full h-64 mb-6">
        <img src="/project2.png" alt="Project Two" className="w-full h-full object-cover rounded-lg" />
      </div>

      <p className="text-lg text-gray-700">
        Nulla facilisi. Sed accumsan libero quis sagittis luctus. Etiam sit amet nunc et urna accumsan tempus
      </p>
    </div>
  );
}
