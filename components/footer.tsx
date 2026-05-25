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
          <Logo className="h-10 w-10 text-foreground" />

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
            © {new Date().getFullYear()} Bill Efthimiou. All rights reserved.
          </p>

          {/* Credit */}
          <p className="text-sm text-muted-foreground">
            Made with{" "}
            <Link
              href="https://v0.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:underline"
            >
              v0
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 2C16 2 8 8 8 16C8 20.4183 11.5817 24 16 24C20.4183 24 24 20.4183 24 16C24 8 16 2 16 2Z" />
      <path d="M16 8C16 8 12 12 12 16C12 18.2091 13.7909 20 16 20C18.2091 20 20 18.2091 20 16C20 12 16 8 16 8Z" fill="currentColor" opacity="0.5" />
    </svg>
  );
}
