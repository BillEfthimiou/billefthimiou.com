"use client";

import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image"; 
import { cn } from "@/lib/utils";

interface Project {
  id: number;
  title: string;
  image: string;
}

const projects: Project[] = [
  { id: 1, title: "Branding Package", image: "/Layers Package-28.png" }, 
  { id: 2, title: "Celebration Banner", image: "/Celebration Banner Redbakery ENG.png" },
  { id: 3, title: "Welcome Banner", image: "/Welcome to HCSO.PNG" },
  { id: 4, title: "Embed Banner", image: "/Dashboard for Bill Commisions.PNG" },
  { id: 5, title: "Embed Banner", image: "/Pensylvania State RP Dasjboard.PNG" },
  { id: 6, title: "Embed Banner", image: "/Texas State RP Dashboard.png" },
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
