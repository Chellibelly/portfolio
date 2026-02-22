import React, { useState } from 'react';
import { Typography, Box, Grid, Button } from '@mui/material';
import Image from 'next/image';
import FlowDiagramGraphic from '../../../public/Flow_Diagram.png';
import SketchesGraphic from '../../../public/Sketches.png';

import DesignHotelInfo from '../../../public/Design_Hotel_Info_V2.jpg';
import DesignPricingInfo from '../../../public/Design_Pricing_Info.jpg';
import DesignAccountInfo from '../../../public/Design_Account_Info.jpg';
import DesignLocationInfo from '../../../public/Design_Location_Info.jpg';
import DesignAdditional from '../../../public/Design_Additional_Categories.jpg';

import { useMediaQuery } from 'react-responsive';

import { blue, grey } from '@mui/material/colors';
import * as globalStyles from '../styles/globalStyleConsts';

export default function Design() {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });

  const [informationArchitectureExpanded, setInformationArchitectureExpanded] = useState(false);
  const [sketchesExpanded, setSketchesExpanded] = useState(false);

  const handleInformationArchitectureToggle = () => {
    setInformationArchitectureExpanded(!informationArchitectureExpanded);
  };

  const handleSketchesToggle = () => {
    setSketchesExpanded(!sketchesExpanded);
  };

  return (
    <Grid container justifyItems="center" justifyContent="center">
      <Grid item xs={10}>
        <Typography variant='h1' sx={globalStyles.heading1}>From Insights to Interfaces</Typography>
        <Typography variant='h2' sx={globalStyles.heading2}>The Design</Typography>
      </Grid>

      <Grid item xs={10}>
        <Typography variant='body1' sx={globalStyles.paragraph}>
          With analysis complete, I translated the customer journey into a structured set of screens, each with a clear purpose and set of user actions. My focus was on designing predictable flows that reduced cognitive load and supported confident decision-making.
        </Typography>
      </Grid>

      <Grid item xs={10} sx={{ marginBottom: 5 }}>
        <Typography variant='h3' sx={globalStyles.heading3}>Information Architecture</Typography>
        <Typography variant='body1' sx={globalStyles.paragraph}>
          I mapped the booking journey in <b>Miro</b>, defining each screen’s controls, interactions, and responses to user actions. Using the journey map and affinity diagram as guides, I built an <b>information architecture</b> that followed the defined user journey and prioritized usability, purpose, and conventional patterns. 
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Box sx={{ overflow: 'hidden', position: 'relative' }}>
          <Box
            sx={{
              height: informationArchitectureExpanded ? 'auto' : '300px',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <Image
              src={FlowDiagramGraphic}
              width="100%"
              alt="An image of several screens with basic actions described in bullets"
              layout="responsive"
              style={{ objectFit: 'cover', transition: 'height 0.3s ease' }}
            />
          </Box>
          <Button
            onClick={handleInformationArchitectureToggle}
            variant="contained"
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              padding: '10px',
              backgroundColor: grey[200],
              color: 'black',
              borderRadius: 0,
              marginBottom: '50px',
              '&:hover': { backgroundColor: blue[100] },
            }}
          >
            {informationArchitectureExpanded ? 'Show Less' : 'Show More'}
          </Button>
        </Box>
      </Grid>

      <Grid item xs={10} sx={{ mb: 5 }}>
        <Typography variant='h3' sx={globalStyles.heading3}>Sketching the Screens</Typography>
        <Typography variant='body1' sx={globalStyles.paragraph}>
          I sketched key screen states by hand. I chose layouts, controls, and content hierarchy based on my research insights. My goal was to focus on clarity and design for the happy path while ensuring key functionality.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Box sx={{ overflow: 'hidden', position: 'relative' }}>
          <Box
            sx={{
              height: sketchesExpanded ? 'auto' : '300px',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <Image
              src={SketchesGraphic}
              width="100%"
              alt="An image of high-fidelity design sketches arranged in a flowchart"
              layout="responsive"
              style={{ objectFit: 'cover', transition: 'height 0.3s ease' }}
            />
          </Box>
          <Button
            onClick={handleSketchesToggle}
            variant="contained"
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              padding: '10px',
              backgroundColor: grey[200],
              color: 'black',
              borderRadius: 0,
              marginBottom: '50px',
              '&:hover': { backgroundColor: blue[100] },
            }}
          >
            {sketchesExpanded ? 'Show Less' : 'Show More'}
          </Button>
        </Box>
      </Grid>

        <Grid item xs={10}>
          <Typography variant='h3' sx={globalStyles.heading3}>High-Fidelity UI</Typography>
          <Typography variant="body1" sx={globalStyles.paragraph}>
            I turned the sketches into high-fidelity screens in <b>Figma</b>, translating the sketches into concrete UI decisions. Guided by my four aforementioned transparency categories, I made sure to include clear pricing summaries, labeled amenities, visible ratings, intuitive date selection, and straightforward membership options.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box sx={globalStyles.graphic}>
          <Image
            src={DesignHotelInfo}
            width="100%"
            alt="An image of screenshots taken from the website prototype"
          />
          </Box>
          <Box sx={globalStyles.graphic}>
            <Image
              src={DesignLocationInfo}
              width="100%"
              alt="An image of screenshots taken from the website prototype"
            />
          </Box>
          <Box sx={globalStyles.graphic}>
            <Image
              src={DesignPricingInfo}
              width="100%"
              alt="An image of screenshots taken from the website prototype"
            />
          </Box>
          <Box sx={globalStyles.graphic}>
            <Image
              src={DesignAccountInfo}
              width="100%"
              alt="An image of screenshots taken from the website prototype"
            />
          </Box>
          <Box sx={globalStyles.graphic}>
            <Image
              src={DesignAdditional}
              width="100%"
              alt="An image of screenshots taken from the website prototype"
            />
          </Box>
        </Grid>
        <Grid item xs={10}>
          <Typography variant='h3' sx={globalStyles.heading3}>The Interactive Prototype</Typography>
          <Typography variant="body1" sx={globalStyles.paragraph}>After iterating through Figma’s components and refining interactions, I built a complete prototype simulating the end-to-end booking experience, from homepage through checkout. Through the prototype, I was able to <b>test interaction patterns, validate screen flow, and experience the product as a real user would</b>. This proved to be critical in surfacing small gaps and necessary refinements before finalizing the design.</Typography>
        </Grid>
        <Grid item xs={12}>
        <Box 
          sx={{
            display: 'flex',
            justifyContent: 'center', // Horizontally center
            alignItems: 'center',     // Vertically center
            marginTop: 5,
            marginBottom: 5
          }}
        >
          <video width={isDesktopOrLaptop ? "50%" : "90%"} height="auto" controls>
            <source src="/Prototype_recording.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
        </Grid>

    </Grid>
  );
}
