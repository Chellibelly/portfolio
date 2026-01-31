"use client";
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import CaseStudiesHomeMobile from './CaseStudiesHomeMobile';
import CaseStudiesHomeContainer from './CaseStudiesHomeContainer';
import { Box, Typography } from '@mui/material';
import { blue, blueGrey } from '@mui/material/colors';

const CaseStudiesHomePage = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null; // or a loading spinner if needed
  }

  return (
  <Box sx={{ backgroundColor: blueGrey[50], minHeight: "100vh" }}>
      {isDesktopOrLaptop && <CaseStudiesHomeContainer/>}
      {!isDesktopOrLaptop && <CaseStudiesHomeMobile/>}
    </Box>
  );
};

export default CaseStudiesHomePage;