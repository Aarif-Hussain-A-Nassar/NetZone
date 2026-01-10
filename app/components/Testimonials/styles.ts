import styled from "styled-components";
import { motion } from "framer-motion";

export const TestimonialSection = styled.section`
  padding: 5rem 2rem;
  background: var(--background);
  position: relative;
  overflow: hidden;

  /* Background Glow Effects */
  &::before {
    content: '';
    position: absolute;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(162, 212, 61, 0.1) 0%, rgba(0, 0, 0, 0) 70%);
    top: -10%;
    right: -10%;
    z-index: 0;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(107, 45, 135, 0.1) 0%, rgba(0, 0, 0, 0) 70%);
    bottom: -10%;
    left: -10%;
    z-index: 0;
    pointer-events: none;
  }
`;

export const Header = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  z-index: 1;

  h2 {
    font-size: 3rem;
    font-weight: 800;
    background: var(--brand-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: -1px;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.1rem;
    color: var(--foreground);
    opacity: 0.8;
    max-width: 600px;
    margin: 0 auto;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Exactly 2 columns */
  gap: 2rem;
  max-width: 1000px; /* Reduced width for better 2-col look */
  margin: 0 auto;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`;

export const Card = styled(motion.div)`
  background: var(--card-bg); /* Uses theme variable */
  border: 1px solid var(--card-border);
  padding: 2.5rem;
  border-radius: 20px;
  position: relative;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);

  /* Hover Lift & Color Change */
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    border-color: var(--brand-purple);
    background: rgba(107, 45, 135, 0.05); /* Slight purple tint on hover */
  }

  /* Valid for 5 items: Center the 5th item */
  &:nth-child(5) {
    grid-column: 1 / -1;
    justify-self: center;
    max-width: 600px;
    width: 100%;
  }

  /* Quote Icon */
  &::after {
    content: '"';
    position: absolute;
    top: 1rem;
    right: 2rem;
    font-size: 6rem;
    font-family: serif;
    color: var(--brand-purple);
    opacity: 0.1;
    line-height: 1;
  }

  /* Dark mode specific override if needed */
  :global(.dark) & {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);

    &:hover {
      background: rgba(162, 212, 61, 0.05); /* Slight green tint on hover in dark mode */
      border-color: var(--brand-green);
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  .avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: linear-gradient(135deg, #ccc, #999);
    position: relative;
    overflow: hidden;
    border: 2px solid var(--brand-purple);
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .details {
    h4 {
      margin: 0;
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--foreground);
    }

    span {
      font-size: 0.9rem;
      color: var(--brand-secondary);
      font-weight: 500;
    }
  }
`;

export const ReviewText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--foreground);
  opacity: 0.9;
  font-style: italic;
  margin: 0;
`;
