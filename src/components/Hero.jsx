import React from 'react';
import DecryptedText from './DecryptedText';
import './DecryptedText.css';
import GlitchText from './GlitchText';
import './GlitchText.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <h1 className="cursor-target">
          <GlitchText>Samuel Srujan B</GlitchText>
        </h1>

        <p>
          <DecryptedText
            text="Versatile Information Science student with hands-on experience in deploying cloud-native applications, building ML pipelines, and developing scalable backend systems."
            animateOn="load"
            speed={40}
            maxIterations={15}
            revealDirection="center"
          />
        </p>
        
        <ul className="social-links">
          <li><a href="mailto:samuelsrujanb@gmail.com" target="_blank" rel="noopener" className="cursor-target">Email</a></li>
          <li><a href="https://www.linkedin.com/in/samuel-srujan-b-871955251" target="_blank" rel="noopener" className="cursor-target">LinkedIn</a></li>
          <li><a href="https://github.com/Samuel-0316" target="_blank" rel="noopener" className="cursor-target">GitHub</a></li>
        </ul>
      </div>
    </section>
  );
}

export default Hero;