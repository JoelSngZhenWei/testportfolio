"use client";

export default function PDF() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <iframe
        src="/resume.pdf" // Ensure the PDF file is in the public folder
        className="w-full h-[90vh] md:w-3/4 md:h-[90vh] border-0" // Adjusted height
        title="Resume PDF"
      />
    </div>
  );
}
