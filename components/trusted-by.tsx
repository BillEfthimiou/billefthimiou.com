const clients = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];

export function TrustedBy() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
          Trusted by 0+ clients.
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
                  className="flex-shrink-0 mx-4 w-24 h-16 bg-card border border-border rounded-lg flex items-center justify-center"
                >
                  <span className="text-muted-foreground text-xs font-medium text-center px-2">
                    {client}
                  </span>
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
                  className="flex-shrink-0 mx-4 w-24 h-16 bg-card border border-border rounded-lg flex items-center justify-center"
                >
                  <span className="text-muted-foreground text-xs font-medium text-center px-2">
                    {client}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
