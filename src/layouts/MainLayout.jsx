import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-primary text-text-primary">
      <Navbar />
      
      <main className="relative">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default MainLayout;
