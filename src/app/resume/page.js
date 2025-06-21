"use client"; 
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import ResumeContainer from './ResumeContainer';
import ResumeContainerMobile from './ResumeContainerMobile';

const ResumePage = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null; // or a loading spinner if needed
  }

  return (
    <div>
      {isDesktopOrLaptop && <ResumeContainer/>}
      {!isDesktopOrLaptop && <ResumeContainerMobile/>}
    </div>
  );
};

export default ResumePage;