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
                UX RESEARCH & DESIGN
              </Typography>
            </Box>
            <Typography sx={{ ...globalStyles.heading5, textAlign: "center" }}>
              <EmailIcon sx={{ marginRight: 1 }}/>chelsea.vidrine2@gmail.com
            </Typography>
            <Typography sx={{ textAlign: "center", marginTop: -2, fontSize: 20, color: blueGrey[600], cursor: "pointer" }}>
                <button onClick={handleDownload}><DownloadIcon/>Download Resume PDF</button>
              </Typography>
            <Typography sx={sectionHeader}>
              MISSION
            </Typography>
            <Typography sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
              I am a UX researcher and designer with 7+ years of experience as a software engineer. I have professional experience communicating with stakeholders and UX leaders to translate user needs into functional interfaces that both drive positive user engagement and meet business objectives. I’m looking to take the next step in my career and grow my UX skills with an innovative and forward-thinking business.
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
                User Research & Data Analysis
              </Typography>
              <Typography sx={{ fontSize: 16, fontFamily: "Montserrat" }}>
                Surveys, A/B testing, usability testing, notetaking, competitor research, affinity diagraming, user journeys
              </Typography>
            </Box>
            <Box sx={{ mb: 3 }}>
              <Typography sx={{ fontSize: 17, fontWeight: "bold", fontFamily: "Montserrat", mb: 1 }}>
                Design
              </Typography>
              <Typography sx={{ fontSize: 16, fontFamily: "Montserrat" }}>
                Miro, Figma, sketching, wireframing, flowcharts, interactions, prototyping, annotation, knowledge of modern design principles
              </Typography>
            </Box>
            <Box sx={{ mb: 3 }}>
              <Typography sx={{ fontSize: 17, fontWeight: "bold", fontFamily: "Montserrat", mb: 1 }}>
                Development
              </Typography>
              <Typography sx={{ fontSize: 16, fontFamily: "Montserrat" }}>
                HTML, JavaScript, CSS, React.js, Material Design, Tailwind, .NET, SQL
              </Typography>
            </Box>
            <Box sx={{ mb: 3 }}>
              <Typography sx={{ fontSize: 17, fontWeight: "bold", fontFamily: "Montserrat", mb: 1 }}>
                Leadership
              </Typography>
              <Typography sx={{ fontSize: 16, fontFamily: "Montserrat" }}>
                Project coordination, stakeholder management, presentations
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
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "20px", fontWeight: "bold" }}>Software Engineer</Typography>
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "20px" }}>Aaron’s INC</Typography>
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>Since March 2017</Typography>
              </Grid>   
            </Grid>
            <List sx={{ listStyleType: 'disc', marginLeft: 3 }}>
              <ListItem sx={{ display: 'list-item' }}>
                <Typography variant='body1' sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
                  <b>Solved Business Problems through Leadership</b><br/>
                  <span>
                    Took responsibility during the pandemic by leading the development on a fully remote web application which allowed stores to do business with customers without direct physical contact, increasing the percentage of closed deals by 60% during the height of the pandemic and an additional 40% since 2022.
                  </span>
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <Typography variant='body1' sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
                  <b>Engineered Effective Customer Experiences</b><br/>
                  <span>
                    Developed and supported products which drive customer acquisition, onboarding, and retention. I reduced rental application drop-out rate and average completion time by 50% through effective, intuitive, user-focused UI design.
                  </span>
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <Typography variant='body1' sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
                  <b>Collaborated Daily in an Agile (Lean) Environment</b><br/>
                  <span>
                    Together with a team of talented managers, designers, and developers, I’ve iterated to design, develop, test, and deploy solutions quickly. Working closely with our Payments team, I’ve deployed software which has been used to enroll nearly two million customer agreements in auto-pay.
                  </span>
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
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "20px", fontWeight: "bold" }}>QA Professional </Typography>
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "20px" }}>MiMedx</Typography>
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>Dec. 2014 - Mar. 2018</Typography>
              </Grid>   
            </Grid>
            <List sx={{ listStyleType: 'disc', marginLeft: 3 }}>
              <ListItem sx={{ display: 'list-item' }}>
                <Typography variant='body1' sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
                  <b>Demonstrated Excellent Quality Control and Data Accuracy</b><br/>
                  <span>
                    Reviewed and validated product processing records, ensuring SOP compliance and reducing error in product release
                  </span>
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <Typography variant='body1' sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
                  <b>Improved Team Process and Efficiency</b><br/>
                  <span>
                    Implemented a digital platform for task management and team communication and collaboration, nearly doubling project turnaround time and number of records reviewed 
                  </span>
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