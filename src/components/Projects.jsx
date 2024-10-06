// src/components/Projects.jsx
import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import projeto1Image from '../assets/projeto1.png';
import projeto2Image from '../assets/projeto2.png';

const projectsData = [
  {
    id: 1,
    title: "Formula E",
    img: projeto1Image,
    link: "https://sprint-3-front.vercel.app/",
    github: "https://github.com/duduescudero/Sprint-3-Front",
    desc: "O site Formula E, desenvolvido na FIAP, apresenta informações sobre corridas e pilotos, proporcionando uma experiência interativa para os fãs de automobilismo.",
    languages: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 2,
    title: "Eco Store",
    img: projeto2Image,
    link: "https://cp-4-front-end.vercel.app/",
    github: "https://github.com/duduescudero/CP4-FrontEnd",
    desc: "O Eco Store, criado na FIAP, promove um estilo de vida sustentável, permitindo que os usuários explorem e adquiram produtos ecológicos de maneira fácil e intuitiva.",
    languages: ["HTML", "CSS", "JavaScript"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">PROJETOS</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projectsData.map(project => (
            <div key={project.id} className="border border-gray-600 rounded-lg p-4">
              <img src={project.img} alt={project.title} className="w-full h-auto object-contain rounded-md" />
              <h3 className="text-lg font-bold mt-2">{project.title}</h3>
              <p className="text-sm">{project.desc}</p>
              <div className="flex flex-wrap mt-2">
                {project.languages.map(lang => (
                  <span key={lang} className="m-1 bg-gray-700 px-2 py-1 rounded text-sm">
                    {lang}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex justify-between">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full hover:bg-blue-400">
                  <FaExternalLinkAlt />
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 bg-gray-600 text-white rounded-full hover:bg-gray-500">
                  <FaGithub />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
