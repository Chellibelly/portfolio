

"use client"; 
import React, {  } from 'react';
import Image from 'next/image';
import { Box, Chip, Grid, Paper, Typography, Link } from '@mui/material';
import Header from '../Header';
import FreebirdHotelsHero from '../../../public/Freebird_Hotels_Hero.webp';
import LifeManagementHero from '../../../public/Life_Management_Hero.png';
import BatchedAgreementsHero from '../../../public/BatchedAgreementPayments/Case_Study_Thumbnail.png';
import DesignTidbits from '../../../public/Design_Tidbits.png';
import HeaderMobile from '../HeaderMobile';
import * as globalStyles from '../styles/globalStyleConsts';
import PasswordModal from './PasswordModal';
import { blue, orange, green, purple } from '@mui/material/colors';


const CaseStudiesHomeMobile = () => {
  const [accessModalOpen, setAccessModalOpen] = React.useState(false);
  const [accessDestination, setAccessDestination] = React.useState('/designTidbits');

  const imageStyle = {
    margin: "auto", borderTopLeftRadius: 4, borderTopRightRadius: 4
  };

  const cardStyleNavigate = {
  height: 460,
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
      <Typography sx={{...globalStyles.heading4, textAlign: "center", maxWidth: "80%", margin: "0 auto", marginBottom: 5 }}>Explore selected UX case studies demonstrating my design and problem-solving process and impact!</Typography>
      <PasswordModal open={accessModalOpen} handleClose={() => setAccessModalOpen(false)} destination={accessDestination}/>
      <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ mt: 2 }}>

      <Link onClick={() => { setAccessDestination('/batchedAgreements'); setAccessModalOpen(true); }} sx={{ textDecoration: 'none'}}>
          <Paper sx={{ ...cardStyleNavigate }}>
            <Grid container direction="column" justifyContent="center" alignItems="center">
              <Grid item>
                <Image
                  src={BatchedAgreementsHero}
                  width={320}
                  alt="Batched Payments Hero"
                  style={imageStyle}
                />
              </Grid>
              <Grid item sx={{ p: 2 }}>
                <h1 style={{ ...globalStyles.heading4, fontSize: 18, textAlign: "center", fontWeight: 600 }}>Batching Payments</h1>
                <Typography sx={{ fontSize: 13, textAlign: 'center', fontStyle: 'italic', mb: 1 }}>2026</Typography>
                <h2 style={{ ...globalStyles.heading6, fontSize: 16, textAlign: "center", fontStyle: "italic" }}>A cohesive workflow for taking payments across multiple customer orders at once</h2>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center', mt: 2 }}>
                  <Chip label="Industry work" size="medium" sx={{ backgroundColor: blue[800], color: "white" }} />
                  <Chip label="Stakeholder management" sx={{ backgroundColor: orange[900], color: "white" }} size="medium" />
                  <Chip label="UX Engineer role" sx={{ backgroundColor: green[800], color: "white" }} size="medium" />
                  <Chip label="Web app" sx={{ backgroundColor: purple[800], color: "white" }} size="medium" />
                </Box>
              </Grid>
            </Grid>   
          </Paper>
        </Link>
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
                <h1 style={{ ...globalStyles.heading4, fontSize: 18, textAlign: "center", fontWeight: 600 }}>Freebird Hotels</h1>
                <Typography sx={{ fontSize: 13, textAlign: 'center', fontStyle: 'italic', mb: 1 }}>2024</Typography>
                <h2 style={{ ...globalStyles.heading6, fontSize: 16, textAlign: "center", fontStyle: "italic" }}>An all-in-one tool for planning and managing tasks and tracking goals</h2>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center', mt: 2 }}>
                  <Chip label="Personal project" size="medium" sx={{ backgroundColor: blue[800], color: "white" }}/>
                  <Chip label="Problem-solving" sx={{ backgroundColor: orange[900], color: "white" }} size="medium" />
                  <Chip label="Response to user needs" sx={{ backgroundColor: green[800], color: "white" }} size="medium" />
                  <Chip label="Mobile app" sx={{ backgroundColor: purple[800], color: "white" }} size="medium" />
                </Box>
              </Grid>
            </Grid>           
          </Paper>
        </Link>
        <Link href="/lifeManagementApp" sx={{ textDecoration: 'none' }}>
          <Paper sx={{ ...cardStyleNavigate }}>
            <Grid container direction="column" justifyContent="center" alignItems="center">
              <Grid item>
                <Image
                  src={LifeManagementHero}
                  width={320}
                  loading="eager"
                  alt="Life Management Hero"
                  style={imageStyle}
                />
              </Grid>
              <Grid item sx={{ p: 2 }}>
                <h1 style={{ ...globalStyles.heading4, fontSize: 18, textAlign: "center", fontWeight: 600 }}>KorkBoard</h1>
                <Typography sx={{ fontSize: 13, textAlign: 'center', fontStyle: 'italic', mb: 1 }}>2025</Typography>
                <h2 style={{ ...globalStyles.heading6, fontSize: 16, textAlign: "center", fontStyle: "italic" }}>An end-to-end hotel booking experience from browsing to stay confirmation</h2>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center', mt: 2 }}>
                  <Chip label="UXDI project" size="medium" sx={{ backgroundColor: blue[800], color: "white" }}/>
                  <Chip label="Design process" sx={{ backgroundColor: orange[900], color: "white" }} size="medium" />
                  <Chip label="Detailed end-to-end" sx={{ backgroundColor: green[800], color: "white" }} size="medium" />
                  <Chip label="Mobile app" sx={{ backgroundColor: purple[800], color: "white" }} size="medium" />
                </Box>
              </Grid>
            </Grid>   
          </Paper>
        </Link>
         <Link onClick={() => { setAccessDestination('/designTidbits'); setAccessModalOpen(true); }} sx={{ textDecoration: 'none', mb: 10}}>
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
                <h1 style={{ ...globalStyles.heading4, fontSize: 18, textAlign: "center", fontWeight: 600 }}>Professional Feature Highlights</h1>
                <Typography sx={{ fontSize: 13, textAlign: 'center', fontStyle: 'italic', mb: 1 }}>2021 - present</Typography>
                <h2 style={{ ...globalStyles.heading6, fontSize: 14, textAlign: "center", fontStyle: "italic" }}>A collection of selected industry work showcasing impactful features</h2>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center', mt: 2 }}>
                  <Chip label="Industry work" size="medium" sx={{ backgroundColor: blue[800], color: "white" }}/>
                  <Chip label="Real delivered value" sx={{ backgroundColor: orange[900], color: "white" }} size="medium" />
                  <Chip label="Versatility" sx={{ backgroundColor: green[800], color: "white" }} size="medium" />
                  <Chip label="Responsive Designs" sx={{ backgroundColor: purple[800], color: "white" }} size="medium" />
                </Box>
              </Grid>
            </Grid>   
          </Paper>
        </Link>

      </Grid>
    </Box>
  );
};

export default CaseStudiesHomeMobile;