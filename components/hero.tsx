import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    // Changed:
    // 1. Replaced 'items-center' with 'items-start' to align content to the top.
    // 2. Increased top padding ('pt-32 md:pt-48') to control how high the content sits,
    //    removing the bottom padding. This makes the content appear higher up on the screen.
    // 3. Removed 'relative overflow-hidden' as they were needed for the absolute-positioned logos.
    <section className="min-h-screen flex items-start justify-center px-6 pt-32 md:pt-48">
      {/* Removed the entire 'Falling logos background' div and the 'fallingLogos' array mapping.
         The z-index ('z-10') and absolute positioning on this content container are also no longer necessary.
      */}

      <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
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

