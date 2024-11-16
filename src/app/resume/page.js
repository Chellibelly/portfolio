"use client"; 
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import ResumeContainer from './ResumeContainer';
import ResumeContainerMobile from './ResumeContainerMobile';

const ResumePage = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })

  return (
    <div>
      {isDesktopOrLaptop && <ResumeContainer/>}
      {!isDesktopOrLaptop && <ResumeContainerMobile/>}
    </div>
  );
};

export default ResumePage;