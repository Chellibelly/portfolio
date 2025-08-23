"use client"; 
import React, {  } from 'react';
import HeaderMobile from "../HeaderMobile";
import { Box, Typography, Link } from '@mui/material';
import Image from 'next/image';
import Headshot from '../../../public/Headshot_Rounded.png';
import Photo2 from '../../../public/Photo2_Rounded.png';
import Photo3 from '../../../public/Photo3_Rounded.png';
import { blueGrey } from '@mui/material/colors';
import * as globalStyles from '../styles/globalStyleConsts';

const AboutContainerMobile = () => {
  return (
    <div>
      <HeaderMobile/>
      <Box display="flex" alignItems="center" height="100vh" flexDirection="column" style={{marginBottom: "500px", marginTop: "50px"}}>
      <Typography variant="h1" sx={{ textAlign: "center", fontSize: 80, mb: 5, mt: 5, fontFamily: "Playpen Sans", color: blueGrey[400]}}>
            Hi, I'm Chelsea!
      </Typography>
      <Image
        src={Headshot}
        width={300}
        alt="A photo of Chelsea"
      />
      <Typography variant="h4" sx={{ fontFamily: "Playpen Sans", margin: 3 }}>What I do</Typography>
      <Typography sx={{ ...globalStyles.heading5, ml: 3, mr: 3 }} variant="h5">
      I've always been interested in usability, human psychology, and design - well before I knew "UX/UI" existed. 
      Over the years, I've collaborated with UX professionals in my role as a software engineer, and now I’m ready to pivot my career toward research and design.
      </Typography>
      <Typography sx={{ ...globalStyles.heading5, ml: 3, mr: 3 }} variant="h5">
       I have both a Bachelor's degree in Applied Computer Science and a professional diploma in UX. During my UX program, I took on a case study where I gained hands-on experience with mixed research methods, usability testing, analysis, wireframing, high-fidelity design, and prototyping. Since then, I've designed other features as part of both personal and professional projects. You can check out some of my design work <Link href="/caseStudiesHome">here</Link>!
      </Typography>

      <Image
        src={Photo2}
        width={300}
        alt="A photo of Chelsea"
        style={{ marginTop: "50px" }}
      />
      <Typography variant="h4" sx={{ fontFamily: "Playpen Sans", margin: 3 }}>Where I've Been</Typography>
      <Typography sx={{ ...globalStyles.heading5, ml: 3, mr: 3 }} variant="h5">
        For the past seven years, I've worked in software development as an engineer, designer, leader, and certified problem-solver.
      </Typography>
      <Typography sx={{ ...globalStyles.heading5, ml: 3, mr: 3 }} variant="h5">
        I've collaborated with stakeholders and IT professionals to deliver software solutions in agile environments, both in-office and remotely. Over time, I’ve built a diverse toolbox, including skills in JavaScript (React.js), CSS, HTML5, C#, and SQL.
      </Typography>

      <Image
        src={Photo3}
        width={300}
        alt="A photo of Chelsea"
        style={{ marginTop: "50px" }}
      />
      <Typography variant="h4" sx={{ fontFamily: "Playpen Sans", margin: 3 }}>Who I Am</Typography>
      <Typography sx={{ ...globalStyles.heading5, ml: 3, mr: 3 }} variant="h5">
      When I'm not working or sharpening my tech skills, I love traveling and exploring nature with my husband and our adorable black lab, Badger. I enjoy visiting coffee shops and breweries, meeting new people, drawing, crafting, crocheting, decorating, and playing both board and video games.
      </Typography>
        <Typography sx={{ ...globalStyles.heading5, ml: 3, mr: 3 }} variant="h5">
          Lately, I've been fascinated by gamification, AR, artificial intelligence, and physical and cognitive accessibility. Basically I'm into anything that makes tech even more awesome.
        </Typography>
      <Typography sx={globalStyles.heading5} variant="h5">
        <b>Let's connect!</b>
      </Typography>
      <Typography variant="h6" sx={{ ...globalStyles.heading6, marginTop: -2 }}>
        chelsea.vidrine2@gmail.com
      </Typography>
      <Typography variant="h6" sx={{ ...globalStyles.heading6, textDecoration: "underline", marginTop: -3, color: blueGrey[500] }}>
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