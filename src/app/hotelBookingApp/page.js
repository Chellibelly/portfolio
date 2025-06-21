"use client"; 
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import HotelsContainer from './HotelsContainer';
import HotelsContainerMobile from './HotelsContainerMobile';

const HomePage = () => {
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
      {isDesktopOrLaptop && <HotelsContainer/>}
      {!isDesktopOrLaptop && <HotelsContainerMobile/>}
    </div>
  );
};

export default HomePage;