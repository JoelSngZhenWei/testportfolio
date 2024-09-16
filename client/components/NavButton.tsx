"use client";

import { usePathname } from "next/navigation";

interface NavButtonProps {
  href: string;
  label: string;
}

export default function NavButton({ href, label }: NavButtonProps) {
  const pathname = usePathname();
  const isActive = pathname
    ? href === "/"
      ? pathname === href // If href is '/', check for exact match
      : pathname.startsWith(href) // Otherwise, check if pathname starts with href
    : false;

  return (
    <a
      href={href}
      className={`block py-2 pr-4 pl-3 
        ${isActive ? "text-highlightRed font-semibold" : "text-gray-500"}`}
    >
      {label}
    </a>
  );
}
