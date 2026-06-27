import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Creator from './components/Creator';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Animated background gradient blobs */}
      <div className="fixed inset-0 -z-50 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Main content */}
      <Navbar />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className="py-20">
          <About />
        </section>
        
        <section id="skills" className="py-20">
          <Skills />
        </section>
        
        <section id="projects" className="py-20">
          <Projects />
        </section>
        
        <section id="experience" className="py-20">
          <Experience />
        </section>
        
        <section id="creator" className="py-20">
          <Creator />
        </section>
        
        <section id="contact" className="py-20">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
