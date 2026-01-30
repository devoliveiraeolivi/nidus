"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-forest rounded-full flex items-center justify-center group-hover:bg-forest-light transition-colors">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-charcoal">Nidus</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/especies"
              className="text-charcoal-light hover:text-forest transition-colors font-medium"
            >
              Espécies
            </Link>
            <Link
              href="/galeria"
              className="text-charcoal-light hover:text-forest transition-colors font-medium"
            >
              Galeria
            </Link>
            <Link
              href="/mapa"
              className="text-charcoal-light hover:text-forest transition-colors font-medium"
            >
              Mapa
            </Link>
            <Link
              href="/comunidade"
              className="text-charcoal-light hover:text-forest transition-colors font-medium"
            >
              Comunidade
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/entrar"
              className="text-charcoal-light hover:text-forest transition-colors font-medium"
            >
              Entrar
            </Link>
            <Link
              href="/cadastrar"
              className="bg-forest hover:bg-forest-light text-white px-5 py-2 rounded-full font-medium transition-colors"
            >
              Cadastrar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-charcoal"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <Link
                href="/especies"
                className="text-charcoal-light hover:text-forest transition-colors font-medium"
              >
                Espécies
              </Link>
              <Link
                href="/galeria"
                className="text-charcoal-light hover:text-forest transition-colors font-medium"
              >
                Galeria
              </Link>
              <Link
                href="/mapa"
                className="text-charcoal-light hover:text-forest transition-colors font-medium"
              >
                Mapa
              </Link>
              <Link
                href="/comunidade"
                className="text-charcoal-light hover:text-forest transition-colors font-medium"
              >
                Comunidade
              </Link>
              <hr className="border-border" />
              <Link
                href="/entrar"
                className="text-charcoal-light hover:text-forest transition-colors font-medium"
              >
                Entrar
              </Link>
              <Link
                href="/cadastrar"
                className="bg-forest hover:bg-forest-light text-white px-5 py-2 rounded-full font-medium transition-colors text-center"
              >
                Cadastrar
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
