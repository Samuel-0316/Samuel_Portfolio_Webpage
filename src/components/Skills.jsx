// src/components/Skills.jsx
import React from 'react';

function Skills() {
  return (
    <section id="skills" className="container">
      <h2>Technical Skills</h2>
      <div className="skills-container">
        <div className="skill-category cursor-target">
          <h3>Languages</h3>
          <ul>
            <li>Python</li>
            <li>JavaScript</li>
            <li>C / C++</li>
            <li>SQL</li>
          </ul>
        </div>
        <div className="skill-category cursor-target">
          <h3>Cloud & DevOps</h3>
          <ul>
            <li>AWS (EC2, S3, IAM)</li>
            <li>Docker</li>
            <li>Terraform</li>
            <li>Jenkins</li>
            <li>Git</li>
            <li>Linux</li>
          </ul>
        </div>
        <div className="skill-category cursor-target">
          <h3>Backend</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Flask</li>
            <li>REST APIs</li>
          </ul>
        </div>
        <div className="skill-category cursor-target">
          <h3>Frontend</h3>
          <ul>
            <li>React.js</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
        <div className="skill-category cursor-target">
          <h3>Databases</h3>
          <ul>
            <li>MongoDB</li>
            <li>MySQL</li>
          </ul>
        </div>
        <div className="skill-category cursor-target">
          <h3>ML Libraries</h3>
          <ul>
            <li>TensorFlow</li>
            <li>spaCy</li>
            <li>OpenCV</li>
            <li>Mediapipe</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;