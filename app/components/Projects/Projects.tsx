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
    title: "Smart City Grid",
    category: "CCTV & Surveillance",
    description: "A city-wide integrated surveillance network ensuring 24/7 public safety with AI-powered analytics and remote monitoring centers.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "02",
    title: "Apex Tech Park",
    category: "Biometrics & Access",
    description: "High-security biometric access control implementation for a 5000+ employee technology campus, featuring retina scanning and contactless entry.",
    image: "https://images.unsplash.com/photo-1558002038-1091a1661f1d?q=80&w=2080&auto=format&fit=crop"
  },
  {
    id: "03",
    title: "The Glass Villa",
    category: "Home Automation",
    description: "Complete luxury home automation system controlling lighting, climate, curtains, and security through a unified voice-activated interface.",
    image: "https://images.unsplash.com/photo-1558036117-15ea630884d5?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "04",
    title: "Skyline Tower",
    category: "Enterprise Networking",
    description: "Infrastructure groundwork and structured cabling for a 50-story commercial skyscraper, delivering 10Gbps connectivity to all tenants.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
  }
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
