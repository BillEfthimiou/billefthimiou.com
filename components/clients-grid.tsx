import React from "react";

interface Client {
  name: string;
  logoUrl: string; // Made required so every card must have a logo
  websiteUrl: string; // Destination link
}

// Updated with explicit, unique placeholder logos for every card slot
const clients: Client[] = [
  { 
    name: "FSRP", 
    logoUrl: "/fsrpgator logo.png", 
    websiteUrl: "https://discord.gg/Pk9XVnrCZW" 
  },
  { 
    name: "Red Bakery", 
    logoUrl: "/redbakery logo.png.avif", 
    websiteUrl: "http://redbakery.gr/" 
  },
  { 
    name: "Client Three", 
    logoUrl: "/logos/client-three.png", 
    websiteUrl: "https://example.com/three" 
  },
  { 
    name: "Client Four", 
    logoUrl: "/logos/client-four.png", 
    websiteUrl: "https://example.com/four" 
  },
  { 
    name: "Client Five", 
    logoUrl: "/logos/client-five.png", 
    websiteUrl: "https://example.com/five" 
  },
  { 
    name: "Client Six", 
    logoUrl: "/logos/client-six.png", 
    websiteUrl: "https://example.com/six" 
  },
  { 
    name: "Client Seven", 
    logoUrl: "/logos/client-seven.png", 
    websiteUrl: "https://example.com/seven" 
  },
  { 
    name: "Client Eight", 
    logoUrl: "/logos/client-eight.png", 
    websiteUrl: "https://example.com/eight" 
  },
];

export function ClientsGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {clients.map((client) => (
        <a
          key={client.name}
          href={client.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-card border border-border rounded-xl p-6 flex flex-col items-center justify-center aspect-square hover:border-muted-foreground/30 transition-colors cursor-pointer block"
        >
          <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mb-4 overflow-hiddenp-2">
            <img 
              src={client.logoUrl} 
              alt={`${client.name} logo`} 
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-sm text-muted-foreground text-center">
            {client.name}
          </span>
        </a>
      ))}
    </div>
  );
}