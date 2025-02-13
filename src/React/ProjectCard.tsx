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

  return (
    <div className="group">
      <a href={project.link} className="block">
        <div className="flex justify-center">
          {project.title === "Talkweet - Stage BUT2" ? (
            // 📱 Mockup de smartphone blanc pour Talkweet
            <div className="relative w-[200px] h-[400px] bg-white rounded-[30px] shadow-lg border-[8px] border-gray-400 overflow-hidden">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[70px] h-[12px] black 500 rounded-b-2xl"></div>
              <img src={project.image.src || project.image} alt={project.title} className="w-full h-full object-cover rounded-[24px]" />
            </div>
          ) : (
            // 🖥️ Mockup de PC pour les autres projets
            <div className="relative w-[320px] h-[200px] bg-gray-200 rounded-lg shadow-lg border-[10px] border-gray-500 overflow-hidden">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[100px] h-[8px] bg-gray-700 rounded-b-lg"></div>
              <img src={project.image.src || project.image} alt={project.title} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80px] h-[14px] bg-gray-700 rounded-t-lg"></div>
            </div>
          )}
        </div>

        <div className="flex items-center px-3 mt-4">
          <div className="flex-grow">
            <h4 className="text-2xl font-semibold project-title">{project.title}</h4>
            <span className="py-1 text-sm text-[var(--white-icon)]">{project.status}</span>
          </div>
        </div>
      </a>

      <div className="flex justify-end mt-2 px-3">
        <button 
          onClick={toggleDescription}
          className="size-14 flex justify-center items-center text-[var(--white-icon)] hover:text-white transition duration-300 ease-in-out border border-[var(--white-icon-tr)] p-3 rounded-xl bg-[#1414149c] hover:bg-[var(--white-icon-tr)]"
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
