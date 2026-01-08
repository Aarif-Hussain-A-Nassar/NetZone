import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.header)`
  position: fixed;
  top: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 1000px;
  padding: 0.8rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;

  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 999px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);

  transition: all 0.3s ease;

  &.scrolled {
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    padding: 0.6rem 1.5rem;
  }

  /* Dark mode handling if class exists on parent or variables update */
  /* Assuming global CSS sets these vars for dark mode */

  .logo {
    h1 {
      font-size: 1.5rem;
      font-weight: 800;
      margin: 0;
      color: var(--heading-color, #1a1a1a);
      letter-spacing: -0.5px;
      cursor: pointer;

      span {
        color: var(--brand-color, #0070f3);
      }
    }
  }

  .desktop-nav {
    display: flex;
    gap: 0.5rem;
    
    @media (max-width: 860px) {
      display: none;
    }

    .nav-link {
      position: relative;
      padding: 0.5rem 1rem;
      color: var(--heading-color, #1a1a1a);
      font-weight: 500;
      font-size: 0.95rem;
      text-decoration: none;
      z-index: 1;
      transition: color 0.3s;

      &:hover {
        color: #0070f3;
      }

      span {
        position: relative;
        z-index: 2;
      }

      .hover-bg {
        position: absolute;
        inset: 0;
        background: rgba(0, 112, 243, 0.08);
        border-radius: 99px;
        z-index: 1;
      }
    }
  }

  .right-section {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .theme-toggle {
    width: 52px;
    height: 28px;
    background: #e2e8f0; 
    border-radius: 50px;
    display: flex;
    align-items: center;
    padding: 2px;
    cursor: pointer;
    position: relative;
    border: 1px solid rgba(0,0,0,0.05);

    .toggle-handle {
      width: 22px;
      height: 22px;
      background: white;
      border-radius: 50%;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
  }

  /* When dark mode is active, adjust toggle style if needed */
  /* This relies on logic inside the component passing filtered props or simple css inheritance */

  .menu-trigger {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    cursor: pointer;
    width: 30px;
    height: 30px;

    @media (max-width: 860px) {
      display: flex;
    }

    .bar {
      width: 100%;
      height: 2px;
      background: var(--heading-color, #1a1a1a);
      border-radius: 2px;
      transition: all 0.3s ease-in-out;
      transform-origin: center;
    }

    &.active {
      .bar-1 { transform: translateY(8px) rotate(45deg); }
      .bar-2 { opacity: 0; }
      .bar-3 { transform: translateY(-8px) rotate(-45deg); }
    }
  }
`;

export const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 5.5rem;
  left: 5%; 
  width: 90%;
  z-index: 999;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 24px;
  border: 1px solid rgba(255,255,255,0.4);
  box-shadow: 0 20px 50px rgba(0,0,0,0.1);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  overflow: hidden;

  a {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--heading-color, #1a1a1a);
    text-decoration: none;
    width: 100%;
    text-align: center;
    padding: 0.8rem;
    border-radius: 12px;
    transition: background 0.2s;

    &:hover {
      background: rgba(0,0,0,0.03);
      color: #0070f3;
    }
  }
`;
