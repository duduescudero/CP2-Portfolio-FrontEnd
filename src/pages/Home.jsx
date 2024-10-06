import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <Skills id="skills" /> 
      <Projects id="projects" />
      <Contact id="contact" />
    </div>
  );
};

export default Home;
