"use client";

import React from "react";
import { BrandsSection, Title, MarqueeContainer, Track, BrandItem, BrandLogo } from "./styles";

type Brand = string | { name: string; logo: string };

const brands: Brand[] = [
  { name: "Hikvision", logo: "/brands/hikvision.png" },
  { name: "TP-Link", logo: "/brands/tp-link.png" },
  { name: "CP Plus", logo: "/brands/cp-plus.png" },
  { name: "Dahua", logo: "/brands/dahua.png" },
  { name: "D-Link", logo: "/brands/d-link.png" },
  { name: "Finolex", logo: "/brands/finolex.png" },
  { name: "Autozon", logo: "/brands/autozon.png" },
  "FOXTECH",
  "Ziga Automation",
  "Ravoz Automation",
  "Cea Automation",
  "Panasonic",
  "Matrix",
  "Crystal",
  "Netgear",
  "Yale",
  "Ozone",
  "Tenda",
  "Honeywell",
  "Sensinova",
  "Prama",
  "eSSL",
  "Cisco"
];

const Brands: React.FC = () => {
  return (
    <BrandsSection id="brands">
      <Title>Dealing Brands</Title>
      <MarqueeContainer>
        <Track>
          {/* Duplicate list 2 times to ensure smooth infinite scroll */}
          {[...brands, ...brands].map((brand, index) => {
            const key = typeof brand === 'string' ? brand : brand.name;
            return (
              <BrandItem key={`${key}-${index}`}>
                {typeof brand === 'string' ? (
                  brand
                ) : (
                  <BrandLogo src={brand.logo} alt={brand.name} loading="lazy" />
                )}
              </BrandItem>
            );
          })}
        </Track>
      </MarqueeContainer>
    </BrandsSection>
  );
};

export default Brands;
