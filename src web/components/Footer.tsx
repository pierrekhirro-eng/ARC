import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";

const exploreLinks = [
  {
    label: "Serviços",
    href: "#services",
  },
  {
    label: "Como funciona",
    href: "#process",
  },
  {
    label: "Projetos",
    href: "#projects",
  },
  {
    label: "Enviar projeto",
    href: "#project",
  },
];

const companyLinks = [
  {
    label: "Sobre",
    href: "#about",
  },
  {
    label: "Contato",
    href: "mailto:hello@arc.example",
  },
  {
    label: "Entrar",
    href: "#login",
  },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <a
              href="#top"
              className="footer-logo"
              aria-label="ARC início"
            >
              <span className="footer-logo-mark">
                A
              </span>

              <span>ARC</span>
            </a>

            <p className="footer-tagline">
              Ideias digitais transformadas
              em produtos que funcionam.
            </p>

            <a
              href="mailto:hello@arc.example"
              className="footer-email"
            >
              hello@arc.example
              <ArrowUpRight
                size={15}
                strokeWidth={1.6}
              />
            </a>
          </div>

          <div className="footer-navigation">
            <div className="footer-column">
              <span className="footer-column-title">
                Explorar
              </span>

              {exploreLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="footer-column">
              <span className="footer-column-title">
                Studio
              </span>

              {companyLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="footer-column">
              <span className="footer-column-title">
                Social
              </span>

              <a
                href="#instagram"
                aria-label="Instagram"
              >
                <Instagram
                  size={14}
                  strokeWidth={1.6}
                />
                Instagram
              </a>

              <a
                href="#linkedin"
                aria-label="LinkedIn"
              >
                <Linkedin
                  size={14}
                  strokeWidth={1.6}
                />
                LinkedIn
              </a>

              <a
                href="mailto:hello@arc.example"
                aria-label="Enviar email"
              >
                <Mail
                  size={14}
                  strokeWidth={1.6}
                />
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <div className="footer-system">
            <span className="footer-system-dot" />

            <span>
              ARC / DIGITAL SYSTEM
            </span>
          </div>

          <div className="footer-bottom-links">
            <span>
              Built for ideas worth building.
            </span>

            <span>
              © 2026 ARC Studio
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}