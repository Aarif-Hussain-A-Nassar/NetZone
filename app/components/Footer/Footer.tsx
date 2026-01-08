"use client";

import { FooterSection, Container, CTA, Links } from "./styles";

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <CTA>
          <h2>BUILD THE FUTURE WITH HAMI TECHNOLOGIES</h2>
          <p>Contact us today to schedule a consultation and see how we can transform your space.</p>
          <button>Get Started</button>
        </CTA>

        <Links>
          <div className="copyright">
            © {new Date().getFullYear()} Hami Technologies. All rights reserved.
          </div>
          <div className="socials">
            {/* Placeholders for social icons */}
            <span>Instagram</span>
            <span>LinkedIn</span>
            <span>Twitter</span>
          </div>
        </Links>
      </Container>
    </FooterSection>
  );
};

export default Footer;
