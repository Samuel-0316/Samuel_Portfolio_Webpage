// src/components/About.jsx
import React from 'react';
import Card from './Card'; // 1. Import the Card component

function About() {
  return (
    <section id="about" className="container">
      {/* 2. Wrap the content in the Card component */}
      <h2 style={{ marginBottom: '1rem' }}>Professional Summary</h2>
      <Card>
        <p>
          Results-driven Information Science student with a strong foundation in MLOps, cloud-native development, and full-stack engineering. Proven ability to design and deploy scalable applications using Python, AWS, and Docker. Passionate about leveraging automation and robust architecture to solve complex, real-world problems and enhance system reliability.
        </p>
      </Card>
    </section>
  );
}

export default About;