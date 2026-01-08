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
          WE TURN <br />
          SPACES INTO <br />
          <span>SMART</span> <br />
          EXPERIENCES.
        </motion.h1>
      </Content>

      <InfoCards>
        <Card
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="icon">💡</div>
          <h3>SMART LIGHTING</h3>
          <p>Control the ambiance of your home with intelligent lighting solutions.</p>
        </Card>

        <Card
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="icon">🔒</div>
          <h3>HOME SECURITY</h3>
          <p>Keep your family safe with advanced smart security systems.</p>
        </Card>

        <Card
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="icon">🎬</div>
          <h3>AUDIO / VIDEO</h3>
          <p>Immersive entertainment experiences customized for every room.</p>
        </Card>
      </InfoCards>
    </HeroSection>
  );
};

export default Hero;
