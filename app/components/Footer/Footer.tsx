"use client";

import { FooterSection, Container, CTA, Links } from "./styles";

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <CTA>
          <h2>READY TO SECURE YOUR SPACE?</h2>
          <p>Contact NetZone today for expert installation and service.</p>
          <button onClick={() => window.location.href = 'tel:+918078474981'}>Call Us Now</button>
        </CTA>

        <Links>
          <div className="contact-info">
            <h4 style={{ marginBottom: '1rem', color: 'var(--brand-secondary)' }}>NETZONE</h4>
            <p>Chandiroor Old Bridge Aroor,<br/> Alappuzha, Pin : 688547</p>
            <p style={{ marginTop: '0.5rem' }}>
              <a href="tel:+918078474981">+91 8078 474 981</a> <br/>
              <a href="tel:+919633292607">+91 9633 292 607</a>
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              <a href="mailto:netzone549@gmail.com">netzone549@gmail.com</a>
            </p>
          </div>
          
          <div className="socials">
             <a href="https://www.instagram.com/netzone___?igsh=MW5hd2wxeDg5Mm1pNw==" target="_blank" rel="noopener noreferrer">Instagram</a>
             {/* Add other socials if needed */}
          </div>
        </Links>
      </Container>
    </FooterSection>
  );
};

export default Footer;
