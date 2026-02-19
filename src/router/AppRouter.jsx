import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainLayout from '../layouts/MainLayout';
import PageTransition from '../components/ui/PageTransition';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import LeetCode from '../sections/LeetCode';
import Projects from '../sections/Projects';
import Experience from '../sections/Experience';
import Education from '../sections/Education';
import Certifications from '../sections/Certifications';
import Contact from '../sections/Contact';

const HomePage = () => {
  return (
    <div className="space-y-0">
      <Hero />
      <About />
      <Skills />
      <LeetCode />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
    </div>
  );
};

const AppRouter = () => {
  return (
    <MainLayout>
      <AnimatePresence mode="wait">
        <Routes future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <Route path="/" element={
            <PageTransition>
              <HomePage />
            </PageTransition>
          } />
          <Route path="/home" element={
            <PageTransition>
              <HomePage />
            </PageTransition>
          } />
          <Route path="/about" element={
            <PageTransition>
              <About />
            </PageTransition>
          } />
          <Route path="/skills" element={
            <PageTransition>
              <Skills />
            </PageTransition>
          } />
          <Route path="/leetcode" element={
            <PageTransition>
              <LeetCode />
            </PageTransition>
          } />
          <Route path="/projects" element={
            <PageTransition>
              <Projects />
            </PageTransition>
          } />
          <Route path="/experience" element={
            <PageTransition>
              <Experience />
            </PageTransition>
          } />
          <Route path="/education" element={
            <PageTransition>
              <Education />
            </PageTransition>
          } />
          <Route path="/certifications" element={
            <PageTransition>
              <Certifications />
            </PageTransition>
          } />
          <Route path="/contact" element={
            <PageTransition>
              <Contact />
            </PageTransition>
          } />
        </Routes>
      </AnimatePresence>
    </MainLayout>
  );
};

export default AppRouter;
