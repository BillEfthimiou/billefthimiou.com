import React from 'react';

const clients = [
  { name: "Acme Corp", logo: "/logos/acme.svg", hoverLogo: "/logos/acme-hover.svg" },
  { name: "Globex", logo: "/logos/globex.svg", hoverLogo: "/logos/globex-hover.svg" },
  { name: "Initech", logo: "/logos/initech.svg", hoverLogo: "/logos/initech-hover.svg" },
  { name: "Umbrella Corp", logo: "/logos/umbrella.svg", hoverLogo: "/logos/umbrella-hover.svg" },
  { name: "Hooli", logo: "/logos/hooli.svg", hoverLogo: "/logos/hooli-hover.svg" },
  { name: "Soylent", logo: "/logos/soylent.svg", hoverLogo: "/logos/soylent-hover.svg" },
  { name: "Vehement", logo: "/logos/vehement.svg", hoverLogo: "/logos/vehement-hover.svg" },
  { name: "Massive Dynamic", logo: "/logos/massive.svg", hoverLogo: "/logos/massive-hover.svg" },
  { name: "Cyberdyne", logo: "/logos/cyberdyne.svg", hoverLogo: "/logos/cyberdyne-hover.svg" },
  { name: "Tyrell Corp", logo: "/logos/tyrell.svg", hoverLogo: "/logos/tyrell-hover.svg" },
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
                  className="group flex-shrink-0 mx-8 w-32 h-16 flex items-center justify-center relative cursor-pointer"
                >
                  {/* Default Logo */}
                  <img 
                    src={client.logo} 
                    alt={`${client.name} logo`} 
                    className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-0 transition-opacity absolute inset-0 m-auto" 
                  />
                  {/* Hover Logo */}
                  <img 
                    src={client.hoverLogo} 
                    alt={`${client.name} hover logo`} 
                    className="max-w-full max-h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity absolute inset-0 m-auto" 
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
                  className="group flex-shrink-0 mx-8 w-32 h-16 flex items-center justify-center relative cursor-pointer"
                >
                  {/* Default Logo */}
                  <img 
                    src={client.logo} 
                    alt={`${client.name} logo`} 
                    className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-0 transition-opacity absolute inset-0 m-auto" 
                  />
                  {/* Hover Logo */}
                  <img 
                    src={client.hoverLogo} 
                    alt={`${client.name} hover logo`} 
                    className="max-w-full max-h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity absolute inset-0 m-auto" 
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