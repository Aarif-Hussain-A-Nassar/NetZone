import styled from "styled-components";
import { motion } from "framer-motion";

export const ProjectsSection = styled.section`
  padding: 8rem 10%;
  background-color: var(--background); /* Ensure consistent background */
  color: var(--foreground);
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 6rem 5%;
  }
`;

export const SectionHeader = styled.div`
  margin-bottom: 4rem;
  text-align: center;
  
  h2 {
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: 900;
    margin-bottom: 1rem;
    background: var(--brand-gradient, linear-gradient(90deg, #fff, #888));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: -1px;
    font-family: 'Inter', sans-serif;
  }
  
  p {
    font-size: 1.1rem;
    opacity: 0.7;
    max-width: 500px;
    line-height: 1.6;
    margin: 0 auto;
  }
`;

export const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProjectItemWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 0;
  border-bottom: 1px solid var(--border-color, rgba(128, 128, 128, 0.2));
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);

  &:first-child {
    border-top: 1px solid var(--border-color, rgba(128, 128, 128, 0.2));
  }

  &:hover {
    padding-left: 1.5rem;
    border-color: rgba(255, 255, 255, 0.3);
    
    .arrow {
      transform: translateX(0) rotate(-45deg);
      opacity: 1;
      color: var(--brand-color, #00ff88);
    }

    .project-number {
      color: var(--brand-color, #00ff88);
      opacity: 1;
      transform: scale(1.1);
    }
    
    .project-title {
        color: var(--foreground); 
        text-shadow: 0 0 20px rgba(0, 0, 0, 0.1); 
    }
  }

  /* Make sure interaction feels good on mobile too */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 2.5rem 0;
    gap: 1.5rem;
    
    &:hover {
      padding-left: 0; /* Disable shift on mobile touch */
      background: none;
    }
  }
`;

export const ProjectInfo = styled.div`
  flex: 1;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProjectNumber = styled.span`
  display: block;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  margin-bottom: 0.8rem;
  color: var(--brand-secondary, #666);
  opacity: 0.6;
  font-weight: 600;
  letter-spacing: 1px;
  transition: all 0.3s ease;
`;

export const ProjectTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 800;
  text-transform: uppercase;
  margin: 0;
  color: var(--foreground);
  opacity: 0.6;
  transition: all 0.3s ease;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const ProjectCategory = styled.p`
  font-size: 0.9rem;
  color: var(--brand-color, #00ff88);
  margin-top: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
`;

export const ProjectDescription = styled.p`
    margin-top: 1rem;
    font-size: 1rem;
    opacity: 0.5;
    max-width: 600px;
    line-height: 1.6;
    transition: opacity 0.3s;
    
    ${ProjectItemWrapper}:hover & {
        opacity: 0.8;
    }
    
    @media(max-width: 768px) {
        opacity: 0.7;
    }
`;

export const ProjectImageContainer = styled.div`
  width: 300px;
  height: 200px;
  margin-left: 2rem;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    filter: grayscale(100%);
  }

  ${ProjectItemWrapper}:hover & img {
    transform: scale(1.1);
    filter: grayscale(0%);
  }

  @media (max-width: 900px) {
    width: 100%;
    height: 250px;
    margin-left: 0;
    margin-top: 1.5rem;
  }
`;
