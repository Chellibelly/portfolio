import React, { useEffect, useState } from 'react';
import { Typography, Box, Grid } from '@mui/material';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import ProcessSolutionGraphic from '../../../public/Process_Solution.png';
import DesignHotelInfo from '../../../public/Design_Hotel_Info.png';
import DesignPricingInfo from '../../../public/Design_Pricing_Info.png';
import DesignAccountInfo from '../../../public/Design_Account_Info.png';
import DesignLocationInfo from '../../../public/Design_Location_Info.png';
import DesignAdditional from '../../../public/Design_Additional_Catergories.png';

import QuoteContainer from './QuoteContainer';
import * as globalStyles from '../styles/globalStyleConsts';

export default function Conclusion() {
  const [hasMounted, setHasMounted] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null; // or a loading spinner if needed
  }

  const handleToggle = () => {
    setFullDesignExpanded(!fullDesignExpanded);
  };

  return (
      <Grid container justifyItems="center" justifyContent="center">
        <Grid item xs={10}>
          <Typography variant='h1' sx={globalStyles.heading1}>Bringing My Designs to Life</Typography>
          <Typography variant='h2' sx={globalStyles.heading2}>The Prototype</Typography>
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
          <Typography variant='h3' sx={globalStyles.heading3}>The Results</Typography>
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
        <Grid item xs={10} sx={{ mb: 5 }}>
          <Typography variant='h3' sx={globalStyles.heading3}>Stakeholders and the Business</Typography>
          <Typography variant="body1" sx={globalStyles.paragraph}>
            In a real-world project, the work wouldn’t end here. After finalizing the annotated screen designs and prototype, the next step would be to gather all the key stakeholders, including other designers, product managers, copywriters, legal, developers, and anyone else involved in the product and share the designs. Ideally, there would be regular touch points throughout the design process, and this would be one of many checks to ensure alignment, clarify interactions, and address questions.
          </Typography>
          <Typography variant="body1" sx={globalStyles.paragraph}>
            Adjustments and compromises would be negotiated to balance technical limitations with key functionality. Creativity and problem-solving continue beyond delivery, with post-launch research, testing, and iterations driving ongoing improvements.
          </Typography>
        </Grid>
        <QuoteContainer quote="Good design is good business. When you focus on designing a great experience for your users, your business will benefit." author="Jared Spool"/>
      </Grid>
  );
}
