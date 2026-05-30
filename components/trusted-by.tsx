import React from 'react';

const clients = [
  { name: "Acme Corp", logo: "/Layers Logo Transperant Background Removed.png" },
  { name: "Globex", logo: "/redbakery logo.png.avif" },
  { name: "Initech", logo: "/WS-4.png" },
  { name: "Umbrella Corp", logo: "/logos/umbrella.svg" },
  { name: "Hooli", logo: "/logos/hooli.svg" },
  { name: "Soylent", logo: "/logos/soylent.svg" },
  { name: "Vehement", logo: "/logos/vehement.svg" },
  { name: "Massive Dynamic", logo: "/logos/massive.svg" },
  { name: "Cyberdyne", logo: "/logos/cyberdyne.svg" },
  { name: "Tyrell Corp", logo: "/logos/tyrell.svg" },
];

export function TrustedBy() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
          Trusted by 10+ clients.
        </h2>
        <p className="text-muted-foreground mb-12">
          Delivering quality work across various projects.
        </p>

        {/* Marquee Container */}
        <div className="overflow-hidden relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* First row - left to right */}
          <div className="flex mb-6">
            <div className="flex animate-marquee">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex-shrink-0 mx-8 w-32 h-16 flex items-center justify-center cursor-pointer"
                >
                  <img 
                    src={client.logo} 
                    alt={`${client.name} logo`} 
                    className="max-w-full max-h-full object-contain opacity-35 hover:opacity-100 transition-opacity duration-300" 
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Second row - right to left */}
          <div className="flex">
            <div className="flex animate-marquee-reverse">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex-shrink-0 mx-8 w-32 h-16 flex items-center justify-center cursor-pointer"
                >
                  <img 
                    src={client.logo} 
                    alt={`${client.name} logo`} 
                    className="max-w-full max-h-full object-contain opacity-35 hover:opacity-100 transition-opacity duration-300" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}