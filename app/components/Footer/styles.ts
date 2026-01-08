import styled from "styled-components";

export const FooterSection = styled.footer`
  background-color: #333; /* Dark Grey as per reference */
  color: white;
  padding: 5rem 10% 2rem;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const CTA = styled.div`
  text-align: center;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  padding-bottom: 4rem;

  h2 {
    font-size: 2.2rem;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
    font-family: 'Inter', sans-serif;
  }

  p {
    font-size: 1.1rem;
    opacity: 0.8;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-inline: auto;
  }

  button {
    background: white;
    color: #333;
    border: none;
    padding: 1rem 3rem;
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 4px;

    &:hover {
      background: var(--brand-color);
      color: white;
      transform: translateY(-2px);
    }
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  opacity: 0.6;

  .socials {
    display: flex;
    gap: 2rem;
    
    span {
      cursor: pointer;
      &:hover {
        color: var(--brand-color);
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;
