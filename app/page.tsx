"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Improved Responsive */}
      <section className="px-4 py-12 sm:py-16 md:py-20 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight text-gray-900">
            Portfolio de Broderie - Emilie Bernard
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg leading-7 md:leading-8 text-gray-600 max-w-2xl mx-auto px-4">
            Bienvenue dans mon univers de broderie artisanale. Chaque création raconte une histoire unique à travers le fil et l&apos;aiguille.
          </p>
        </div>
      </section>

      {/* About Section - Improved Responsive */}
      <section className="px-4 py-12 md:py-16 lg:py-20 bg-pink-50 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {/* Image Container - Responsive adjustments */}
            <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] rounded-2xl overflow-hidden lg:sticky lg:top-8 order-1 lg:order-none">
              <Image
                src="/images/moi.jpg"
                alt="Emilie Bernard"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>

            {/* Text Content - Responsive adjustments */}
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Mon Parcours en Broderie : Entre Passion et Apprentissage
              </h2>
              
              <div className="prose prose-sm md:prose-base lg:prose-lg max-w-none">
                {/* Each section with improved spacing */}
                <div className="mb-6 md:mb-8">
                  <p className="text-gray-600">
                    Depuis toujours, l&apos;art du fil me fascine. Après avoir obtenu mes CAP Couture Flou et CAP Tailleur, j&apos;ai souhaité approfondir mes compétences en me lançant dans la broderie, un univers alliant minutie, créativité et savoir-faire d&apos;exception.
                  </p>
                </div>

                <div className="mb-6 md:mb-8">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                    Une Nouvelle Aventure : Le CAP Broderie
                  </h3>
                  <p className="text-gray-600">
                    En 2024, j&apos;ai entrepris une formation en broderie avec Artesane, dans le but de passer mon CAP Brodeur main. Ce parcours est une occasion unique de développer ma technique et de perfectionner mon geste, tout en découvrant l&apos;univers exigeant et raffiné de la broderie d&apos;art.
                  </p>
                </div>

                <div className="mb-6 md:mb-8">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                    Un Portfolio : Suivre et Partager Mon Évolution
                  </h3>
                  <p className="text-gray-600">
                    Ce portfolio est né de ma volonté de conserver une trace de toutes mes réalisations. Chaque projet, qu&apos;il s&apos;agisse d&apos;un exercice technique ou d&apos;une création personnelle, représente une étape dans mon apprentissage et dans l&apos;exploration de mon style artistique.
                  </p>
                </div>

                <div className="mb-6 md:mb-8">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                    Un Pont Entre Couture et Broderie
                  </h3>
                  <p className="text-gray-600">
                    Avant de me spécialiser en broderie, j&apos;avais déjà une solide expérience en couture, ce qui m&apos;a permis d&apos;aborder cet art sous un angle complémentaire. J&apos;ai réalisé divers projets nécessitant patience et précision, et aujourd&apos;hui, j&apos;aspire à mêler ces deux disciplines pour donner naissance à des créations uniques.
                  </p>
                </div>

                <div className="mb-6 md:mb-8">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                    Mes Ambitions pour l&apos;Avenir
                  </h3>
                  <p className="text-gray-600">
                    Mon objectif est de me former un maximum dans les arts du fil, pour pouvoir réaliser des projets qui me tiennent à cœur. Je veux exprimer mon amour du beau, en privilégiant des créations écologiques et éthiques, respectueuses des savoir-faire artisanaux et des matériaux durables.
                  </p>
                </div>

                <div className="mb-6 md:mb-8">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                    Un Engagement pour l&apos;Excellence
                  </h3>
                  <p className="text-gray-600">
                    Chaque point de broderie est pour moi un pas de plus vers la maîtrise d&apos;un art exigeant et poétique. Je souhaite apprendre auprès des meilleurs, expérimenter différentes techniques, et, pourquoi pas, intégrer un atelier d&apos;exception ou travailler sur des projets qui subliment le textile de manière responsable et esthétique.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid - Improved Responsive */}
      <section className="px-4 py-12 md:py-16 lg:py-20 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8">
          Liste des projets
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <Link 
              href={`/projects/${project.slug}`} 
              key={project.id}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-pink-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-gray-600 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-4 flex items-center text-pink-500 font-medium">
                    Voir le Projet
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}