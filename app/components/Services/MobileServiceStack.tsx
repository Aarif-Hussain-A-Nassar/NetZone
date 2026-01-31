"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";

// Internal styles
const StackContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px; /* Increased height slightly */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  perspective: 1000px;
`;

const StackCard = styled(motion.div)`
  position: absolute;
  width: 280px;
  height: 420px;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  display: flex;
  flex-direction: column;
  transform-style: preserve-3d;
  cursor: grab;
  backdrop-filter: blur(10px);
  overflow: hidden;

  &:active {
    cursor: grabbing;
  }
`;

const CardImage = styled.div`
  position: relative;
  width: 100%;
  height: 180px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 1rem;
  flex-shrink: 0;
  
  img {
    object-fit: cover;
  }
`;

const CardContent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  
  h3 {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: var(--foreground);
    text-transform: uppercase;
  }
  
  p {
    font-size: 0.95rem;
    color: var(--foreground);
    opacity: 0.8;
    line-height: 1.5;
  }
`;

const ActionButton = styled.button`
  margin-top: auto;
  padding: 0.8rem 1.5rem;
  background: var(--brand-purple); /* Brand color */
  color: white;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  z-index: 10;
  transition: transform 0.2s;
  align-self: center;
  
  &:active {
    transform: scale(0.95);
  }
`;

// Swipe Hint
const SwipeHint = styled(motion.div)`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.5;
  pointer-events: none;
  font-size: 0.8rem;
  color: var(--brand-secondary);
`;

interface MobileServiceStackProps {
    services: any[];
}

const MobileServiceStack: React.FC<MobileServiceStackProps> = ({ services }) => {
    const [cards, setCards] = useState(services);

    const moveCardToBack = () => {
        setCards((prev) => {
            const newCards = [...prev];
            const itemsToMove = newCards.splice(0, 1);
            return [...newCards, ...itemsToMove]; // Puts top card at the bottom (Infinite Loop)
        });
    };

    return (
        <StackContainer>
            <AnimatePresence mode="popLayout">
                {cards.map((service, index) => {
                    // Render top 3 cards + 1 hidden for smooth entering
                    if (index > 3) return null;

                    return (
                        <CardItem
                            key={service.title} // Key ensures state preservation until unmount
                            service={service}
                            index={index}
                            moveCardToBack={moveCardToBack}
                            isTop={index === 0}
                        />
                    );
                })}
            </AnimatePresence>

            <SwipeHint
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 2, duration: 1 }}
            >
                Slide to Next
            </SwipeHint>
        </StackContainer>
    );
};

// Sub-component to manage "Read More" state
const CardItem = ({ service, index, moveCardToBack, isTop }: any) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        if (Math.abs(info.offset.x) > 100 || Math.abs(info.offset.y) > 100) {
            moveCardToBack();
        }
    };

    return (
        <StackCard
            style={{
                zIndex: 100 - index,
            }}
            initial={{ scale: 0.8, y: 40, opacity: 0 }}
            animate={{
                scale: index === 0 ? 1 : 1 - index * 0.05,
                y: index * 15,
                opacity: index < 3 ? 1 : 0, // Fade out the 4th card
                rotate: index === 0 ? 0 : index % 2 === 0 ? 3 : -3
            }}
            exit={{
                x: Math.random() > 0.5 ? 200 : -200, // Fly out random side
                opacity: 0,
                scale: 0.8,
                transition: { duration: 0.2 }
            }}
            transition={{ type: "spring", stiffness: 280, damping: 20 }}
            drag={isTop ? true : false}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
        >
            <AnimatePresence mode="wait">
                {!isExpanded ? (
                    <motion.div
                        key="front"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                    >
                        <CardImage>
                            <Image src={service.image} alt={service.title} fill sizes="280px" />
                        </CardImage>
                        <CardContent>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <ActionButton
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevent drag/click trigger
                                    setIsExpanded(true);
                                }}
                            >
                                Read More
                            </ActionButton>
                        </CardContent>
                    </motion.div>
                ) : (
                    <motion.div
                        key="back"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <CardContent>
                            <h3 style={{ color: 'var(--brand-purple)' }}>{service.title}</h3>
                            <p style={{ marginTop: '1rem', fontSize: '1rem' }}>{service.details}</p>
                            <ActionButton
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsExpanded(false);
                                }}
                                style={{ background: 'var(--brand-secondary)', marginTop: '2rem' }}
                            >
                                Back
                            </ActionButton>
                        </CardContent>
                    </motion.div>
                )}
            </AnimatePresence>
        </StackCard>
    );
};

export default MobileServiceStack;
