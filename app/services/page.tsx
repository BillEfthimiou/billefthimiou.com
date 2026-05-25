import { ServicesList } from "@/components/services-list";

export default function ServicesPage() {
  return (
    <section className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Services
          </h1>
          <p className="text-muted-foreground text-lg">
            Custom solutions tailored to your needs. Let&apos;s discuss your project.
          </p>
        </div>
        <ServicesList />
      </div>
    </section>
  );
}
