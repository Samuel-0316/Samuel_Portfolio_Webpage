// src/components/Education.jsx
import React from 'react';
import Card from './Card'; // Import the reusable Card component

function Education() {
  return (
    <section id="education" className="container">
      <h2>Education</h2>
      <Card>
        <div className="education-header">
          <div>
            <h3>B.E in Information Science</h3>
            <h4 style={{ marginTop: '6px', color: 'var(--muted-text-color)', fontWeight: 600 }}>Ramaiah Institute of Technology — Bengaluru</h4>
          </div>
          <p>Oct 2023 — June 2026 (Expected)</p>
        </div>
        <p style={{ color: 'var(--muted-text-color)', marginTop: '0.8rem' }}>Current CGPA: 8.49 (up to 6th semester)</p>
      </Card>
      
      <Card>
        <div className="education-header">
          <div>
            <h3>Diploma in Computer Science</h3>
            <h4 style={{ marginTop: '6px', color: 'var(--muted-text-color)', fontWeight: 600 }}>Bapuji Polytechnic Shabanur — Davangere</h4>
          </div>
          <p>Dec 2020 — June 2023</p>
        </div>
        <p style={{ color: 'var(--muted-text-color)', marginTop: '0.8rem' }}>CGPA: 9.8</p>
      </Card>
    </section>
  );
}

export default Education;