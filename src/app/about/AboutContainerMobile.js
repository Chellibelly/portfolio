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
        I design digital experiences grounded in user research, usability testing, and iterative design. After many years of collaborating with UX teams as a software engineer, I formally transitioned into UX through a professional diploma program, where I led a full end-to-end case study using mixed research methods, synthesis, wireframing, high-fidelity design, and prototyping.
      </Typography>
      <Typography sx={{ ...globalStyles.heading5, ml: 3, mr: 3 }} variant="h5">
        Today, I consistently apply both design and engineering perspectives to create impactful and scalable solutions. I've had a hand in designing and delivering numerous projects, both personally and professionally.
      </Typography>

      <Image
        src={Photo2}
        width={300}
        alt="A photo of Chelsea"
        style={{ marginTop: "50px" }}
      />
      <Typography variant="h4" sx={{ fontFamily: "Playpen Sans", margin: 3 }}>Where I've Been</Typography>
      <Typography sx={{ ...globalStyles.heading5, ml: 3, mr: 3 }} variant="h5">
        Backed by a degree in Computer Science, for the past 8+ years, I’ve worked in software development as an engineer, designer, problem-solver, and leader. I’ve partnered with stakeholders and cross-functional teams to ship production software in agile environments, both in-office and fully remotely. My technical toolkit includes React, JavaScript, HTML, CSS, C#, and SQL.
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
      When I'm not working or sharpening my tech skills, I love traveling and exploring nature with my husband and our adorable black lab, Badger. One of my exploration goals is to visit every U.S. National Park (10 down, lots to go!). I also enjoy visiting coffee shops, meeting new people, drawing, crafting, decorating, and playing both board and video games. 
      </Typography>
        <Typography sx={{ ...globalStyles.heading5, ml: 3, mr: 3 }} variant="h5">
          Lately, I've been fascinated by gamification, ARGs, AI, psychology, and cognitive accessibility. I’m especially interested in anything that makes technology more inclusive and engaging.
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