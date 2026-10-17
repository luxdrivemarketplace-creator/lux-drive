
"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  // Tracks whether the mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Closes the mobile menu after clicking a link
  const closeMenu = () => setIsMenuOpen(false);

  // Scrolls to the vehicle section
  const goToCars = () => {
    document.getElementById("browse-cars")?.scrollIntoView({
      behavior: "smooth",
    });
    closeMenu();
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/#top"
          onClick={closeMenu}
          className="text-2xl font-bold text-[#0F172A]"
        >
          LuxDrive
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#browse-cars"
            className="text-gray-600 hover:text-[#C8A75A]"
          >
            Browse Cars
          </Link>

          <Link
            href="#how-it-works"
            className="text-gray-600 hover:text-[#C8A75A]"
          >
            How it Works
          </Link>

          <Link
            href="#become-owner"
            className="text-gray-600 hover:text-[#C8A75A]"
          >
            Become an Owner
          </Link>
        </div>

        {/* Desktop buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline">Log In</Button>

          <Button
            onClick={goToCars}
            className="bg-[#0F172A] hover:bg-[#1E293B] text-white"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden text-[#0F172A]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-[#E5E1D8] bg-white px-6 py-4">
          <div className="flex flex-col gap-4">
            <Link
              href="#browse-cars"
              onClick={closeMenu}
              className="text-gray-600 hover:text-[#C8A75A]"
            >
              Browse Cars
            </Link>

            <Link
              href="#how-it-works"
              onClick={closeMenu}
              className="text-gray-600 hover:text-[#C8A75A]"
            >
              How it Works
            </Link>

            <Link
              href="#become-owner"
              onClick={closeMenu}
              className="text-gray-600 hover:text-[#C8A75A]"
            >
              Become an Owner
            </Link>

            <div className="flex flex-col gap-3 border-t border-[#E5E1D8] pt-4">
              <Button variant="outline" onClick={closeMenu}>
                Log In
              </Button>

              <Button
                onClick={goToCars}
                className="bg-[#0F172A] hover:bg-[#1E293B] text-white"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}