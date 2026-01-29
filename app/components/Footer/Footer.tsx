"use client";

import { FooterSection, Container, CTA, Links, ContactList, ContactItem, MapContainer, DeveloperCredit } from "./styles";

const Icons = {
  Instagram: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
  ),
  MapPin: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
  ),
  Phone: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
  ),
  WhatsApp: () => (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
  ),
  Mail: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
  )
};

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
            <h4 style={{ marginBottom: '2rem', color: 'var(--brand-secondary)' }}>
              NETZONE
              <span style={{ display: 'block', fontSize: '0.7rem', fontWeight: 400, letterSpacing: '3px', marginTop: '0.2rem', color: 'var(--foreground)', opacity: 0.7, textTransform: 'uppercase' }}>
                THE COMPLETE SOLUTION
              </span>
            </h4>
            <ContactList>
              <ContactItem>
                <Icons.MapPin />
                <span>Chandiroor Old Bridge Aroor,<br/> Alappuzha, Pin : 688547</span>
              </ContactItem>
              <ContactItem>
                <Icons.WhatsApp />
                <a href="tel:+918078474981">+91 8078 474 981</a>
              </ContactItem>
              <ContactItem>
                <Icons.Phone />
                <a href="tel:+919633292607">+91 9633 292 607</a>
              </ContactItem>
              <ContactItem>
                <Icons.Mail />
                <a href="mailto:netzone549@gmail.com">netzone549@gmail.com</a>
              </ContactItem>
              <ContactItem>
                <Icons.Instagram />
                <a href="https://www.instagram.com/netzone___?igsh=MW5hd2wxeDg5Mm1pNw==" target="_blank" rel="noopener noreferrer">
                  netzone___
                </a>
              </ContactItem>
            </ContactList>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', width: '100%' }}>
            <MapContainer>
              <iframe 
                src="https://maps.google.com/maps?q=Chandiroor+Old+Bridge+Aroor+Alappuzha&t=&z=13&ie=UTF8&iwloc=&output=embed"
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </MapContainer>
          </div>
        </Links>
      </Container>
      
      <DeveloperCredit 
        href="https://www.instagram.com/twodotsofficial_?igsh=eHVtNWFnZW5uOTBq" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <span>Created by</span> <Icons.Instagram /> <strong>twodotsofficial_</strong>
      </DeveloperCredit>
    </FooterSection>
  );
};

export default Footer;
