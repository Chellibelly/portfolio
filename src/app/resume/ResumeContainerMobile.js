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
              SKILLS
            </Typography>
            <Box sx={{ mb: 3 }}>
              <Typography sx={{ fontSize: 17, fontWeight: "bold", fontFamily: "Montserrat", mb: 1 }}>
                UX Research & Analysis
              </Typography>
              <Typography sx={{ fontSize: 16, fontFamily: "Montserrat" }}>
                User interviews, surveys, usability testing, requirements gathering, product discovery,
                competitive analysis, affinity mapping, journey mapping,
                research synthesis and data-informed design 
              </Typography>
            </Box>
            <Box sx={{ mb: 3 }}>
              <Typography sx={{ fontSize: 17, fontWeight: "bold", fontFamily: "Montserrat", mb: 1 }}>
                Interaction & Product Design
              </Typography>
              <Typography sx={{ fontSize: 16, fontFamily: "Montserrat" }}>
                Information architecture, user flows, interaction design, complex workflow design, wireframing, prototyping, responsive design, design systems, component libraries, and accessibility informed by WCAG, UX writing, content design, and error-state messaging
              </Typography>
            </Box>
            <Box sx={{ mb: 3 }}>
              <Typography sx={{ fontSize: 17, fontWeight: "bold", fontFamily: "Montserrat", mb: 1 }}>
                Facilitation & Collaboration
              </Typography>
              <Typography sx={{ fontSize: 16, fontFamily: "Montserrat" }}>
                Design jams and collaborative workshops, stakeholder presentations and cross-functional iteration, design handoff, annotations, design QA, and implementation review
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
                Design, Analytics & AI Tools
              </Typography>
              <Typography sx={{ fontSize: 16, fontFamily: "Montserrat" }}>
                Figma, UXPin, Miro, Google Analytics, Figma Make, Google Stitch, GitHub Copilot, Claude Code
              </Typography>
            </Box>
            <Box sx={{ mb: 3 }}>
              <Typography sx={{ fontSize: 17, fontWeight: "bold", fontFamily: "Montserrat", mb: 1 }}>
                Technical Fluency
              </Typography>
              <Typography sx={{ fontSize: 16, fontFamily: "Montserrat" }}>
                React, JavaScript, TypeScript, HTML5, responsive CSS, SQL, C# .NET
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
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "20px" }}>Aaron’s</Typography>
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>Since March 2017</Typography>
              </Grid>   
            </Grid>
            <List sx={{ listStyleType: 'disc', marginLeft: 3 }}>
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
                  Ensured accuracy and compliance of high-volume documentation in a regulated environment, reducing errors through consistent quality review and process adherence.
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <Typography variant='body1' sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>
                  Nearly doubled review throughput by introducing a digital task-tracking and communication workflow that improved team coordination and project turnaround.
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