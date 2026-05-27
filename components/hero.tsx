import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    // Restored flex items-center and justify-center to give it breathing room,
    // but reduced min-h-screen to min-h-[85vh] so it naturally sits higher up on the glass.
    <section className="min-h-[85vh] w-full flex items-center justify-center px-6 pt-16">
      
      {/* -mt-16 to -mt-24 pulls the entire text block up slightly to offset the browser address bars,
          giving you that higher visual center without ruining the alignment. */}
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center justify-center -mt-16 md:-mt-24">
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

