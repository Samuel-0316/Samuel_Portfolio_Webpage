// src/components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';

// All your project data is now stored in this array of objects
const projectData = [
  {
    title: 'Datagen — Web & Document Dataset Generator',
    points: [
      'Engineered a full-stack tool with Flask and spaCy to automate the generation of Q&A datasets, reducing manual data preparation time by over 70%.',
      'Integrated a Gemma 2B LLM to perform semantic chunking and intelligent answer generation from unstructured web and document sources.',
      'Developed a streamlined data pipeline that significantly accelerated the workflow for training custom NLP models.',
    ],
  },
  {
    title: 'Linked Struct — Interactive Data Structure Learning Platform',
    points: [
      'Built a responsive and intuitive learning platform using React.js to visualize complex linked list operations, improving user comprehension for over 100 students.',
      'Implemented interactive simulations and quizzes with local state persistence, ensuring a seamless and engaging user experience.',
      'Collaborated within an Agile team, utilizing Git for version control and participating in code reviews to maintain a high-quality, scalable codebase deployed on Vercel.',
    ],
  },
  {
    title: 'Real-Time Hand Gesture Recognition',
    points: [
      'Developed a high-performance gesture recognition application using Python, OpenCV, and TensorFlow, achieving over 95% accuracy in classifying 10 distinct gestures.',
      'Engineered the system for low-latency (<100ms) predictions from live webcam input, making it suitable for real-time human-computer interaction.',
      'Designed the application with accessibility in mind, providing a foundation for developing gesture-based control systems and assistive technologies.',
    ],
  },
];

// Animation variants for the list items
const listItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};


function Projects() {
  return (
    <section id="projects" className="container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {/* We map over the projectData array to dynamically create each project card */}
        {projectData.map((project) => (
          // The 'key' prop is crucial for React to keep track of each item efficiently
          <Card key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <ul>
              {/* We map over the points for each project to create the list items */}
              {project.points.map((point) => (
                <motion.li key={point} variants={listItemVariants}>
                  {point}
                </motion.li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Projects;