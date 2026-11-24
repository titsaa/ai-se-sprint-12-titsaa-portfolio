import { useState } from "react";
import { profile } from "../../data/profile";
import { Contact } from "../Contact/Contact";
import "./Header.css";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <a className="header__brand" href="#home">
        {profile.name}
      </a>

      <button
        className="header__toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="header-nav"
        aria-label="Toggle navigation menu"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="header__toggle-bar" />
        <span className="header__toggle-bar" />
        <span className="header__toggle-bar" />
      </button>

      <div
        className={`header__menu ${isOpen ? "header__menu_open" : ""}`}
        id="header-nav"
        onClick={(event) => {
          // Close the mobile menu when any link inside it is clicked
          if ((event.target as HTMLElement).closest("a")) setIsOpen(false);
        }}
      >
        <nav className="header__nav" aria-label="Main">
          {navLinks.map((link) => (
            <a className="header__link" href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header__contact">
          <Contact />
        </div>
      </div>
    </header>
  );
}
