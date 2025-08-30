import React, { useState } from 'react';
import { Typography, Box, Grid, Button  } from '@mui/material';
import Image from 'next/image';
import FlowDiagramGraphic from '../../../public/Flow_Diagram.png';
import SketchesGraphic from '../../../public/Sketches.png';
import ProcessDesignGraphic from '../../../public/Process_Design.png';

import { blue, grey } from '@mui/material/colors';
import * as globalStyles from '../styles/globalStyleConsts';

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
          <Typography variant='h1' sx={globalStyles.heading1}>Paper, Pencils, & Pixels</Typography>
          <Typography variant='h2' sx={globalStyles.heading2}>The Design</Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography variant='body1' sx={globalStyles.paragraph}>With my analysis complete, it was time to move on to design. I needed to translate the customer journey map into the actual screens of the website. Each screen had to serve a clear purpose and allow interactions which would support that purpose. My focus was on the goals, actions, intentions, and expected results of each screen.</Typography>
        </Grid>
        <Grid item xs={10} sx={{ marginBottom: 5 }}>
        <Typography variant='h3' sx={globalStyles.heading3}>Information Architecture</Typography>
        <Typography variant='body1' sx={globalStyles.paragraph}>I set up a Miro board and began building the website's information architecture. I added screens as rectangles, one by one, and filled each with bullet points outlining the necessary interactions. I used my customer journey map and affinity diagram as guides throughout the process.</Typography>
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
        <Grid item xs={10} sx={{ mb: 5 }}>
          <Typography variant='h3' sx={globalStyles.heading3}>Sketching the Screens</Typography>
          <Typography variant='body1' sx={globalStyles.paragraph}>
            At this point, I began sketching the design to quickly translate interaction notes into realistic screen states. Using pens and grid paper, I chose controls and placements based on conventions and usability insights, keeping the focus on the happy path. Once refined, I uploaded the sketches to Miro and added annotations to explain interactions for developers and stakeholders. This process reinforced an important lesson. Aesthetics don’t make a design good. Functionality and clarity do. By the end, I had designs ready to evolve into a prototype.
          </Typography>
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
      </Grid>
  );
}
