import React from 'react';

import Hero from '../Hero';
import About from '../About';
import Campaign from '../Campaign';
import CTA from '../CTA';
import Projects from '../Projects';
import JoinUs from '../JoinUs';
import Mission from '../Mission';
import TeamMembers from '../TeamMembers';
import VideoSlider from '../VideoSlider';

function Home({ projects, campaigns }) {
  return (
    <>
      <Hero projects={projects} />
      <Mission />
      <Campaign campaigns={campaigns} />
      <JoinUs />
      <Projects projects={projects} />

      <About />
      <TeamMembers />
      <VideoSlider />
      <CTA />
    </>
  );
}

export default Home;
