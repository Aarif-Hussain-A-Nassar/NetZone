"use client";

import React from "react";
import Image from "next/image";
import { TestimonialSection, Grid, Card, Header, UserInfo, ReviewText } from "./styles";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, TechCorp",
    text: "NetZone transformed our digital presence completely. Their attention to detail and premium design aesthetic is unmatched in the industry.",
    // Using placeholder avatar service or a div fallback in styles
    image: "https://i.pravatar.cc/150?u=1",
  },
  {
    id: 2,
    name: "Sarah Smith",
    role: "Founder, CreativeStudio",
    text: "The team at NetZone is simply phenomenal. They understood our brand vision perfectly and delivered a website that truly WOWs our clients.",
    image: "https://i.pravatar.cc/150?u=2",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "CTO, NextLevel Systems",
    text: "Technical expertise meets stunning design. The seamless responsiveness and smooth animations have significantly increased our user engagement.",
    image: "https://i.pravatar.cc/150?u=3",
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Marketing Director, Brandify",
    text: "We needed a site that stood out, and NetZone delivered. The 'pitch black' dark mode is a fan favorite among our developers!",
    image: "https://i.pravatar.cc/150?u=4",
  },
  {
    id: 5,
    name: "David Wilson",
    role: "Product Manager, InnovateX",
    text: "Fast, reliable, and absolutely gorgeous. Working with NetZone was the best decision we made for our Q4 launch. Highly recommended.",
    image: "https://i.pravatar.cc/150?u=5",
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
              <div className="avatar">
                <Image 
                    src={item.image} 
                    alt={item.name} 
                    width={60} 
                    height={60}
                    unoptimized // For external pravatar images
                />
              </div>
              <div className="details">
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </div>
            </UserInfo>
            <ReviewText>
              {item.text}
            </ReviewText>
          </Card>
        ))}
      </Grid>
    </TestimonialSection>
  );
};

export default Testimonials;
