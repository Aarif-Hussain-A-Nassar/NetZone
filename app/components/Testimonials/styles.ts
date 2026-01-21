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
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  padding: 3rem;
  border-radius: 1.5rem;
  position: relative;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  box-shadow: var(--card-shadow);
  overflow: hidden;

  /* Premium Hover Effect */
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px -10px rgba(0,0,0,0.15);
    border-color: var(--brand-purple);

    &::after {
      color: var(--brand-purple);
      opacity: 0.15;
      transform: translateY(-5px) scale(1.1);
    }
  }

  /* Valid for 5 items: Center the 5th item */
  &:nth-child(5) {
    grid-column: 1 / -1;
    justify-self: center;
    max-width: 600px;
    width: 100%;
  }

  /* Large Quote Watermark */
  &::after {
    content: '"';
    position: absolute;
    top: 1rem;
    right: 2rem;
    font-size: 8rem;
    font-family: serif;
    color: var(--foreground);
    opacity: 0.05;
    line-height: 1;
    transition: all 0.4s ease;
    pointer-events: none;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--card-border);
  padding-bottom: 1.5rem;

  .avatar {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: linear-gradient(135deg, #e5e5e5, #f5f5f5);
    position: relative;
    overflow: hidden;
    border: 3px solid #fff;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .details {
    h4 {
      margin: 0;
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--foreground);
      margin-bottom: 0.2rem;
    }

    span {
      display: block;
      font-size: 0.9rem;
      color: var(--brand-secondary);
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  }
`;

export const ReviewText = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--foreground);
  opacity: 0.8;
  margin: 0;
  font-family: 'Inter', sans-serif;

  .project-highlight {
    font-weight: 700;
    font-style: normal;
    color: var(--brand-purple);
    display: inline-block;
    margin-bottom: 1rem;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    background: rgba(107, 45, 135, 0.05); /* very light purple bg */
    padding: 0.4rem 1rem;
    border-radius: 50px;
    border: 1px solid rgba(107, 45, 135, 0.1);
  }
  
  .feedback-text {
    display: block;
    margin-top: 0.5rem;
    font-style: italic;
  }
`;
