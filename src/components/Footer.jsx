import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-4 text-white text-center">
      <p>&copy; 2024 Eduardo Escudero. Todos os direitos reservados.</p>
      <div className="flex justify-center space-x-4 mt-2">
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
    </footer>
  );
};

export default Footer;
