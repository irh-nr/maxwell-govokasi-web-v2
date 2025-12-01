"use client";

import React from "react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import {
  Users,
  Target,
  Briefcase,
  Award,
  Zap,
  BookOpen,
  LucideIcon,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinksStatic = [
    { name: "About", href: "/#about" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Curriculum", href: "/#curriculum" },
    { name: "Success Stories", href: "/#success-stories" },
  ];

  const programs = [
    {
      title: "Executive Mentorship",
      icon: Users,
      description: "One-on-one coaching with C-suite executives",
    },
    {
      title: "Corporate Simulation Project",
      level: "Intermediate",
      duration: "8 weeks",
      format: "Online",
      icon: Briefcase,
      description: "Real-world project experience with live feedback",
    },
    {
      title: "Interview Mastery",
      icon: Target,
      description: "Technical and behavioral interview preparation",
    },
    {
      title: "Leadership Accelerator",
      icon: Zap,
      description: "Advanced leadership skills and strategic thinking",
    },
    {
      title: "Placement Boot Camp",
      icon: Award,
      description: "Intensive preparation for corporate placement",
    },
    {
      title: "Industry Specialization",
      icon: BookOpen,
      description: "Deep dive into specific industry expertise",
    },
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
          <Link href={"/"}>
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
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <NavigationMenu className="z-20">
              <NavigationMenuList className="space-x-8">
                {navLinksStatic.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      className={cn(
                        "relative group inline-flex h-9 w-max items-center justify-center px-0.5 py-2 text-sm font-medium",
                        "before:absolute before:bottom-0 before:inset-x-0 before:h-0.5 before:bg-primary before:scale-x-0 before:transition-transform",
                        "hover:before:scale-x-100",
                        "focus:before:scale-x-100 focus:outline-hidden",
                        "disabled:pointer-events-none disabled:opacity-50",
                        "data-active:before:scale-x-100 data-[state=open]:before:scale-x-100",
                        "hover:bg-transparent active:bg-transparent focus:bg-transparent",
                        isScrolled
                          ? "text-primary hover:text-primary focus-text-primary before:bg-primary"
                          : "text-white hover:text-white focus:text-white before:bg-white"
                      )}
                      asChild
                    >
                      <Link
                        href={link.href}
                        className="flex-row items-center gap-2.5"
                      >
                        {link.name}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}

                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "relative group inline-flex h-9 w-max items-center justify-center px-0.5 py-2 text-sm font-medium",
                      "before:absolute before:bottom-0 before:inset-x-0 before:h-0.5 before:bg-primary before:scale-x-0 before:transition-transform",
                      "hover:before:scale-x-100",
                      "focus:before:scale-x-100 focus:outline-hidden",
                      "disabled:pointer-events-none disabled:opacity-50",
                      "data-active:before:scale-x-100 data-[state=open]:before:scale-x-100 data-[state=open]:bg-transparent!",
                      "hover:bg-transparent! active:bg-transparent! focus:bg-transparent! bg-transparent ",
                      isScrolled
                        ? "text-primary hover:text-primary! focus-text-primary! before:bg-primary! data-[state=open]:text-primary!"
                        : "text-white hover:text-white! focus:text-white! before:bg-white! data-[state=open]:text-white!"
                    )}
                  >
                    <Link href={"/#pricing"}>Pricing</Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="p-4">
                    <h6 className="pl-2.5 font-semibold uppercase text-sm text-primary">
                      Our Programs
                    </h6>
                    <ul className="mt-2.5 grid w-[400px] gap-3 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {programs.map((component, index) => (
                        <ListItem
                          key={index}
                          title={component.title}
                          icon={component.icon}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
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
              <Link
                href={"/#programs"}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                Programs
              </Link>
              {navLinksStatic.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
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

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon: LucideIcon }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="font-semibold tracking-tight leading-none flex items-center gap-2">
            <Icon className="h-5 w-5" />
            {title}
          </div>
          <p className="mt-2 line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
