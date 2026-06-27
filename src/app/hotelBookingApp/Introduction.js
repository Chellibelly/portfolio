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
        <Typography component="h2" sx={globalStyles.heading1}>
          Setting the Stage
        </Typography>
        <Typography component="p" sx={globalStyles.heading2}>
          Purpose
        </Typography>
        <Typography variant="body1" sx={globalStyles.paragraph}>
          The assignment seemed straightforward. Design an end-to-end mobile hotel-booking experience. There was just one problem. The brief did not actually give me a problem to solve.
        </Typography>
        <Typography variant="body1" sx={globalStyles.paragraph}>
          It defined the “what,” but left the “why” unknown. I knew what I was expected to design, but not what user need it should address or why another hotel-booking experience deserved to exist. Before I could begin designing screens, I first had to discover a problem worth solving.
        </Typography>
      </Grid>
    </Grid>
)};

export default Introduction;