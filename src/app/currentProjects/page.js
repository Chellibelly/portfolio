"use client"; 
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import CurrentProjectsContainer from './CurrentProjectsContainer';
import CurrentProjectsContainerMobile from './CurrentProjectsContainerMobile';

const CurrentProjectsPage = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })

  return (
    <div>
      {isDesktopOrLaptop && <CurrentProjectsContainer/>}
      {!isDesktopOrLaptop && <CurrentProjectsContainerMobile/>}
    </div>
  );
};

export default CurrentProjectsPage;