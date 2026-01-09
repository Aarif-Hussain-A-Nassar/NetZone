import styled from "styled-components";
import { motion } from "framer-motion";

export const ServicesSection = styled.section`
  padding: 12rem 10% 8rem; /* Huge top padding to account for overlapping hero cards */
  background-color: var(--background);
  text-align: center;
  position: relative;
  z-index: 1;

  @media (max-width: 900px) {
    padding: 6rem 5% 4rem;
  }
`;

export const Header = styled.div`
  margin-bottom: 4rem;

  h2 {
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--brand-color); /* Teal */
    text-transform: uppercase;
    margin-bottom: 1rem;
    font-family: 'Inter', sans-serif;
  }

  p {
    font-size: 1.1rem;
    color: var(--foreground);
    opacity: 0.7;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

export const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const CardWrapper = styled(motion.div)`
  perspective: 1000px;
  height: 100%; /* Stretch to fill the grid cell, ensuring equal height */
  min-height: 350px; /* Minimum height constraint */
  cursor: default;
  position: relative; /* Ensure z-index works */
  z-index: 1;

  &:hover {
    z-index: 10; /* Bring to front on hover/interaction */
  }
`;

export const CardInner = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 8px;
  padding: 3rem 2rem;
  background: var(--card-bg);
  border: 1px solid transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05); /* Match original slightly */
  
  /* Hover effects from original ServiceCard */
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
`;

export const CardFront = styled(CardFace)`
  /* Matches original ServiceCard styles */
  
  &:hover {
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    border-color: var(--brand-color);
    /* removed translateY to avoid confusing physics with flip, but kept shadow/border */
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--heading-color);
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  p {
    color: var(--foreground);
    opacity: 0.8;
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  button {
    background: var(--brand-color);
    color: white;
    border: none;
    padding: 0.8rem 2rem;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
    transition: background 0.3s ease;
    border-radius: 4px;

    &:hover {
      background: #00A68A;
    }
  }
`;

export const CardBack = styled(CardFace)`
  transform: rotateY(180deg);
  background: var(--card-bg);
  border: 1px solid var(--brand-color);
  cursor: pointer; /* Indicates clickable to flip back */

  h3 {
    font-size: 1.8rem;
    color: var(--brand-color);
    text-transform: uppercase;
    font-weight: 800;
  }
`;

