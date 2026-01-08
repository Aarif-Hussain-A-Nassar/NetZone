"use client";

import { motion } from "framer-motion";
import { ServicesSection, Header, ServiceGrid, ServiceCard } from "./styles";

const services = [
  {
    title: "SMART LIGHTING",
    description: "Automate your home's lighting for convenience and energy efficiency.",
    icon: "💡" // Placeholder
  },
  {
    title: "HOME SECURITY",
    description: "State-of-the-art surveillance and alarm systems for peace of mind.",
    icon: "📹"
  },
  {
    title: "CLIMATE CONTROL",
    description: "Smart thermostats that adapt to your lifestyle and save money.",
    icon: "❄️"
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
          HAMI TECHNOLOGIES
        </motion.h2>
        <motion.p
           initial={{ y: 20, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.6, delay: 0.2 }}
        >
          We bring the future to your doorstep with cutting-edge smart home integration.
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
