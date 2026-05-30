"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Twitter, Instagram, Linkedin } from "lucide-react";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Past Work" },
  { href: "/clients", label: "Clients" },
];

export function Footer() {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    /* ⚡ FIXED COLOR MISMATCH: Changed bg-black to bg-background ⚡ */
    <footer className="w-full bg-background pt-20 pb-12 mt-auto border-t border-zinc-900/50">
      <div className="w-full px-8 md:px-16 lg:px-24">
        
        {/* Top Row: Brand & Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-900/50 w-full">
          
          {/* Left: Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative overflow-hidden transition-transform group-hover:scale-105 duration-300">
              <Image 
                src="/logo.png" 
                alt="Bill's Studio Logo" 
                width={26} 
                height={26} 
                className="object-contain"
              />
            </div>
            <span className="font-medium text-white tracking-wide text-sm">
              Bill's Studio
            </span>
          </Link>

          {/* Right: Page Links */}
          <nav aria-label="Footer Navigation">
            <ul className="flex items-center gap-8">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="relative text-sm text-zinc-500 hover:text-white transition-colors duration-200 py-1 tracking-wide after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white hover:after:w-full after:transition-all after:duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Row: Legal & Social Icons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs tracking-wide w-full">
          
          {/* Copyright */}
          <p className="text-zinc-600">
            © {currentYear || "2026"} Bill's Studio. All Rights Reserved.
          </p>
          
          {/* Social Icons */}
          <nav aria-label="Social Links">
            <ul className="flex items-center gap-5">
              <li>
                <Link 
                  href="https://x.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-white transition-colors duration-200 block"
                  aria-label="X (formerly Twitter)"
                >
                  <Twitter className="h-4 w-4" />
                </Link>
              </li>

              <li>
                <Link 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-white transition-colors duration-200 block"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </Link>
              </li>

              <li>
                <Link 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-white transition-colors duration-200 block"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
              </li>
            </ul>
          </nav>

        </div>

      </div>
    </footer>
  );
}