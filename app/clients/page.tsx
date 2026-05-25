import { ClientsGrid } from "@/components/clients-grid";

export default function ClientsPage() {
  return (
    <section className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our clients
          </h1>
          <p className="text-muted-foreground text-lg">
            We are always seeking for more!
          </p>
        </div>
        <ClientsGrid />
      </div>
    </section>
  );
}
