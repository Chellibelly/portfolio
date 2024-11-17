"use client"; 
import React, {  } from 'react';
import HeaderMobile from "../HeaderMobile";
import { Box, Typography, Link } from '@mui/material';
import Image from 'next/image';
import Headshot from '../../../public/Headshot_Rounded.png';
import Photo2 from '../../../public/Photo2_Rounded.png';
import Photo3 from '../../../public/Photo3_Rounded.png';
import { blue } from '@mui/material/colors';

const AboutContainerMobile = () => {
  return (
    <div>
      <HeaderMobile/>
      <Box display="flex" alignItems="center" height="100vh" flexDirection="column" style={{marginBottom: "500px"}}>
      <Typography variant="h1" sx={{ textAlign: "center", fontSize: 80, mb: 5, mt: 5, fontFamily: "Playpen Sans", color: blue[300]}}>
            Hi, I'm Chelsea!
      </Typography>
      <Image
        src={Headshot}
        width={300}
        alt="A photo of Chelsea"
      />
      <Typography variant="h4" sx={{ fontFamily: "Playpen Sans", margin: 3 }}>My History</Typography>
      <Typography className="heading5" sx={{ ml: 3, mr: 3 }} variant="h5">
        I've worked for the past seven years in the software development space as an engineer, designer, leader, and certified problem-solver.
      </Typography>
      <Typography className="heading5" sx={{ ml: 3, mr: 3 }} variant="h5">
        I've worked with various stakeholders and IT professionals to deliver software solutions in an agile environment both in office and remotely. 
        I've built a toolbox of a variety of programming languages including JavaScript (React.js), CSS, HTML5, C#, and SQL. 
      </Typography>
      <Image
        src={Photo2}
        width={300}
        alt="A photo of Chelsea"
        style={{ marginTop: "50px" }}
      />
      <Typography variant="h4" sx={{ fontFamily: "Playpen Sans", margin: 3 }}>My Future</Typography>
      <Typography className="heading5" sx={{ ml: 3, mr: 3 }} variant="h5">
        Recently my journey has taken me into the field of UX. I've always been interested in usability, human psychology, and design, even before I knew UX existed. 
        I've worked with UX professionals over the last several years as a part of my job as a software engineer, and I'm ready to take my career in the direction of research and design.
      </Typography>
      <Typography className="heading5" sx={{ ml: 3, mr: 3 }} variant="h5">
        I have a Bachelor's degree in Applied Computer Science under my belt, and I recently attained a professional diploma in UX. During the program, I took on a <Link href="/">case study</Link> and learned the ins and outs of mixed research methods, usability testing, analysis, wireframing, high-fidelity design, and prototyping.
      </Typography>
      <Image
        src={Photo3}
        width={300}
        alt="A photo of Chelsea"
        style={{ marginTop: "50px" }}
      />
      <Typography variant="h4" sx={{ fontFamily: "Playpen Sans", margin: 3 }}>My Present</Typography>
      <Typography className="heading5" sx={{ ml: 3, mr: 3 }} variant="h5">
        When I'm not working or honing my technology skills, I enjoy travelling with husband and our adorable black lab, Badger. 
        I like to frequent coffee shops, meet new people, draw, craft, crochet, decorate, and play games of both the board and video variety.
      </Typography>
        <Typography className="heading5" sx={{ ml: 3, mr: 3 }} variant="h5">
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
        <br/><br/><br/>
      </Typography>
    </Box>
    </div>
  );
};

export default AboutContainerMobile;