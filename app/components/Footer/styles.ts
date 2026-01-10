import styled from "styled-components";

export const FooterSection = styled.footer`
  background: var(--background);
  color: var(--foreground);
  padding: 6rem 10% 3rem;
  position: relative;
  border-top: 1px solid var(--glass-border);
  overflow: hidden;
  transition: background-color 0.3s ease, color 0.3s ease;

  /* Ambient Glow */
  &::before {
    content: '';
    position: absolute;
    top: -500px;
    left: 50%;
    transform: translateX(-50%);
    width: 800px;
    height: 800px;
    background: radial-gradient(circle, rgba(0, 243, 255, 0.1) 0%, transparent 70%);
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
  background: var(--card-bg);
  backdrop-filter: blur(20px);
  border: 1px solid var(--card-border);
  border-radius: 24px;
  box-shadow: var(--glass-shadow);
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
    background: linear-gradient(90deg, var(--foreground), #888);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.2rem;
    color: var(--foreground);
    opacity: 0.8;
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
      background: var(--foreground);
      color: var(--background);
      transform: translateY(-2px);
      box-shadow: 0 0 40px rgba(0, 243, 255, 0.8);
    }
  }
`;

export const Links = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  align-items: center;
  padding-top: 3rem;
  border-top: 1px solid var(--glass-border);
  
  .contact-info {
    h4 {
      font-size: 2rem;
      font-weight: 900;
      letter-spacing: -1px;
      margin-bottom: 2rem;
      color: var(--foreground);
      text-shadow: 0 0 10px rgba(128,128,128,0.1);
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
    align-items: center;
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
  position: relative;
  margin-top: 2rem;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    /* Invert map in dark mode only? For now keep dynamic adjustment if possible, or static */
    filter: invert(90%) hue-rotate(180deg) contrast(90%); 
    transition: filter 0.3s;

    &:hover {
      filter: invert(0%) hue-rotate(0deg) contrast(100%);
    }
  }
  
  /* Reset filter in light mode via body class check if possible, or specific override */
  :global(.light) & iframe {
     filter: none;
  }
`;

export const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--foreground);
  opacity: 0.8;
  font-size: 1rem;
  line-height: 1.6;

  svg {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    color: var(--brand-secondary);
  }

  a, span {
    color: var(--foreground);
    text-decoration: none;
    transition: color 0.3s;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      color: var(--neon-cyan);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    text-align: left;
  }
`;

export const DeveloperCredit = styled.a`
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 9999; /* Ensure it stays on top */
  
  background: var(--foreground);
  color: var(--background);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  
  display: flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.75rem;
  font-family: 'Inter', sans-serif;
  
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s, background-color 0.3s, color 0.3s;

  span {
    color: inherit;
    opacity: 0.7;
    font-weight: 500;
  }

  strong {
    background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 800;
  }

  svg {
    width: 16px;
    height: 16px;
    color: #E1306C;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  }
`;
