import React from 'react';

const SkillsList = () => {
  const skills = [
    "Réaliser un développement d'application",
    "Optimiser des applications",
    "Collaborer au sein d'une équipe informatique"
  ];

  return (
    <div className="text-left pt-3 md:pt-9">
      <h2 className="text-[var(--white)] text-3xl md:text-4xl font-bold mb-4">
        Mes compétences techniques
      </h2>
      <p className="text-[var(--white-icon)] mb-6">
        Voici les compétences acquises en BUT Informatique.:
      </p>
      <ul className="space-y-3 text-lg">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2 text-[var(--sec)] font-bold">•</span>
            <span className="text-[var(--white)]">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
