import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    // Restored min-h-screen to make the section exactly match the viewport height.
    // Kept your font-size zoom rule intact.
    <section 
      className="min-h-screen w-full flex items-center justify-center px-6 pt-24 relative overflow-hidden"
      style={{ fontSize: "115%" }}
    >
      
      {/* Removed the translate utility classes so the container naturally occupies 
          the absolute center matrix of the viewport frame. */}
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance gradient-text-premium">
          Bill&apos;s Studio
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
