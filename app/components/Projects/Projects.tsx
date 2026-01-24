"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ProjectsSection, 
  SectionHeader, 
  ProjectList, 
  ProjectItemWrapper, 
  ProjectInfo, 
  ProjectNumber, 
  ProjectTitle, 
  ProjectCategory,
  ProjectDescription,
  ProjectImageContainer
} from './styles';

const projects = [
  {
    id: "01",
    title: "Chapter.1 Fitness",
    category: "Biometric Installation",
    description: "Installation of the eSSL AI Face Magnum biometric system at Chapter.1 Fitness Eramallor, ensuring exclusive and secure access for subscribed members only.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: "02",
    title: "Idcube",
    category: "Automation & Lighting",
    description: "Deployed Sensinova motion sensors at Idcube Identification Systems Pvt. Ltd., Palarivattom, to detect movement and automatically control lighting—enhancing energy efficiency, reducing power consumption, and improving user convenience.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1469&auto=format&fit=crop"
  },
  {
    id: "04",
    title: "RF Exports",
    category: "Biometric & Access Control",
    description: "Installation of eSSL biometric systems for attendance tracking and door access control at RF Exports, Eramallor.",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1470&auto=format&fit=crop"
  },

];

const ProjectItem = ({ project, index }: { project: any, index: number }) => {
  return (
    <ProjectItemWrapper
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <ProjectInfo>
        <ProjectNumber className="project-number">{project.id}</ProjectNumber>
        <ProjectTitle className="project-title">{project.title}</ProjectTitle>
        <ProjectCategory>{project.category}</ProjectCategory>
        <ProjectDescription>{project.description}</ProjectDescription>
      </ProjectInfo>
      <ProjectImageContainer>
        <img src={project.image} alt={project.title} />
      </ProjectImageContainer>
    </ProjectItemWrapper>
  );
};

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <SectionHeader>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Selected Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Pioneering security and automation solutions across industries.
        </motion.p>
      </SectionHeader>
      
      <ProjectList>
        {projects.map((project, index) => (
          <ProjectItem key={project.id} project={project} index={index} />
        ))}
      </ProjectList>
    </ProjectsSection>
  );
};

export default Projects;
