'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavButton from "@/components/NavButton";
import { usePathname } from 'next/navigation';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Resume', href: '/resume' },
    { name: 'Contact', href: '/contact' },
  ];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  useEffect(() => {
    // Close the menu whenever the pathname changes
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="bg-background border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-primary hover-special">
              JOEL SNG
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4 overflow-hidden text-sm hover:none">
            {navItems.map((item) => (
              <NavButton
                key={item.name}
                href={item.href}
                label={item.name}
              />
            ))}
          </div>

          {/* Mobile menu */}
          <div className="md:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" onClick={() => setIsOpen(true)}>
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
