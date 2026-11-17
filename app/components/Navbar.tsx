
"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#030712]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">

        <a href="#home" className="text-3xl font-bold">
          Durga<span className="text-violet-500">.dev</span>
        </a>

        <ul className="hidden items-center gap-8 text-base lg:flex">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="transition hover:text-violet-400">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-white lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#030712] px-6 py-5 lg:hidden">
          <ul className="flex flex-col gap-4 text-center">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-lg transition hover:text-violet-400"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
