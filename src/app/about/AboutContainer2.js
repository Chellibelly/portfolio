"use client"; 
import React, {  } from 'react';
import Header from "../Header";
import { Grid, Box, Typography, Paper, Link } from '@mui/material';
import Image from 'next/image';
import Headshot from '../../../public/Headshot.jpg';
import Photo2 from '../../../public/Photo_2.jpg';
import Photo3 from '../../../public/Photo_3.jpg';
import { blue, blueGrey } from '@mui/material/colors';
import * as globalStyles from '../styles/globalStyleConsts';

const AboutContainer = () => {
  return (
    <div>
      <Header/>
      <Box container direction="column" justifyContent="center" sx={{ display: "flex", justifyContent: "center", backgroundColor: blueGrey[50]}}>
        <Box sx={{ maxWidth: "75%", padding: 5, marginTop: 12, marginBottom: 5, backgroundColor: "white" }}>
        <Typography variant="h1" sx={{ textAlign: "center", fontSize: 100, marginBottom: 10, fontFamily: "Playpen Sans", color: blueGrey[500]}}>
            Hi, I'm Chelsea!
        </Typography>
         <Grid container justifyContent="space-around" sx={{ marginBottom: 5 }}>
            <Grid item xs={3}>
              <Paper sx={{ boxShadow: 10 }}>
                <Grid container justifyContent="center" justifyItems="center" sx={{ padding: 2 }}>
                  <Grid item sx={{ marginBottom: 8, marginTop: 1 }}>
                    <Image
                      src={Headshot}
                      width={240}
                      alt="A photo of Chelsea"
                      sx={{ margin: "auto" }}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={7}>
              <Typography variant="h4" sx={{ fontFamily: "Playpen Sans" }}>What I do</Typography>
              <Typography sx={{ ...globalStyles.heading5, marginTop: 4 }} variant="h5">
                I design digital experiences grounded in user research, usability testing, and iterative design. After many years of collaborating with UX teams as a software engineer, I formally transitioned into UX through a professional diploma program, where I led a full end-to-end case study using mixed research methods, synthesis, wireframing, high-fidelity design, and prototyping.
              </Typography>
              <Typography sx={{ ...globalStyles.heading5, marginTop: 4 }} variant="h5">
                Today, I consistently apply both design and engineering perspectives to create impactful and scalable solutions. I've had a hand in designing and delivering numerous projects, both personally and professionally.
              </Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent="space-around" sx={{ marginBottom: 5 }}>
          <Grid item xs={7}>
            <Typography variant="h4" sx={{ fontFamily: "Playpen Sans" }}>Where I've Been</Typography>
            <Typography sx={{ ...globalStyles.heading5, marginTop: 4 }} variant="h5">
              Backed by a degree in Computer Science, for the past 8+ years, I’ve worked in software development as an engineer, designer, problem-solver, and leader. I’ve partnered with stakeholders and cross-functional teams to ship production software in agile environments, both in-office and fully remotely. My technical toolkit includes React, JavaScript, HTML, CSS, C#, and SQL.
            </Typography>
            </Grid>
            <Grid item xs={3}>
              <Paper sx={{ boxShadow: 10 }}>
                <Grid container justifyContent="center" justifyItems="center" sx={{ padding: 2 }}>
                  <Grid item sx={{ marginBottom: 8, marginTop: 1 }}>
                    <Image
                      src={Photo2}
                      width={240}
                      alt="A photo of Chelsea"
                      sx={{ margin: "auto" }}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Grid container justifyContent="space-around" sx={{ marginBottom: 5 }}>
            <Grid item xs={3}>
              <Paper sx={{ boxShadow: 10 }}>
                <Grid container justifyContent="center" justifyItems="center" sx={{ padding: 2 }}>
                  <Grid item sx={{ marginBottom: 8, marginTop: 1 }}>
                    <Image
                      src={Photo3}
                      width={240}
                      alt="A photo of Chelsea"
                      sx={{ margin: "auto" }}
                    />
                  </Grid>
                </Grid>     
              </Paper>
            </Grid>
            <Grid item xs={7}>
            <Typography variant="h4" sx={{ fontFamily: "Playpen Sans" }}>Who I am</Typography>
            <Typography sx={{ ...globalStyles.heading5, marginTop: 4 }} variant="h5">
              When I'm not working or sharpening my tech skills, I love traveling and exploring nature with my husband and our adorable black lab, Badger. One of my exploration goals is to visit every U.S. National Park (10 down, lots to go!). I also enjoy visiting coffee shops, meeting new people, drawing, crafting, decorating, and playing both board and video games. 
            </Typography>
              <Typography sx={{ ...globalStyles.heading5, marginTop: 1 }} variant="h5">
                Lately, I've been fascinated by gamification, ARGs, AI, psychology, and cognitive accessibility. I’m especially interested in anything that makes technology more inclusive and engaging.
              </Typography>
            <Typography sx={globalStyles.heading5} variant="h5">
              <b>Let's connect!</b>
            </Typography>
            <Typography sx={{ ...globalStyles.heading6, marginTop: -2 }} variant="h6">
              chelsea.vidrine2@gmail.com
            </Typography>
            <Typography variant="h6" sx={{ ...globalStyles.heading6, textDecoration: "underline", marginTop: -3, color: blue[500] }}>
              <a href="https://www.linkedin.com/in/chelsea-vidrine/"target="_blank" title="Share on LinkedIn">
                My LinkedIn
              </a>
            </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default AboutContainer;