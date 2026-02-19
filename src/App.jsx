import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import { ThemeProvider } from './context/ThemeContext';
import './styles/globals.css';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="App min-h-screen transition-colors duration-300">
          <AppRouter />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
