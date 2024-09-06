"use client";

import { usePathname } from "next/navigation";

interface NavButtonProps {
  href: string;
  label: string;
}

export default function NavButton({ href, label }: NavButtonProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <a
      href={href}
      className={`block py-2 pr-4 pl-3 hover:bg-gray-100 dark:hover:bg-gray-700 
        ${isActive ? "text-highlightRed font-semibold" : "text-gray-500 dark:text-gray-400"}`}
    >
      {label}
    </a>
  );
}
