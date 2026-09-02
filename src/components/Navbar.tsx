import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={`nav ${open ? "nav-open" : ""}`}>
      <a className="brand" href="#top" aria-label="ARC início">
        <span className="brand-mark">A</span>
        <span>ARC</span>
      </a>

      <nav className="nav-links" aria-label="Navegação principal">
        <a href="#services">Expertise</a>
        <a href="#process">Process</a>
        <a href="#work">Work</a>
        <a href="#about">About</a>
      </nav>

      <a className="nav-cta" href="#contact">
        Start something <ArrowUpRight size={16} />
      </a>

      <button className="menu-button" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </button>

      {open && (
        <div className="mobile-menu">
          <a href="#services" onClick={() => setOpen(false)}>Expertise</a>
          <a href="#process" onClick={() => setOpen(false)}>Process</a>
          <a href="#work" onClick={() => setOpen(false)}>Work</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#contact" onClick={() => setOpen(false)}>Start something ↗</a>
        </div>
      )}
    </header>
  );
}