"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface NavigationProps {
  userType: "talent" | "company";
  setUserType: (type: "talent" | "company") => void;
}

export function Navigation({ userType, setUserType }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Programs", link: "/#programs" },
    { name: "Services", link: "/services" },
    { name: "About Us", link: "about" },
    { name: "Contact", link: "/#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "font-bold text-lg hidden",
                isScrolled ? "text-primary" : "text-white"
              )}
            >
              Maxwell
            </span>
            {isScrolled ? (
              <Image
                src={"/brand-logo/maxwell.png"}
                alt="Maxwell Logo"
                height={100}
                width={100}
                className="pb-4"
              />
            ) : (
              <Image
                src={"/brand-logo/maxwell-white.png"}
                alt="Maxwell Logo"
                height={100}
                width={100}
                className="pb-1"
              />
            )}
            <span className="text-muted-foreground mx-1 pointer-events-none">
              ×
            </span>
            {isScrolled ? (
              <Image
                src={"/brand-logo/GV-Blue.png"}
                alt="GOVOKASi Logo"
                height={100}
                width={100}
                className="pt-1"
              />
            ) : (
              <Image
                src={"/brand-logo/GV-white.png"}
                alt="GOVOKASi Logo"
                height={100}
                width={100}
                className="pt-2"
              />
            )}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.link}
                className={cn(
                  "text-sm font-medium text-foreground animate-hover-nav transition-colors",
                  isScrolled ? "" : "text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Segment Selector */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex rounded-full p-1"></div>
            <button
              className={cn(
                "px-6 py-2 rounded-lg transition-colors text-sm font-medium",
                isScrolled
                  ? "bg-primary text-white  hover:bg-primary/90"
                  : "bg-white text-primary  hover:bg-white/90"
              )}
            >
              <Link href={"#cta"}>Get Started</Link>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn("md:hidden p-2")}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X
                size={24}
                className={cn(isScrolled ? "text-primary" : "text-white")}
              />
            ) : (
              <Menu
                size={24}
                className={cn(isScrolled ? "text-primary" : "text-white")}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in animate-accordion-down bg-white rounded-lg">
            <div className="flex flex-col gap-3 p-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.link}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-2 border-t">
                <div className="flex flex-col gap-2 rounded-lg"></div>
                <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium">
                  <Link
                    href={"#cta"}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Get Started
                  </Link>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
