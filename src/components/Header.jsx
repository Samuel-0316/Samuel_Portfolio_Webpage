import React, { useState } from 'react';

const sunIcon = <svg className="theme-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.106a.75.75 0 010 1.06l-1.591 1.59a.75.75 0 11-1.06-1.06l1.59-1.59a.75.75 0 011.06 0zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.894 17.894a.75.75 0 01-1.06 0l-1.59-1.591a.75.75 0 111.06-1.06l1.59 1.59a.75.75 0 010 1.061zM12 18.75a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zM6.106 17.894a.75.75 0 010-1.06l1.591-1.59a.75.75 0 111.06 1.06l-1.59 1.59a.75.75 0 01-1.06 0zM4.5 12a.75.75 0 01-.75.75H1.5a.75.75 0 010-1.5h2.25a.75.75 0 01.75.75zM6.106 6.106a.75.75 0 011.06 0l1.59 1.591a.75.75 0 11-1.06 1.06l-1.59-1.59a.75.75 0 010-1.06z"/></svg>;
const moonIcon = <svg className="theme-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-3.836 2.04-7.178 5.002-8.974a.75.75 0 01.819.162z" clipRule="evenodd" /></svg>;

function Header({ theme, onThemeToggle }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="container nav-container" role="navigation" aria-label="Main navigation">
        <a href="#home" className="nav-brand cursor-target">Samuel Srujan B</a>
        <div className="controls">
          <button className="btn cursor-target" id="themeToggle" aria-label="Toggle light and dark theme" onClick={onThemeToggle}>
            {theme === 'dark' ? sunIcon : moonIcon}
          </button>
        </div>
        <button className="hamburger" aria-label="Toggle menu" aria-expanded={isMenuOpen} onClick={handleMenuToggle}>☰</button>
        <ul className={isMenuOpen ? "nav-menu show" : "nav-menu"} id="navMenu">
          <li><a href="#about" className="nav-link cursor-target">About</a></li>
          <li><a href="#experience" className="nav-link cursor-target">Experience</a></li>
          <li><a href="#education" className="nav-link cursor-target">Education</a></li>
          <li><a href="#projects" className="nav-link cursor-target">Projects</a></li>
          <li><a href="#skills" className="nav-link cursor-target">Skills</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;