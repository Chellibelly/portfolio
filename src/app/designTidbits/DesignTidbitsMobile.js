"use client"; 
import React, {  } from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import HeaderMobile from '../HeaderMobile';

const DesignTidbitsMobile = () => {
  return (
    <Box>
      <HeaderMobile/>
      <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ height: "90vh", mt: 5 }}>
        Design Tidbits Mobile
      </Grid>
    </Box>
  );
};

export default DesignTidbitsMobile;