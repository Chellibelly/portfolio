"use client"; 
import React, { useState, useEffect, useRef } from 'react';
import { Grid, List, ListItem, ListItemText, Box, Typography } from '@mui/material';
import Introduction from './Introduction';
import Research from './Research';
import Analysis from './Analysis';
import Design from './Design';
import Conclusion from './Conclusion';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import DrawIcon from '@mui/icons-material/Draw';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import StickyNote2SharpIcon from '@mui/icons-material/StickyNote2Sharp';
import SchoolIcon from '@mui/icons-material/school';
import { blue } from '@mui/material/colors';

const Home = () => {
  const [activeSection, setActiveSection] = useState(null);
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 50; // Adjust for the top padding
    
      for (const sectionId in sectionRefs.current) {
        const sectionElement = sectionRefs.current[sectionId];
        if (sectionElement) {
          const { offsetTop, offsetHeight } = sectionElement;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSectionClick = (sectionId) => {
    const sectionElement = sectionRefs.current[sectionId];
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div>
    <Box style={{ width: "100%", backgroundColor: blue[800], position: "sticky", top: 0 }}>
      <Grid container direction="row" justifyContent="space-between" style={{ width:"50%", padding: 20 }}>
        <Grid item><Typography className="nav-link">About Me</Typography></Grid>
        <Grid item><Typography className="nav-link">My Case Study</Typography></Grid>
        <Grid item><Typography className="nav-link">My Resume</Typography></Grid>
        <Grid item><Typography className="nav-link">My Blog</Typography></Grid>
      </Grid>
    </Box>
    <div style={{ padding: 20 }}>
    <Grid container>
      <Grid item xs={2}>
        <div className="column-b">
          <List component="nav" style={{ position: "fixed", width: 300 }}>
            <ListItem onClick={() => handleSectionClick('introduction_section')} className={activeSection === 'introduction_section' ? 'active' : ''}>
              <ListItemText>
                <Grid container direction="row">
                  <Grid item xs={2} sx={{ marginRight: "10px" }}>
                    <PsychologyAltIcon sx={{ fontSize: "50px" , color: blue[200]}} />
                  </Grid>
                  <Grid item xs={8} sx={{ marginTop: "10px" }}>
                    <Typography sx={{ fontSize: "24px", fontFamily: "Montserrat" }}>
                    Problem
                    </Typography>
                  </Grid>
                </Grid></ListItemText>
            </ListItem>
            <ListItem onClick={() => handleSectionClick('research_section')} className={activeSection === 'research_section' ? 'active' : ''}>
              <ListItemText>
                <Grid container direction="row">
                  <Grid item xs={2} sx={{ marginRight: "10px" }}>
                    <StickyNote2SharpIcon sx={{ fontSize: "50px" , color: blue[300]}} />
                  </Grid>
                  <Grid item xs={8} sx={{ marginTop: "10px" }}>
                    <Typography sx={{ fontSize: "24px", fontFamily: "Montserrat" }}>
                      Research
                    </Typography>
                  </Grid>
                </Grid></ListItemText>
            </ListItem>
            <ListItem onClick={() => handleSectionClick('analysis_section')} className={activeSection === 'analysis_section' ? 'active' : ''}>
              <ListItemText>
                <Grid container direction="row">
                  <Grid item xs={2} sx={{ marginRight: "10px" }}>
                    <LightbulbIcon sx={{ fontSize: "50px", color: blue[500] }} />
                  </Grid>
                  <Grid item xs={8} sx={{ marginTop: "10px" }}>
                    <Typography sx={{ fontSize: "24px", fontFamily: "Montserrat" }}>
                    Analysis
                    </Typography>
                  </Grid>
                </Grid></ListItemText>
            </ListItem>
            <ListItem onClick={() => handleSectionClick('design_section')} className={activeSection === 'design_section' ? 'active' : ''}>
              <ListItemText>
                <Grid container direction="row">
                  <Grid item xs={2} sx={{ marginRight: "10px" }}>
                    <DrawIcon sx={{ fontSize: "50px", color: blue[600] }} />
                  </Grid>
                  <Grid item xs={8} sx={{ marginTop: "10px" }}>
                    <Typography sx={{ fontSize: "24px", fontFamily: "Montserrat" }}>
                    Design
                    </Typography>
                  </Grid>
                </Grid></ListItemText>
            </ListItem>
            <ListItem onClick={() => handleSectionClick('design_section')} className={activeSection === 'design_section' ? 'active' : ''}>
              <ListItemText>
                <Grid container direction="row">
                  <Grid item xs={2} sx={{ marginRight: "10px" }}>
                    <PhoneAndroidIcon sx={{ fontSize: "50px", color: blue[800] }} />
                  </Grid>
                  <Grid item xs={8} sx={{ marginTop: "10px" }}>
                    <Typography sx={{ fontSize: "24px", fontFamily: "Montserrat" }}>
                    Delivery
                    </Typography>
                  </Grid>
                </Grid></ListItemText>
            </ListItem>
            <ListItem onClick={() => handleSectionClick('conclusion_section')} className={activeSection === 'conclusion_section' ? 'active' : ''}>
              <ListItemText>
                <Grid container direction="row">
                  <Grid item xs={2} sx={{ marginRight: "10px" }}>
                  <SchoolIcon sx={{ fontSize: "50px", color: blue[900] }} />
                  </Grid>
                  <Grid item xs={8} sx={{ marginTop: "10px" }}>
                    <Typography sx={{ fontSize: "24px", fontFamily: "Montserrat" }}>
                    Lessons
                    </Typography>
                  </Grid>
                </Grid></ListItemText>
            </ListItem>
          </List>
        </div>
      </Grid>
      <Grid item xs={10}>
        <Box sx={{ height: 260, width: "100%", marginBottom: -6, backgroundColor: blue[200] }}>Some eye-catching thing to say or graphic</Box>
        <div className="column-a">
          <section id="introduction_section" ref={(el) => sectionRefs.current['introduction_section'] = el} style={{ paddingTop: 86 }}>
            <Introduction/>
          </section>
          <section id="research_section" ref={(el) => sectionRefs.current['research_section'] = el} style={{ paddingTop: 86  }}>
            <Research/>
          </section>
          <section id="analysis_section" ref={(el) => sectionRefs.current['analysis_section'] = el} style={{ paddingTop: 86  }}>
            <Analysis/>
          </section>
            <section id="design_section" ref={(el) => sectionRefs.current['design_section'] = el} style={{ paddingTop: 86  }}>
         <Design/>
          </section>
            <section id="conclusion_section" ref={(el) => sectionRefs.current['conclusion_section'] = el} style={{ paddingTop: 86  }}>
         <Conclusion/>
          </section>
        </div>
      </Grid>
    </Grid>
    </div>
    </div>
  );
};

export default Home;