import React, { useState, useRef, useEffect } from 'react';

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from './TimeLineStyles';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  return (
    <section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        - Expert Next.js and Flutter developer with a passion for building
        high-performance, scalable web and mobile applications.
        <br />
        - Proficient in utilizing a wide range of tools and technologies,
        including Tailwind CSS, Redux, Hooks, Provider, BLoC, and Clean
        Architecture.
        <br />
        - Demonstrated ability to design and implement complex user interfaces .
        <br />
        - Experienced in working with Agile methodologies and delivering
        projects on time.
        <br />- Strong problem-solving skills and a commitment to writing clean,
        maintainable code.
      </SectionText>
      <CarouselContainer>
        <>
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode
              key={index}
              final={index === TOTAL_CAROUSEL_COUNT - 1}
            >
              <CarouselItem
                index={index}
                id={`carousel_item_${index}`}
                onClick={(e) => handleClick(e, index)}
              >
                <CarouselItemTitle>{item.year}</CarouselItemTitle>
                <CarouselItemText>{item.Location}</CarouselItemText>
                <CarouselItemText>{item.text}</CarouselItemText>
                <CarouselItemText>{item.Type}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
    </section>
  );
};

export default Timeline;
