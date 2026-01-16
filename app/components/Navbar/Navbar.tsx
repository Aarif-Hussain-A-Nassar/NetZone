"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Container, MobileMenu } from "./styles";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Toggle light/dark theme
  const toggleTheme = () => {
    const html = document.documentElement;
    if (isLight) {
      html.classList.remove("light");
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
    }
    setIsLight(!isLight);
  };

  // Close menu on link click
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Check initial scroll
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Default theme initialization
  useEffect(() => {
    const html = document.documentElement;
    if (!html.classList.contains("dark") && !html.classList.contains("light")) {
      html.classList.add("light");
    }
  }, []);

  return (
    <>
      <Container
        $isLight={isLight}
        className={scrolled ? "scrolled" : ""}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
      >
        {/* LOGO */}
        <motion.div
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="#home">
            <Image 
              src={isLight ? "/logo-light.png" : "/logo-dark.png"} 
              alt="NetZone Logo" 
              width={140} 
              height={50}
              priority
              style={{ width: 'auto', height: '40px', objectFit: 'contain' }}
            />
          </Link>
        </motion.div>

        {/* DESKTOP NAV */}
        <nav className="desktop-nav">
          {navItems.map((item, i) => (
            <Link
              key={item.name}
              href={item.href}
              className="nav-link"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === i && (
                <motion.div
                  className="hover-bg"
                  layoutId="hover-bg"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* RIGHT SECTION */}
        <div className="right-section">
          {/* Call Us Now Button */}
          <Link href="tel:+91 9633 292 607" style={{ textDecoration: 'none' }}>
            <motion.button
              className="call-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Call Us Now
            </motion.button>
          </Link>

          {/* Theme Toggle */}
          <motion.div
            className="theme-toggle"
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <motion.div
              className="toggle-handle"
              animate={{ x: isLight ? 0 : 24 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </motion.div>

          {/* Hamburger Menu Trigger */}
          <div
            className={`menu-trigger ${isMobileMenuOpen ? "active" : ""}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="bar bar-1" />
            <div className="bar bar-2" />
            <div className="bar bar-3" />
          </div>
        </div>
      </Container>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, type: "spring", bounce: 0.2 }}
          >
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} onClick={closeMenu}>
                {item.name}
              </Link>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
