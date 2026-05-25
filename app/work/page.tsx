import { PortfolioCarousel } from "@/components/portfolio-carousel";

export default function WorkPage() {
  return (
    <section className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Past Work
          </h1>
          <p className="text-muted-foreground text-lg">
            Check out some of my recent projects
          </p>
        </div>
        <PortfolioCarousel />
      </div>
    </section>
  );
}
