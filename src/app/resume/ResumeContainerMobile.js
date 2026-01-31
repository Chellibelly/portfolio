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
import HeaderMobile from "../HeaderMobile";
import Image from 'next/image';
import { blueGrey, grey } from '@mui/material/colors';
import * as globalStyles from '../styles/globalStyleConsts';

const sectionHeader = {
  fontSize: "26px",
  fontFamily: "Montserrat",
  marginBottom: "16px",
  marginTop: 4,
};

const handleDownload = () => {
  const url = '/resume.pdf'; // Relative path from the public directory
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Chelsea_Vidrine_Resume.pdf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const ResumeContainerMobile = () => {
  return (
    <div>
      <HeaderMobile/>
      <Box container direction="column" justifyContent="center" sx={{ display: "flex", justifyContent: "center", marginTop: 5 }}>
          <Box sx={{ maxWidth: "100%", padding: 3, marginTop: 3, marginBottom: 5 }}>
            <Box sx={{ marginBottom: 3 }}>
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
            <Box sx={{ mt: 2, mb: 2 }}>
              <hr style={{ borderColor: grey[400] }}/>
            </Box>
            <Typography sx={sectionHeader}>
              WHAT DRIVES ME?
            </Typography>
            <Box sx={{ mb: 3 }}>
              <Grid container>
                <Grid item>
                  <FavoriteBorderIcon sx={{ fontSize: 40, color: blueGrey[400] }}/>
                </Grid>
                <Grid item>
                  <Typography sx={{ fontSize: 16, ml: "5px", mt: "6px", fontWeight: "bold", fontFamily: "Montserrat" }}>PASSION</Typography>
                </Grid>
              </Grid>
              <Typography sx={{ mt: 1, ml: 1, fontFamily: "Montserrat" }}>
                Passion fuels my output. I care deeply about my users and their ability to achieve their goals.
              </Typography>
            </Box>
            <Box sx={{ mb: 3 }}>
              <Grid container>
                <Grid item>
                  <GroupsIcon sx={{ fontSize: 40, color: blueGrey[400] }} /><br/>
                </Grid>
                <Grid item>
                  <Typography sx={{ fontSize: 16, ml: "5px", mt: "6px", fontWeight: "bold", fontFamily: "Montserrat" }}>COMPASSION</Typography>
                </Grid>
              </Grid>
              <Typography sx={{ mt: 1, ml: 1, fontFamily: "Montserrat" }}>
                I focus on the impact each product will have on the needs, emotions, and understanding of my users.
              </Typography>
            </Box>
            <Box sx={{ mb: 3 }}>
              <Grid container>
                <Grid item>
                  <PsychologyAltIcon sx={{ fontSize: 40, color: blueGrey[700] }} />
                </Grid>
                <Grid item>
                  <Typography sx={{ fontSize: 16, ml: "5px", mt: "6px", fontWeight: "bold", fontFamily: "Montserrat" }}>CURIOSITY</Typography>
                </Grid>
              </Grid>
              <Typography sx={{ mt: 1, ml: 1, fontFamily: "Montserrat" }}>
                Why does engagement dip during this process? Why are our competitors so successful? Why is adoption lower than anticipated? My curiosity and love for discovery fuels effective research and problem-solving.
              </Typography>
            </Box>
            <Box sx={{ mt: 2, mb: 2 }}>
              <hr style={{ borderColor: grey[400] }}/>
            </Box>
            <Typography sx={sectionHeader}>
              SKILLS
            </Typography>
            <Box sx={{ mb: 3 }}>
              <Typography sx={{ fontSize: 17, fontWeight: "bold", fontFamily: "Montserrat", mb: 1 }}>
                UX Research & Analysis
              </Typography>
              <Typography sx={{ fontSize: 16, fontFamily: "Montserrat" }}>
                User interviews, surveys, usability testing, A/B testing, competitive analysis, insight synthesis (affinity mapping), journey mapping, personas
              </Typography>
            </Box>
            <Box sx={{ mb: 3 }}>
              <Typography sx={{ fontSize: 17, fontWeight: "bold", fontFamily: "Montserrat", mb: 1 }}>
                Interaction & UI Design
              </Typography>
              <Typography sx={{ fontSize: 16, fontFamily: "Montserrat" }}>
                Information architecture, user flows, task flows, wireframing, prototyping, interaction design, design systems, component libraries, accessibility-aware design
              </Typography>
            </Box>
            <Box sx={{ mb: 3 }}>
              <Typography sx={{ fontSize: 17, fontWeight: "bold", fontFamily: "Montserrat", mb: 1 }}>
                Design Tools
              </Typography>
              <Typography sx={{ fontSize: 16, fontFamily: "Montserrat" }}>
                Figma, Miro, Adobe, Photoshop, Material Design, Google Analytics
              </Typography>
            </Box>
            <Box sx={{ mb: 3 }}>
              <Typography sx={{ fontSize: 17, fontWeight: "bold", fontFamily: "Montserrat", mb: 1 }}>
                Leadership, Collaboration, & Delivery
              </Typography>
              <Typography sx={{ fontSize: 16, fontFamily: "Montserrat" }}>
                Stakeholder collaboration in Agile (Lean/Scrum) environments, design handoff, annotation, crossfunctional iteration
              </Typography>
            </Box>
            <Box sx={{ mb: 3 }}>
              <Typography sx={{ fontSize: 17, fontWeight: "bold", fontFamily: "Montserrat", mb: 1 }}>
                Technical Fluency
              </Typography>
              <Typography sx={{ fontSize: 16, fontFamily: "Montserrat" }}>
                React, JavaScript, TypeScript, HTML5, CSS, Tailwind, SQL
              </Typography>
            </Box>
            <Box sx={{ mt: 2, mb: 2 }}>
              <hr style={{ borderColor: grey[400] }}/>
            </Box>
            <Typography sx={sectionHeader}>
              CAREER EXPERIENCE
            </Typography>
            <Grid container alignContent="center" alignItems="center" sx={{ mt: 3, mb: 2 }}>
              <Grid item sx={{ mr: 3 }}>
                <Image
                  src={AaronsTechLogo}
                  width={80}
                  alt="Aaron's Tech Logo"
                />
              </Grid>
              <Grid item>
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "20px", fontWeight: "bold" }}>Sr. Software Engineer</Typography>
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "20px" }}>Aaron’s INC</Typography>
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>Since March 2017</Typography>
              </Grid>   
            </Grid>
            <List sx={{ listStyleType: 'disc', marginLeft: 3 }}>
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
            <Grid container alignContent="center" alignItems="center" sx={{ mt: 3, mb: 2 }}>
              <Grid item sx={{ mr: 3 }}>
                <Image
                  src={MimedxLogo}
                  width={80}
                  alt="Mimedx Logo"
                />
              </Grid>
              <Grid item>
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "20px", fontWeight: "bold" }}>Quality Assurance Specialist</Typography>
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "20px" }}>MiMedx</Typography>
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>Dec. 2014 - Mar. 2018</Typography>
              </Grid>   
            </Grid>
            <List sx={{ listStyleType: 'disc', marginLeft: 3 }}>
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
            <Box sx={{ mt: 2, mb: 2 }}>
              <hr style={{ borderColor: grey[400] }}/>
            </Box>
            <Typography sx={sectionHeader}>
              EDUCATION
            </Typography>
            <Grid container alignContent="center" alignItems="center" sx={{ mt: 3, mb: 2 }}>
              <Grid item sx={{ mr: 3 }}>
                <Image
                  src={UXDILogo}
                  width={80}
                  alt="UXDI Logo"
                />
              </Grid>
              <Grid item sx={7}>
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "20px", fontWeight: "bold" }}>UX Diploma</Typography>
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "20px" }}>Awarded May 2024</Typography>
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>UX Design Institute</Typography>
              </Grid>   
            </Grid>
            <Grid container alignContent="center" alignItems="center" sx={{ mt: 3, mb: 2 }}>
              <Grid item sx={{ mr: 3 }}>
                <Image
                  src={KSULogo}
                  width={80}
                  alt="KSU Logo"
                />
              </Grid>
              <Grid item sx={7}>
              <Typography sx={{ fontFamily: "Montserrat", fontSize: "20px", fontWeight: "bold" }}>BA Applied<br/> Computer Science</Typography>
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "18px" }}>Awarded Dec. 2016</Typography>
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "18px" }}>Kennesaw State<br/> University</Typography>
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>Magna Cum Laude</Typography>
              </Grid>   
            </Grid>
          </Box>
      </Box>
    </div>
  );
};

export default ResumeContainerMobile;