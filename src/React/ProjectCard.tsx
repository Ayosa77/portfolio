import React, { useState } from 'react';

interface Project {
  title: string;
  image: any; // ou ImageMetadata selon votre configuration
  link: string;
  preview: string;
  status: string;
  description: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setShowDescription(prev => !prev);
  };

  // Si le projet est "Site web de l’association étudiante", on utilise "object-contain" pour éviter le zoom excessif
  const imageClass =
    project.title === "Site web de l’association étudiante"
      ? "w-full h-48 md:h-72 object-contain group-hover:scale-105 transition-transform duration-300"
      : "w-full h-48 md:h-72 object-cover group-hover:scale-105 transition-transform duration-300";

  return (
    <div className="group">
      {/* Zone cliquable renvoyant à GitHub */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 mb-4">
          <img
            src={project.image.src || project.image}
            alt={project.title}
            className={imageClass}
          />
        </div>
        <div className="flex items-center px-3">
          <div className="flex-grow">
            <h4 className="text-2xl font-semibold">{project.title}</h4>
            <span className="py-1 text-sm text-[var(--white-icon)]">
              {project.status}
            </span>
          </div>
          <a 
            target="_blank" 
            href={project.link} 
            aria-label="GitHub" 
            className="size-14 flex justify-center items-center text-[var(--white-icon)] hover:text-white transition duration-300 ease-in-out border border-1 border-[var(--white-icon-tr)] p-3 rounded-xl bg-[#1414149c] hover:bg-[var(--white-icon-tr)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7">
              <path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"></path>
            </svg>
          </a>
        </div>
      </a>
      {/* Bouton flèche pour afficher la description */}
      <div className="flex justify-end mt-2 px-3">
        <button 
          onClick={toggleDescription}
          aria-label="Afficher la description"
          className="size-14 flex justify-center items-center text-[var(--white-icon)] hover:text-white transition duration-300 ease-in-out border border-1 border-[var(--white-icon-tr)] p-3 rounded-xl bg-[#1414149c] hover:bg-[var(--white-icon-tr)]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7">
            <path d="M12 16l-6-6h12l-6 6z"></path>
          </svg>
        </button>
      </div>
      {showDescription && (
        <div className="px-4 py-2 border-t border-[var(--white-icon-tr)]">
          <p className="text-[var(--white)]">{project.description}</p>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
