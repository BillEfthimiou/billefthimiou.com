import Link from "next/link";
import { Button } from "@/components/ui/button";

// Pre-defined logo positions for different patterns
const fallingLogos = [
  // Column 1 - left side
  { id: 1, x: 5, delay: 0, duration: 18, size: 40, opacity: 0.08 },
  { id: 2, x: 8, delay: 5, duration: 22, size: 55, opacity: 0.05 },
  { id: 3, x: 12, delay: 12, duration: 25, size: 35, opacity: 0.07 },
  // Column 2
  { id: 4, x: 18, delay: 3, duration: 20, size: 48, opacity: 0.06 },
  { id: 5, x: 22, delay: 8, duration: 28, size: 60, opacity: 0.04 },
  { id: 6, x: 25, delay: 15, duration: 19, size: 42, opacity: 0.08 },
  // Column 3
  { id: 7, x: 32, delay: 1, duration: 24, size: 52, opacity: 0.05 },
  { id: 8, x: 35, delay: 10, duration: 21, size: 38, opacity: 0.07 },
  { id: 9, x: 38, delay: 18, duration: 26, size: 65, opacity: 0.04 },
  // Column 4 - center area
  { id: 10, x: 45, delay: 4, duration: 23, size: 45, opacity: 0.06 },
  { id: 11, x: 50, delay: 9, duration: 27, size: 58, opacity: 0.05 },
  { id: 12, x: 55, delay: 14, duration: 20, size: 40, opacity: 0.07 },
  // Column 5
  { id: 13, x: 62, delay: 2, duration: 25, size: 50, opacity: 0.06 },
  { id: 14, x: 65, delay: 7, duration: 22, size: 36, opacity: 0.08 },
  { id: 15, x: 68, delay: 16, duration: 28, size: 62, opacity: 0.04 },
  // Column 6
  { id: 16, x: 75, delay: 6, duration: 19, size: 44, opacity: 0.07 },
  { id: 17, x: 78, delay: 11, duration: 24, size: 55, opacity: 0.05 },
  { id: 18, x: 82, delay: 17, duration: 21, size: 38, opacity: 0.08 },
  // Column 7 - right side
  { id: 19, x: 88, delay: 0, duration: 26, size: 48, opacity: 0.06 },
  { id: 20, x: 92, delay: 8, duration: 23, size: 42, opacity: 0.07 },
  { id: 21, x: 95, delay: 13, duration: 20, size: 56, opacity: 0.05 },
  // Extra scattered logos for density
  { id: 22, x: 15, delay: 20, duration: 30, size: 70, opacity: 0.03 },
  { id: 23, x: 40, delay: 22, duration: 32, size: 75, opacity: 0.03 },
  { id: 24, x: 70, delay: 25, duration: 28, size: 68, opacity: 0.03 },
  { id: 25, x: 3, delay: 28, duration: 35, size: 80, opacity: 0.02 },
  { id: 26, x: 97, delay: 30, duration: 33, size: 72, opacity: 0.03 },
];

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24 relative overflow-hidden">
      {/* Falling logos background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {fallingLogos.map((logo) => (
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
              className="blur-sm"
              style={{
                width: logo.size,
                height: logo.size,
                opacity: logo.opacity,
              }}
            />
          </div>
        ))}
      </div>
      
      {/* Added 'flex flex-col items-center' to anchor all child text/buttons to the true horizontal center */}
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center justify-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance gradient-text-premium">
          Bill&apos;s Studio
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          We specialize in graphics, from simple logos to complex brand identities tailored to your needs.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 bg-foreground text-background hover:bg-foreground/90 w-full sm:w-auto"
          >
            <Link href="/contact">Get Started</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-8 border-border hover:bg-secondary w-full sm:w-auto"
          >
            <Link href="/work">View Work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
