import Link from "next/link";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Past Work" },
  { href: "/clients", label: "Clients" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <img src="/logo.png" alt="Bill's Studio" className="h-10 w-10" />

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Bill's Studio, All Rights Reserved
          </p>

          {/* Credit */}
          <p className="text-sm text-muted-foreground">
            {" "}
            <Link
              href="https://v0.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:underline"
            >
              
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}


