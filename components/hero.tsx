"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface FallingLogo {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
}

function FallingLogos() {
  const [logos, setLogos] = useState<FallingLogo[]>([]);

  useEffect(() => {
    const generateLogos = () => {
      const newLogos: FallingLogo[] = [];
      for (let i = 0; i < 20; i++) {
        newLogos.push({
          id: i,
          x: Math.random() * 100,
          delay: Math.random() * 10,
          duration: 15 + Math.random() * 20,
          size: 30 + Math.random() * 50,
          opacity: 0.03 + Math.random() * 0.08,
        });
      }
      setLogos(newLogos);
    };
    generateLogos();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {logos.map((logo) => (
        <div
          key={logo.id}
          className="absolute falling-logo"
          style={{
            left: `${logo.x}%`,
            animationDelay: `${logo.delay}s`,
            animationDuration: `${logo.duration}s`,
          }}
        >
          <img
            src="/logo.png"
            alt=""
            className="blur-[2px]"
            style={{
              width: logo.size,
              height: logo.size,
              opacity: logo.opacity,
            }}
          />
        </div>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24 relative overflow-hidden">
      {/* Falling logos background */}
      <FallingLogos />
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance">
          <span className="gradient-text">Bill&apos;s Studio</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          We specialize in graphics, from simple logos to complex brand identities tailored to your needs.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 bg-foreground text-background hover:bg-foreground/90"
          >
            <Link href="/contact">Get Started</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-8 border-border hover:bg-secondary"
          >
            <Link href="/work">View Work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
