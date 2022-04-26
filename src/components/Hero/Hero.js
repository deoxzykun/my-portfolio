import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          I am a passionate Javascript Developer, skilled in React JS and Next JS. This Portfolio is to showcase all of my personal projects i've worked on so far.
        </SectionText>
        <a href='#about'>
          <Button>Learn More</Button>
        </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;