import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import LeetCode from '../sections/LeetCode';
import Projects from '../sections/Projects';
import Experience from '../sections/Experience';
import Education from '../sections/Education';
import Contact from '../sections/Contact';

const AppRouter = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Skills />
            <LeetCode />
            <Projects />
            <Experience />
            <Education />
            <Contact />
          </>
        } />
        <Route path="/home" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/leetcode" element={<LeetCode />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </MainLayout>
  );
};

export default AppRouter;
