"use client"; 
import React, {  } from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import Header from '../Header';

const DesignTidbitsContainer = () => {
  return (
    <Box>
      <Header/>
      <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ height: "90vh", mt: 5 }}>
        Design Tidbits Container
      </Grid>
    </Box>
  );
};

export default DesignTidbitsContainer;