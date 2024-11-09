"use client"; 
import React, { useState, useEffect, useRef } from 'react';
import Header from './caseStudies/Header';
import { Grid, List, ListItem, ListItemText, Box, Typography, Link } from '@mui/material';
import Introduction from './caseStudies/Introduction';
import Research from './caseStudies/Research';
import Analysis from './caseStudies/Analysis';
import Design from './caseStudies/Design';
import Conclusion from './caseStudies/Conclusion';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import DrawIcon from '@mui/icons-material/Draw';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import StickyNote2SharpIcon from '@mui/icons-material/StickyNote2Sharp';
import SchoolIcon from '@mui/icons-material/School';
import { blue, grey } from '@mui/material/colors';
import LessonsLearned from './caseStudies/LessonsLearned';
import Image from 'next/image';
import HotelBackground from "../../public/WorkPhotography/Work_Photo11.jpg";
import Opening from "../../public/opening.png";

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

  const containerStyle = {
    position: 'relative',
    width: '100%',
    marginBottom: -34
};

const imageWrapperStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    opacity: '0.9'
};

const imageStyle = {
    objectFit: 'cover',
};

const overlayStyle = {
  position: 'absolute',
  bottom: '15%', // Center the overlay vertically with respect to the image height
  left: '50%',
  transform: 'translateX(-50%)',
  width: '70%', // Adjust the width of the overlay
  height: '70%', // Adjust the height of the overlay
  backgroundColor: 'rgba(255, 255, 255, 0.8)', // White with 80% transparency
  color: 'black', // Text color
  display: 'flex',
  flexDirection: 'column', // Arrange Typography components vertically
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: '20px', // Adjust padding as needed
  boxSizing: 'border-box',
  zIndex: 10, // Ensure overlay is on top
};

  return (
    <div>
    <Header/>
    <div style={{ padding: 10, marginTop: 60 }}>
    <Grid container>
      <Grid item xs={3}>
        <div className="column-b">
          <List component="nav" style={{ position: "fixed", width: 250 }}>
            <ListItem onClick={() => handleSectionClick('introduction_section')} className={activeSection === 'introduction_section' ? 'active' : ''}>
              <ListItemText>
                <Grid container direction="row">
                  <Grid item xs={3} sx={{ marginRight: "10px" }}>
                    <PsychologyAltIcon sx={{ fontSize: "50px" , color: blue[200]}} />
                  </Grid>
                  <Grid item xs={7} sx={{ marginTop: "10px" }}>
                    <Typography sx={{ fontSize: "24px", fontFamily: "Montserrat" }}>
                      Overview
                    </Typography>
                  </Grid>
                </Grid></ListItemText>
            </ListItem>
            <ListItem onClick={() => handleSectionClick('research_section')} className={activeSection === 'research_section' ? 'active' : ''}>
              <ListItemText>
                <Grid container direction="row">
                  <Grid item xs={3} sx={{ marginRight: "10px" }}>
                    <StickyNote2SharpIcon sx={{ fontSize: "50px" , color: blue[300]}} />
                  </Grid>
                  <Grid item xs={7} sx={{ marginTop: "10px" }}>
                    <Typography sx={{ fontSize: "24px", fontFamily: "Montserrat" }}>
                      Research
                    </Typography>
                  </Grid>
                </Grid></ListItemText>
            </ListItem>
            <ListItem onClick={() => handleSectionClick('analysis_section')} className={activeSection === 'analysis_section' ? 'active' : ''}>
              <ListItemText>
                <Grid container direction="row">
                  <Grid item xs={3} sx={{ marginRight: "10px" }}>
                    <LightbulbIcon sx={{ fontSize: "50px", color: blue[500] }} />
                  </Grid>
                  <Grid item xs={7} sx={{ marginTop: "10px" }}>
                    <Typography sx={{ fontSize: "24px", fontFamily: "Montserrat" }}>
                    Analysis
                    </Typography>
                  </Grid>
                </Grid></ListItemText>
            </ListItem>
            <ListItem onClick={() => handleSectionClick('design_section')} className={activeSection === 'design_section' ? 'active' : ''}>
              <ListItemText>
                <Grid container direction="row">
                  <Grid item xs={3} sx={{ marginRight: "10px" }}>
                    <DrawIcon sx={{ fontSize: "50px", color: blue[600] }} />
                  </Grid>
                  <Grid item xs={7} sx={{ marginTop: "10px" }}>
                    <Typography sx={{ fontSize: "24px", fontFamily: "Montserrat" }}>
                    Design
                    </Typography>
                  </Grid>
                </Grid></ListItemText>
            </ListItem>
            <ListItem onClick={() => handleSectionClick('delivery_section')} className={activeSection === 'delivery_section' ? 'active' : ''}>
              <ListItemText>
                <Grid container direction="row">
                  <Grid item xs={3} sx={{ marginRight: "10px" }}>
                    <PhoneAndroidIcon sx={{ fontSize: "50px", color: blue[800] }} />
                  </Grid>
                  <Grid item xs={7} sx={{ marginTop: "10px" }}>
                    <Typography sx={{ fontSize: "24px", fontFamily: "Montserrat" }}>
                    Delivery
                    </Typography>
                  </Grid>
                </Grid></ListItemText>
            </ListItem>
            <ListItem onClick={() => handleSectionClick('conclusion_section')} className={activeSection === 'conclusion_section' ? 'active' : ''}>
              <ListItemText>
                <Grid container direction="row">
                  <Grid item xs={3} sx={{ marginRight: "10px" }}>
                  <SchoolIcon sx={{ fontSize: "50px", color: blue[900] }} />
                  </Grid>
                  <Grid item xs={7} sx={{ marginTop: "10px" }}>
                    <Typography sx={{ fontSize: "24px", fontFamily: "Montserrat" }}>
                    Lessons
                    </Typography>
                  </Grid>
                </Grid></ListItemText>
            </ListItem>
          </List>
        </div>
      </Grid>
      <Grid item xs={8}>

      <div style={containerStyle}>
            <div style={imageWrapperStyle}>
                <Image
                    src={HotelBackground}
                    alt='alt'
                    style={imageStyle}
                    width="100%"
                />
            </div>
            <div style={overlayStyle}>
              <Box sx={{ padding: 1 }}>
              <Typography sx={{ textAlign: 'center', fontFamily: 'Roboto', fontSize: 36, fontWeight: 400}}>
                    The Menagerie Hotels Mobile Site
                  </Typography><br/>
                  <Typography variant="body1" sx={{textAlign: 'center', fontFamily: 'Roboto', color: grey[900], fontWeight: 500, fontSize: 20, width: 600}}>
                    The story of how I transformed the online hotel booking experience for people who are fed up with being habitually left in the dark
                  </Typography>
              </Box>
            </div>
        </div>


        {false && <Box sx={{ marginBottom: -5 }}>
          <Image
            className='graphic'
            src={Opening}
            style={{
              margin: "0 auto",
            }}
            width="100%"
            alt="Menagerie Hotels - a mobile site. The story of The story of how I transformed the online hotel booking experience for people who are fed up with being habitually left in the dark"
          />
        </Box>}
        
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
          <section id="delivery_section" ref={(el) => sectionRefs.current['delivery_section'] = el} style={{ paddingTop: 86  }}>
            <Conclusion/>
          </section>
          <section id="conclusion_section" ref={(el) => sectionRefs.current['conclusion_section'] = el} style={{ paddingTop: 86  }}>
            <LessonsLearned/>
          </section>
        </div>
      </Grid>
    </Grid>
    </div>
    </div>
  );
};

export default Home;