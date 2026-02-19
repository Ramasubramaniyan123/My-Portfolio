import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-background dark:bg-dark-card border border-border dark:border-dark-border hover:shadow-md transition-all duration-300 hover:scale-105"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon size={20} className="text-text-secondary" />
      ) : (
        <Sun size={20} className="text-yellow-400" />
      )}
    </button>
  );
};

export default ThemeToggle;
