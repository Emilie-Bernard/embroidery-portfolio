export type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  images: string[];
  techniques?: string[];
  materials?: string[];
  date?: string;
  duration?: string;
};

export const projects: Project[] = [
    {
        id: 1,
        slug: "libellule",
        title: "Libellule",
        description: "Première broderie or du coffret Artesane, ce fut un exploit que de la terminer et qu'elle rende aussi bien.",
        coverImage: "/images/libellule/1.jpeg",
        images: [
          "/images/libellule/1.jpeg",
          "/images/libellule/2.jpeg",
          "/images/libellule/3.jpeg",
        ],
        techniques: [
          "Pose de jaseron",
          "Pose de cannetille",
          "Pose de perles"
        ],
        materials: [
        "Pose de simili",
          "Jaseron",
          "Cannetille",
          "Perles",
          "Simili"
        ],
        date: "Decembre 2023",
    duration: "10 heures"
  },
  {
    id: 2,
    slug: "mimosa",
    title: "Mimosa",
    description: "Broder le mot Mimosa sur un pull cousu à la main. Le motif vient de l'Atelier By Martine, qui est à l'origine de l'encyclopédie de la broderie.",
    coverImage: "/images/mimosa/1.png",
    images: [
      "/images/mimosa/1.png",
      "/images/mimosa/2.jpg",
      "/images/mimosa/3.jpg",
    ],
    techniques: [
      "Point de nœud français",
      "Point de tige",
      "Point de chaînette",
      "Point arrière"
    ],
    materials: [
      "Fils DMC",
      "Jersey de coton vert bouteille - Les coupons de Saint Pierre",
      "Papier magique",
      "Cercle en bois 15cm"
    ],
    date: "Janvier 2024",
    duration: "10 heures"
  },
  {
    id: 3,
    slug: "cigale",
    title: "Cigale",
    description: "Deuxième broderie or du coffret Artesane. Elle est rembourée avec de la feutrine. Beaucoup plus facile que la première broderie, j'ai pris un réel plaisir à la réaliser.",
    coverImage: "/images/cigale/3.jpeg",
    images: [
      "/images/cigale/1.jpeg",
      "/images/cigale/2.jpeg",
      "/images/cigale/3.jpeg",
    ],
    techniques: [
      "Pose de feutrine",
      "Pose de simili",
      "Pose de jaseron",
      "Pose de cannetille",
      "Pose de perles"
    ],
    materials: [
      "Feutrine",
      "Jaseron",
      "Cannetille",
      "Perles",
      "Simili"
    ],
    date: "Decembre 2024",
    duration: "5 heures"
  },
  {
    id: 4,
    slug: "amies",
    title: "Broderie Amies - pour la médiathèque de la commune",
    description: "Broderie d'exposition sur le thème de Noël. J'ai choisi une soirée photos avec mes amies.",
    coverImage: "/images/amies/1.jpg",
    images: [
        "/images/amies/1.jpg",
      "/images/amies/2.jpg",
      "/images/amies/3.jpg",
    ],
    techniques: [
      "Point fendu",
      "Point de tige",
    ],
    materials: [
      "Fils DMC",
      "Coton bleu",
      "Paillettes et pierres",
      "Cercle en bois 15cm"
    ],
    date: "Decembre 2024",
    duration: "7 heures"
  },
  {
    id: 5,
    slug: "tapis-de-points-traditionnels",
    title: "Tapis de points traditionnels",
    description: "Premier exercice de la formation. J'ai réalisé un tapis de points traditionnels avec des fils DMC. Il s'agissait la de mon premier tapis de points, il n'est pas parfait, mais ça m'a permis de commencer d'un bon pied.",
    coverImage: "/images/traditionnel1/3.jpg",
    images: [
        "/images/traditionnel1/3.jpg",
      "/images/traditionnel1/2.jpg",
      "/images/traditionnel1/1.jpg",
    ],
    techniques: [
      "21 points traditionnels",
    ],
    materials: [
      "Fils DMC",
      "Toile de coton",
      "Métier à broder"
    ],
    date: "Decembre 2024",
    duration: "20 heures"
  },
  {
    id: 6,
    slug: "scarabee",
    title: "Scarabée",
    description: "Broderie or/traditionnelle avec un patron de la marque Octopolus. C'est un cadeau pour ma grand-mère qui adore l'Egypte.",
    coverImage: "/images/scarabee/1.jpeg",
    images: [   
      "/images/scarabee/1.jpeg",
      "/images/scarabee/2.jpeg",
      "/images/scarabee/3.jpeg",
    ],
    techniques: [
      "Pose de feutrine",
      "Point passé plat",
      "Pose de simili",
      "Pose de jaseron",
      "Pose de cannetille",
      "Pose de perles"
    ],
    materials: [
      "Feutrine",
      "Jaseron",
      "Cannetille",
      "Perles",
      "Simili"
    ],
    date: "Decembre 2024",
    duration: "7 heures"
  },
  {
    id: 7,
    slug: "sapin",
    title: "Sapin",
    description: "Réalisation d'un sapin de Noël avec de la feutrine ornementé de fils DMC.",
    coverImage: "/images/sapin/1.jpeg",
    images: [
      "/images/sapin/1.jpeg",
      "/images/sapin/2.jpeg",
    ],
    techniques: [
      "Point de noeud",
      "Pose de paillettes",
      "Pose de pierres",
    ],
    materials: [
      "Feutrine",
      "Fil DMC",
      "Paillettes",
      "Pierres",
    ],
    date: "Decembre 2024",
    duration: "2 heures"
  },
  {
    id: 8,
    slug: "soleil",
    title: "Soleil",
    description: "Exercice final du module 2 de la formation. J'ai réalisé un motif céleste avec des fils DMC, au ver à soie et des paillettes. Je suis très contente de mon résultat.",
    coverImage: "/images/soleil/1.jpeg",
    images: [
      "/images/soleil/1.jpeg",
      "/images/soleil/2.jpeg",
      "/images/soleil/3.jpeg",
    ],
    techniques: [
      "Point de tige",
      "Point de chaînette",
      "Point arrière",
      "Point de boulogne",
      "Point de Majolique",
    ],
    materials: [
      "Fil métalique au ver à soie",
      "Fil DMC bleu",
      "Paillettes sequins or",
      "Fil de rochefort",
      "Fil à gant"
    ],
    date: "Decembre 2024 - Janvier 2025",
    duration: "20 heures"
  },
  {
    id: 9,
    slug: "tapis-luneville",
    title: "Tapis Luneville",
    description: "Première expérience luneville, le tapis de point sur organza.",
    coverImage: "/images/luneville1/1.jpeg",
    images: [
      "/images/luneville1/1.jpeg",
      "/images/luneville1/2.jpeg",
    ],
    techniques: [
      "Point de chainette",
      "Pose de perles",
      "Pose de paillettes",
      "Pose de cuvette",
    ],
    materials: [
      "Fil à gant",
      "Perles",
      "Paillettes",
      "Cuvette",
      "Crochet de luvenille",
    ],
    date: "Janvier 2025",
    duration: "5 heures"
  },
  {
    id: 10,
    slug: "exercice-luneville-1",
    title: "Exercice Luneville",
    description: "Projet de fin de module 2. J'ai réalisé un motif géométrique luneville avec des paillettes et des perles.",
    coverImage: "/images/luneville2/1.jpeg",
    images: [
      "/images/luneville2/1.jpeg",
      "/images/luneville2/2.jpeg",  
    ],
    techniques: [
      "Point de chainette",
      "Pose de perles",
      "Pose de paillettes",
      "Pose de cuvette",
    ],
    materials: [
      "Fil à gant",
      "Perles",
      "Paillettes",
      "Cuvette",
      "Crochet de luvenille",
    ],
    date: "Janvier 2025",
    duration: "5 heures"
  },
  {
    id: 11,
    slug: "traditionnel-2",
    title: "Traditionnel 2 - tapis de points",
    description: "Premier exercice du module 4. J'ai réalisé un tapis de points traditionnels avec des fils DMC. Il y avait les points fantaisies, dont les points de feston. Les points de bourrage et les points de couchure. Il y avait aussi une partie point de croix.",
    coverImage: "/images/traditionnel2/traditionnel2-1.jpeg",
    images: [
      "/images/traditionnel2/traditionnel2-1.jpeg",
      "/images/traditionnel2/traditionnel2-2.jpeg",
      "/images/traditionnel2/traditionnel2-3.jpeg",
      "/images/traditionnel2/traditionnel2-4.jpeg",
      "/images/traditionnel2/traditionnel2-5.jpeg",
    ],
    techniques: [
      "Point fantaisie : bouclette, surjeté, arête, vannerie, noeud, poste, feston, abeille",
      "Point de bourrage : cordonnet, bourdon et plumetis",
      "Point de couchure : turc, spirale, grille, gerbe, treillis",
      "Point de croix : étoilé, diable, riz/croix double, hermine",
    ],
    materials: [
      "Fil DMC",
      "Toile de coton",
      "Métier à broder",
      "Fil de soie"
    ],
    date: "Février 2025",
    duration: "8 heures"
  },
  {
    id: 12,
    slug: "soleil-levant",
    title: "Soleil Levant",
    description: "Projet de fin de module 4. J'ai réalisé un motif géométrique traditionnel avec des fils DMC, des fils métaliques. Avec des couleurs pastels.",
    coverImage: "/images/soleillevant/soleillevant1.jpeg",
    images: [
      "/images/soleillevant/soleillevant1.jpeg",
      "/images/soleillevant/soleillevant2.jpeg",
      "/images/soleillevant/soleillevant3.jpeg",
      "/images/soleillevant/soleillevant4.jpeg",
    ],
    techniques: [
      "Couchure spirale",
      "Plumetis",
      "Passé à l'épargne",
      "Point de rep",
      "Point de treillis",
      "Point de tige",
      "Point de sable",
      "Point turc",
      "Point de cordonnet",
      "Point de gerbe",
      "Point arrière"
    ],
    materials: [
      "Fil DMC",
      "Fil métalique",
      "Cordonnet"
    ],
    date: "Février 2025",
    duration: "22 heures"
  },
  {
    id: 13,
    slug: "san-marco",
    title: "Broderie perle San Marco",
    description: "Broderie perle San Marco, coffret Artesane. J'ai réalisé cette broche perlé.",
    coverImage: "/images/sanmarco/sanmarco.jpeg",
    images: [
      "/images/sanmarco/sanmarco.jpeg",
    ],
    techniques: [
      "Pose de perles",
      "Pose de paillettes",
    ],
    materials: [
      "Fil à gant",
      "Perles",
      "Paillettes",
    ],
    date: "Février 2025",
    duration: "4 heures"
  }
]; 