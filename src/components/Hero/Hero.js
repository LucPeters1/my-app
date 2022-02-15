import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <section row nopadding>
    <LeftSection>
      <SectionTitle main center>
      Welcome To <br/>
      My Personal Portfolio
      </SectionTitle>
      <SectionText>
        The purpose of this portfolio is to document my journey as a software developer,
        and showcase all the projects I've worked on!
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </section>
);

export default Hero;