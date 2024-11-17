"use client"; 
import React, { useRef } from 'react';
import HeaderMobile from '../HeaderMobile';
import { Box, Typography } from '@mui/material';
import Introduction from './Introduction';
import Analysis from './Analysis';
import Design from './Design';
import Conclusion from './Conclusion';
import LessonsLearned from './LessonsLearned';
import { grey } from '@mui/material/colors';
import Image from 'next/image';
import HotelBackground from "../../../public/WorkPhotography/Work_Photo_Mobile.jpg";
import Opening from "../../../public/opening.png";
import ResearchMobile from './ResearchMobile';

const HotelsContainerMobile = () => {
  const sectionRefs = useRef({});

  const containerStyle = {
    position: 'relative',
    width: '100%',
    marginBottom: -34
};

const imageWrapperStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    opacity: '0.4'
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
    <HeaderMobile/>
    <div style={{ padding: 5  }}>
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
              <Typography sx={{ textAlign: 'center', fontFamily: 'Roboto', fontSize: 30, fontWeight: 400}}>
                    The Menagerie Hotels<br/> Mobile Site
                  </Typography><br/>
                  <Typography variant="body1" sx={{textAlign: 'center', fontFamily: 'Roboto', color: grey[900], fontWeight: 600, fontSize: 20, width: 300}}>
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
            <ResearchMobile/>
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
    </div>
    </div>
  );
};

export default HotelsContainerMobile;