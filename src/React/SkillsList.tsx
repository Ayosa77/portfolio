import React from 'react';

const SkillsList = () => {
  const skills = [
    "Créer des applications en utilisant divers langages de programmation",
    "Concevoir des interfaces utilisateur conviviales et réactives",
    "Manipuler et analyser des données",
    "Transformer des ensembles de données en informations exploitables"
  ];

  return (
    <div className="text-left pt-3 md:pt-9">
      <h2 className="text-[var(--white)] text-3xl md:text-4xl font-bold mb-4">
        Mes compétences techniques
      </h2>
      <p className="text-[var(--white-icon)] mb-6">
        Voici quelques-unes des compétences que je maîtrise :
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
