"use client"; 
import React, {  } from 'react';
import Image from 'next/image';
import { Box, Grid, Paper, Typography, Link } from '@mui/material';
import Header from '../Header';
import MenagerieHotelsHero from '../../../public/Menagerie_Hotels_Hero.png';
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
  height: 500,
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
      <Typography sx={{...globalStyles.heading1, mt:10, textAlign: "center" }}>Check out my work!</Typography>
      <PasswordModal open={accessModalOpen} handleClose={() => setAccessModalOpen(false)}/>
      <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ mt: 2 }}>
        <Link href="/hotelBookingApp" sx={{ textDecoration: 'none'}}>
          <Paper sx={cardStyleNavigate}>
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
                <h1 style={{ ...globalStyles.heading4, textAlign: "center", fontWeight: 600 }}>Menagerie Hotels<br/><span style={{...globalStyles.heading5}}>Booking Website</span></h1>
                <h2 style={{ ...globalStyles.heading6, textAlign: "center", marginTop: -10, fontStyle: "italic" }}>UXDI Diploma Project</h2>
                <p>Tap here if you're looking for a full, detailed, end-to-end case study organized to demonstrate my grasp of the <b>UX process</b>.</p>
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
                  width={320}
                  alt="Life Management App Hero"
                  style={imageStyle}
                />
              </Grid>
              <Grid item sx={{ p: 2 }}>
                <h1 style={{ ...globalStyles.heading4, textAlign: "center", fontWeight: 600 }}>KorkBoard<br/><span style={{...globalStyles.heading5}}>Life Management App</span></h1>
                <h2 style={{ ...globalStyles.heading6, textAlign: "center", marginTop: -10, fontStyle: "italic" }}>Personal Passion Project</h2>
                <p>Click here if you're curious how I translate research into deliverables, presented in a layout focused on identifying real <b>problems and solutions</b>.</p>
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
                <h2 style={{ ...globalStyles.heading6, textAlign: "center", marginTop: -10, fontStyle: "italic" }}>Selected Career Projects</h2>
                <p>Click here if you want a peek into how I collaborate with cross-functional teams to ship real features backed by research, stakeholder alignment, and <b>real-world results</b>.</p>
              </Grid>
            </Grid>   
          </Paper>
        </Link>
        
       
      </Grid>
    </Box>
  );
};

export default CaseStudiesHomeMobile;