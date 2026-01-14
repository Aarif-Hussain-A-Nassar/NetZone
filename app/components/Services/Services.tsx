"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ServicesSection, Header, ServiceGrid, CardWrapper, CardInner, CardFront, CardBack } from "./styles";

const services = [
  {
    title: "CCTV SYSTEMS",
    description: "Smart surveillance for complete security.",
    details: "We provide state-of-the-art CCTV installation with remote viewing capabilities, ensuring your property is monitored 24/7 from anywhere in the world.",
    icon: "📷"
  },
  {
    title: "BIOMETRICS",
    description: "Advanced fingerprint and face recognition systems for secure access control.",
    details: "Our biometric solutions encompass fingerprint, facial recognition, and iris scanning for top-tier security and attendance management.",
    icon: "👆"
  },
  {
    title: "NETWORKING",
    description: "Complete networking solutions, including access points and structured cabling.",
    details: "From home Wi-Fi setups to enterprise-level structured cabling and server rack management, we handle all your connectivity needs.",
    icon: "🌐"
  },
  {
    title: "GATE AUTOMATION",
    description: "Automatic gate systems for residential and commercial properties.",
    details: "Experience convenience and security with our automated gate systems, compatible with remote controls, keypads, and smartphone apps.",
    icon: "🚪"
  },
  {
    title: "VIDEO DOOR PHONES",
    description: "See and speak to visitors at your door from anywhere in your home.",
    details: "Enhance your home security with video door phones that let you see and communicate with visitors before granting access.",
    icon: "🔔"
  },
  {
    title: "LAPTOPS & PC",
    description: "Sales, visual service, and repairs for all major computer brands.",
    details: "We offer reliable repair services, upgrades, and sales of new and refurbished laptops and desktops for home and office use.",
    icon: "💻"
  },
  {
    title: "HOME AUTOMATION",
    description: "Transform your living space with smart technology.",
    details: "Expert installation of touch switches, automatic curtains, and intelligent water level indicators for a modern, convenient lifestyle.",
    icon: "🏠"
  },
  {
    title: "PRINTER SERVICES",
    description: "Expert sales and maintenance for all printer types.",
    details: "We provide complete sales and professional service including cartridge refilling and hardware repairs for all major printer brands.",
    icon: "🖨️"
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
        transition={{ duration: 0.4, type: "spring", stiffness: 260, damping: 20 }}
      >
        <CardFront>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <button onClick={() => setIsFlipped(true)}>Read More</button>
        </CardFront>

        <CardBack onClick={() => setIsFlipped(false)}>
          <h3>{service.title}</h3>
          <p>{service.details}</p>
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
