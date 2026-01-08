import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.2rem 10%;
  box-sizing: border-box; /* Fix for 100% + padding overflow */
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;

  /* Reference Style: Clean, Professional, Full Width */
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0,0,0,0.05);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);

  transition: all 0.3s ease;

  &.scrolled {
    padding: 0.8rem 5%;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  }

  .logo {
    display: flex;
    align-items: center;
    
    h1 {
      font-size: 1.6rem;
      font-weight: 800;
      margin: 0;
      color: #1a1a1a; /* Always dark for readability on white */
      letter-spacing: -1px;
      text-transform: uppercase;
      font-family: 'Inter', sans-serif;
      cursor: pointer;
      line-height: 1;

      span {
        color: var(--brand-color);
      }
    }
  }

  .desktop-nav {
    display: flex;
    align-items: center;
    gap: 2rem;
    
    @media (max-width: 900px) {
      display: none;
    }

    .nav-link {
      position: relative;
      color: #333;
      font-weight: 700;
      font-size: 0.9rem;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      transition: color 0.3s;
      padding: 0.5rem 0;

      &:hover {
        color: var(--brand-color);
      }

      /* Animated underscore */
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background: var(--brand-color);
        transition: width 0.3s ease;
      }

      &:hover::after {
        width: 100%;
      }

      /* Special CTA Style for the last item (Contact) */
      &:last-child {
        background: var(--brand-color);
        color: white;
        padding: 0.6rem 1.8rem;
        border-radius: 4px;
        transition: all 0.3s ease;
        
        &::after {
          display: none;
        }

        &:hover {
          background: #00A68A; /* Slightly darker teal */
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 201, 167, 0.3);
        }
      }
    }
  }

  .right-section {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  /* Simplified Toggle for Corporate Look */
  .theme-toggle {
    width: 48px;
    height: 26px;
    background: #e2e8f0; 
    border-radius: 50px;
    display: flex;
    align-items: center;
    padding: 2px;
    cursor: pointer;
    border: 1px solid rgba(0,0,0,0.05);

    .toggle-handle {
      width: 20px;
      height: 20px;
      background: white;
      border-radius: 50%;
      box-shadow: 0 1px 3px rgba(0,0,0,0.2);
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

    @media (max-width: 900px) {
      display: flex;
    }

    .bar {
      width: 100%;
      height: 3px;
      background: #1a1a1a;
      border-radius: 3px;
      transition: all 0.3s ease;
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
  top: 0;
  left: 0; 
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  a {
    font-size: 1.5rem;
    font-weight: 800;
    color: #1a1a1a;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: color 0.2s;

    &:hover {
      color: var(--brand-color);
    }

    /* Mobile CTA */
    &:last-child {
      background: var(--brand-color);
      color: white;
      padding: 1rem 3rem;
      border-radius: 5px;
    }
  }
`;
