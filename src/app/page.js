"use client"; 
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import HotelsContainer from './caseStudies/HotelsContainer';
import HotelsContainerMobile from './caseStudies/HotelsContainerMobile';

const HomePage = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })

  return (
    <div>
      {isDesktopOrLaptop && <HotelsContainer/>}
      {!isDesktopOrLaptop && <HotelsContainerMobile/>}
    </div>
  );
};

export default HomePage;