import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="text-white py-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Eduardo E.</h1> {/* Fonte diminuída */}
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              onClick={() => scrollToSection('skills')}
              aria-label="Ir para Habilidades"
              className="hover:text-gray-400 transition-colors duration-200 text-sm sm:text-base" 
            >
              Habilidades
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => scrollToSection('projects')}
              aria-label="Ir para Projetos"
              className="hover:text-gray-400 transition-colors duration-200 text-sm sm:text-base" 
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => scrollToSection('contact')}
              aria-label="Ir para Contato"
              className="hover:text-gray-400 transition-colors duration-200 text-sm sm:text-base" 
            >
              Contato
            </Link>
          </li>
        </ul>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-2">
          <a href="https://github.com/duduescudero" aria-label="Perfil no GitHub" className="hover:text-gray-400">
            <FaGithub size={26} />
          </a>
          <a href="https://www.linkedin.com/in/eduardo-escudero-ab0a312b6" aria-label="Perfil no LinkedIn" className="hover:text-gray-400">
            <FaLinkedin size={26} />
          </a>
          <a href="mailto:duduescudero2005@gmail.com" aria-label="Enviar Email" className="hover:text-gray-400">
            <FaEnvelope size={26} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
