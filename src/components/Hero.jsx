// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section className="text-white py-16 font-montserrat">
      <div className="max-w-screen-xl mx-auto text-center px-4"> {/* Alterado para max-w-screen-xl */}
        <h1 className="font-extrabold text-5xl">Eduardo Escudero.</h1>
        <p className="mt-4 text-xl">Sou um estudante de Engenharia de Software com 18 anos.</p>
        <p className="mt-4 max-w-2xl mx-auto text-lg">
          Acredito que a tecnologia tem o poder de transformar o mundo, e estou sempre em busca de novos desafios e oportunidades para aprender. Aqui, compartilho alguns dos projetos em que trabalhei e as habilidades que desenvolvi ao longo da minha jornada.
        </p>
        <div className="mt-8">
          <a 
            href="/Curriculo_Eduardo_Escudero._.pdf" 
            className="inline-block px-6 py-3 border-2 border-white text-white bg-transparent rounded-lg hover:bg-white hover:text-black transition-colors duration-300"
          >
            Currículo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
