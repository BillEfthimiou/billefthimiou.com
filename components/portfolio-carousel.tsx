"use client";

"use client";

import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image"; // 1. Added the Next.js Image import
import { cn } from "@/lib/utils";

interface Project {
  id: number;
  title: string;
  image: string;
}

const projects: Project[] = [
  // Make sure your renamed file matches this exactly
  { id: 1, title: "Project One", image: "/LayersPackage-28.png" }, 
  { id: 2, title: "Project Two", image: "/placeholder.svg" },
  { id: 3, title: "Project Three", image: "/placeholder.svg" },
  { id: 4, title: "Project Four", image: "/placeholder.svg" },
  { id: 5, title: "Project Five", image: "/placeholder.svg" },
  { id: 6, title: "Project Six", image: "/placeholder.svg" },
];

export function PortfolioCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Listen for select events
  if (emblaApi) {
    emblaApi.on("select", onSelect);
  }

  return (
    <div className="space-y-6">
      <div className="embla overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="embla__container flex">
          {projects.map((project) => (
            <div
              key={project.id}
              className="embla__slide flex-[0_0_100%] min-w-0"
            >
              {/* 2. Added relative property here so Next.js Image can fill it correctly */}
              <div className="relative aspect-[16/9] bg-card border border-border rounded-xl overflow-hidden group">
                
                {/* 3. The actual image renderer */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={project.id === 1}
                />

                {/* 4. Text Overlay wrapper (Adds dark scrim so text remains readable) */}
                <div className="absolute inset-0 bg-black/40 flex items-end p-8">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots navigation */}
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

