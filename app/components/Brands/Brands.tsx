"use client";

import React from "react";
import { BrandsSection, Title, MarqueeContainer, Track, BrandItem } from "./styles";

const brands = [
  "Hikvision",
  "TP-Link",
  "CP Plus",
  "Dahua",
  "D-Link",
  "Finolex",
  "Autozon",
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
          {[...brands, ...brands].map((brand, index) => (
            <BrandItem key={`${brand}-${index}`}>
              {brand}
            </BrandItem>
          ))}
        </Track>
      </MarqueeContainer>
    </BrandsSection>
  );
};

export default Brands;
