"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "./styles";

const Navbar: React.FC = () => {
  const [isActive, setActive] = useState(false);
  const [isLight, setIsLight] = useState(true);

  // Toggle light/dark theme
  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.toggle("light");
    html.classList.toggle("dark");
    setIsLight(!isLight);
  };

  // Close menu on link click
  const closeMenu = () => {
    setActive(false);
  };

  // Default theme
  useEffect(() => {
    const html = document.documentElement;
    html.classList.add("light");
    setIsLight(true);
  }, []);

  return (
    <Container>
      {/* LOGO */}
      <motion.div
        className="logo"
        whileHover={{ scale: 1.05, rotate: 2 }}
        whileTap={{ scale: 0.95, rotate: -2 }}
        transition={{ type: "spring", stiffness: 250 }}
      >
        <Link href="#home">
          <h1>
            Next<span>Zone</span>
          </h1>
        </Link>
      </motion.div>

      {/* NAVIGATION + THEME TOGGLE + MENU */}
      <div className="right-section">
        {/* Navigation Links */}
        <nav className={isActive ? "active" : ""}>
          {["Home", "Services", "Projects", "Team", "Contact"].map(
            (item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, color: "#0070F3" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link href={`#${item.toLowerCase()}`} onClick={closeMenu}>
                  {item}
                </Link>
              </motion.div>
            )
          )}
        </nav>

        {/* Theme Toggle */}
        <motion.div
          className="theme-toggle"
          whileHover={{ scale: 1.1, rotate: -2 }}
          whileTap={{ scale: 0.9, rotate: 2 }}
        >
          <input
            type="checkbox"
            id="switch"
            checked={isLight}
            onChange={toggleTheme}
          />
          <label htmlFor="switch" />
        </motion.div>

        {/* Hamburger Menu */}
        <div
          className={isActive ? "menu active" : "menu"}
          onClick={() => setActive(!isActive)}
        />
      </div>
    </Container>
  );
};

export default Navbar;
