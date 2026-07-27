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
              Product designer with 8+ years of digital product experience spanning UX, front-end engineering, and quality assurance in retail and e-commerce. Experienced translating validated user needs into scalable, implementation-ready solutions that reduce friction in high-volume customer journeys and deliver measurable business impact.
            </Typography>
           <Box sx={sectionHeader}>
             <hr style={{ borderColor: grey[400] }}/>
            </Box>
            <Typography sx={sectionHeader}>
              SKILLS
            </Typography>
            
            <Box sx={{ mb: 2 }}>
              <Typography sx={{ fontFamily: "Montserrat", fontSize: "16px", fontWeight: "bold" }}>
                UX Research & Analysis
              </Typography>
              <Typography sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
                - User interviews, surveys, usability testing, requirements gathering, product discovery
              </Typography>
              <Typography sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
                - Competitive analysis, affinity mapping, journey mapping
              </Typography>
              <Typography sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
                - Research synthesis and data-informed design 
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography sx={{ fontFamily: "Montserrat", fontSize: "16px", fontWeight: "bold" }}>
                Interaction & Product Design
              </Typography>
              <Typography sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
                - Information architecture, user flows, interaction design
              </Typography>
              <Typography sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
                - Complex workflow design, wireframing, prototyping, responsive design
              </Typography>
              <Typography sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
                - Design systems, component libraries, and accessibility informed by WCAG
              </Typography>
              <Typography sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
                - UX writing, content design, and error-state messaging
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
               <Typography sx={{ fontFamily: "Montserrat", fontSize: "16px", fontWeight: "bold" }}>
                Facilitation & Collaboration
              </Typography>
              <Typography sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
                - Design jams and collaborative workshops
              </Typography>
              <Typography sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
                - Stakeholder presentations and cross-functional iteration
              </Typography>
              <Typography sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
                - Design handoff, annotations, design QA, and implementation review
              </Typography>
            </Box>
            
            <Box sx={{ mb: 2 }}>
              <Typography sx={{ fontFamily: "Montserrat", fontSize: "16px", fontWeight: "bold" }}>
                Design, Analytics & AI Tools
              </Typography>
              <Typography sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
                - Figma <br/>
                - UXPin <br/>
                - Miro <br/>
                - Google Analytics <br/>
                - Figma Make <br/>
                - Google Stitch <br/>
                - GitHub Copilot <br/>
                - Claude Code
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography sx={{ fontFamily: "Montserrat", fontSize: "16px", fontWeight: "bold" }}>
                Technical Fluency
              </Typography>
              <Typography sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
                - React <br/>
                - JavaScript <br/>
                - TypeScript <br/>
                - HTML5 <br/>
                - Responsive CSS <br/>
                - C# .NET <br/>
                - SQL
              </Typography>
            </Box>
<Box sx={sectionHeader}>
             <hr style={{ borderColor: grey[400] }}/>
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
              <Grid item sx={{ ml: 1 }}>
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "20px" }}><b>Sr. Software Engineer</b> at Aaron’s</Typography>
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "14px" }}><i>Retail | e-commerce | rent-to-own</i></Typography>
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>March 2017 – Present</Typography>
              </Grid>   
            </Grid>

            <List sx={{ listStyleType: 'disc', marginLeft: 18, marginTop: -3 }}>
              <ListItem sx={{ display: 'list-item' }}>
                <Typography variant='body1' sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
                  Led an end-to-end UX sprint for a unified payment workflow that allowed stores to process multiple customer agreement payments at once, replacing a repetitive agreement-by-agreement process; facilitated a design jam, validated needs with store users, iterated with design and product partners, and carried the approved solution through handoff and implementation.
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <Typography variant='body1' sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
                  Improved customer acquisition and onboarding by identifying friction through user feedback and usability insights, redesigning end-to-end UI flows to reduce application drop-off and completion time by 50%.
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <Typography variant='body1' sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
                  Partnered with UX team to implement a fully remote web application, expanding business operation online during the COVID pandemic, streamlining onboarding and engagement through interactive flows, contributing to a 60% increase in closed deals.
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <Typography variant='body1' sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
                  Collaborated with design, product, and engineering partners to iterate on loyalty and autopay experiences supporting nearly two million customer enrollments.
                </Typography>
              </ListItem>
            </List>

            <Grid container alignContent="center" alignItems="center">
              <Grid item>
                <Box sx={globalStyles.graphic}>
                  <Image
                    src={MimedxLogo}
                    width={80}
                    alt="Mimedx Logo"
                  />
                </Box>
              </Grid>
              <Grid item sx={{ ml: 1 }}>
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "20px" }}><b>Quality Assurance Specialist</b> at MiMedx</Typography>
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "14px" }}><i>Pharmaceuticals | Healthcare | Manufacturing</i></Typography>
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>December 2014 - March 2018</Typography>
              </Grid>   
            </Grid>

            <List sx={{ listStyleType: 'disc', marginLeft: 18, marginTop: -3 }}>
              <ListItem sx={{ display: 'list-item' }}>
                <Typography variant='body1' sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
                  Ensured accuracy and compliance of high-volume documentation in a regulated environment, reducing errors through consistent quality review and process adherence.
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <Typography variant='body1' sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
                  Nearly doubled review throughput by introducing a digital task-tracking and communication workflow that improved team coordination and project turnaround.
                </Typography>
              </ListItem>
            </List>
<Box sx={sectionHeader}>
             <hr style={{ borderColor: grey[400] }}/>
            </Box>
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
              <Grid item sx={{ ml: 1 }}>
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "20px" }}><b>UX Professional Diploma</b> – May 2024</Typography>
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
              <Grid item sx={{ ml: 1 }}>
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "20px" }}><b>BA Applied Computer Science</b> – December 2016</Typography>
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