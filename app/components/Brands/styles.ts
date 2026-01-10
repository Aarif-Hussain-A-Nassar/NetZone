import styled, { keyframes } from "styled-components";

const scrollLeftToRight = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
`;

export const BrandsSection = styled.section`
  padding: 4rem 0;
  background: var(--background);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--glass-border);
  border-bottom: 1px solid var(--glass-border);
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  background: var(--brand-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  letter-spacing: -0.02em;
`;

export const MarqueeContainer = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  
  /* Gradient Masks for smooth fade edges */
  &::before, &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 150px;
    height: 100%;
    z-index: 2;
    pointer-events: none;
  }
  
  &::before {
    left: 0;
    background: linear-gradient(to right, var(--background), transparent);
  }
  
  &::after {
    right: 0;
    background: linear-gradient(to left, var(--background), transparent);
  }
`;

export const Track = styled.div`
  display: inline-flex;
  gap: 2rem;
  animation: ${scrollLeftToRight} 60s linear infinite;
  
  /* Pause on hover */
  &:hover {
    animation-play-state: paused;
  }
  
  @media (max-width: 768px) {
    animation-duration: 40s;
    gap: 1rem;
  }
`;

export const BrandItem = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--foreground);
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  padding: 1.5rem 2.5rem;
  border-radius: 1rem;
  min-width: 200px;
  
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  user-select: none;
  
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  
  /* Card Shadow */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 
              0 2px 4px -1px rgba(0, 0, 0, 0.06);

  &:hover {
    color: var(--brand-purple);
    border-color: var(--brand-purple);
    background: var(--background);
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 
                0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`;
