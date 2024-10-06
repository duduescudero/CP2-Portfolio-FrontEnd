import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiFigma } from 'react-icons/si';


const Skills = () => {
  return (
    <section id="skills" className="py-16 text-white pt-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">HABILIDADES</h2>
        <div className="flex justify-center flex-wrap">
          <div className="flex flex-col items-center mx-16"> {/* Aumentado para mx-16 */}
            <FaHtml5 size={50} className="text-orange-500" />
            <p className="mt-4">HTML</p>
          </div>
          <div className="flex flex-col items-center mx-16">
            <FaCss3Alt size={50} className="text-blue-500" />
            <p className="mt-4">CSS</p>
          </div>
          <div className="flex flex-col items-center mx-16">
            <FaJsSquare size={50} className="text-yellow-500" />
            <p className="mt-4">JavaScript</p>
          </div>
          <div className="flex flex-col items-center mx-16">
            <FaReact size={50} className="text-cyan-500" />
            <p className="mt-4">React</p>
          </div>
          <div className="flex flex-col items-center mx-16">
            <FaPython size={50} className="text-blue-400" />
            <p className="mt-4">Python</p>
          </div>
          <div className="flex flex-col items-center mx-16">
            <FaGitAlt size={50} className="text-orange-300" />
            <p className="mt-4">Git</p>
          </div>
          <div className="flex flex-col items-center mx-16">
            <SiFigma size={50} className="text-purple-500" />
            <p className="mt-4">Figma</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
