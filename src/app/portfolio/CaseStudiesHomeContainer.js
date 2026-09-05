
"use client"; 
import React, {  } from 'react';
import Image from 'next/image';
import { Box, Chip, Grid, Paper, Typography, Link, List, ListItem } from '@mui/material';
import Header from '../Header';
import FreebirdHotelsHero from '../../../public/Freebird_Hotels_Hero.webp';
import LifeManagementHero from '../../../public/Life_Management_Hero.png';
import BatchedAgreementsHero from '../../../public/BatchedAgreementPayments/Case_Study_Thumbnail.png';
import DesignTidbits from '../../../public/Design_Tidbits.png';
import { blue, orange, green, purple } from '@mui/material/colors';
import * as globalStyles from '../styles/globalStyleConsts';
import PasswordModal from './PasswordModal';

const CaseStudiesHomeContainer = () => {
const [accessModalOpen, setAccessModalOpen] = React.useState(false);
const [accessDestination, setAccessDestination] = React.useState('/designTidbits');

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
  height: 480,
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
          align="center"
          sx={{ ...globalStyles.heading1, fontSize: 24, width: "50%", margin: "0 auto" }}
        >
          Explore selected UX case studies demonstrating my design process and impact!
      </Typography>
      <Box sx={{ mt: '30px' }}/>
      <PasswordModal open={accessModalOpen} handleClose={() => setAccessModalOpen(false)} destination={accessDestination}/>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 0, pb: 10 }}
      >
        <Link onClick={() => { setAccessDestination('/batchedAgreements'); setAccessModalOpen(true); }} sx={{ textDecoration: 'none'}}>
          <Paper sx={cardStyleNavigate}>
            <Grid container direction="column" justifyContent="center" alignItems="center">
              <Grid item>
                <Image
                  src={BatchedAgreementsHero}
                  width={380}
                  alt="Batched Agreements Hero"
                  style={{ margin: "auto", borderTopLeftRadius: 4, borderTopRightRadius: 4 }}
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
                  <Chip label="Web application" sx={{ backgroundColor: purple[800], color: "white" }} size="medium" />
                </Box>
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
                  loading="eager"
                  alt="Life Management Hero"
                  style={{ margin: "auto", borderTopLeftRadius: 4, borderTopRightRadius: 4 }}
                />
              </Grid>
              <Grid item sx={{ p: 2 }}>
                <h1 style={{ ...globalStyles.heading4, fontSize: 18, textAlign: "center", fontWeight: 600 }}>KorkBoard</h1>
                <Typography sx={{ fontSize: 13, textAlign: 'center', fontStyle: 'italic', mb: 1 }}>2025</Typography>
                <h2 style={{ ...globalStyles.heading6, fontSize: 16, textAlign: "center", fontStyle: "italic" }}>An all-in-one tool for planning and managing tasks and tracking goals</h2>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center', mt: 2 }}>
                  <Chip label="Personal passion project" size="medium" sx={{ backgroundColor: blue[800], color: "white" }}/>
                  <Chip label="Problem-solving" sx={{ backgroundColor: orange[900], color: "white" }} size="medium" />
                  <Chip label="Response to user needs" sx={{ backgroundColor: green[800], color: "white" }} size="medium" />
                  <Chip label="Mobile application" sx={{ backgroundColor: purple[800], color: "white" }} size="medium" />
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
                  width={380}
                  alt="Hotel Booking App Hero"
                  style={{ margin: "auto", borderTopLeftRadius: 4, borderTopRightRadius: 4 }}
                />
              </Grid>
              <Grid item sx={{ p: 2 }}>
                <h1 style={{ ...globalStyles.heading4, fontSize: 18, textAlign: "center", fontWeight: 600 }}>Freebird Hotels</h1>
                <Typography sx={{ fontSize: 13, textAlign: 'center', fontStyle: 'italic', mb: 1 }}>2024</Typography>
                <h2 style={{ ...globalStyles.heading6, fontSize: 16, textAlign: "center", fontStyle: "italic" }}>An end-to-end hotel booking experience from browsing to stay confirmation</h2>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center'}}>
                  <Chip label="UX Design Institute project" size="medium" sx={{ backgroundColor: blue[800], color: "white" }}/>
                  <Chip label="Design process" sx={{ backgroundColor: orange[900], color: "white" }} size="medium" />
                  <Chip label="Detailed end-to-end study" sx={{ backgroundColor: green[800], color: "white" }} size="medium" />
                  <Chip label="Mobile application" sx={{ backgroundColor: purple[800], color: "white" }} size="medium" />
                </Box>
              </Grid>
            </Grid>           
          </Paper>
        </Link>
           <Link onClick={() => { setAccessDestination('/designTidbits'); setAccessModalOpen(true); }} sx={{ textDecoration: 'none'}}>
          <Paper sx={cardStyleNavigate}>
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
                <h1 style={{ ...globalStyles.heading4, fontSize: 18, textAlign: "center", fontWeight: 600 }}>Professional Feature Highlights</h1>
                <Typography sx={{ fontSize: 13, textAlign: 'center', fontStyle: 'italic', mb: 1 }}>2021 - present</Typography>
                <h2 style={{ ...globalStyles.heading6, fontSize: 16, textAlign: "center", fontStyle: "italic" }}>A collection of selected industry work showcasing impactful, user-facing features</h2>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center', mt: 2 }}>
                  <Chip label="Industry work" size="medium" sx={{ backgroundColor: blue[800], color: "white" }}/>
                  <Chip label="Real delivered results" sx={{ backgroundColor: orange[900], color: "white" }} size="medium" />
                  <Chip label="Knowledge and versatility" sx={{ backgroundColor: green[800], color: "white" }} size="medium" />
                  <Chip label="Responsive Designs" sx={{ backgroundColor: purple[800], color: "white" }} size="medium" />
                </Box>
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