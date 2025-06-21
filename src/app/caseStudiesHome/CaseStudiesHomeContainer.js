"use client"; 
import React, {  } from 'react';
import Image from 'next/image';
import { Box, Grid, Paper, Typography, Link } from '@mui/material';
import Header from '../Header';
import MenagerieHotelsHero from '../../../public/Menagerie_Hotels_Hero.png';
import LifeManagementHero from '../../../public/Life_Management_Hero_UC.png';
import DesignTidbits from '../../../public/Design_Tidbits_UC.png';
import * as globalStyles from '../styles/globalStyleConsts';

const CaseStudiesHomeContainer = () => {
const cardStyle = {
  height: 460,
  width: 380,
  m: 2,
  transition: 'all 0.3s',
  '&:hover': {
    cursor: 'not-allowed',
  }
};

  const cardStyleNavigate = {
  height: 460,
  width: 380,
  m: 2,
  transition: 'transform 0.3s, box-shadow 0.3s',
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1.03)',
    boxShadow: 6, // MUI shadow level
  }
};

  return (
    <div>
      <Header/>
      <Box sx={{ pt: '90px' }}>
      <Typography
          variant="h4"
          align="center"
          sx={{ ...globalStyles.heading1, mb: 3 }}
        >
          Check out my work!
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 0 }}
      >
        <Link href="/hotelBookingApp" sx={{ textDecoration: 'none'}}>
          <Paper sx={cardStyleNavigate}>
            <Grid container direction="column" justifyContent="center" alignItems="center">
              <Grid item>
                <Image
                  src={MenagerieHotelsHero}
                  width={380}
                  alt="Hotel Booking App Hero"
                  style={{ margin: "auto", borderTopLeftRadius: 4, borderTopRightRadius: 4 }}
                />
              </Grid>
              <Grid item sx={{ p: 2 }}>
                <h1 style={{ ...globalStyles.heading4, textAlign: "center", fontWeight: 600 }}>Hotel Booking Tool</h1>
                <p style={{ ...globalStyles.paragraph, textAlign: "center", fontSize: 16 }}>
                  My journey transforming the hotel booking process for people fed up with being habitually left in the dark
                </p>
              </Grid>
            </Grid>           
          </Paper>
        </Link>
        <Link sx={{ textDecoration: 'none'}}>
          <Paper sx={cardStyle}>
            <Grid container direction="column" justifyContent="center" alignItems="center">
              <Grid item>
                <Image
                  src={LifeManagementHero}
                  width={380}
                  alt="Life Management App Hero"
                  style={{ margin: "auto", borderTopLeftRadius: 4, borderTopRightRadius: 4 }}
                />
              </Grid>
              <Grid item sx={{ p: 2 }}>
                <h1 style={{ ...globalStyles.heading4, textAlign: "center", fontWeight: 600 }}>Life Management App</h1>
                <p style={{ ...globalStyles.paragraph, textAlign: "center", fontSize: 16 }}>
                 My goal is to understand how people feel about the way they manage their goals and productivity. My mission if to design a way to make it easier to stay organized, manage deadlines, and track goals and milestones.
                </p>
              </Grid>
            </Grid>   
          </Paper>
        </Link>
        <Link sx={{ textDecoration: 'none'}}>
          <Paper sx={cardStyle}>
            <Grid container direction="column" justifyContent="center" alignItems="center">
              <Grid item>
                <Image
                  src={DesignTidbits}
                  width={380}
                  alt="Design Tidbits Hero"
                  style={{ margin: "auto", borderTopLeftRadius: 4, borderTopRightRadius: 4 }}
                />
              </Grid>
              <Grid item sx={{ p: 2 }}>
                <h1 style={{ ...globalStyles.heading4, textAlign: "center", fontWeight: 600 }}>Professional Highlights</h1>
                <p style={{ ...globalStyles.paragraph, textAlign: "center", fontSize: 16 }}>
                  Impactful features I've designed professionally
                </p>
              </Grid>
            </Grid>   
          </Paper>
        </Link>
      </Grid>
      </Box>
    </div>
  );
};

export default CaseStudiesHomeContainer;