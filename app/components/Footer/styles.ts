import styled from "styled-components";

export const FooterSection = styled.footer`
  background: linear-gradient(to bottom, #111, #050505);
  color: white;
  padding: 6rem 10% 3rem;
  position: relative;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  overflow: hidden;

  /* Ambient Glow */
  &::before {
    content: '';
    position: absolute;
    top: -500px;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, var(--brand-color) 0%, transparent 70%);
    opacity: 0.1;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 4rem 5% 2rem;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  position: relative;
  z-index: 2;
`;

export const CTA = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  /* Shine effect */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent);
    transition: 0.5s;
    animation: shine 8s infinite linear;
  }

  @keyframes shine {
    0% { left: -100%; }
    20% { left: 100%; }
    100% { left: 100%; }
  }

  h2 {
    font-size: 2.8rem;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 1rem;
    font-family: 'Inter', sans-serif;
    background: linear-gradient(90deg, #fff, #bbb);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 2.5rem;
    max-width: 600px;
    margin-inline: auto;
  }

  button {
    background: var(--brand-color);
    color: white;
    border: none;
    padding: 1rem 3.5rem;
    font-size: 1rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 50px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);

    &:hover {
      background: white;
      color: var(--brand-color);
      transform: translateY(-2px);
      box-shadow: 0 15px 30px rgba(0,0,0,0.3);
    }
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  .contact-info {
    h4 {
      font-size: 1.8rem;
      font-weight: 900;
      letter-spacing: -1px;
      margin-bottom: 1.5rem;
      background: linear-gradient(45deg, var(--brand-color), var(--brand-secondary));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    p {
      color: rgba(255, 255, 255, 0.6);
      line-height: 1.8;
      font-size: 1rem;

      a {
        color: white;
        text-decoration: none;
        transition: color 0.3s;
        
        &:hover {
          color: var(--brand-color);
        }
      }
    }
  }

  .socials {
    display: flex;
    gap: 2rem;
    
    a {
      font-size: 1rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      position: relative;
      transition: color 0.3s;
      padding-bottom: 5px;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background: var(--brand-color);
        transition: width 0.3s;
      }

      &:hover {
        color: white;
        &::after {
          width: 100%;
        }
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
    text-align: center;
    align-items: center;
  }
`;
