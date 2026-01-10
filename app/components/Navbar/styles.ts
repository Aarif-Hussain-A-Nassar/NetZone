import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.header) <{ $isLight: boolean }>`
  position: fixed;
  top: 20px; /* Floating effect */
  left: 50%;
  transform: translateX(-50%) !important; /* Force center for fixed element */
  width: 90%;
  max-width: 1400px;
  padding: 0.8rem 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  border-radius: 16px;

  /* Theme Logic based on Prop */
  background: ${props => props.$isLight ? '#ffffff' : '#000000'};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid ${props => props.$isLight ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)'};
  box-shadow: ${props => props.$isLight ? '0 4px 20px rgba(0, 0, 0, 0.05)' : '0 4px 20px rgba(0, 0, 0, 0.5)'};

  transition: all 0.3s ease;

  &.scrolled {
    width: 95%;
    top: 10px;
    background: ${props => props.$isLight ? '#ffffff' : '#000000'};
    backdrop-filter: blur(20px);
    border-color: ${props => props.$isLight ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)'};
    box-shadow: ${props => props.$isLight ? '0 10px 30px rgba(0, 0, 0, 0.1)' : '0 10px 30px rgba(0, 0, 0, 0.5)'};
  }

  @media (max-width: 768px) {
    width: 95%;
    top: 10px;
    padding: 0.8rem 1.5rem;
  }

  .logo {
    display: flex;
    align-items: center;
    overflow: hidden; /* For cropping adjustment */
    
    img {
      display: block;
      /* Remove all blend modes to ensure consistent visibility */
      mix-blend-mode: normal !important;
      
      /* Visual trimming/cropping of the logo image by scaling it up */
      /* This zooms in to cut off the excess background padding in the image file */
      transform: scale(1.3); 
    }

    /* Dark Mode styling */
    :global(.dark) & img {
      mix-blend-mode: normal !important;
      filter: none;
    }

    h1 {
      font-size: 1.5rem;
      font-weight: 800;
      font-weight: 800;
      font-weight: 800;
      margin: 0;
      color: ${props => props.$isLight ? 'var(--foreground)' : '#ffffff'};
      letter-spacing: -1px;
      text-transform: uppercase;
      font-family: 'Inter', sans-serif;
      cursor: pointer;
      line-height: 1;

      span {
        background: var(--brand-gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-shadow: none;
      }
    }
  }

  .call-btn {
    background: var(--brand-purple); /* Solid fallback */
    background: var(--brand-gradient);
    color: white !important; /* Force white text */
    border: none;
    padding: 0.7rem 1.4rem; /* Slightly larger */
    border-radius: 8px;
    font-weight: 700;
    font-size: 0.9rem;
    cursor: pointer;
    text-transform: uppercase;
    box-shadow: 0 4px 15px rgba(107, 45, 135, 0.4);
    white-space: nowrap;
    opacity: 1; 
    display: inline-flex; /* Explicit display */
    align-items: center;
    justify-content: center;
    z-index: 1005; /* High Z-index */
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(107, 45, 135, 0.5);
    }

    /* Only hide on mobile if strictly needed, but user said 'not visible' which implies usually desktop too */
    @media (max-width: 600px) {
      display: none; 
    }
  }

  .desktop-nav {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    @media (max-width: 900px) {
      display: none;
    }

    .nav-link {
      position: relative;
      color: ${props => props.$isLight ? 'var(--foreground)' : '#ffffff'};
      font-weight: 600;
      font-size: 0.9rem;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      transition: color 0.3s;
      padding: 0.6rem 1.2rem;
      border-radius: 8px;
      z-index: 1;

      /* Hover color change removed as requested */
      /* Hover color change removed as requested */
      /* Hover effects based on theme */
      &:hover {
        color: ${props => props.$isLight ? 'var(--brand-purple)' : '#ffffff'} !important;
      }

      .hover-bg {
        position: absolute;
        inset: 0;
        background: transparent; /* User requested no background change on hover */
        border-radius: 8px;
        z-index: -1;
        border: none;
      }
    }
  }

  .right-section {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .theme-toggle {
    width: 48px;
    height: 26px;
    background: ${props => props.$isLight ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.1)'};
    border-radius: 50px;
    display: flex;
    align-items: center;
    padding: 2px;
    cursor: pointer;
    border: 1px solid ${props => props.$isLight ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.2)'};

    .toggle-handle {
      width: 20px;
      height: 20px;
      background: var(--brand-secondary);
      border-radius: 50%;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
  }

  .menu-trigger {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    cursor: pointer;
    width: 28px;
    height: 28px;
    z-index: 1002;

    @media (max-width: 900px) {
      display: flex;
    }

    .bar {
      width: 100%;
      height: 2px;
      background: ${props => props.$isLight ? 'var(--foreground)' : '#ffffff'};
      border-radius: 3px;
      transition: all 0.3s ease;
      box-shadow: ${props => props.$isLight ? 'none' : '0 0 5px rgba(255, 255, 255, 0.5)'};
    }

    &.active {
      .bar-1 { transform: translateY(7px) rotate(45deg); }
      .bar-2 { opacity: 0; }
      .bar-3 { transform: translateY(-7px) rotate(-45deg); }
    }
  }
`;

export const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0; 
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background: rgba(3, 0, 20, 0.95);
  backdrop-filter: blur(20px);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  a {
    font-size: 2rem;
    font-weight: 800;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: all 0.2s;
    background: linear-gradient(to right, #fff, #aaa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    &:hover {
      background: linear-gradient(to right, var(--neon-cyan), var(--neon-purple));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      transform: scale(1.1);
    }
  }
`;
