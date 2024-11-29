"use client"; 
import React, {  } from 'react';
import Header from "../Header";
import { Grid, Box, Typography, Paper, Link } from '@mui/material';
import Image from 'next/image';
import Headshot from '../../../public/Headshot.jpg';
import Photo2 from '../../../public/Photo_2.jpg';
import Photo3 from '../../../public/Photo_3.jpg';
import { blue } from '@mui/material/colors';

const AboutContainer = () => {
  return (
    <div>
      <Header/>
      <Box container direction="column" justifyContent="center" sx={{ display: "flex", justifyContent: "center", backgroundColor: blue[100]}}>
        <Box sx={{ maxWidth: "75%", padding: 5, marginTop: 12, marginBottom: 5, backgroundColor: "white" }}>
        <Typography variant="h1" sx={{ textAlign: "center", fontSize: 100, marginBottom: 10, fontFamily: "Playpen Sans", color: blue[300]}}>
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
              <Typography className="heading5" sx={{ marginTop: 4 }} variant="h5">
                I've always been interested in usability, human psychology, and design - well before I knew "UX/UI" existed. 
                I've worked with UX professionals over the last several years as a part of my job as a software engineer, and I'm ready to take my career in the direction of research and design.
              </Typography>
              <Typography className="heading5" sx={{ marginTop: 1 }} variant="h5">
                I have both a Bachelor's degree in Applied Computer Science and a professional diploma in UX. During my UX program, I took on a <Link href="/">case study</Link> and learned the ins and outs of mixed research methods, usability testing, analysis, wireframing, high-fidelity design, and prototyping.
              </Typography>   
            </Grid>
          </Grid>
          <Grid container justifyContent="space-around" sx={{ marginBottom: 5 }}>
          <Grid item xs={7}>
            <Typography variant="h4" sx={{ fontFamily: "Playpen Sans" }}>Where I've Been</Typography>
            <Typography className="heading5" sx={{ marginTop: 4 }} variant="h5">
              I've worked for the past seven years in the software development space as an engineer, designer, leader, and certified problem-solver.
            </Typography>
            <Typography className="heading5" sx={{ marginTop: 1 }} variant="h5">
              I've worked with various stakeholders and IT professionals to deliver software solutions in an agile environment both in office and remotely. 
              I've built a toolbox of a variety of programming languages including JavaScript (React.js), CSS, HTML5, C#, and SQL. 
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
            <Typography className="heading5" sx={{ marginTop: 4 }} variant="h5">
              When I'm not working or honing my technology skills, I enjoy travelling with husband and our adorable black lab, Badger. 
              I like to frequent coffee shops, meet new people, draw, craft, crochet, decorate, and play games of both the board and video variety.
            </Typography>
              <Typography className="heading5" sx={{ marginTop: 1 }} variant="h5">
              Recently, I've been facinated with artificial intelligence, game theory & gamification of mundane tasks, and accessibility; 
              basically I'm interested in anything that makes tech a little more awesome. 
              </Typography>
            <Typography className="heading5" variant="h5">
              <b>Let's connect!</b>
            </Typography>
            <Typography className="heading6" variant="h6" sx={{ marginTop: -2 }}>
              chelsea.vidrine2@gmail.com
            </Typography>
            <Typography className="heading6" variant="h6" sx={{ textDecoration: "underline", marginTop: -3, color: blue[500] }}>
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