import React, { useState } from 'react';
import { Typography, Box, Grid, Button } from '@mui/material';
import Image from 'next/image';
import FlowDiagramGraphic from '../../../public/Flow_Diagram.png';
import SketchesGraphic from '../../../public/Sketches.png';
import ProcessDesignGraphic from '../../../public/Process_Design.png';

import ProcessSolutionGraphic from '../../../public/Process_Solution.png';
import DesignHotelInfo from '../../../public/Design_Hotel_Info.png';
import DesignPricingInfo from '../../../public/Design_Pricing_Info.png';
import DesignAccountInfo from '../../../public/Design_Account_Info.png';
import DesignLocationInfo from '../../../public/Design_Location_Info.png';
import DesignAdditional from '../../../public/Design_Additional_Catergories.png';

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
        <Typography variant='h1' sx={globalStyles.heading1}>Paper, Pencils, & Pixels</Typography>
        <Typography variant='h2' sx={globalStyles.heading2}>The Design</Typography>
      </Grid>

      <Grid item xs={10}>
        <Typography variant='body1' sx={globalStyles.paragraph}>
          With analysis complete, I translated the customer journey map into the the website’s screens. Each screen had to serve a clear purpose and allow interactions which would support that purpose. My focus was on the goals, actions, intentions, and expected results of each screen.
        </Typography>
      </Grid>

      <Grid item xs={10} sx={{ marginBottom: 5 }}>
        <Typography variant='h3' sx={globalStyles.heading3}>Information Architecture</Typography>
        <Typography variant='body1' sx={globalStyles.paragraph}>
          I set up a Miro board and began building the website's information architecture. I added screens as rectangles, one by one, and filled each with bullet points outlining the necessary interactions. I used my customer journey map and affinity diagram as guides throughout the process.
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
          Next, I translated interaction notes into realistic screen states through hand-drawn sketches. I chose controls and placements based on conventions and usability insights, keeping the focus on the happy path. Once refined, I uploaded the sketches to a Miro board and added annotations to explain interactions for developers and stakeholders. This process reinforced an important lesson. Aesthetics don’t make a design good. Functionality and clarity do.
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
          <Typography variant='h3' sx={globalStyles.heading3}>High-Fidelity Screens</Typography>
          <Typography variant="body1" sx={globalStyles.paragraph}>
            I took my sketched screens and turned them into a high-fidelity digital prototype in Figma. This allowed me to simulate a working hotel booking workflow, reducing ambiguity, saving time, and minimizing risk. The prototype focused on the major opportunities I uncovered: full transparency around hotel quality and amenities, location, pricing, rate comparisons, and account/membership features.
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
        </Grid>
        <Grid item xs={10}>
          <Typography variant='h3' sx={globalStyles.heading3}>The Prototype</Typography>
          <Typography variant="body1" sx={globalStyles.paragraph}>After iterating through Figma’s components and refining interactions, I had a complete set of annotated screens and a working prototype covering the full booking flow—from homepage to checkout.</Typography>
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
