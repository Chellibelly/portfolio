"use client"; 
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import AboutContainer from './AboutContainer2';
import AboutContainerMobile from './AboutContainerMobile';

const AboutPage = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })

  return (
    <div>
      {isDesktopOrLaptop && <AboutContainer/>}
      {!isDesktopOrLaptop && <AboutContainerMobile/>}
    </div>
  );
};

export default AboutPage;