"use client";

import { motion } from "framer-motion";
import { HeroSection, Overlay, Content, InfoCards, Card } from "./styles";

const Hero = () => {
  return (
    <HeroSection id="home">
      <Overlay />
      <Content>
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          NETZONE <br />
          <span>THE COMPLETE</span> <br />
          SOLUTION <br />
        </motion.h1>
      </Content>

      <InfoCards>
        <Card
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="icon">📹</div>
          <h3>CCTV & SECURITY</h3>
          <p>Advanced surveillance and biometrics for complete peace of mind.</p>
        </Card>

        <Card
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="icon">🌐</div>
          <h3>NETWORKING</h3>
          <p>Robust networking solutions, access points, and structured cabling.</p>
        </Card>

        <Card
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="icon">🏠</div>
          <h3>HOME AUTOMATION</h3>
          <p>Smart home features, gate automation, and video door phones.</p>
        </Card>
      </InfoCards>
    </HeroSection>
  );
};

export default Hero;
