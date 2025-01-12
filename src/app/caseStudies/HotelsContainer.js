"use client"; 
import React, { useState, useEffect, useRef } from 'react';
import Header from '../Header';
import { Grid, List, ListItem, ListItemText, Box, Typography, Link } from '@mui/material';
import Introduction from './Introduction';
import Research from './Research';
import Analysis from './Analysis';
import Design from './Design';
import Conclusion from './Conclusion';
import LessonsLearned from './LessonsLearned';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import DrawIcon from '@mui/icons-material/Draw';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import StickyNote2SharpIcon from '@mui/icons-material/StickyNote2Sharp';
import SchoolIcon from '@mui/icons-material/School';
import { grey, blueGrey } from '@mui/material/colors';
import Image from 'next/image';
import HotelBackground from "../../../public/WorkPhotography/Work_Photo11.jpg";
import MenagerieHotelsHeader from "../../../public/Menagerie_Hotels_Header.png";
import Opening from "../../../public/opening.png";

const HotelsContainer = () => {
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
  bottom: '15%', 
  left: '50%',
  transform: 'translateX(-50%)',
  width: '70%', 
  height: '70%', 
  backgroundColor: 'rgba(255, 255, 255, 0.8)', 
  color: 'black', 
  display: 'flex',
  flexDirection: 'column', 
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: '20px', 
  boxSizing: 'border-box',
  zIndex: 10
};

  return (
    <div>
    <Header/>
    <div style={{ marginTop: 60 }}>
    <Grid container>
      <Grid item xs={2} sx={{ backgroundColor: blueGrey[800]}}>
        <div className="column-b" style={{ backgroundColor: "black" }}>
          <List component="nav" style={{ position: "fixed", width: 250 }}>
            <ListItem onClick={() => handleSectionClick('introduction_section')} style={activeSection === 'introduction_section' ? { backgroundColor: blueGrey[100]} : {}}>
              <ListItemText>
                <Grid container direction="row">
                  <Grid item xs={3} sx={{ marginRight: "10px" }}>
                    <PsychologyAltIcon sx={{ fontSize: "50px" , color: activeSection === 'introduction_section' ? blueGrey[900] : "white"}} />
                  </Grid>
                  <Grid item xs={7} sx={{ marginTop: "10px" }}>
                    <Typography sx={{ fontSize: "24px", fontFamily: "Montserrat", color: activeSection === 'introduction_section' ? blueGrey[900] : "white" }}>
                      Overview
                    </Typography>
                  </Grid>
                </Grid></ListItemText>
            </ListItem>
            <ListItem onClick={() => handleSectionClick('research_section')} style={activeSection === 'research_section' ? { backgroundColor: blueGrey[100]} : {}}>
              <ListItemText>
                <Grid container direction="row">
                  <Grid item xs={3} sx={{ marginRight: "10px" }}>
                    <StickyNote2SharpIcon sx={{ fontSize: "50px" , color: activeSection === 'research_section' ? blueGrey[900] : "white"}} />
                  </Grid>
                  <Grid item xs={7} sx={{ marginTop: "10px" }}>
                    <Typography sx={{ fontSize: "24px", fontFamily: "Montserrat", color: activeSection === 'research_section' ? blueGrey[900] : "white" }}>
                      Research
                    </Typography>
                  </Grid>
                </Grid></ListItemText>
            </ListItem>
            <ListItem onClick={() => handleSectionClick('analysis_section')} style={activeSection === 'analysis_section' ? { backgroundColor: blueGrey[100]} : {}}>
              <ListItemText>
                <Grid container direction="row">
                  <Grid item xs={3} sx={{ marginRight: "10px" }}>
                    <LightbulbIcon sx={{ fontSize: "50px", color: activeSection === 'analysis_section' ? blueGrey[900] : "white" }} />
                  </Grid>
                  <Grid item xs={7} sx={{ marginTop: "10px" }}>
                    <Typography sx={{ fontSize: "24px", fontFamily: "Montserrat", color: activeSection === 'analysis_section' ? blueGrey[900] : "white" }}>
                    Analysis
                    </Typography>
                  </Grid>
                </Grid></ListItemText>
            </ListItem>
            <ListItem onClick={() => handleSectionClick('design_section')} style={activeSection === 'design_section' ? { backgroundColor: blueGrey[100]} : {}} >
              <ListItemText>
                <Grid container direction="row">
                  <Grid item xs={3} sx={{ marginRight: "10px" }}>
                    <DrawIcon sx={{ fontSize: "50px", color: activeSection === 'design_section' ? blueGrey[900] : "white" }} />
                  </Grid>
                  <Grid item xs={7} sx={{ marginTop: "10px" }}>
                    <Typography sx={{ fontSize: "24px", fontFamily: "Montserrat", color: activeSection === 'design_section' ? blueGrey[900] : "white" }}>
                    Design
                    </Typography>
                  </Grid>
                </Grid></ListItemText>
            </ListItem>
            <ListItem onClick={() => handleSectionClick('delivery_section')} style={activeSection === 'delivery_section' ? { backgroundColor: blueGrey[100]} : {}}>
              <ListItemText>
                <Grid container direction="row">
                  <Grid item xs={3} sx={{ marginRight: "10px" }}>
                    <PhoneAndroidIcon sx={{ fontSize: "50px", color: activeSection === 'delivery_section' ? blueGrey[900] : "white" }} />
                  </Grid>
                  <Grid item xs={7} sx={{ marginTop: "10px" }}>
                    <Typography sx={{ fontSize: "24px", fontFamily: "Montserrat", color: activeSection === 'delivery_section' ? blueGrey[900] : "white" }}>
                    Delivery
                    </Typography>
                  </Grid>
                </Grid></ListItemText>
            </ListItem>
            <ListItem onClick={() => handleSectionClick('conclusion_section')} style={activeSection === 'conclusion_section' ? { backgroundColor: blueGrey[100]} : {}}>
              <ListItemText>
                <Grid container direction="row">
                  <Grid item xs={3} sx={{ marginRight: "10px" }}>
                  <SchoolIcon sx={{ fontSize: "50px", color: activeSection === 'conclusion_section' ? blueGrey[900] : "white" }} />
                  </Grid>
                  <Grid item xs={7} sx={{ marginTop: "10px" }}>
                    <Typography sx={{ fontSize: "24px", fontFamily: "Montserrat", color: activeSection === 'conclusion_section' ? blueGrey[900] : "white" }}>
                    Lessons
                    </Typography>
                  </Grid>
                </Grid></ListItemText>
            </ListItem>
          </List>
        </div>
      </Grid>
      <Grid item xs={9}>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <Grid item>
            <Image
              src={MenagerieHotelsHeader}
              alt='alt'
              style={{width: "70vw", marginTop: 40}}
            />    
          </Grid>
          
          <Grid item style={{ width: "70vw" }}>
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
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    </div>





    </div>
  );
};

export default HotelsContainer;