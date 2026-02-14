import React, { forwardRef } from 'react';
import { Typography, Box, Grid } from '@mui/material';
import Image from 'next/image';
import ProcessProblemGraphic from '../../../public/Process_Problem.png';
import * as globalStyles from '../styles/globalStyleConsts';

//const ResearchMobile = forwardRef((props, ref) => {

const Introduction = () => {
  return (
    <Grid container justifyItems="center" justifyContent="center">
      <Grid item xs={10}>
        <Typography variant="h1" sx={globalStyles.heading1}>
          Setting the Stage
        </Typography>
        <Typography variant="h2" sx={globalStyles.heading2}>
          Purpose
        </Typography>
        <Typography variant="body1" sx={globalStyles.paragraph}>
          My first project in UX was exciting, challenging, and enlightening. I was the sole designer and researcher, responsible for creating a working prototype focused entirely on the hotel booking process.
          With no baseline metrics, I defined a simple but meaningful goal to guide the work: <i><b>to create a desirable product.</b></i>
        </Typography>
        <Typography variant="body1" sx={globalStyles.paragraph}>Before we move on to my research strategy, I should mention that my initial "desireable product" goal would later shift to a more meaningful goal when research revealed to me that my initial assumption that there may not be a need for "just another hotel booking site" was completely wrong. We'll get to that.</Typography>
      </Grid>
      <Grid item xs={12}>
        <Box sx={globalStyles.graphic}>
          <Image
            src={ProcessProblemGraphic}
            width="100%"
            alt="An image usability testing"
          />
        </Box>
      </Grid>
    </Grid>
)};

export default Introduction;