"use client"; 
import React, {  } from 'react';
import Header from "../caseStudies/Header";
import { Grid, List, ListItem, Box, Typography, Paper } from '@mui/material';
import Image from 'next/image';
import Headshot from '../../../public/Headshot_Rounded.png';
import { blue } from '@mui/material/colors';

const About = () => {
  return (
    <div>
      <Header/>
      <Box container direction="column" justifyContent="center" sx={{ display: "flex", justifyContent: "center", backgroundColor: blue[100]}}>
        <Box sx={{ maxWidth: "75%", padding: 5, marginTop: 12, marginBottom: 5, backgroundColor: "white" }}>
          <Grid container justifyContent="space-around" sx={{ marginBottom: 5 }}>
            <Grid item xs={5}>
            <div style={{borderRadius: '5px', overflow: 'hidden'}}>
              <Image
                  className='graphic'
                  src={Headshot}
                  width={360}
                  alt="A photo of Chelsea"
                  objectFit="cover"
                />
                </div>
            </Grid>
            <Grid item xs={6}>
              <Typography className="heading1" sx={{ textAlign: "center" }} variant="h1">
                Hi, I'm Chelsea!
              </Typography>
              <Typography className="heading5" sx={{ marginTop: 4 }} variant="h4">
                I am an IT professional with 7+ years of experience as a software engineer. 
                I am looking to leverage my development expertise and passion for user interfaces to transition into a UX role.<br/><br/>
                I have years of professional experience communicating with stakeholders and UX leaders to translate 
                user needs into functional interfaces that both drive positive user engagement and meet business objectives. 
                I recently completed a professional diploma in UX research and design, 
                and I’m ready to take the next step in my career. 
              </Typography>
              <Typography className="heading5" sx={{ marginTop: 4 }} variant="h4">
                My interests
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default About;