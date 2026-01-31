"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import useIsMobile from "../../hooks/useIsMobile";
import MobileServiceStack from "./MobileServiceStack";
import { ServicesSection, Header, ServiceGrid, CardWrapper, CardFront, ImageContainer, CardContent } from "./styles";

const services = [
  {
    title: "CCTV SYSTEMS",
    description: "Smart surveillance for complete security.",
    details: "We provide state-of-the-art CCTV installation with remote viewing capabilities.",
    image: "/services/cctv.png"
  },
  {
    title: "BIOMETRICS",
    description: "Advanced fingerprint and face recognition.",
    details: "Our biometric solutions encompass fingerprint, facial recognition, and iris scanning.",
    image: "/services/biometrics.png"
  },
  {
    title: "NETWORKING",
    description: "Complete networking and cabling solutions.",
    details: "From home Wi-Fi setups to enterprise-level structured cabling.",
    image: "/services/networking.png"
  },
  {
    title: "GATE AUTOMATION",
    description: "Automatic gate systems for residential and commercial properties.",
    details: "Experience convenience and security with our automated gate systems.",
    image: "/services/gate.png"
  },
  {
    title: "VIDEO DOOR PHONES",
    description: "See and speak to visitors from anywhere.",
    details: "Enhance your home security with video door phones.",
    image: "/services/videodoor.png"
  },
  {
    title: "LAPTOPS & PC",
    description: "Sales, service, and repairs for all brands.",
    details: "We offer reliable repair services and sales of laptops and desktops.",
    image: "/services/laptop.png"
  },
  {
    title: "HOME AUTOMATION",
    description: "Transform your living space with smart tech.",
    details: "Expert installation of touch switches and smart controls.",
    image: "/services/homeauto.png"
  },
  {
    title: "PRINTER SERVICES",
    description: "Sales and maintenance for all printers.",
    details: "We provide complete sales and professional service including cartridge refilling.",
    image: "/services/printer.png"
  },
  {
    title: "ALARM SYSTEM",
    description: "Advanced intruder detection systems.",
    details: "Comprehensive alarm systems with motion sensors and monitoring.",
    image: "/services/epabx.jpg"
  },
  {
    title: "EPABX & IPBX INTERCOM",
    description: "Seamless communication solutions.",
    details: "Installation and maintenance of intercom systems.",
    image: "/services/intercom_phone.png"
  }
];

// Desktop Layout: Simple Card (No Flip)
const ServiceItem = ({ service, index }: { service: any, index: number }) => {
  return (
    <CardWrapper
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      style={{ perspective: 'none' }} // Disable 3D perspective for desktop
    >
      {/* Direct rendering without CardInner/Flip logic */}
      <CardFront style={{ position: 'relative', transform: 'none' }}>
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
        </CardContent>
      </CardFront>
    </CardWrapper>
  );
};

const Services = () => {
  const isMobile = useIsMobile();

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

      {/* Conditional Rendering based on Device Type */}
      {isMobile ? (
        <MobileServiceStack services={services} />
      ) : (
        <ServiceGrid>
          {services.map((service, index) => (
            <ServiceItem key={index} service={service} index={index} />
          ))}
        </ServiceGrid>
      )}
    </ServicesSection>
  );
};

export default Services;
