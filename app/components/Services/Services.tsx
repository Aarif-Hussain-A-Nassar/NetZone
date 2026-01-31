"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import useIsMobile from "../../hooks/useIsMobile";
import MobileServiceStack from "./MobileServiceStack";
import { ServicesSection, Header, ServiceGrid, CardWrapper, CardFront, ImageContainer, CardContent, CardInner, CardBack } from "./styles";

const services = [
  {
    title: "CCTV SYSTEMS",
    description: "Smart surveillance for complete security.",
    details: "Our advanced CCTV systems offer 24/7 monitoring with high-definition recording, night vision, and remote access via mobile apps. We ensure every blind spot is covered, providing you with total peace of mind for your home or business security.",
    image: "/services/cctv.png"
  },
  {
    title: "BIOMETRICS",
    description: "Advanced fingerprint and face recognition.",
    details: "Secure your premises with cutting-edge biometric access control systems. From fingerprint scanners to facial recognition technology, we provide reliable, spoof-proof identity verification solutions that track attendance and restrict unauthorized entry effectively.",
    image: "/services/biometrics.png"
  },
  {
    title: "NETWORKING",
    description: "Complete networking and cabling solutions.",
    details: "We design and implement robust network infrastructures tailored to your needs. Whether it's structured cabling for offices, seamless Wi-Fi coverage for large homes, or complex enterprise data centers, our solutions ensure high-speed, stable connectivity.",
    image: "/services/networking.png"
  },
  {
    title: "GATE AUTOMATION",
    description: "Automatic gate systems for residential and commercial properties.",
    details: "Upgrade your property's entrance with our automated gate systems. We offer sliding, swing, and telescopic gate motors that integrate seamlessly with remote controls and intercoms, combining luxury, convenience, and enhanced security.",
    image: "/services/gate.png"
  },
  {
    title: "VIDEO DOOR PHONES",
    description: "See and speak to visitors from anywhere.",
    details: "Never miss a visitor with our smart video door phone systems. Featuring high-resolution cameras and two-way audio, you can see and speak to guests from your indoor monitor or smartphone, ensuring safety before you open the door.",
    image: "/services/videodoor.png"
  },
  {
    title: "LAPTOPS & PC",
    description: "Sales, service, and repairs for all brands.",
    details: "Your one-stop solution for all computing needs. We specialized in the sales of top-brand laptops and custom-built PCs, alongside professional repair services for hardware issues, software troubleshooting, and performance upgrades.",
    image: "/services/laptop.png"
  },
  {
    title: "HOME AUTOMATION",
    description: "Transform your living space with smart tech.",
    details: "Turn your house into a smart home with our automation solutions. Control lighting, climate, curtains, and media devices with a single touch or voice command. We create energy-efficient, intuitive environments that adapt to your lifestyle.",
    image: "/services/homeauto.png"
  },
  {
    title: "PRINTER SERVICES",
    description: "Sales and maintenance for all printers.",
    details: "We offer end-to-end printer solutions, from selling high-efficiency laser and inkjet printers to providing expert maintenance and cartridge refilling services. Keep your office workflow uninterrupted with our reliable support.",
    image: "/services/printer.png"
  },
  {
    title: "ALARM SYSTEM",
    description: "Advanced intruder detection systems.",
    details: "Protect your property with our intrusion detection systems. Equipped with motion sensors, door contacts, and loud sirens, our alarms instantly deter intruders and alert you to any unauthorized access, ensuring round-the-clock protection.",
    image: "/services/epabx.jpg"
  },
  {
    title: "EPABX & IPBX INTERCOM",
    description: "Seamless communication solutions.",
    details: "Streamline internal and external communication with our EPABX and IPBX intercom systems. Ideal for offices and apartment complexes, our systems offer crystal-clear voice quality, call routing, and multi-line support for efficient connectivity.",
    image: "/services/intercom_phone.png"
  }
];

// Desktop Layout: Simple Card (No Flip)
const ServiceItem = ({ service, index }: { service: any, index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <CardWrapper
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <CardInner
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0, scale: isFlipped ? 1.05 : 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
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
            <button onClick={(e) => {
              e.stopPropagation();
              setIsFlipped(true);
            }}>Know More</button>
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
