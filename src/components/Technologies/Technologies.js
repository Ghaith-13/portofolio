import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { SiFlutter } from 'react-icons/si';

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
  <section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a Technologies in the web development and
      application world .
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Next.js
            <br />
            React.js <br />
            Tailwind <br />
            Hooks
            <br />
            Redux
            <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiFlutter size="2rem" />
        <ListContainer>
          <ListTitle>Application Development</ListTitle>
          <ListParagraph>
            Experience with <br />
            Flutter
            <br />
            Bloc
            <br />
            Provider
            <br />
            Clean architecture
            <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </section>
);

export default Technologies;
