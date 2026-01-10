import styled from "styled-components";

export const ContactSection = styled.section`
  padding: 6rem 10%;
  background: var(--background);
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s, color 0.3s;
`;

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, var(--brand-purple) 0%, var(--brand-green) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const FormCard = styled.form`
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 10px 40px -10px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  /* Neon border accent top */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, var(--neon-cyan), var(--neon-purple));
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--foreground);
    opacity: 0.8;
    margin-left: 5px;
  }
`;

export const Input = styled.input`
  padding: 1rem 1.5rem;
  border-radius: 12px;
  border: 1px solid var(--card-border);
  background: var(--background);
  color: var(--foreground);
  font-size: 1rem;
  outline: none;
  transition: all 0.3s;
  font-family: inherit;

  &:focus {
    border-color: var(--brand-purple);
    box-shadow: 0 0 0 3px rgba(107, 45, 135, 0.1);
  }
`;

export const TextArea = styled.textarea`
  padding: 1rem 1.5rem;
  border-radius: 12px;
  border: 1px solid var(--card-border);
  background: var(--background);
  color: var(--foreground);
  font-size: 1rem;
  outline: none;
  transition: all 0.3s;
  font-family: inherit;
  resize: vertical;
  min-height: 120px;

  &:focus {
    border-color: var(--brand-purple);
    box-shadow: 0 0 0 3px rgba(107, 45, 135, 0.1);
  }
`;

export const SubmitButton = styled.button`
  margin-top: 1rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--brand-purple) 0%, #8e44ad 100%);
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 4px 15px rgba(107, 45, 135, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(107, 45, 135, 0.4);
    filter: brightness(1.1);
  }

  &:active {
    transform: translateY(1px);
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;
