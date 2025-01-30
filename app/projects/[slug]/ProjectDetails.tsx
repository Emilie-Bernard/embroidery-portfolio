"use client";

import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  images: string[];
  techniques: string[];
  materials: string[];
  date: string;
  duration: string;
};

type ProjectDetailsProps = {
  project: Project;
};

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(project.images[0]);

  return (
    <main className="min-h-screen bg-white py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Link 
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-pink-500 transition-colors mb-6 sm:mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour aux projets
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div>
            <div className="rounded-2xl overflow-hidden shadow-lg mb-4 relative aspect-square w-full max-w-[600px] mx-auto">
              <Image
                src={selectedImage || ""}
                alt={project.title || ""}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                priority
              />
            </div>
            <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-[600px] mx-auto">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={`rounded-lg overflow-hidden shadow-md transition-all duration-300 relative aspect-square ${
                    selectedImage === image ? "ring-2 ring-pink-500" : ""
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${project.title} ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 25vw, (max-width: 1200px) 150px, 100px"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="mt-6 lg:mt-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              {project.title}
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-gray-600 mb-6 sm:mb-8">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span className="text-sm sm:text-base">{project.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span className="text-sm sm:text-base">{project.duration}</span>
              </div>
            </div>
            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                {project.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                    Techniques
                  </h2>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {project.techniques.map((technique, index) => (
                      <li key={index} className="text-sm sm:text-base">{technique}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                    Matériaux
                  </h2>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {project.materials.map((material, index) => (
                      <li key={index} className="text-sm sm:text-base">{material}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 