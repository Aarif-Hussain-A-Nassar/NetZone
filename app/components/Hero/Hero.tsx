"use client";

import { motion } from "framer-motion";
import { HeroSection, Overlay, Content, InfoCards, Card, ThreeDContainer, TopSection } from "./styles";

const Hero = () => {
  return (
    <HeroSection id="home">
      <Overlay />
      <TopSection>
        <Content>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            NETZONE
            <span>THE COMPLETE SOLUTION</span>
          </motion.h1>
        </Content>

        <ThreeDContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <motion.div
            className="cube"
            // Auto-rotate when not hovered.
            // When hovered, 'animate' is disabled (false), and 'style' takes over.
            animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="face front">NETZONE</div>
            <div className="face back">NETZONE</div>
            <div className="face right">NETZONE</div>
            <div className="face left">NETZONE</div>
            <div className="face top">NETZONE</div>
            <div className="face bottom">NETZONE</div>
          </motion.div>
        </ThreeDContainer>
      </TopSection>

      <InfoCards>
        <Card
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="icon">📹</div>
          <h3>CCTV & AI</h3>
          <p>Next-gen surveillance with predictive analysis.</p>
        </Card>

        <Card
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="icon">🌐</div>
          <h3>HYPER-NET</h3>
          <p>Ultra-low latency networking for the modern era.</p>
        </Card>

        <Card
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="icon">🏠</div>
          <h3>SMART LIVE</h3>
          <p>Fully automated environments responding to you.</p>
        </Card>
      </InfoCards>
    </HeroSection>
  );
};

export default Hero;
