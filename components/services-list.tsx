import { cn } from "@/lib/utils";

interface Service {
  title: string;
  description: string;
  popular?: boolean;
}

const services: Service[] = [
  {
    title: "Web Development",
    description:
      "High quality websites tailored to your custom liking, ranging from landing pages all the way to full-stack applications!",
    popular: true,
  },
  {
    title: "Design",
    description:
      "High quality design work, built to stand out, ranging from logos to complete brand identities.",
    popular: true,
  },
  {
    title: "Consulting",
    description:
      "A complete service, including strategy, implementation, and ongoing support all at a competitive price!",
    popular: true,
  },
  {
    title: "Branding",
    description:
      "Brand assets tailored to your custom style and preferences to match your vision.",
  },
  {
    title: "UI/UX",
    description:
      "User interfaces built to be intuitive and clean, whether it's a mobile app or web platform.",
  },
  {
    title: "Other",
    description:
      "Some other services we offer such as content creation, marketing support, and much more.",
  },
];

export function ServicesList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => (
        <ServiceCard key={service.title} service={service} />
      ))}
    </div>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <div
      className={cn(
        "service-card bg-card border border-border rounded-xl p-6 flex flex-col relative",
        "hover:border-muted-foreground/30"
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">
          {service.title}
        </h3>
        {service.popular && (
          <span className="text-xs font-medium text-muted-foreground border border-border rounded-full px-3 py-1">
            POPULAR
          </span>
        )}
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {service.description}
      </p>
    </div>
  );
}
