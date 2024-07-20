"use client"; 
import React, {  } from 'react';
import { Grid, List, ListItem, ListItemText, Box, Typography, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import DownloadIcon from '@mui/icons-material/Download';
import Header from "../caseStudies/Header";
import { blue } from '@mui/material/colors';

const Resume = () => {
  return (
    <div>
      <Header/>
      <Box container direction="column" justifyContent="center" sx={{ display: "flex", justifyContent: "center", backgroundColor: blue[100]}}>
          <Box sx={{ maxWidth: "60%", padding: 5, marginTop: 10, backgroundColor: "white" }}>
            <Box sx={{ marginBottom: 5 }}>
              <Typography className="heading1" sx={{ textAlign: "center" }} variant="h1">
                CHELSEA L. VIDRINE
              </Typography>
              <Typography className="heading3" sx={{ textAlign: "center" }}>
                UX RESEARCH & DESIGN
              </Typography>
            </Box>
            <Typography className="heading5" sx={{ textAlign: "center" }}>
              <EmailIcon sx={{ marginRight: 1 }}/>cvidrine@email.com&nbsp;&nbsp;|&nbsp;&nbsp;
              <LocalPhoneIcon sx={{ marginRight: 1 }}/>470-546-2359
            </Typography>
            <Typography sx={{ textAlign: "center", marginTop: -2, fontSize: 20, color: blue[600], cursor: "pointer" }}>
                <DownloadIcon/>Download Resume PDF
              </Typography>
            <Typography className="heading5" sx={{ marginTop: 8 }}>
              MISSION
            </Typography>
            <Typography className="paragraph">
              I am an IT professional with 7+ years of experience as a software
              engineer. I am looking to leverage my development expertise and
              passion for user interfaces to transition into a UX role. I have years of
              professional experience communicating with stakeholders and UX
              leaders to translate user needs into functional interfaces that both
              drive positive user engagement and meet business objectives. I
              recently completed a professional diploma in UX research and
              design, and I’m ready to take the next step in my career.
            </Typography>
            <Typography>
              WHAT DRIVES ME?
            </Typography>
            <Typography>
              PASSION
            </Typography>
            <Typography>
              Passion is the most important
              trait to my career. Without
              passion, top-quality products
              and solutions are not
              possible. Passion fuels my
              output every single day.
            </Typography>
            <Typography>
              COMPASSION
            </Typography>
            <Typography>
              Compassion leads to
              excellent user interfaces. I
              don’t produce anything
              without first considering
              what impact it will have on
              my users’ needs, emotions,
              limitations, and
              understanding. 
            </Typography>
            <Typography>
              CURIOSITY
            </Typography>
            <Typography>
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
            <Typography>
              TECHNICAL SKILLS
            </Typography>
            <List sx={{ listStyleType: 'disc', marginLeft: 5 }}>
              <ListItem sx={{ display: 'list-item', marginTop: -3 }}>
                <Typography variant='body1'>
                  User Research (Mixed methods)
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'list-item', marginTop: -3 }}>
                <Typography variant='body1'>
                  Wireframing & flowcharting (Miro)
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'list-item', marginTop: -3 }}>
                <Typography variant='body1'>
                  Design, Prototyping, & Annotation (Figma)
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'list-item', marginTop: -3 }}>
                <Typography variant='body1'>
                  Coding: HTML, CSS & JavaScript w/ React
                </Typography>
              </ListItem>
            </List>
            <Typography>
              Career Experience
            </Typography>
            <Typography>
              Software Engineer at Aaron’s
            </Typography>
            <Typography>
              March 2017 – currently employed
            </Typography>
            <List sx={{ listStyleType: 'disc', marginLeft: 5 }}>
              <ListItem sx={{ display: 'list-item', marginTop: -3 }}>
                <Typography variant='body1'>
                  Engineering Effective Customer Experiences
                </Typography>
                <Typography variant='body1'>
                  I develop and support products which drive customer
                  acquisition, onboarding, and retention. I’ve driven
                  company profits by putting the focus on the user and
                  creating positive user experiences through tools that
                  are effective, intuitive, delightful and accessible.
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'list-item', marginTop: -3 }}>
                <Typography variant='body1'>
                  Solutioning in a Collaborative and Agile Environment
                </Typography>
                <Typography variant='body1'>
                  Together with a small, highly collaborative team of
                  managers, designers, and developers, I work every
                  day to design, develop, test, and deploy solutions in a
                  fast, iterative, and agile manner.
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'list-item', marginTop: -3 }}>
                <Typography variant='body1'>
                  Growing Through Flexibility and Well-roundedness
                </Typography>
                <Typography variant='body1'>
                  Throughout my years at Aaron’s, I have gained experience in an array of technologies from front end to back end to data management, always eager to pick up new skills and learn new things. 
                </Typography>
              </ListItem>
            </List>
            <Typography>
              Education
            </Typography>
            <Typography>
              UX Professional Diploma – Awarded May 2024
            </Typography>
            <Typography>
              UX Design Institute (Accredited by Glascow Caledonian University)
            </Typography>
            <Typography>
              BA Applied Computer Science – Awarded December 2016
            </Typography>
            <Typography>
              Kennesaw State University
            </Typography>
            <Typography>
              Magna Cum Laude
            </Typography>
          </Box>
      </Box>
    </div>
  );
};

export default Resume;