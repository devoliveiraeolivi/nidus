import Link from "next/link";

interface BirdCardProps {
  id: string;
  name: string;
  scientificName: string;
  imageUrl: string;
  region: string;
  conservationStatus?: "LC" | "NT" | "VU" | "EN" | "CR";
}

const statusColors = {
  LC: "bg-green-500",
  NT: "bg-yellow-500",
  VU: "bg-orange-500",
  EN: "bg-red-500",
  CR: "bg-red-700",
};

const statusLabels = {
  LC: "Pouco Preocupante",
  NT: "Quase Ameaçada",
  VU: "Vulnerável",
  EN: "Em Perigo",
  CR: "Criticamente em Perigo",
};

export default function BirdCard({
  id,
  name,
  scientificName,
  imageUrl,
  region,
  conservationStatus = "LC",
}: BirdCardProps) {
  return (
    <Link href={`/especie/${id}`} className="group">
      <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 border border-border">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundColor: "#E5DDD3",
            }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

          {/* Conservation Status Badge */}
          <div className="absolute top-3 right-3">
            <span
              className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium text-white ${statusColors[conservationStatus]}`}
              title={statusLabels[conservationStatus]}
            >
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
              {conservationStatus}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-lg text-charcoal group-hover:text-forest transition-colors mb-1">
            {name}
          </h3>
          <p className="text-sm text-muted italic mb-3">{scientificName}</p>

          {/* Region */}
          <div className="flex items-center gap-2 text-sm text-muted">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>{region}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}

// Featured Birds Section Component
export function FeaturedBirds() {
  const featuredBirds: BirdCardProps[] = [
    {
      id: "arara-azul-grande",
      name: "Arara-azul-grande",
      scientificName: "Anodorhynchus hyacinthinus",
      imageUrl:
        "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400&h=300&fit=crop",
      region: "Pantanal, Cerrado",
      conservationStatus: "VU",
    },
    {
      id: "tucano-toco",
      name: "Tucano-toco",
      scientificName: "Ramphastos toco",
      imageUrl:
        "https://images.unsplash.com/photo-1591608971362-f08b2a75731a?w=400&h=300&fit=crop",
      region: "América do Sul",
      conservationStatus: "LC",
    },
    {
      id: "beija-flor-tesoura",
      name: "Beija-flor-tesoura",
      scientificName: "Eupetomena macroura",
      imageUrl:
        "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=400&h=300&fit=crop",
      region: "Brasil, Bolívia, Paraguai",
      conservationStatus: "LC",
    },
    {
      id: "sabia-laranjeira",
      name: "Sabiá-laranjeira",
      scientificName: "Turdus rufiventris",
      imageUrl:
        "https://images.unsplash.com/photo-1480044965905-02098d419e96?w=400&h=300&fit=crop",
      region: "Brasil (Ave-símbolo)",
      conservationStatus: "LC",
    },
  ];

  return (
    <section className="py-20 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            Aves em Destaque
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Conheça algumas das espécies mais emblemáticas da fauna brasileira,
            cada uma com sua beleza única e história fascinante.
          </p>
        </div>

        {/* Birds Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBirds.map((bird) => (
            <BirdCard key={bird.id} {...bird} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <Link
            href="/especies"
            className="inline-flex items-center gap-2 text-forest hover:text-forest-light font-semibold transition-colors"
          >
            Ver todas as espécies
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
