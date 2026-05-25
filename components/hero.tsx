import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 text-balance">
          Bill&apos;s Studio
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          We specialize in graphics, from simple logos to complex brand identities taliored to your needs.
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
