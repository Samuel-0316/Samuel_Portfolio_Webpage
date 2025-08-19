import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Aurora from './components/Aurora';
import TargetCursor from './components/TargetCursor'; // Import the cursor

function App() {
  const [theme, setTheme] = useState('dark');

  const handleThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [theme]);

  return (
    <>
      <TargetCursor /> {/* Add the cursor component here */}

      {theme === 'dark' && <Aurora />}

      <Header theme={theme} onThemeToggle={handleThemeToggle} />

      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </>
  );
}

export default App;