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
    <main className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Link 
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-pink-500 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour aux projets
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="rounded-2xl w-[600px] h-[600px] overflow-hidden shadow-lg mb-4">
              <Image
                src={selectedImage || ""}
                alt={project.title || ""}
                width={600}
                height={600}
                className="w-[600px] h-[600px] object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={`rounded-lg overflow-hidden shadow-md transition-all duration-300 ${
                    selectedImage === image ? "ring-2 ring-pink-500" : ""
                  }`}
                >
                  <Image
                    width={100}
                    height={100}
                    src={image}
                    alt={`${project.title} ${index + 1}`}
                    className="w-full h-auto object-cover aspect-square"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {project.title}
            </h1>
            <div className="flex items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>{project.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>{project.duration}</span>
              </div>
            </div>
            <div className="prose prose-lg">
              <p className="text-gray-600 mb-6">
                    {project.description}
              </p>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Techniques
              </h2>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                {project.techniques.map((technique, index) => (
                  <li key={index}>{technique}</li>
                ))}
              </ul>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Matériaux
              </h2>
              <ul className="list-disc list-inside text-gray-600">
                {project.materials.map((material, index) => (
                  <li key={index}>{material}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 