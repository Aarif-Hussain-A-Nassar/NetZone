"use client";

import React, { useState } from "react";
import { ContactSection, Container, Title, FormCard, FormGroup, Input, TextArea, SubmitButton } from "./styles";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { name, message } = formData;
    
    if (!name.trim() || !message.trim()) {
      alert("Please fill in both name and message fields.");
      return;
    }

    const phoneNumber = "918078474981";
    const text = `Name: ${name}%0AMessage: ${message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <ContactSection id="contact">
      <Container>
        <Title>Get In Touch</Title>
        <FormCard onSubmit={handleSubmit}>
          <FormGroup>
            <label htmlFor="name">Your Name</label>
            <Input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="message">Message</label>
            <TextArea 
              id="message" 
              name="message" 
              placeholder="How can we help you?"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <SubmitButton type="submit">
            <span>Send Message</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </SubmitButton>
        </FormCard>
      </Container>
    </ContactSection>
  );
};

export default Contact;
