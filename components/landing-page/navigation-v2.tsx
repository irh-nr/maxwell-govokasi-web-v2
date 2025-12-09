"use client";

import React from "react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Briefcase, Award, ArrowRight, LucideIcon } from "lucide-react";
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
    //{ name: "Curriculum", href: "/#curriculum" },
    { name: "Contact Us", href: "/contact" },
  ];

  const navLinksMobile = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    //{ name: "Curriculum", href: "/#curriculum" },
    { name: "Contact Us", href: "/contact" },
  ];

  const programs = [
    {
      title: "Basic Foundation",
      level: "Beginner",
      duration: "7 Months",
      format: "Hybrid",
      icon: Award,
      description: "Essential program for entry-level professionals",
      packages: ["-", "-", "-", "-", "-"],
      price: "7M",
    },
    {
      title: "Advanced Executive",
      level: "Intermediate",
      duration: "42 Months",
      format: "Hybrid",
      icon: Briefcase,
      description: "Comprehensive program for ambitious leaders",
      packages: ["-", "-", "-", "-", "-"],
      price: "42M",
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
                    <Link href={"/"}>Home</Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="p-4">
                    <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="bg-gradient-to-br from-primary via-primary/80 to-secondary flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
                            href="/"
                          >
                            <div className="mb-2 text-lg text-white font-medium sm:mt-4">
                              Maxwell x GOVOKASi
                            </div>
                            <p className="text-white text-sm leading-tight">
                              People Career Solution.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/#about" title="Program Pathways">
                        Re-usable components built using Radix UI and Tailwind
                        CSS.
                      </ListItem>
                      <ListItem href="/#how-it-works" title="How It Works">
                        How to install dependencies and structure your app.
                      </ListItem>
                      <ListItem
                        href="/#success-stories"
                        title="Success Stories"
                      >
                        Styles for headings, paragraphs, lists...etc
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

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
                    <Link href={"/about-us"}>About Us</Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="p-4">
                    <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <ListItem
                        href="/about-us/#maxwell"
                        title="About Maxwell Leadership"
                      >
                        How to install dependencies and structure your app.
                      </ListItem>
                      <ListItem
                        href="/about-us/#govokasi"
                        title="About GOVOKASi"
                      >
                        Styles for headings, paragraphs, lists...etc
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

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
                    Explore
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="p-4">
                    <ul className="grid gap-2 sm:w-[400px] md:w-[400px] md:grid-row-3">
                      <ListItem href="/talent" title="Explore Talent Path">
                        Re-usable components built using Radix UI and Tailwind
                        CSS.
                      </ListItem>
                      <ListItem
                        href="/companies"
                        title="Explore Company Solution"
                      >
                        How to install dependencies and structure your app.
                      </ListItem>
                      <ListItem href="/coaches" title="Explore All Coaches">
                        How to install dependencies and structure your app.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

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
              {navLinksMobile.map((link, index) => (
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
              <Link
                href={"/#pricing"}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2 hidden"
              >
                Pricing
              </Link>
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

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
