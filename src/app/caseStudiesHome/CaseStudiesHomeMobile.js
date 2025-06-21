"use client"; 
import React, {  } from 'react';
import Image from 'next/image';
import { Box, Grid, Paper, Typography } from '@mui/material';
import Header from '../Header';
import MenagerieHotelsHero from '../../../public/Menagerie_Hotels_Hero.png';
import HeaderMobile from '../HeaderMobile';
import * as globalStyles from '../styles/globalStyleConsts';

const CaseStudiesHomeMobile = () => {
  const cardStyle = {
    height: 380,
    width: 320,
    m: 2,
  };

  const imageStyle = {
    margin: "auto", borderTopLeftRadius: 4, borderTopRightRadius: 4
  };

  const projectTitleStyle = {
    textAlign: "center"
  };

  return (
    <Box>
      <HeaderMobile/>
      <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ mt: 8 }}>
        <Paper sx={cardStyle}>
          <Grid container direction="column" justifyContent="center" alignItems="center">
            <Grid item>
              <Image
                src={MenagerieHotelsHero}
                width={320}
                alt="Hotel Booking App Hero"
                style={imageStyle}
              />
            </Grid>
            <Grid item sx={{ p: 2 }}>
              <h1 style={{ ...globalStyles.heading4, textAlign: "center", fontWeight: 600 }}>Hotel Booking App</h1>
              <p style={{ ...globalStyles.paragraph, textAlign: "center", fontSize: 16 }}>
                My journey transforming the hotel booking process for people fed up with being habitually left in the dark
              </p>
            </Grid>
          </Grid>           
        </Paper>
        <Paper sx={cardStyle}>
          <Grid container direction="column" justifyContent="center" alignItems="center">
            <Grid item>
              <Image
                src={MenagerieHotelsHero}
                width={320}
                alt="Life Management App Hero"
                style={imageStyle}
              />
            </Grid>
            <Grid item sx={{ p: 2 }}>
              <h1 style={{ ...globalStyles.heading4, textAlign: "center", fontWeight: 600 }}>Life Management App</h1>
              <p style={{ ...globalStyles.paragraph, textAlign: "center", fontSize: 16 }}>
                My journey transforming the hotel booking process for people fed up with being habitually left in the dark
              </p>
            </Grid>
          </Grid>   
        </Paper>
        <Paper sx={cardStyle}>
          <Grid container direction="column" justifyContent="center" alignItems="center">
            <Grid item>
              <Image
                src={MenagerieHotelsHero}
                width={320}
                alt="Design Tidbits Hero"
                style={imageStyle}
              />
            </Grid>
            <Grid item sx={{ p: 2 }}>
              <h1 style={{ ...globalStyles.heading4, textAlign: "center", fontWeight: 600 }}>Design Tidbits</h1>
              <p style={{ ...globalStyles.paragraph, textAlign: "center", fontSize: 16 }}>
                My journey transforming the hotel booking process for people fed up with being habitually left in the dark
              </p>
            </Grid>
          </Grid>   
        </Paper>
      </Grid>
    </Box>
  );
};

export default CaseStudiesHomeMobile;