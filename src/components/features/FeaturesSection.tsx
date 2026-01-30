import Link from "next/link";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  href: string;
}

function FeatureCard({
  title,
  description,
  icon,
  color,
  href,
}: FeatureCardProps) {
  return (
    <Link href={href} className="group">
      <div className="bg-white rounded-2xl p-6 border border-border hover:border-transparent hover:shadow-xl transition-all duration-300 h-full">
        <div
          className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-5 ${color} transition-transform group-hover:scale-110`}
        >
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-charcoal mb-3 group-hover:text-forest transition-colors">
          {title}
        </h3>
        <p className="text-muted leading-relaxed">{description}</p>
      </div>
    </Link>
  );
}

export default function FeaturesSection() {
  const features: FeatureCardProps[] = [
    {
      title: "Identificação por Foto",
      description:
        "Envie uma foto de qualquer ave e nossa inteligência artificial ajudará a identificar a espécie em segundos.",
      icon: (
        <svg
          className="w-7 h-7 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      color: "bg-forest",
      href: "/identificar",
    },
    {
      title: "Cantos e Vocalizações",
      description:
        "Biblioteca completa com gravações de alta qualidade dos cantos de milhares de espécies brasileiras.",
      icon: (
        <svg
          className="w-7 h-7 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
          />
        </svg>
      ),
      color: "bg-sky-dark",
      href: "/cantos",
    },
    {
      title: "Mapa de Avistamentos",
      description:
        "Visualize onde cada espécie foi avistada no Brasil com nosso mapa interativo e colaborativo.",
      icon: (
        <svg
          className="w-7 h-7 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
          />
        </svg>
      ),
      color: "bg-sunset",
      href: "/mapa",
    },
    {
      title: "Comunidade Ativa",
      description:
        "Conecte-se com observadores de todo o Brasil, participe de eventos e compartilhe suas descobertas.",
      icon: (
        <svg
          className="w-7 h-7 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      color: "bg-charcoal",
      href: "/comunidade",
    },
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-forest font-semibold text-sm uppercase tracking-wider mb-3">
            Funcionalidades
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            Tudo que você precisa para{" "}
            <span className="text-forest">observar aves</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Ferramentas modernas e uma comunidade vibrante para transformar sua
            experiência de observação de aves.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
