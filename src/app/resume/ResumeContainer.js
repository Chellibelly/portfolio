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
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>March 2018 – Present</Typography>
              </Grid>   
            </Grid>

            <List sx={{ listStyleType: 'disc', marginLeft: 18, marginTop: -3 }}>
              <ListItem sx={{ display: 'list-item' }}>
                <Typography variant='body1' sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
                  Led UX design and development for a batched payment workflow, replacing repetitive agreement-by-agreement transactions with a streamlined experience. Facilitated collaborative design sessions, incorporated store-user feedback, and supported rollout to 1,000+ stores.
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <Typography variant='body1' sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
                  Designed a proposed sales leads dashboard, conducting qualitative research with three store employees to evaluate concepts, uncover unmet needs, and prioritize functionality. Used findings to shape the dashboard's direction around actionable tasks, customer opportunities, and performance insights.
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <Typography variant='body1' sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
                  Engineered a real-time remote checkout experience that eliminated the need for customers to visit stores in person, synchronizing customer and store-associate workflows throughout the process. Initially created as a temporary solution during COVID-19, it remains the primary way stores assist customers with checkout today.
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <Typography variant='body1' sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
                  Integrated end-to-end AutoPay enrollment into the customer checkout workflow, enabling payment schedule selection, secure card tokenization, and enrollment through API integrations. Reduced reliance on a separate enrollment system, with the integrated checkout experience supporting over 2 million AutoPay enrollments.
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <Typography variant='body1' sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
                  Researched, designed, and developed an internal localization tool informed by interviews with content editors and developers. Enabled content teams to independently manage multilingual website copy without having to wait on developer changes or code deployments.
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
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "20px" }}><b>BA Applied Computer Science</b> – January 2018</Typography>
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