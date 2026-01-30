"use client";

import { useState } from "react";
import Link from "next/link";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/busca?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest/10 via-cream to-sky/20" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-forest/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-sunset/5 rounded-full blur-2xl" />

      {/* Bird Silhouettes (decorative) */}
      <div className="absolute top-32 right-20 opacity-10">
        <svg className="w-24 h-24 text-forest" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23 11.5l-3.5-8.5c0 0-1.5 2-4.5 2s-5-2-5-2l-3.5 8.5c0 0 2.5 1.5 6.5 1.5s6.5-1.5 6.5-1.5l3.5 8.5c0 0-2.5-1.5-6.5-1.5s-6.5 1.5-6.5 1.5l3.5-8.5" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-forest/10 text-forest px-4 py-2 rounded-full text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-forest rounded-full animate-pulse" />
          Mais de 1.900 espécies catalogadas
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal leading-tight mb-6">
          Descubra o{" "}
          <span className="text-forest">Mundo das Aves</span>
          <br />
          do Brasil
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          A maior enciclopédia colaborativa de aves brasileiras. Explore espécies,
          compartilhe avistamentos e conecte-se com uma comunidade apaixonada por observação de pássaros.
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-10">
          <div className="relative flex items-center">
            <div className="absolute left-4 text-muted">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Busque por nome popular, científico ou família..."
              className="w-full pl-12 pr-32 py-4 bg-white rounded-full border border-border shadow-lg shadow-forest/5 focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/20 text-charcoal placeholder:text-muted"
            />
            <button
              type="submit"
              className="absolute right-2 bg-forest hover:bg-forest-light text-white px-6 py-2 rounded-full font-medium transition-colors"
            >
              Buscar
            </button>
          </div>
        </form>

        {/* Quick Search Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <span className="text-sm text-muted">Populares:</span>
          {["Arara-azul", "Tucano", "Beija-flor", "Sabiá", "Bem-te-vi"].map(
            (bird) => (
              <Link
                key={bird}
                href={`/busca?q=${encodeURIComponent(bird)}`}
                className="text-sm bg-white hover:bg-forest hover:text-white text-charcoal px-3 py-1 rounded-full border border-border transition-colors"
              >
                {bird}
              </Link>
            )
          )}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/especies"
            className="w-full sm:w-auto bg-forest hover:bg-forest-light text-white px-8 py-3 rounded-full font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            Explorar Espécies
          </Link>
          <Link
            href="/contribuir"
            className="w-full sm:w-auto bg-white hover:bg-cream-dark text-charcoal border border-border px-8 py-3 rounded-full font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Contribuir
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-muted"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
