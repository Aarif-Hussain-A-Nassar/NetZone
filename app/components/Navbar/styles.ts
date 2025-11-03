import styled from "styled-components";


export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 10rem;
  background-color: var(--card-bg);
  backdrop-filter: blur(6px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;
  transition: background-color 0.5s ease;

  .logo {
    h1 {
      font-size: 1.8rem;
      font-weight: 700;
      color: var(--heading-color);
      letter-spacing: 1px;
      cursor: pointer;

      span {
        color: var(--brand-color, #0070f3);
      }
    }
  }

  .right-section {
    display: flex;
    align-items: center;
    gap: 1.8rem;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 1.8rem;

    a {
      color: var(--heading-color);
      font-family: "Red Hat Display", sans-serif;
      font-weight: 500;
      text-transform: uppercase;
      transition: color 0.3s ease, filter 0.3s ease;

      &:hover {
        color: var(--brand-color, #0070f3);
        filter: brightness(1.2);
      }
    }
  }

  /* Theme toggle */
  .theme-toggle {
    display: flex;
    align-items: center;
  }

  input[type="checkbox"] {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  label {
    cursor: pointer;
    width: 55px;
    height: 30px;
    background: var(--brand-color, #0070f3);
    display: block;
    border-radius: 100px;
    position: relative;
  }

  label:after {
    content: "";
    background: #fff;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    top: 5px;
    left: 4px;
    transition: transform 0.32s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }

  input:checked + label {
    background: var(--heading-color);
  }

  input:checked + label:after {
    transform: translateX(100%);
  }

  /* Hamburger menu */
  .menu {
    width: 2rem;
    height: 0.2rem;
    position: relative;
    cursor: pointer;
    display: none;
    background-color: var(--heading-color);
    transition: all 0.3s ease;
  }

  .menu::before,
  .menu::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.2rem;
    background-color: var(--heading-color);
    transition: all 0.3s ease;
  }

  .menu::before {
    top: -0.6rem;
  }

  .menu::after {
    top: 0.6rem;
  }

  .menu.active {
    background-color: transparent;
  }

  .menu.active::before {
    transform: rotate(45deg);
    top: 0;
  }

  .menu.active::after {
    transform: rotate(-45deg);
    top: 0;
  }

  /* Responsive */
  @media (max-width: 960px) {
    padding: 1.8rem 3rem;

    .menu {
      display: block;
      z-index: 10000;
    }

    nav {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: fixed;
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      background-color: var(--card-bg);
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.25s;
      z-index: 9999;

      &.active {
        opacity: 1;
        visibility: visible;
      }

      a {
        font-size: 1.5rem;
        padding: 1rem 0;
      }
    }

    .theme-toggle {
      order: 1;
    }
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1.5rem;

    nav a {
      font-size: 1.2rem;
    }

    label {
      width: 50px;
      height: 28px;
    }

    label:after {
      width: 18px;
      height: 18px;
      top: 5px;
      left: 4px;
    }
  }
`;
