"use client"; 
import React, {  } from 'react';
import { Grid, List, ListItem, Box, Typography, Paper } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import DownloadIcon from '@mui/icons-material/Download';
import GroupsIcon from '@mui/icons-material/Groups';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import UXDILogo from '../../../public/UXDI.png';
import KSULogo from '../../../public/KSU.png';
import AaronsTechLogo from '../../../public/aarons_tech_logo.jpg';
import Header from "../caseStudies/Header";
import Image from 'next/image';
import { blue } from '@mui/material/colors';

const sectionHeader = {
  fontSize: "24px",
  fontFamily: "Montserrat",
  marginBottom: "16px",
  marginTop: 3
};

const driveCard = {
  backgroundColor: "gainsboro",
  padding: 2,
  height: "100%"
}

const driveTitle = {
  fontFamily: "Montserrat", 
  textAlign: "center",
  marginBottom: 2
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

const ResumePage = () => {
  return (
    <div>
      <Header/>
      <Box container direction="column" justifyContent="center" sx={{ display: "flex", justifyContent: "center", backgroundColor: blue[100]}}>
          <Box sx={{ maxWidth: "60%", padding: 5, marginTop: 10, marginBottom: 5, backgroundColor: "white" }}>
            <Box sx={{ marginBottom: 5 }}>
              <Typography className="heading1" sx={{ textAlign: "center" }} variant="h1">
                CHELSEA L. VIDRINE
              </Typography>
              <Typography className="heading3" sx={{ textAlign: "center" }}>
                UX RESEARCH & DESIGN
              </Typography>
            </Box>
            <Typography className="heading5" sx={{ textAlign: "center" }}>
              <EmailIcon sx={{ marginRight: 1 }}/>chelsea.vidrine2&nbsp;&nbsp;|&nbsp;&nbsp;
              <LocalPhoneIcon sx={{ marginRight: 1 }}/>470-546-2359
            </Typography>
            <Typography sx={{ textAlign: "center", marginTop: -2, fontSize: 20, color: blue[600], cursor: "pointer" }}>
                <button onClick={handleDownload}><DownloadIcon/>Download Resume PDF</button>
              </Typography>
            <Typography sx={sectionHeader}>
              MISSION
            </Typography>
            <Typography sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
              I am an IT professional with 7+ years of experience as a software
              engineer. I am looking to leverage my development expertise and
              passion for user interfaces to transition into a UX role. I have years of
              professional experience communicating with stakeholders and UX
              leaders to translate user needs into functional interfaces that both
              drive positive user engagement and meet business objectives. I
              recently completed a professional diploma in UX research and
              design, and I’m ready to take the next step in my career.
            </Typography>
            <Typography sx={sectionHeader}>
              WHAT DRIVES ME?
            </Typography>

            <Grid container justifyContent="space-between" sx={{ marginBottom: 5 }}>
              <Grid item xs={3.8}>
                <Paper sx={driveCard}>
                  <Typography sx={driveTitle}>
                    <FavoriteBorderIcon sx={{ fontSize: 50 }}/><br/>
                    PASSION
                  </Typography>
                  <Typography className='paragraph-med'>
                    Passion is the most important
                    trait to my career. Without
                    passion, top-quality products
                    and solutions are not
                    possible. Passion fuels my
                    output every single day.
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={3.8}>
              <Paper sx={driveCard}>
                <Typography sx={driveTitle}>
                  <PsychologyAltIcon sx={{ fontSize: 50 }} /><br/>
                  CURIOSITY
                </Typography>
                <Typography className='paragraph-med'>
                  I am a lover of exploration
                  and discovery. I like to ask
                  “why?” Why does
                  engagement dip during this
                  part of the process? Why
                  are our competitors having
                  better success that us? Why
                  is the customer feeling this
                  way? My curious mind helps
                  me to conduct effective
                  research and solve difficult
                  problems.
                </Typography>
              </Paper>
            </Grid>
            
            <Grid item xs={3.8}>
              <Paper sx={driveCard}>
                <Typography sx={driveTitle}>
                  <GroupsIcon sx={{ fontSize: 50 }} /><br/>
                  COMPASSION
                </Typography>
                <Typography className='paragraph-med'>
                  Compassion leads to
                  excellent user interfaces. I
                  don’t produce anything
                  without first considering
                  what impact it will have on
                  my users’ needs, emotions,
                  limitations, and
                  understanding. 
                </Typography>
              </Paper>
            </Grid>

            </Grid>

            <Typography sx={sectionHeader}>
              TECHNICAL SKILLS
            </Typography>
            <List sx={{ listStyleType: 'disc', marginLeft: 5, marginBottom: 4 }}>
              <ListItem sx={{ display: 'list-item'}}>
                <Typography variant='body1' sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
                  User Research (Mixed methods)
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <Typography variant='body1' sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
                  Wireframing & flowcharting (Miro)
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <Typography variant='body1' sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
                  Design, Prototyping, & Annotation (Figma)
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <Typography variant='body1' sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
                  Coding: HTML, CSS & JavaScript w/ React
                </Typography>
              </ListItem>
            </List>
            <Typography sx={sectionHeader}>
              CAREER EXPERIENCE
            </Typography>

            <Grid container alignContent="center" alignItems="center" sx={{ marginTop: -3 }}>
              <Grid item>
                <Image
                  className='graphic'
                  src={AaronsTechLogo}
                  width={80}
                  alt="Aaron's Tech Logo"
                />
              </Grid>
              <Grid item>
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "20px" }}>Software Engineer at Aaron’s INC</Typography>
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>March 2017 – currently employed</Typography>
              </Grid>   
            </Grid>

            <List sx={{ listStyleType: 'disc', marginLeft: 18, marginTop: -3 }}>
              <ListItem sx={{ display: 'list-item' }}>
                <Typography variant='body1' sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
                  <b>Engineering Effective Customer Experiences</b><br/>
                  <span>
                    I develop and support products which drive customer
                    acquisition, onboarding, and retention. I’ve driven
                    company profits by putting the focus on the user and
                    creating positive user experiences through tools that
                    are effective, intuitive, delightful and accessible.
                  </span>
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <Typography variant='body1' sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
                  <b>Solutioning in a Collaborative and Agile Environment</b><br/>
                  <span>
                    Together with a small, highly collaborative team of
                    managers, designers, and developers, I work every
                    day to design, develop, test, and deploy solutions in a
                    fast, iterative, and agile manner.
                  </span>
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <Typography variant='body1' sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
                  <b>Growing Through Flexibility and Well-roundedness</b><br/>
                  <span>
                    Throughout my years at Aaron’s, I have gained experience in an array of technologies from front end to back end to data management, always eager to pick up new skills and learn new things. 
                  </span>
                </Typography>
              </ListItem>
            </List>
            <Typography sx={sectionHeader}>
              EDUCATION
            </Typography>
            <Grid container alignContent="center" alignItems="center">
              <Grid item>
                <Image
                  className='graphic'
                  src={UXDILogo}
                  width={80}
                  alt="UXDI Logo"
                />
              </Grid>
              <Grid item>
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "20px" }}>UX Professional Diploma – Awarded May 2024</Typography>
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>UX Design Institute (Accredited by Glascow Caledonian University)</Typography>
              </Grid>   
            </Grid>
            <Grid container alignContent="center" alignItems="center" sx={{ marginTop: -4 }}>
              <Grid item>
                <Image
                  className='graphic'
                  src={KSULogo}
                  width={80}
                  alt="KSU logo"
                />
              </Grid>
              <Grid item>
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "20px" }}>BA Applied Computer Science – Awarded December 2016</Typography>
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>Kennesaw State University</Typography>
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "14px" }}>Magna Cum Laude</Typography>
              </Grid>             
            </Grid>
          </Box>
      </Box>
    </div>
  );
};

export default ResumePage;