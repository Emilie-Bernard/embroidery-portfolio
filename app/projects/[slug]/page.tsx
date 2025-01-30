import { projects } from "@/data/projects";
import ProjectDetails from "./ProjectDetails";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return <div>Projet non trouvé</div>;
  }

  // Ensure all required fields are present
  const projectWithDefaults = {
    ...project,
    techniques: project.techniques || [],
    materials: project.materials || [],
    date: project.date || "",
    duration: project.duration || ""
  };

  return <ProjectDetails project={projectWithDefaults} />;
}