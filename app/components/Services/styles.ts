import styled from "styled-components";
import { motion } from "framer-motion";

export const ServicesSection = styled.section`
  padding: 8rem 10%;
  background-color: var(--background);
  text-align: center;
`;

export const Header = styled.div`
  margin-bottom: 4rem;

  h2 {
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--brand-color); /* Teal */
    text-transform: uppercase;
    margin-bottom: 1rem;
    font-family: 'Inter', sans-serif;
  }

  p {
    font-size: 1.1rem;
    color: #666;
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

export const ServiceCard = styled(motion.div)`
  background: #f8f9fa; /* Light grey card bg */
  padding: 3rem 2rem;
  border-radius: 8px; /* Slight rounding, reference is quite boxy though */
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid transparent;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    border-color: var(--brand-color);
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--heading-color);
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  p {
    color: #555;
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  button {
    background: var(--brand-color);
    color: white;
    border: none;
    padding: 0.8rem 2rem;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
    transition: background 0.3s ease;
    border-radius: 4px;

    &:hover {
      background: #00A68A;
    }
  }
`;
