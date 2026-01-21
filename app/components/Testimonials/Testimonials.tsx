"use client";

import React from "react";
import { TestimonialSection, Grid, Card, Header, UserInfo, ReviewText } from "./styles";

const testimonials = [
  {
    id: 1,
    name: "Riyas shajahan",
    role: "Paravoor",
    text: "Tplink ip cameras installation.",
    feedback: "NetZone's installation was quick and professional. The camera clarity is excellent, and the remote viewing setup works flawlessly."
  },
  {
    id: 2,
    name: "Sreekumar sir",
    role: "Rf exports company",
    text: "Biometric installation and door access (Device, ai face Jupiter, ai face Magnum).",
    feedback: "The AI-based access control has streamlined our employee attendance perfectly. A highly secure and efficient solution for our company."
  },
  {
    id: 3,
    name: "Shelton",
    role: "Aroor pally",
    text: "Solar camera and wifi camera installation.",
    feedback: "I needed a solution without messy wiring, and their solar camera setup was perfect. Great connectivity and reliable performance."
  },
  {
    id: 4,
    name: "Dr Niyas",
    role: "JUZO shop, KOTTAYAM",
    text: "Cctv, networking, pc and printer.",
    feedback: "A complete one-stop solution for our shop. From networking to CCTV, everything was set up perfectly. Highly recommended for business IT needs."
  },
  {
    id: 5,
    name: "Indiqube spaces limited",
    role: "Vyshak",
    text: "Sensinova nano 16 microwave sensor installation.",
    feedback: "The sensor installation was precise and has greatly improved our facility's automation. Very knowledgeable and technical team."
  },
];

const Testimonials: React.FC = () => {
  return (
    <TestimonialSection id="testimonials">
      <Header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Client Stories</h2>
        <p>Don't just take our word for it. Here is what our partners have to say.</p>
      </Header>

      <Grid>
        {testimonials.map((item, index) => (
          <Card
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <UserInfo>
              <div className="details">
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </div>
            </UserInfo>
            <ReviewText>
              <span className="project-highlight">{item.text}</span>
              <span className="feedback-text">"{item.feedback}"</span>
            </ReviewText>
          </Card>
        ))}
      </Grid>
    </TestimonialSection>
  );
};

export default Testimonials;
