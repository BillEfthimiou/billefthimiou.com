interface Client {
  name: string;
}

const clients: Client[] = [
  { name: "" },
  { name: "" },
  { name: "" },
  { name: "" },
  { name: "" },
  { name: "" },
  { name: "" },
  { name: "" },
];

export function ClientsGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {clients.map((client) => (
        <div
          key={client.name}
          className="bg-card border border-border rounded-xl p-6 flex flex-col items-center justify-center aspect-square hover:border-muted-foreground/30 transition-colors"
        >
          <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mb-4">
            <span className="text-muted-foreground text-2xl font-bold">
              {client.name.charAt(0)}
            </span>
          </div>
          <span className="text-sm text-muted-foreground text-center">
            {client.name}
          </span>
        </div>
      ))}
    </div>
  );
}
