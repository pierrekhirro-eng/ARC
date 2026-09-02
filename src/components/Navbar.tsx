import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navigation = [
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
    label: "Sobre",
    href: "#about",
  },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={[
        "navbar",
        scrolled ? "navbar-scrolled" : "",
        menuOpen ? "navbar-open" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <a href="#top" className="navbar-logo" onClick={closeMenu}>
        <span className="navbar-logo-mark">A</span>
        <span className="navbar-logo-text">ARC</span>
      </a>

      <nav className="navbar-links" aria-label="Navegação principal">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="navbar-actions">
        <a href="#login" className="navbar-login">
          Entrar
        </a>

        <a href="#project" className="navbar-cta">
          Enviar projeto
          <ArrowUpRight size={16} strokeWidth={1.8} />
        </a>
      </div>

      <button
        className="navbar-menu"
        type="button"
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((value) => !value)}
      >
        {menuOpen ? (
          <X size={22} strokeWidth={1.7} />
        ) : (
          <Menu size={22} strokeWidth={1.7} />
        )}
      </button>

      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-links">
            {navigation.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="mobile-menu-link"
                onClick={closeMenu}
              >
                <span>0{index + 1}</span>
                {item.label}
              </a>
            ))}
          </div>

          <div className="mobile-menu-footer">
            <a href="#login" onClick={closeMenu}>
              Entrar
            </a>

            <a href="#project" onClick={closeMenu}>
              Enviar projeto
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}