import styled from "styled-components";
import { motion } from "framer-motion";

export const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  min-height: 700px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 10%;
  
  /* Placeholder Background Image - Replace with actual asset */
  background: url('https://images.unsplash.com/photo-1558002038-1091a1661116?q=80&w=2070&auto=format&fit=crop') no-repeat center center/cover;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4); /* Dark overlay for text readability */
  z-index: 1;
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
  color: white;
  max-width: 600px;
  margin-bottom: 100px; /* Space for the cards */

  h1 {
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    font-family: 'Inter', sans-serif;
    text-transform: uppercase;

    span {
      color: var(--brand-color);
    }

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
`;

export const InfoCards = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  z-index: 3;
  box-shadow: 0 10px 40px rgba(0,0,0,0.1);

  @media (max-width: 900px) {
    position: relative;
    transform: none;
    left: auto;
    width: 100%;
    grid-template-columns: 1fr;
    bottom: auto;
    margin-top: 2rem;
  }
`;

export const Card = styled(motion.div)`
  background: var(--brand-color); /* Teal from globals */
  color: white;
  padding: 3rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border-right: 1px solid rgba(255,255,255,0.1);
  transition: background 0.3s ease;
  cursor: pointer;

  &:last-child {
    border-right: none;
  }

  &:hover {
    background: #00A68A;
  }

  .icon {
    font-size: 3rem;
    margin-bottom: 0.5rem;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.5;
    opacity: 0.9;
    max-width: 250px;
  }
`;
