"use client";
import { EnhancedPdfViewer } from "@/components/enhanced-pdf-viewer";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function Resume() {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <EnhancedPdfViewer />

      {/* Particles Background (hidden but still loaded) */}
      <div className="hidden">
        <ParticlesBackground />
      </div>
    </div>
    
  );
}
