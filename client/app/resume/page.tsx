import { EnhancedPdfViewer } from "@/components/enhanced-pdf-viewer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:"Resume",
  description: "View Joel Sng's Resume"
}

export default function Resume() {
  return (
    <div className="bg-white min-h-screen">
      <EnhancedPdfViewer />
    </div>
    
  );
}
