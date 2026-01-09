"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ServicesSection, Header, ServiceGrid, CardWrapper, CardInner, CardFront, CardBack } from "./styles";

const services = [
  {
    title: "CCTV SYSTEMS",
    description: "High-definition surveillance cameras and monitoring systems for 24/7 security.",
    icon: "📷"
  },
  {
    title: "BIOMETRICS",
    description: "Advanced fingerprint and face recognition systems for secure access control.",
    icon: "👆"
  },
  {
    title: "NETWORKING",
    description: "Complete networking solutions, including access points and structured cabling.",
    icon: "🌐"
  },
  {
    title: "GATE AUTOMATION",
    description: "Automatic gate systems for residential and commercial properties.",
    icon: "🚪"
  },
  {
    title: "VIDEO DOOR PHONES",
    description: "See and speak to visitors at your door from anywhere in your home.",
    icon: "🔔"
  },
  {
    title: "LAPTOPS & PC",
    description: "Sales, visual service, and repairs for all major computer brands.",
    icon: "💻"
  }
];

const ServiceItem = ({ service, index }: { service: any, index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <CardWrapper
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <CardInner
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
      >
        <CardFront>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <button onClick={() => setIsFlipped(true)}>Read More</button>
        </CardFront>

        <CardBack onClick={() => setIsFlipped(false)}>
          <h3>HI WELCOME TO NETZONE</h3>
        </CardBack>
      </CardInner>
    </CardWrapper>
  );
};

const Services = () => {
  return (
    <ServicesSection id="services">
      <Header>
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          OUR SERVICES
        </motion.h2>
        <motion.p
           initial={{ y: 20, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.6, delay: 0.2 }}
        >
          Sales & Service Installation for all your technology needs.
        </motion.p>
      </Header>

      <ServiceGrid>
        {services.map((service, index) => (
          <ServiceItem key={index} service={service} index={index} />
        ))}
      </ServiceGrid>
    </ServicesSection>
  );
};

export default Services;
