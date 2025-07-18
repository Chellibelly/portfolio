"use client"; 
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import AboutContainer from './about/AboutContainer2'
import AboutContainerMobile from './about/AboutContainerMobile';

const AboutPage = () => {
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
      {isDesktopOrLaptop && <AboutContainer/>}
      {!isDesktopOrLaptop && <AboutContainerMobile/>}
    </div>
  );
};

export default AboutPage;