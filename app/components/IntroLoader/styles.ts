import styled from "styled-components";

export const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  z-index: 99999; /* Highest priority */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  /* Ensure 3D transform context for smooth zooming */
  transform-style: preserve-3d;
  perspective: 1000px;
`;

export const LoadingText = styled.h1`
  font-size: 8rem;
  font-weight: 900;
  font-family: 'Inter', sans-serif;
  letter-spacing: -4px;
  margin: 0;
  position: relative;
  
  /* Outline / Initial State */
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.05); /* Faint fill */
  
  @media (max-width: 768px) {
    font-size: 3.5rem;
    letter-spacing: -2px;
  }
`;

export const FilledText = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  /* The gradient that fills - matching Brand Identity */
  background: linear-gradient(
    to right,
    var(--brand-purple), 
    var(--brand-green)
  );
  background-size: 100% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 0;
  
  /* Initial state handled by GSAP */
  clip-path: inset(100% 0 0 0); 
`;

export const TagLine = styled.p`
  font-size: 1.2rem;
  letter-spacing: 0.5em;
  text-transform: uppercase;
  color: #fff;
  opacity: 0; /* Initial state handled by GSAP */
  margin-top: 1rem;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    letter-spacing: 0.3em;
  }
`;
