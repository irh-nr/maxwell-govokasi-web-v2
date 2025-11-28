"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

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

  const navLinks = ["Programs", "Journey", "Coaches", "Contact"];

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
                "font-bold text-lg inline",
                isScrolled ? "text-primary" : "text-white"
              )}
            >
              Maxwell
            </span>
            <span className="text-muted-foreground mx-1">×</span>
            <span
              className={cn(
                "font-bold text-lg inline",
                isScrolled ? "" : "text-white"
              )}
            >
              Govokasi
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link}
                href={`#${link.toLowerCase()}`}
                className={cn(
                  "text-sm font-medium text-foreground animate-hover-nav transition-colors",
                  isScrolled ? "" : "text-white"
                )}
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Segment Selector */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex bg-muted rounded-full p-1">
              <button
                onClick={() => setUserType("talent")}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  userType === "talent"
                    ? "bg-primary text-white"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                I'm Talent
              </button>
              <button
                onClick={() => setUserType("company")}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  userType === "company"
                    ? "bg-primary text-white"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                I'm Company
              </button>
            </div>
            <button
              className={cn(
                "px-6 py-2 rounded-lg transition-colors text-sm font-medium",
                isScrolled
                  ? "bg-primary text-white  hover:bg-primary/90"
                  : "bg-white text-primary  hover:bg-white/90"
              )}
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn("md:hidden p-2", isScrolled ? "flex" : "hidden")}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} color={isScrolled ? "black" : "white"} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                >
                  {link}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-2 border-t">
                <button
                  onClick={() => {
                    setUserType("talent");
                    setIsMobileMenuOpen(false);
                  }}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                    userType === "talent"
                      ? "bg-primary text-white"
                      : "bg-muted text-foreground"
                  )}
                >
                  I'm Talent
                </button>
                <button
                  onClick={() => {
                    setUserType("company");
                    setIsMobileMenuOpen(false);
                  }}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                    userType === "company"
                      ? "bg-primary text-white"
                      : "bg-muted text-foreground"
                  )}
                >
                  I'm Company
                </button>
                <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
