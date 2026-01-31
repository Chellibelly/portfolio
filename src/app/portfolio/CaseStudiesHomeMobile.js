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
      <Typography sx={{...globalStyles.heading3, mt:10, textAlign: "center" }}>Explore selected UX case studies demonstrating my design and problem-solving process and impact!</Typography>
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
                <h1 style={{ ...globalStyles.heading4, textAlign: "center", fontWeight: 600 }}>Menagerie Hotels</h1>
                <h2 style={{ ...globalStyles.heading6, textAlign: "center", marginTop: -10, fontStyle: "italic" }}>End-to-End UX Case Study</h2>
                <p>A comprehensive UX case study completed as part of my UX Design Institute diploma, demonstrating research, synthesis, ideation, wireframing, and high-fidelity design across a full design lifecycle.</p>
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
                <h1 style={{ ...globalStyles.heading4, textAlign: "center", fontWeight: 600 }}>KorkBoard</h1>
                <h2 style={{ ...globalStyles.heading6, textAlign: "center", marginTop: -10, fontStyle: "italic" }}>Problem-to-Solution UX Project</h2>
                <p>A self-directed project exploring how qualitative research and usability insights translate into clear problem statements, design solutions, and practical UX deliverables.</p>
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
                <h2 style={{ ...globalStyles.heading6, textAlign: "center", marginTop: -10, fontStyle: "italic" }}>Selected Industry Work</h2>
                <p>A collection of real-world product contributions showcasing collaboration with designers, engineers, and stakeholders to ship real user-facing features backed by research, alignment, and measurable outcomes.</p>
              </Grid>
            </Grid>   
          </Paper>
        </Link>
        
       
      </Grid>
    </Box>
  );
};

export default CaseStudiesHomeMobile;