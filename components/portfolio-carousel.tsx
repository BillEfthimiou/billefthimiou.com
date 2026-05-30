"use client";

import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image"; 
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  image: string;
}

const projects: Project[] = [
  { id: 1, title: "Branding Package", image: "/LayersPackage-28.png" }, 
  { id: 2, title: "Logos", image: "/CSRP Logo Showcase.png" },
  { id: 3, title: "Logos", image: "/TSRP Logo Showcase.png" },
  { id: 4, title: "Celebration Banner", image: "/Celebration Banner Redbakery ENG.png" },
  { id: 5, title: "Welcome Banner", image: "/Welcome to HCSO.PNG" },
  { id: 6, title: "Embed Banner", image: "/Dashboard for Bill Commisions.PNG" },
  { id: 7, title: "Embed Banner", image: "/Pensylvania State RP Dasjboard.PNG" },
  { id: 8, title: "Embed Banner", image: "/Texas State RP Dashboard.png" },
];

export function PortfolioCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="space-y-6">
      {/* Relative wrapper container */}
      <div className="relative group/carousel">
        
        {/* Viewport container */}
        <div className="embla overflow-hidden rounded-xl touch-pan-y" ref={emblaRef}>
          <div className="embla__container flex">
            {projects.map((project) => (
              <div
                key={project.id}
                className="embla__slide flex-[0_0_100%] min-w-0 w-full"
              >
                <div className="relative aspect-[16/9] bg-neutral-950 border border-border rounded-xl overflow-hidden group">
                  
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain p-2"
                    priority={project.id === 1}
                  />

                  <div className="absolute inset-0 bg-black/40 flex items-end p-4 sm:p-8">
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Left Arrow Button */}
        <button
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 hover:bg-background border border-border text-foreground backdrop-blur-sm transition-all opacity-0 group-hover/carousel:opacity-100 focus:opacity-100"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={scrollNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 hover:bg-background border border-border text-foreground backdrop-blur-sm transition-all opacity-0 group-hover/carousel:opacity-100 focus:opacity-100"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

      </div> {/* This closes the relative group/carousel wrapper */}

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              "transition-all duration-300",
              selectedIndex === index
                ? "w-8 h-2 bg-foreground rounded-full"
                : "w-2 h-2 bg-muted-foreground/40 rounded-full hover:bg-muted-foreground/60"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </div>
  );
}