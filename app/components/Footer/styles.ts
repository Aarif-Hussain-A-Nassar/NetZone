import styled from "styled-components";

export const FooterSection = styled.footer`
  background: black;
  color: white;
  padding: 6rem 10% 3rem;
  position: relative;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;

  /* Ambient Glow */
  &::before {
    content: '';
    position: absolute;
    top: -500px;
    left: 50%;
    transform: translateX(-50%);
    width: 800px;
    height: 800px;
    background: radial-gradient(circle, rgba(0, 243, 255, 0.15) 0%, transparent 70%);
    pointer-events: none;
    z-index: 1;
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
  padding: 5rem 2rem;
  background: rgba(10, 10, 30, 0.5);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
  position: relative;
  overflow: hidden;

  /* Neon pulse border */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 24px;
    padding: 2px;
    background: linear-gradient(45deg, var(--neon-cyan), transparent, var(--neon-purple), transparent);
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  h2 {
    font-size: 3rem;
    font-weight: 900;
    text-transform: uppercase;
    margin-bottom: 1rem;
    font-family: 'Inter', sans-serif;
    background: linear-gradient(90deg, #fff, #888);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.2rem;
    color: #ccc;
    margin-bottom: 2.5rem;
    max-width: 600px;
    margin-inline: auto;
  }

  button {
    background: var(--neon-cyan);
    color: black;
    border: none;
    padding: 1rem 3.5rem;
    font-size: 1rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 50px;
    box-shadow: 0 0 20px rgba(0, 243, 255, 0.4);

    &:hover {
      background: white;
      color: black;
      transform: translateY(-2px);
      box-shadow: 0 0 40px rgba(0, 243, 255, 0.8);
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
      font-size: 2rem;
      font-weight: 900;
      letter-spacing: -1px;
      margin-bottom: 1.5rem;
      color: white;
      text-shadow: 0 0 10px rgba(255,255,255,0.3);
    }

    p {
      color: #aaa;
      line-height: 1.8;
      font-size: 1rem;

      a {
        color: white;
        text-decoration: none;
        transition: color 0.3s;
        
        &:hover {
          color: var(--neon-cyan);
          text-shadow: 0 0 10px var(--neon-cyan);
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
      color: #aaa;
      text-decoration: none;
      position: relative;
      transition: all 0.3s;
      padding-bottom: 5px;

      &:hover {
        color: var(--neon-cyan);
        text-shadow: 0 0 10px var(--neon-cyan);
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
