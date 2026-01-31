"use client"; 
import React, {  } from 'react';
import { Grid, List, ListItem, Box, Typography, Paper } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';
import GroupsIcon from '@mui/icons-material/Groups';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import UXDILogo from '../../../public/UXDI.png';
import KSULogo from '../../../public/KSU.png';
import AaronsTechLogo from '../../../public/aarons_tech_logo.jpg';
import MimedxLogo from '../../../public/mimedx_logo.png';
import Header from "../Header";
import Image from 'next/image';
import { blueGrey, grey } from '@mui/material/colors';
import * as globalStyles from '../styles/globalStyleConsts';

const sectionHeader = {
  fontSize: "24px",
  fontFamily: "Montserrat",
  marginBottom: "16px",
  marginTop: 5
};

const driveCard = {
  padding: 2,
  height: "100%"
}

const driveTitle = {
  fontFamily: "Montserrat", 
  textAlign: "center",
  marginBottom: 2,
  fontWeight: "bold"
}

const handleDownload = () => {
  const url = '/resume.pdf'; // Relative path from the public directory
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Chelsea_Vidrine_Resume.pdf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const ResumeContainer = () => {
  return (
    <div>
      <Header/>
      <Box container direction="column" justifyContent="center" sx={{ display: "flex", justifyContent: "center", backgroundColor: blueGrey[50]}}>
          <Box sx={{ maxWidth: "70%", padding: 5, marginTop: 10, marginBottom: 5, backgroundColor: "white" }}>
            <Box sx={{ marginBottom: 5 }}>
              <Typography sx={{ ...globalStyles.heading1, textAlign: "center" }} variant="h1">
                CHELSEA L. VIDRINE
              </Typography>
              <Typography sx={{ ...globalStyles.heading3, textAlign: "center" }}>
                UX DESIGNER
              </Typography>
            </Box>
            <Typography sx={{ ...globalStyles.heading5, textAlign: "center" }}>
              <EmailIcon sx={{ marginRight: 1 }}/>chelsea.vidrine2@gmail.com
            </Typography>
            <Typography sx={{ textAlign: "center", marginTop: -2, fontSize: 20, color: blueGrey[600], cursor: "pointer" }}>
                <button onClick={handleDownload}><DownloadIcon/>Download Resume PDF</button>
              </Typography>
            <Typography sx={sectionHeader}>
              SUMMARY
            </Typography>
            <Typography sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
              Passionate UX Designer with experience improving complex retail
              and e-commerce products through research-driven design and
              cross-functional collaboration. Focused on reducing friction in highvolume customer journeys and delivering measurable business
              impact by partnering closely with product managers, engineers, and
              users on agile teams.
            </Typography>
            <Typography sx={sectionHeader}>
              WHAT DRIVES ME?
            </Typography>

            <Grid container justifyContent="space-between" sx={{ marginBottom: 5 }}>
              <Grid item xs={3.8}>
                <Paper sx={{...driveCard, backgroundColor: grey[50]}}>
                  <Typography sx={driveTitle}>
                    <FavoriteBorderIcon sx={{ fontSize: 50, color: blueGrey[400] }}/><br/>
                    PASSION
                  </Typography>
                  <Typography sx={globalStyles.paragraphMed}>
                    Passion fuels my output. I care deeply about my users and their ability to achieve their goals.
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={3.8}>
              <Paper sx={{...driveCard, backgroundColor: grey[50]}}>
                <Typography sx={driveTitle}>
                  <PsychologyAltIcon sx={{ fontSize: 50, color: blueGrey[700] }} /><br/>
                  CURIOSITY
                </Typography>
                <Typography sx={globalStyles.paragraphMed}>
                  Why does engagement dip during this process? Why are our competitors so successful? Why is adoption lower than anticipated? My curiosity and love for discovery fuels effective research and problem-solving.
                  problems.
                </Typography>
              </Paper>
            </Grid>
            
            <Grid item xs={3.8}>
              <Paper sx={{...driveCard, backgroundColor: grey[50]}}>
                <Typography sx={driveTitle}>
                  <GroupsIcon sx={{ fontSize: 50, color: blueGrey[400] }} /><br/>
                  COMPASSION
                </Typography>
                <Typography sx={globalStyles.paragraphMed}>
                  I focus on the impact each product will have on the needs, emotions, and understanding of my users.
                </Typography>
              </Paper>
            </Grid>

            </Grid>

            <Typography sx={sectionHeader}>
              SKILLS
            </Typography>
            
            <Box sx={{ mb: 2 }}>
              <Typography sx={{ fontFamily: "Montserrat", fontSize: "16px", fontWeight: "bold" }}>
                UX Research & Analysis
              </Typography>
              <Typography sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
                 User interviews, surveys, usability testing, A/B testing, competitive analysis, insight synthesis (affinity mapping), journey mapping, personas
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography sx={{ fontFamily: "Montserrat", fontSize: "16px", fontWeight: "bold" }}>
                Interaction & UI Design
              </Typography>
              <Typography sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
                Information architecture, user flows, task flows, wireframing, prototyping, interaction design, design systems, component libraries, accessibility-aware design
              </Typography>
            </Box>
            
            <Box sx={{ mb: 2 }}>
              <Typography sx={{ fontFamily: "Montserrat", fontSize: "16px", fontWeight: "bold" }}>
                Design Tools
              </Typography>
              <Typography sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
                Figma, Miro, Adobe, Photoshop, Material Design, Google Analytics
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography sx={{ fontFamily: "Montserrat", fontSize: "16px", fontWeight: "bold" }}>
                Leadership, Collaboration, & Delivery
              </Typography>
              <Typography sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
                Stakeholder collaboration in Agile (Lean/Scrum) environments, design handoff, annotation, crossfunctional iteration
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography sx={{ fontFamily: "Montserrat", fontSize: "16px", fontWeight: "bold" }}>
                Technical Fluency
              </Typography>
              <Typography sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
                React, JavaScript, TypeScript, HTML5, CSS, Tailwind, SQL
              </Typography>
            </Box>

            <Typography sx={sectionHeader}>
              CAREER EXPERIENCE
            </Typography>

            <Grid container alignContent="center" alignItems="center" sx={{ marginTop: -3 }}>
              <Grid item>
                <Box sx={globalStyles.graphic}>
                  <Image
                    src={AaronsTechLogo}
                    width={80}
                    alt="Aaron's Tech Logo"
                  />
                </Box>
              </Grid>
              <Grid item>
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "20px" }}><b>Sr. Software Engineer</b> at Aaron’s INC</Typography>
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>March 2017 – currently employed</Typography>
              </Grid>   
            </Grid>

            <List sx={{ listStyleType: 'disc', marginLeft: 18, marginTop: -3 }}>
              <ListItem sx={{ display: 'list-item' }}>
                <Typography variant='body1' sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
                  Improved customer acquisition and onboarding by identifying
                  friction through user feedback and usability insights,
                  redesigning UI flows to reduce application drop-off and
                  completion time by 50%
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <Typography variant='body1' sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
                  Partnered with UX team to implement a fully remote web
                  application, expanding business operation online during the
                  COVID pandemic, streamlining onboarding and engagement
                  through interactive front-end components in React,
                  contributing to a 60% increase in closed deals.
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <Typography variant='body1' sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
                  Worked cross-functionally with designers, product partners,
                  and developers in an Agile environment to iterate on userfacing solutions, supporting nearly two million customer
                  enrollments in loyalty and auto-payment programs.
                </Typography>
              </ListItem>
            </List>

            <Grid container alignContent="center" alignItems="center" sx={{ marginTop: -3 }}>
              <Grid item>
                <Box sx={globalStyles.graphic}>
                  <Image
                    src={MimedxLogo}
                    width={80}
                    alt="Mimedx Logo"
                  />
                </Box>
              </Grid>
              <Grid item>
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "20px" }}><b>Quality Assurance Specialist</b> at MiMedx</Typography>
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>December 2014 - March 2018</Typography>
              </Grid>   
            </Grid>

            <List sx={{ listStyleType: 'disc', marginLeft: 18, marginTop: -3 }}>
              <ListItem sx={{ display: 'list-item' }}>
                <Typography variant='body1' sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
                  Ensured accuracy and compliance of high-volume
                  documentation in a regulated environment, reducing errors
                  through consistent quality review and process adherence.
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <Typography variant='body1' sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
                  Improved team efficiency by introducing a digital tasktracking and communication workflow, nearly doubling
                  review throughput and project turnaround time.
                </Typography>
              </ListItem>
            </List>

            <Typography sx={sectionHeader}>
              EDUCATION
            </Typography>
            <Grid container alignContent="center" alignItems="center">
              <Grid item>
                <Box sx={globalStyles.graphic}>
                  <Image
                    src={UXDILogo}
                    width={80}
                    alt="UXDI Logo"
                  />
                </Box>
              </Grid>
              <Grid item>
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "20px" }}>UX Professional Diploma – May 2024</Typography>
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>UX Design Institute (Accredited by Glascow Caledonian University)</Typography>
              </Grid>   
            </Grid>
            <Grid container alignContent="center" alignItems="center" sx={{ marginTop: -4 }}>
              <Grid item>
                <Box sx={globalStyles.graphic}>
                  <Image
                    src={KSULogo}
                    width={80}
                    alt="KSU logo"
                  />
                </Box>
              </Grid>
              <Grid item>
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "20px" }}>BA Applied Computer Science – December 2016</Typography>
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>Kennesaw State University</Typography>
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "14px" }}>Magna Cum Laude</Typography>
              </Grid>             
            </Grid>
          </Box>
      </Box>
    </div>
  );
};

export default ResumeContainer;