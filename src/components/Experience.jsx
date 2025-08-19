// src/components/Experience.jsx
import React from 'react';
import Card from './Card'; // Import the reusable Card component

function Experience() {
  return (
    <section id="experience" className="container">
      <h2>Experience</h2>
      <Card>
        <div className="education-header">
          <div>
            <h3 style={{ color: 'var(--primary-color)' }}>MLOps Engineer Intern</h3>
            <h4 style={{ margin: '6px 0 0', color: 'var(--muted-text-color)', fontWeight: 600 }}>Octakaigon Bock — Remote</h4>
          </div>
          <p>May 2025 – Present</p>
        </div>
        <ul>
          <li>Deploy applications and databases on cloud platforms like AWS and GCP.</li>
          <li>Containerization and orchestration using Docker and Kubernetes.</li>
          <li>Build MLOps pipelines for deploying and managing AI models.</li>
          <li>Document infrastructure and workflows following internal standards.</li>
        </ul>
      </Card>
    </section>
  );
}

export default Experience;