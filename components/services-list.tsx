import { cn } from "@/lib/utils";

interface Service {
  title: string;
  description: string;
  popular?: boolean;
}

const services: Service[] = [
  {
    title: "Brand Identities",
    description:
      "A whole branding package, including everything a community would need, such as server banners, embed banners, footers, log variants and much more at an affordable price.",
    popular: true,
  },
  {
    title: "Banners",
    description:
      "High quality banners tailored to your liking. Those banners range from simple embed banners to stunning server banners.",
    popular: true,
  },
  {
    title: "Logos",
    description:
      "High quality logos,from design communities to roleplay servers, that will set you server apart from the others.",
    popular: true,
  },
  {
    title: "Emojis",
    description:
      "Essential emojis that will enhance the quality of your server..",
  },
  {
    title: "Role Icons",
    description:
      "Icons that will help organize your server as well as make each role pop out.",
  },
  {
    title: "Misc",
    description:
      "Other graphic services we provide, such as welcome stickers and much. more that are essential for your servers public image..",
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
