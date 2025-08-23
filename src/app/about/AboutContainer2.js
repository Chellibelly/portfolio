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
                I've always been interested in usability, human psychology, and design - well before I knew "UX/UI" existed. 
                Over the years, I've collaborated with UX professionals in my role as a software engineer, and now I’m ready to pivot my career toward research and design.
              </Typography>
              <Typography sx={{ ...globalStyles.heading5, marginTop: 1 }} variant="h5">
                I have both a Bachelor's degree in Applied Computer Science and a professional diploma in UX. During my UX program, I took on a case study where I gained hands-on experience with mixed research methods, usability testing, analysis, wireframing, high-fidelity design, and prototyping. Since then, I've designed other features as part of both personal and professional projects. You can check out some of my design work <Link href="/caseStudiesHome">here</Link>!
              </Typography>   
            </Grid>
          </Grid>
          <Grid container justifyContent="space-around" sx={{ marginBottom: 5 }}>
          <Grid item xs={7}>
            <Typography variant="h4" sx={{ fontFamily: "Playpen Sans" }}>Where I've Been</Typography>
            <Typography sx={{ ...globalStyles.heading5, marginTop: 4 }} variant="h5">
              For the past seven years, I've worked in software development as an engineer, designer, leader, and certified problem-solver.
            </Typography>
            <Typography sx={{ ...globalStyles.heading5, marginTop: 1 }} variant="h5">
              I've collaborated with stakeholders and IT professionals to deliver software solutions in agile environments, both in-office and remotely. Over time, I’ve built a diverse toolbox, including skills in JavaScript (React.js), CSS, HTML5, C#, and SQL.
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
              When I'm not working or sharpening my tech skills, I love traveling and exploring nature with my husband and our adorable black lab, Badger. I enjoy visiting coffee shops and breweries, meeting new people, drawing, crafting, crocheting, decorating, and playing both board and video games.
            </Typography>
              <Typography sx={{ ...globalStyles.heading5, marginTop: 1 }} variant="h5">
                Lately, I've been fascinated by gamification, AR, artificial intelligence, and physical and cognitive accessibility. Basically I'm into anything that makes tech even more awesome.
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