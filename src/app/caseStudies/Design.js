import React, { useState } from 'react';
import { Typography, Box, Grid, Button  } from '@mui/material';
import Image from 'next/image';
import FlowDiagramGraphic from '../../../public/Flow_Diagram.png';
import SketchesGraphic from '../../../public/Sketches.png';
import ProcessDesignGraphic from '../../../public/Process_Design.png';

import { blue, grey } from '@mui/material/colors';

export default function Design() {

  const [informationArchitectureExpanded, setInformationArchitectureExpanded] = useState(false);
  const [sketchesExpanded, setSketchesExpanded] = useState(false);

  const handleinformationArchitectureToggle = () => {
    setInformationArchitectureExpanded(!informationArchitectureExpanded);
  };

  const handleSketchesToggle = () => {
    setSketchesExpanded(!sketchesExpanded);
  };

  return (
      <Grid container justifyItems="center" justifyContent="center">
        <Grid item xs={10}>
          <Typography variant='h1' className='heading1'>Paper, Pencils, & Pixels</Typography>
          <Typography variant='h2' className='heading2'>The Design</Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography variant='body1' className='paragraph'>With my analysis complete, it was time to move on to design. I needed to translate the customer journey map into the actual screens of the website. Each screen had to serve a clear purpose and allow interactions which would support that purpose. My focus was on the goals, actions, intentions, and expected results of each screen.</Typography>
        </Grid>
        <Grid item xs={12}>
          <Image
            className='graphic'
            src={ProcessDesignGraphic}
            width="100%"
            alt="An image of the UX process with the Design step highlighted"
          />
        </Grid>
        <Grid item xs={10} sx={{ marginBottom: 5 }}>
        <Typography variant='h3' className='heading3'>Information Architecture</Typography>
        <Typography variant='body1' className='paragraph'>I set up a Miro board and began building the website's information architecture. I added screens as rectangles, one by one, and filled each with bullet points outlining the necessary interactions. I used my customer journey map and affinity diagram as guides throughout the process.</Typography>
        </Grid>
        <Grid item xs={12}>
        <Box>
            {/* Preview image with fixed height */}
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
                style={{
                  objectFit: 'cover', // Maintain aspect ratio and prevent distortion
                  transition: 'height 0.3s ease',
                }} 
              />
            </Box>
            {!informationArchitectureExpanded &&
            <Button
              onClick={handleinformationArchitectureToggle}
              variant="contained"
              sx={{
                width: '100%',            // Make the button take up the full width of the container
                display: 'flex',          // Use flexbox to center content
                justifyContent: 'center', // Center the text inside the button
                padding: '10px',          // Add some padding for better visual appearance
                backgroundColor: grey[200],
                color: "black",
                borderRadius: 0,
                marginBottom: "50px",
                '&:hover': {
                  backgroundColor: blue[100], // Background color on hover
                },
              }}
            >
            {informationArchitectureExpanded ? 'Show Less' : 'Show More'}
            </Button>}
          </Box>
        </Grid>
        <Grid item xs={10}>
          <Typography variant='h3' className='heading3'>Sketching the Screens</Typography>
          <Typography variant='body1' className='paragraph'>At this point, I felt I had enough to start sketching the design. Sketching would help me quickly get ideas down and translate the interaction notes into actual web controls like inputs and buttons, including their positions. The goal was to create realistic screen states—a low-fidelity draft I could later use for the prototype.</Typography>
          <Typography variant='body1' className='paragraph'>I grabbed some pens and grid paper got to work. I chose controls and placements based on conventions I had found or to address usability issues. I kept things simple, focusing on opportunities within a happy path. I started with rough sketches and refined until I had some clean sketches which I could upload to a Miro board. Once in Miro, I added detailed annotations to explain the interactions and screen states (useful for developers and other stakeholders).</Typography>
        </Grid> 
        <Grid item xs={12}>
        <Box>
            {/* Preview image with fixed height */}
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
                style={{
                  objectFit: 'cover', // Maintain aspect ratio and prevent distortion
                  transition: 'height 0.3s ease',
                }} 
              />
            </Box>
            {!sketchesExpanded &&
            <Button
              onClick={handleSketchesToggle}
              variant="contained"
              sx={{
                width: '100%',            // Make the button take up the full width of the container
                display: 'flex',          // Use flexbox to center content
                justifyContent: 'center', // Center the text inside the button
                padding: '10px',          // Add some padding for better visual appearance
                backgroundColor: grey[200],
                color: "black",
                borderRadius: 0,
                marginBottom: "50px",
                '&:hover': {
                  backgroundColor: blue[100], // Background color on hover
                },
              }}
            >
            {sketchesExpanded ? 'Show Less' : 'Show More'}
            </Button>}
          </Box>
        </Grid>
        <Grid item xs={10} sx={{ marginBottom: -5 }}>
          <Typography variant='h3' className='heading3'>Note: Pretty Drawings != Good Design</Typography>
          <Typography variant='body1' className='paragraph'>One key lesson I learned through this exercise was that artistic skills don’t necessarily make you a good designer. Aesthetics weren’t the focus here. Having the interaction designs from earlier allowed me to concentrate purely on the functionality of the screens, not the look. By the end, I had high enough fidelity designs to move forward with creating my prototype.</Typography>
        </Grid>
      </Grid>
  );
}
