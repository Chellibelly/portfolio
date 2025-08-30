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
            It was finally time to take my sketched screens and turn them into something digital and high-fidelity, a prototype that could simulate working software for stakeholders and engineers in a real-world scenario to reduce ambiguity, save time, and minimize risk. 
          </Typography>
          <Typography variant="body1" sx={globalStyles.paragraph}>I put a lot of focus on the major opportunity I had found – to design my site to be completely transparent and informative regarding hotel quality and amenities, hotel location and relation to places of interest, pricing and rate comparisons, and account and membership programs.</Typography>
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
          <Typography variant='h3' sx={globalStyles.heading3}>Other Important Areas of Focus</Typography>
          <Typography variant="body1" sx={globalStyles.paragraph}>The other key areas identified in the analysis phase, especially from my affinity diagram, included navigation, date selection, extras and add-ons, and the overall look and feel. It was important to design these elements using established conventions while also addressing issues and negative feedback to make my site more user-friendly and delightful compared to the other guys.</Typography>
        </Grid>
        <Grid item xs={12}>
          <Box sx={globalStyles.graphic}>
            <Image
              src={DesignAdditional}
              width="100%"
              alt="An image of screenshots taken from the website prototype"
            />
          </Box>
        </Grid>
        <Grid item xs={10}>
          <Typography variant='h3' sx={globalStyles.heading3}>The Results</Typography>
          <Typography variant="body1" sx={globalStyles.paragraph}>And voila! After working through a bit of learning curve with Figma and a few days and building and rebuilding components, I finally had a collection of high-fidelity annotated screens and a working prototype for an entire hotel booking workflow from homepage to checkout!</Typography>
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
