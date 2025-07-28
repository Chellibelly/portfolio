"use client"; 
import React, {  } from 'react';
import Image from 'next/image';
import { Box, Grid, Paper, Typography, Link } from '@mui/material';
import Header from '../Header';
import MenagerieHotelsHero from '../../../public/Menagerie_Hotels_Hero.png';
import LifeManagementHero from '../../../public/Life_Management_Hero.png';
import DesignTidbits from '../../../public/Design_Tidbits.png';
import * as globalStyles from '../styles/globalStyleConsts';

const CaseStudiesHomeContainer = () => {
const cardStyle = {
  height: 500,
  width: 380,
  m: 2,
  transition: 'all 0.3s',
  '&:hover': {
    cursor: 'not-allowed',
  }
};

  const cardStyleNavigate = {
  height: 500,
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
          sx={{ ...globalStyles.heading1, mb: 1.5 }}
        >
          Check out my work!
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 0, pb: 10 }}
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
                <h1 style={{ ...globalStyles.heading4, textAlign: "center", fontWeight: 600 }}>Menagerie Hotels<br/>Booking Website</h1>
                <h2 style={{ ...globalStyles.heading6, textAlign: "center", marginTop: -10, fontStyle: "italic" }}>UXDI Diploma Project</h2>
                <p>Click here if you're looking for a full, detailed, end-to-end case study organized to demonstrate my grasp of the <b>UX process</b>.</p>
              </Grid>
            </Grid>           
          </Paper>
        </Link>
        <Link href="/lifeManagementApp" sx={{ textDecoration: 'none'}}>
          <Paper sx={cardStyleNavigate}>
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
                <h1 style={{ ...globalStyles.heading4, textAlign: "center", fontWeight: 600 }}>Life Management App<br/>(name pending)</h1>
                <h2 style={{ ...globalStyles.heading6, textAlign: "center", marginTop: -10, fontStyle: "italic" }}>Personal Passion Project</h2>
                <p>Click here if you're curious how I translate research into deliverables, presented in a layout focused on identifying real <b>problems and solutions</b>.</p>
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
                <h2 style={{ ...globalStyles.heading6, textAlign: "center", marginTop: -10, fontStyle: "italic" }}>Selected Career Projects</h2>
                <p>Click here if you want a peek into how I collaborate with cross-functional teams to ship real features backed by research, stakeholder alignment, and <b>real measurable results</b>.</p>
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