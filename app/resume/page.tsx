"use client";
import { EnhancedPdfViewer } from "@/components/enhanced-pdf-viewer";

export default function Resume() {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <EnhancedPdfViewer />
    </div>
  );
}
