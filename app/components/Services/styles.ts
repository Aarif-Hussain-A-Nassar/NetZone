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
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const CardWrapper = styled(motion.div)`
  perspective: 1000px;
  height: 100%;
  min-height: 400px;
  cursor: pointer;
  z-index: 1;

  @media (max-width: 900px) {
    position: sticky;
    top: 20vh;
    margin-bottom: 25vh; /* Large margin to allow scrolling time before next card covers */
    height: auto;
    min-height: 400px; /* Ensure cards are tall enough to cover */
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
  border-radius: 16px;
  padding: 3rem 2rem;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.05);
  
  transition: all 0.3s ease;

  @media (max-width: 900px) {
      /* Ensure full opacity on mobile to cover stacked cards */
      background: #050511; /* Or use a solid version of var(--card-bg) */
      backdrop-filter: none;
      border: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

export const CardFront = styled(CardFace)`
  background: var(--card-bg); /* Explicit resting background */
  
  &:hover {
    background: var(--brand-color); /* Purple on Hover */
    border-color: var(--brand-color);
    box-shadow: 0 15px 40px rgba(107, 45, 135, 0.3);

    h3, p {
      color: white !important;
      opacity: 1;
    }

    button {
      border-color: white;
      color: white;
      
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
    margin-bottom: 1rem;
    text-transform: uppercase;
    transition: color 0.3s;
  }

  p {
    color: var(--foreground);
    opacity: 0.8;
    margin-bottom: 2rem;
    line-height: 1.6;
    transition: color 0.3s;
  }

  button {
    background: transparent;
    color: var(--brand-secondary);
    border: 1px solid var(--brand-secondary);
    padding: 0.8rem 2rem;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 4px;

    &:hover {
      background: var(--brand-secondary);
      color: white;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
  }
`;

export const CardBack = styled(CardFace)`
  transform: rotateY(180deg);
  background: var(--brand-color);
  border: 1px solid var(--brand-color);

  h3 {
    font-size: 1.8rem;
    color: var(--background); /* Invert for back face if background is brand color */
    text-transform: uppercase;
    font-weight: 800;
    margin-bottom: 1rem;
  }

  p {
    color: var(--background);
    font-size: 1rem;
    line-height: 1.5;
    opacity: 0.9;
  }
`;

