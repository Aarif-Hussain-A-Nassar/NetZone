import styled from "styled-components";
import { motion } from "framer-motion";

export const ServicesSection = styled.section`
  padding: 12rem 10% 8rem;
  background-color: transparent; /* allow global background to show */
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
    font-size: 3rem;
    font-weight: 900;
    background: var(--brand-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
    margin-bottom: 1rem;
    font-family: 'Inter', sans-serif;
    letter-spacing: -1px;
    
    &::after {
      content: '';
      display: block;
      width: 60px;
      height: 4px;
      background: var(--brand-green);
      margin: 1rem auto 0;
    }
  }

  p {
    font-size: 1.2rem;
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
  gap: 2.5rem;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const CardWrapper = styled(motion.div)`
  perspective: 1000px;
  height: 520px;
  cursor: pointer;
  z-index: 1;

  @media (max-width: 900px) {
    position: sticky;
    top: 15vh;
    margin-bottom: 10vh;
    height: 500px; 
    width: 100%;
    background-color: transparent;
  }
`;

export const CardInner = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform-style: preserve-3d;
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 20px;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  overflow: hidden; /* Ensures image respects border radius */
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
  
  transition: all 0.4s ease;

  @media (max-width: 900px) {
      background: #050511;
      backdrop-filter: none;
      border: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

export const CardContent = styled.div`
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  height: 100%;
`;

export const CardFront = styled(CardFace)`
  background: var(--card-bg); 
  
  &:hover {
    background: var(--brand-color);
    border-color: var(--brand-color);
    transform: translateY(-5px);
    box-shadow: 0 20px 40px -10px rgba(107, 45, 135, 0.5);

    h3, p {
      color: white !important;
      opacity: 1;
    }

    button {
      border-color: white;
      color: white;
      background: rgba(255, 255, 255, 0.1);
      
      &:hover {
        background: white;
        color: var(--brand-color);
      }
    }
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--brand-color);
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    transition: color 0.3s;
    letter-spacing: -0.5px;
  }

  p {
    color: var(--foreground);
    opacity: 0.8;
    margin-bottom: 1.5rem;
    line-height: 1.5;
    font-size: 0.95rem;
    transition: color 0.3s;
  }

  button {
    background: var(--brand-secondary);
    color: white;
    border: none;
    padding: 0.8rem 2rem;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 50px;
    font-size: 0.85rem;
    letter-spacing: 1px;
    margin-top: auto;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
  }
`;

export const CardBack = styled(CardFace)`
  transform: rotateY(180deg);
  background: var(--brand-color);
  border: 1px solid var(--brand-color);
  justify-content: center;

  ${CardContent} {
    justify-content: center; 
    gap: 1rem;
    padding: 2.5rem; /* Increased padding */
  }

  h3 {
    font-size: 1.6rem; /* Slightly smaller to fit content */
    color: var(--background); 
    text-transform: uppercase;
    font-weight: 800;
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--background);
    font-size: 1rem;
    line-height: 1.6;
    opacity: 0.95;
    text-align: justify; /* Aligns text to both left and right edges */
    text-justify: inter-word;
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 260px; /* Large prominent image area */
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  
  img {
    transition: transform 0.5s ease;
  }

  ${CardWrapper}:hover & img {
    transform: scale(1.05);
  }
`;
