"use client"; 
import React, { useState, useEffect, useRef } from 'react';
import { Grid, List, ListItem, ListItemText, Box, Typography } from '@mui/material';
import Introduction from './Introduction';
import Research from './Research';
import Analysis from './caseStudies/Analysis';
import Design from './caseStudies/Design';
import Conclusion from './caseStudies/Conclusion';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import DrawIcon from '@mui/icons-material/Draw';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import StickyNote2SharpIcon from '@mui/icons-material/StickyNote2Sharp';
import SchoolIcon from '@mui/icons-material/school';
import { blue } from '@mui/material/colors';

const HomeMobile = () => {
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

    </div>
    </div>
  );
};

export default HomeMobile;