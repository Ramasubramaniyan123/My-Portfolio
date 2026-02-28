import React, { Suspense, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import PageTransition from '../components/ui/PageTransition';

// Lazy load section components for better performance
const Hero = React.lazy(() => import('../sections/Hero'));
const About = React.lazy(() => import('../sections/About'));
const Skills = React.lazy(() => import('../sections/Skills'));
const LeetCode = React.lazy(() => import('../sections/LeetCode'));
const Projects = React.lazy(() => import('../sections/Projects'));
const Experience = React.lazy(() => import('../sections/Experience'));
const Education = React.lazy(() => import('../sections/Education'));
const Certifications = React.lazy(() => import('../sections/Certifications'));
const Contact = React.lazy(() => import('../sections/Contact'));

// Dynamically import AnimatePresence to reduce initial bundle size
let AnimatePresence;
const loadFramerMotion = async () => {
  if (!AnimatePresence) {
    const framerMotion = await import('framer-motion');
    AnimatePresence = framerMotion.AnimatePresence;
  }
  return AnimatePresence;
};

const HomePage = () => {
  return (
    <main className="space-y-0">
      <Hero />
      <About />
      <Skills />
      <LeetCode />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
    </main>
  );
};

const AppRouter = () => {
  const [AnimatePresenceComponent, setAnimatePresenceComponent] = useState(null);

  useEffect(() => {
    loadFramerMotion().then((AnimatePresenceComp) => {
      setAnimatePresenceComponent(() => AnimatePresenceComp);
    });
  }, []);

  if (!AnimatePresenceComponent) {
    // Fallback while Framer Motion is loading
    return (
      <MainLayout>
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-text-secondary">Loading...</p>
            </div>
          </div>
        }>
          <Routes future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/leetcode" element={<LeetCode />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <AnimatePresenceComponent mode="wait">
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-text-secondary">Loading...</p>
            </div>
          </div>
        }>
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
        </Suspense>
      </AnimatePresenceComponent>
    </MainLayout>
  );
};

export default AppRouter;
