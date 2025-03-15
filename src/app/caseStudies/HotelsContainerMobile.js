"use client"; 
import React, { useRef, useState, useEffect } from 'react';
import HeaderMobile from '../HeaderMobile';
import { Grid, Box, Typography, MenuItem, Select } from '@mui/material';
import Introduction from './Introduction';
import ResearchMobile from './ResearchMobile';
import Design from './Design';
import Conclusion from './Conclusion';
import LessonsLearned from './LessonsLearned';
import Analysis from './Analysis';
import { grey } from '@mui/material/colors';
import Image from 'next/image';
import HotelBackground from "../../../public/WorkPhotography/Work_Photo_Mobile.jpg";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import DrawIcon from '@mui/icons-material/Draw';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import StickyNote2SharpIcon from '@mui/icons-material/StickyNote2Sharp';
import SchoolIcon from '@mui/icons-material/School';

const HotelsContainerMobile = () => {
  const sectionRefs = useRef({});
  const [currentSection, setCurrentSection] = useState("introduction_section");
  const [isSelecting, setIsSelecting] = useState(false);

  const sections = [
    { id: "introduction_section", label: "Part 1/5 - Overview" },
    { id: "research_section", label: "Part 2/5 - Research" },
    { id: "analysis_section", label: "Part 3/5 - Analysis" },
    { id: "design_section", label: "Part 4/5 - Design" },
    { id: "delivery_section", label: "Part 5/5 - Delivery" },
    { id: "lessons_section", label: "Lessons Learned" },
  ];

  const handleIntersection = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setCurrentSection(entry.target.id); // Update the current section when it is in view
      }
    });
  };

  useEffect(() => {
    // Create two separate observers for short and long sections
    const shortSectionObserver = new IntersectionObserver(handleIntersection, {
      threshold: 0.4, // 50% visibility for short sections
    });

    const longSectionObserver = new IntersectionObserver(handleIntersection, {
      threshold: 0.03, // 10% visibility for long sections
    });

    // Function to determine if a section is long or short
    const isLongSection = (section) => section.clientHeight > 750; // You can adjust the threshold here

    // Observe each section with the appropriate observer
    sections.forEach(section => {
      const sectionElement = sectionRefs.current[section.id];
      if (sectionElement) {
        if (isLongSection(sectionElement)) {
          longSectionObserver.observe(sectionElement); // Use the long section observer
        } else {
          shortSectionObserver.observe(sectionElement); // Use the short section observer
        }
      }
    });

    // Cleanup observers on unmount
    return () => {
      shortSectionObserver.disconnect();
      longSectionObserver.disconnect();
    };
  }, [sections]);

  const scrollToSectionWithOffset = (sectionId) => {
    const sectionElement = sectionRefs.current[sectionId];
    const headerHeight = 60; // Height of your header
    const offsetTop = sectionElement.offsetTop - headerHeight;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  };

  const handleChangeSection = (event) => {
    const sectionId = event.target.value;
    setIsSelecting(true);
    setCurrentSection(sectionId);
    scrollToSectionWithOffset(sectionId);

    setTimeout(() => {
      setIsSelecting(false);
    }, 300);
  };

  const getIcon = (section) => {
    switch(section) {
      case "introduction_section":
        return <PsychologyAltIcon/>;
      case "research_section":
        return <StickyNote2SharpIcon/>;
      case "analysis_section":
        return <LightbulbIcon/>;
      case "design_section":
        return <DrawIcon/>;
      case "delivery_section":
        return <PhoneAndroidIcon/>;
      case "lessons_section":
        return <SchoolIcon/>;
      default:
        // code block
    }
  }

  return (
    <div>
      <HeaderMobile />
      <Box sx={{ position: 'sticky', top: 55, zIndex: 50, backgroundColor: 'white', boxShadow: 2 }}>
        <Select
          value={currentSection}
          onChange={handleChangeSection}
          fullWidth
          variant="filled"
        >
          {sections.map(section => (
            <MenuItem key={section.id} value={section.id}>
              <Grid container direction="row" sx={{ mt: -1}}>
                <Grid item sx={{ mr: 1 }}>
                  {getIcon(section.id)}
                </Grid>
                <Grid item>
                  <Typography sx={{ fontWeight: "bold", fontFamily: "Montserrat" }}>
                    {section.label}
                  </Typography>
                </Grid>
              </Grid>
            </MenuItem>
          ))}
        </Select>
      </Box>

      <div style={{ padding: 5 }}>
        <div style={{ position: 'relative', width: '100%', marginBottom: -34 }}>
          <div style={{ position: 'relative', width: '100%', height: '100%', opacity: '0.25', marginTop: 55 }}>
            <Image
              src={HotelBackground}
              alt="alt"
              style={{ objectFit: 'cover' }}
              width="100%"
            />
          </div>
          <div style={{
            position: 'absolute',
            bottom: '15%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '70%',
            height: '70%',
            color: 'black',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '20px',
            boxSizing: 'border-box',
            zIndex: 10
          }}>
            <Box sx={{ padding: 1 }}>
              <Typography sx={{ textAlign: 'center', fontFamily: 'montserrat', fontSize: 26, fontWeight: 600 }}>
                Menagerie Hotels<br />Mobile
              </Typography><br />
              <Typography variant="body1" sx={{
                textAlign: 'center', fontFamily: 'montserrat', color: grey[900], fontWeight: 600, fontSize: 20, width: 320
              }}>
                My journey transforming the online hotel booking experience for people fed up with being left in the dark.
              </Typography>
            </Box>
          </div>
        </div>

        <div className="column-a">
          {/* Sections to render */}
          <section
            id="introduction_section"
            ref={(el) => sectionRefs.current["introduction_section"] = el}
            style={{ paddingTop: 86 }}
          >
            <Introduction />
          </section>
          <section
            id="research_section"
            ref={(el) => sectionRefs.current["research_section"] = el}
            style={{ paddingTop: 86 }}
          >
            <ResearchMobile />
          </section>
          <section
            id="analysis_section"
            ref={(el) => sectionRefs.current["analysis_section"] = el}
            style={{ paddingTop: 86 }}
          >
            <Analysis />
          </section>
          <section
            id="design_section"
            ref={(el) => sectionRefs.current["design_section"] = el}
            style={{ paddingTop: 86 }}
          >
            <Design />
          </section>
          <section
            id="delivery_section"
            ref={(el) => sectionRefs.current["delivery_section"] = el}
            style={{ paddingTop: 86 }}
          >
            <Conclusion />
          </section>
          <section
            id="lessons_section"
            ref={(el) => sectionRefs.current["lessons_section"] = el}
            style={{ paddingTop: 86 }}
          >
            <LessonsLearned />
          </section>
        </div>
      </div>
    </div>
  );
};

export default HotelsContainerMobile;
