"use client"; 
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import LifeManagementAppContainer from './LifeManagementAppContainer';
import LifeManagementAppMobile from './LifeManagementAppMobile';

const LifeManagementAppPage = () => {
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
      {isDesktopOrLaptop && <LifeManagementAppContainer/>}
      {!isDesktopOrLaptop && <LifeManagementAppMobile/>}
    </div>
  );
};

export default LifeManagementAppPage;