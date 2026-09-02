import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Expertise", href: "#expertise" },
  { label: "Process", href: "#process" },
  { label: "Selected work", href: "#work" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`navbar ${
        scrolled ? "navbar-scrolled" : ""
      } ${open ? "navbar-open" : ""}`}
    >
      <a href="#top" className="logo" aria-label="ARC home">
        <span className="logo-box">A</span>
        <span className="logo-word">ARC</span>
      </a>

      <nav className="desktop-nav" aria-label="Navegação principal">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <a href="#contact" className="nav-project">
        Start a project
        <ArrowUpRight size={15} />
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={21} /> : <Menu size={21} />}
      </button>

      {open && (
        <div className="mobile-nav">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-nav-link"
              onClick={() => setOpen(false)}
            >
              <span>0{index + 1}</span>
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="mobile-nav-cta"
            onClick={() => setOpen(false)}
          >
            Start a project
            <ArrowUpRight size={16} />
          </a>
        </div>
      )}
    </header>
  );
}