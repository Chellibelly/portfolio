"use client"; 
import React, {  } from 'react';
import Image from 'next/image';
import { Box, Grid, Paper, Typography, Link } from '@mui/material';
import Header from '../Header';
import FreebirdHotelsHero from '../../../public/Freebird_Hotels_Hero.png';
import LifeManagementHero from '../../../public/Life_Management_Hero.png';
import DesignTidbits from '../../../public/Design_Tidbits.png';
import HeaderMobile from '../HeaderMobile';
import * as globalStyles from '../styles/globalStyleConsts';
import PasswordModal from './PasswordModal';


const CaseStudiesHomeMobile = () => {
  const [accessModalOpen, setAccessModalOpen] = React.useState(false);

  const imageStyle = {
    margin: "auto", borderTopLeftRadius: 4, borderTopRightRadius: 4
  };

  const cardStyleNavigate = {
  height: 420,
  width: 320,
  m: 2,
  transition: 'transform 0.3s, box-shadow 0.3s',
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1.03)',
    boxShadow: 6, // MUI shadow level
  }
};

  return (
    <Box>
      <HeaderMobile/>
      <Box sx={{ height: 80 }}/>
      <Typography sx={{...globalStyles.heading3, textAlign: "center", maxWidth: "80%", margin: "0 auto", marginBottom: 5 }}>Explore selected UX case studies demonstrating my design and problem-solving process and impact!</Typography>
      <PasswordModal open={accessModalOpen} handleClose={() => setAccessModalOpen(false)}/>
      <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ mt: 2 }}>
        <Link href="/hotelBookingApp" sx={{ textDecoration: 'none'}}>
          <Paper sx={cardStyleNavigate}>
            <Grid container direction="column" justifyContent="center" alignItems="center">
              <Grid item>
                <Image
                  src={FreebirdHotelsHero}
                  width={320}
                  alt="Hotel Booking App Hero"
                  style={imageStyle}
                />
              </Grid>
              <Grid item sx={{ p: 2 }}>
                <h1 style={{ ...globalStyles.heading4, textAlign: "center", fontWeight: 600 }}>Freebird Hotels</h1>
                <h2 style={{ ...globalStyles.heading6, textAlign: "center", marginTop: -10, fontStyle: "italic" }}>Fully detailed end-to-end case study demonstrating <b>design process</b> thinking</h2>
              </Grid>
            </Grid>           
          </Paper>
        </Link>
        <Link onClick={setAccessModalOpen} sx={{ textDecoration: 'none'}}>
          <Paper sx={cardStyleNavigate}>
            <Grid container direction="column" justifyContent="center" alignItems="center">
              <Grid item>
                <Image
                  src={DesignTidbits}
                  width={320}
                  alt="Professional Design Highlights Hero"
                  style={imageStyle}
                />
              </Grid>
              <Grid item sx={{ p: 2 }}>
                <h1 style={{ ...globalStyles.heading4, textAlign: "center", fontWeight: 600 }}>Professional Highlights</h1>
                <h2 style={{ ...globalStyles.heading6, textAlign: "center", marginTop: -10, fontStyle: "italic" }}>Selected Industry Work demonstrating design of impactful <b>shipped real-world user-facing features</b> and cross-functional collaboration</h2>
              </Grid>
            </Grid>   
          </Paper>
        </Link>
        <Link href="/lifeManagementApp" sx={{ textDecoration: 'none'}}>
          <Paper sx={{ ...cardStyleNavigate, mb: 10 }}>
            <Grid container direction="column" justifyContent="center" alignItems="center">
              <Grid item>
                <Image
                  src={LifeManagementHero}
                  width={320}
                  alt="Life Management App Hero"
                  style={imageStyle}
                />
              </Grid>
              <Grid item sx={{ p: 2 }}>
                <h1 style={{ ...globalStyles.heading4, textAlign: "center", fontWeight: 600 }}>KorkBoard</h1>
                <h2 style={{ ...globalStyles.heading6, textAlign: "center", marginTop: -10, fontStyle: "italic" }}>Problem-to-Solution UX Project demonstrating <b>problem solving</b> proficiency</h2>
              </Grid>
            </Grid>   
          </Paper>
        </Link>
      </Grid>
    </Box>
  );
};

export default CaseStudiesHomeMobile;