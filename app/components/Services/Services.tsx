"use client";

import { motion } from "framer-motion";
import { ServicesSection, Header, ServiceGrid, ServiceCard } from "./styles";

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
          <ServiceCard
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button>Read More</button>
          </ServiceCard>
        ))}
      </ServiceGrid>
    </ServicesSection>
  );
};

export default Services;
