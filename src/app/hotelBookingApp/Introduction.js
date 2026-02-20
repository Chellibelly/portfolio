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
          I completed this project as part of the UX Design Institute program. The assignment was to design a <b>full hotel booking experience, end to end</b>, demonstrating the complete design process.
        </Typography>
        <Typography variant="body1" sx={globalStyles.paragraph}>
          The brief defined the <i>“what,”</i> but not the <i>“why.”</i> In a saturated market dominated by established platforms, designing <i>another booking site</i> without a clearly defined <b>user problem</b> would not produce an impactful solution.
        </Typography>
        <Typography variant="body1" sx={globalStyles.paragraph}>
          Rather than moving directly into the prescribed process, I reframed the project as an opportunity to first identify a meaningful problem to solve. To determine what that might be, I began with research.
        </Typography>
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