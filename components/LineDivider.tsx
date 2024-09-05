// components/LineDivider.tsx
"use client";

interface LineDividerProps {
  text: string;
}

export default function LineDivider({ text }: LineDividerProps) {
  return (
    <div className="flex items-center justify-center w-full py-4">
      {/* Left Line */}
      <div className="flex-grow border-t border-gray-300"></div>

      {/* Text */}
      <span className="mx-4 text-gray-500 text-xl font-medium whitespace-nowrap">
        {text}
      </span>

      {/* Right Line */}
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  );
}
