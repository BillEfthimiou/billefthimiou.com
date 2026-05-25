"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Past Work" },
  { href: "/clients", label: "Clients" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl">
      <nav className="bg-card/80 backdrop-blur-md border border-border rounded-full px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/logo.png" alt="Bill's Studio" className="h-8 w-8" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground",
                pathname === link.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            asChild
            variant="outline"
            className="rounded-full border-border hover:bg-secondary"
          >
            <a href="https://discord.gg/DKs2K8Gfjs" target="_blank" rel="noopener noreferrer">Order Now</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-card/95 backdrop-blur-md border border-border rounded-2xl p-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-foreground px-4 py-2 rounded-lg",
                  pathname === link.href
                    ? "text-foreground bg-secondary"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              variant="outline"
              className="rounded-full border-border hover:bg-secondary"
            >
              <a href="https://discord.gg/DKs2K8Gfjs" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                Order Now
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}


