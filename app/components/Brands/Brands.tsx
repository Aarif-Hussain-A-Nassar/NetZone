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
  { name: "AutoZone", logo: "/brands/autozone.png" },
  { name: "Foxtech", logo: "/brands/foxtech.jpg" },
  { name: "Ziga Automation", logo: "/brands/ziga-automation.png" },
  { name: "Ravoz Automation", logo: "/brands/ravoz-automation.png" },
  { name: "Cea Automation", logo: "/brands/cea-automation.jpg" },
  { name: "Panasonic", logo: "/brands/panasonic.png" },
  { name: "Matrix", logo: "/brands/matrix.png" },
  { name: "Netgear", logo: "/brands/netgear.png" },
  { name: "Yale", logo: "/brands/yale.png" },
  { name: "Ozone", logo: "/brands/ozone.png" },
  { name: "Tenda", logo: "/brands/tenda.png" },
  { name: "Honeywell", logo: "/brands/honeywell.png" },
  { name: "Sensinova", logo: "/brands/sensinova.png" },
  { name: "Prama", logo: "/brands/prama.png" },
  { name: "eSSL", logo: "/brands/essl.jpg" },
  { name: "Cisco", logo: "/brands/cisco.jpg" },
  { name: "Candle", logo: "/brands/candle.png" },
  { name: "Crystal", logo: "/brands/crystal.png" },
  { name: "EZVIZ", logo: "/brands/ezviz.png" }
];

const Brands: React.FC = () => {
  return (
    <BrandsSection id="brands">
      <Title>Dealing Brands</Title>
      <MarqueeContainer>
        <Track>
          {/* Duplicate list 4 times to ensure smooth infinite scroll on large screens */}
          {[...brands, ...brands, ...brands, ...brands].map((brand, index) => {
            const key = typeof brand === 'string' ? brand : brand.name;
            return (
              <BrandItem key={`${key}-${index}`}>
                {typeof brand === 'string' ? (
                  brand
                ) : (
                  <BrandLogo src={brand.logo} alt={brand.name} />
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
