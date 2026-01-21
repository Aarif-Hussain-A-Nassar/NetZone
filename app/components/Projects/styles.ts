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
  gap: 2rem; /* Spacing between cards */
`;

export const ProjectItemWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;
  
  /* Card Styling */
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 1.5rem;
  box-shadow: var(--card-shadow);
  
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);

  /* Alternating Layout for visual interest */
  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  &:hover {
    transform: translateY(-5px) scale(1.01);
    box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.15), 
                0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-color: var(--brand-purple);
    
    .arrow {
      transform: translateX(0) rotate(-45deg);
      opacity: 1;
      color: var(--brand-color, #00ff88);
    }
  }

  /* Make sure interaction feels good on mobile too */
  @media (max-width: 900px) {
    flex-direction: column !important; /* Force column on mobile */
    align-items: flex-start;
    padding: 2rem;
    gap: 2rem;
    
    &:hover {
      transform: none;
      box-shadow: var(--card-shadow);
    }
  }
`;

export const ProjectInfo = styled.div`
  flex: 1;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

export const ProjectNumber = styled.span`
  position: absolute;
  top: -3.5rem;
  right: 0;
  font-family: 'Inter', sans-serif;
  font-size: 8rem;
  font-weight: 900;
  color: var(--foreground);
  opacity: 0.03;
  line-height: 1;
  pointer-events: none;
  transition: all 0.5s ease;
  
  /* Move number to left on alternating reversed rows */
  ${ProjectItemWrapper}:nth-child(even) & {
    right: auto;
    left: 0;
  }

  ${ProjectItemWrapper}:hover & {
    opacity: 0.08;
    transform: scale(1.1);
    color: var(--brand-purple);
  }

  @media (max-width: 900px) {
    top: -2rem;
    right: 0 !important;
    left: auto !important;
    font-size: 6rem;
  }
`;

export const ProjectTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 800;
  text-transform: uppercase;
  margin: 0;
  color: var(--foreground);
  transition: all 0.3s ease;
  line-height: 1.1;
  position: relative;
  z-index: 3;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  ${ProjectItemWrapper}:hover & {
    background: var(--brand-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const ProjectCategory = styled.p`
  font-size: 0.85rem;
  color: var(--brand-purple);
  margin-top: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 700;
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: rgba(107, 45, 135, 0.05); /* very light purple bg */
  border-radius: 20px;
`;

export const ProjectDescription = styled.p`
    margin-top: 1.5rem;
    font-size: 1rem;
    color: var(--foreground);
    opacity: 0.7;
    max-width: 90%;
    line-height: 1.7;
    transition: opacity 0.3s;
    
    ${ProjectItemWrapper}:hover & {
        opacity: 0.9;
    }
`;

export const ProjectImageContainer = styled.div`
  width: 45%;
  height: 280px;
  border-radius: 1.5rem;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  margin-left: 3rem;

  /* Adjust margins for alternating layout */
  ${ProjectItemWrapper}:nth-child(even) & {
    margin-left: 0;
    margin-right: 3rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.7s cubic-bezier(0.2, 1, 0.3, 1), filter 0.5s ease;
    filter: grayscale(100%);
  }

  ${ProjectItemWrapper}:hover & img {
    transform: scale(1.1);
    filter: grayscale(0%);
  }

  @media (max-width: 900px) {
    width: 100%;
    height: 240px;
    margin: 0 !important;
    order: -1; /* Move image to top on mobile */
  }
`;
