"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ServicesSection, Header, ServiceGrid, CardWrapper, CardInner, CardFront, CardBack, ImageContainer, CardContent } from "./styles";

const services = [
  {
    title: "CCTV SYSTEMS",
    description: "Smart surveillance for complete security.",
    details: "We provide state-of-the-art CCTV installation with remote viewing capabilities, ensuring your property is monitored 24/7 from anywhere in the world.",
    image: "/services/cctv.png"
  },
  {
    title: "BIOMETRICS",
    description: "Advanced fingerprint and face recognition systems for secure access control.",
    details: "Our biometric solutions encompass fingerprint, facial recognition, and iris scanning for top-tier security and attendance management.",
    image: "/services/biometrics.png"
  },
  {
    title: "NETWORKING",
    description: "Complete networking solutions, including access points and structured cabling.",
    details: "From home Wi-Fi setups to enterprise-level structured cabling and server rack management, we handle all your connectivity needs.",
    image: "/services/networking.png"
  },
  {
    title: "GATE AUTOMATION",
    description: "Automatic gate systems for residential and commercial properties.",
    details: "Experience convenience and security with our automated gate systems, compatible with remote controls, keypads, and smartphone apps.",
    image: "/services/gate.png"
  },
  {
    title: "VIDEO DOOR PHONES",
    description: "See and speak to visitors at your door from anywhere in your home.",
    details: "Enhance your home security with video door phones that let you see and communicate with visitors before granting access.",
    image: "/services/videodoor.png"
  },
  {
    title: "LAPTOPS & PC",
    description: "Sales, visual service, and repairs for all major computer brands.",
    details: "We offer reliable repair services, upgrades, and sales of new and refurbished laptops and desktops for home and office use.",
    image: "/services/laptop.png"
  },
  {
    title: "HOME AUTOMATION",
    description: "Transform your living space with smart technology.",
    details: "Expert installation of touch switches, automatic curtains, and intelligent water level indicators for a modern, convenient lifestyle.",
    image: "/services/homeauto.png"
  },
  {
    title: "PRINTER SERVICES",
    description: "Expert sales and maintenance for all printer types.",
    details: "We provide complete sales and professional service including cartridge refilling and hardware repairs for all major printer brands.",
    image: "/services/printer.png"
  },
  {
    title: "ALARM SYSTEM",
    description: "Advanced intruder detection and alarm systems.",
    details: "Comprehensive alarm systems with motion sensors, door/window contacts, and 24/7 monitoring capabilities to keep your property safe.",
    image: "/services/alarm_v2.png"
  },
  {
    title: "EPABX & IPBX INTERCOM",
    description: "Seamless communication for offices and multi-unit buildings.",
    details: "Installation and maintenance of EPABX and IPBX intercom systems for efficient internal and external communication.",
    image: "/services/epabx.jpg"
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
          <ImageContainer>
            <Image 
              src={service.image} 
              alt={service.title} 
              fill 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
              style={{ objectFit: 'cover' }} 
            />
          </ImageContainer>
          <CardContent>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button onClick={() => setIsFlipped(true)}>Read More</button>
          </CardContent>
        </CardFront>

        <CardBack onClick={() => setIsFlipped(false)}>
          <CardContent>
            <h3>{service.title}</h3>
            <p>{service.details}</p>
          </CardContent>
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
