import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const rotate = keyframes`
  0% { transform: rotateX(0deg) rotateY(0deg); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
`;

export const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8rem 10% 4rem; /* Increased padding */
  box-sizing: border-box;
  overflow: hidden;
  gap: 4rem;
  background: var(--background);

  /* Subtle gradient mesh for 'modern' feel */
  background-image: 
    radial-gradient(circle at 15% 50%, rgba(0, 86, 179, 0.05) 0%, transparent 25%),
    radial-gradient(circle at 85% 30%, rgba(107, 45, 135, 0.05) 0%, transparent 25%);

  @media (max-width: 968px) {
    padding: 6rem 5% 4rem;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: 
    linear-gradient(to bottom, transparent 80%, var(--background) 100%),
    url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  z-index: 1;
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  z-index: 2;

  @media (max-width: 968px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;

export const Content = styled.div`
  color: var(--foreground);
  max-width: 800px; /* Increased width */

  h1 {
    font-size: 7rem;
    font-weight: 900;
    line-height: 0.9;
    margin-bottom: 0;
    font-family: 'Inter', sans-serif;
    letter-spacing: -4px;
    
    /* Gradient on the Name */
    background: var(--brand-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
    span {
      display: block;
      font-size: 1.5rem;
      letter-spacing: 0.2em; /* Wide spacing for premium feel */
      font-weight: 500;
      color: var(--foreground);
      margin-top: 1.5rem;
      
      /* Reset gradient text fill for the tagline to be solid color */
      background: none;
      -webkit-text-fill-color: var(--foreground);
      opacity: 0.8;
      text-transform: uppercase;
    }

    @media (max-width: 768px) {
      font-size: 3.5rem;
      
      span {
        font-size: 1rem;
        letter-spacing: 0.15em;
        margin-top: 1rem;
      }
    }
  }
`;

export const ThreeDContainer = styled(motion.div)`
  position: relative;
  width: 300px;
  height: 300px;
  perspective: 1000px;
  cursor: grab;
  
  &:active {
    cursor: grabbing;
  }
  
  @media (max-width: 968px) {
    display: flex; /* Show on mobile but scaled down if needed, or keep hidden if requested. User asked for touch interaction so likely wants it shown. */
    transform: scale(0.8);
    margin: 2rem auto;
  }

  .cube {
    width: 200px;
    height: 200px;
    position: relative;
    transform-style: preserve-3d;
    /* Animation handled by Framer Motion in TSX now */
    margin: 50px auto;
  }

  .face {
    position: absolute;
    width: 200px;
    height: 200px;
    background: rgba(255, 255, 255, 0.95);
    border: 2px solid var(--brand-purple); /* Brand Purple Border */
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 800;
    color: var(--brand-purple); /* Brand Purple Text */
    box-shadow: 0 4px 15px rgba(107, 45, 135, 0.2);
    user-select: none;
    backface-visibility: hidden;
    opacity: 0.95;
  }

  .front  { transform: rotateY(0deg) translateZ(100px); }
  .back   { transform: rotateY(180deg) translateZ(100px); }
  .right  { transform: rotateY(90deg) translateZ(100px); }
  .left   { transform: rotateY(-90deg) translateZ(100px); }
  .top    { transform: rotateX(90deg) translateZ(100px); }
  .bottom { transform: rotateX(-90deg) translateZ(100px); }
`;

export const InfoCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  z-index: 10;
  position: relative; /* Normal flow */

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled(motion.div)`
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  color: var(--foreground);
  padding: 2rem;
  border-radius: 16px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all 0.3s ease;
  overflow: hidden;
  position: relative;
  z-index: 2;

  &:hover {
    transform: translateY(-8px);
    background: var(--brand-color); /* Turns Purple on Hover */
    border-color: var(--brand-color);
    box-shadow: 0 15px 30px rgba(107, 45, 135, 0.25);
    
    h3, p, .icon {
      color: white !important;
      opacity: 1;
    }
  }

  .icon {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    transition: color 0.3s;
    color: var(--brand-secondary);
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--brand-color);
    margin: 0;
    transition: color 0.3s;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.6;
    color: var(--foreground);
    opacity: 0.8;
    transition: color 0.3s;
  }
`;
