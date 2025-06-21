"use client"; 
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import DesignTidbitsContainer from './DesignTidbitsContainer';
import DesignTidbitsMobile from './DesignTidbitsMobile';

const DesignTidbitsPage = () => {
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
      {isDesktopOrLaptop && <DesignTidbitsContainer/>}
      {!isDesktopOrLaptop && <DesignTidbitsMobile/>}
    </div>
  );
};

export default DesignTidbitsPage;