"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { LoaderContainer, LoadingText, FilledText, TagLine } from "./styles";

const IntroLoader = () => {
  const comp = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);
  const tagRef = useRef<HTMLParagraphElement>(null);
  
  const [complete, setComplete] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setComplete(true);
          document.body.style.overflow = "unset";
        }
      });

      // 1. Fill the text (Loading effect)
      tl.to(fillRef.current, {
        clipPath: "inset(0% 0 0 0)",
        duration: 2,
        ease: "power2.inOut"
      })
      // 2. Reveal Tagline
      .to(tagRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.5")
      // 3. Pause briefly
      .to({}, { duration: 0.5 })
      // 4. Zoom text *into* the screen to reveal website
      .to(textRef.current, {
        scale: 50, // Massive zoom
        opacity: 0,
        duration: 1.2,
        ease: "power3.in" // Accelerate out
      })
      // 5. Fade out background smoothly with the zoom
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power1.in",
        display: "none"
      }, "<0.4"); // Start shortly after zoom starts

    }, comp);

    // Initial body lock
    document.body.style.overflow = "hidden";

    return () => ctx.revert();
  }, []);

  if (complete) return null;

  return (
    <div ref={comp}>
      <LoaderContainer ref={containerRef}>
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <LoadingText ref={textRef}>
            NETZONE
            <FilledText ref={fillRef}>
              NETZONE
            </FilledText>
          </LoadingText>
          
          <TagLine ref={tagRef}>
            The Complete Solution
          </TagLine>
        </div>
      </LoaderContainer>
    </div>
  );
};

export default IntroLoader;
